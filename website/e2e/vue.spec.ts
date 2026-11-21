import { test, expect } from '@playwright/test'

test('homepage opens the final report', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveURL(/ADS401_GroupD_Report\.html$/)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('AI Use and CV Satisfaction')
})

test('results and questionnaire anchors work', async ({ page }) => {
  await page.goto('/ADS401_GroupD_Report.html')
  await page.getByRole('link', { name: 'View results' }).click()
  await expect(page).toHaveURL(/#results$/)
  await expect(page.getByRole('heading', { name: 'Results', exact: true })).toBeInViewport()
  await expect(page.locator('.result-summary')).toContainText('p = .345')
  await expect(page.getByRole('table', { name: /Main comparison/ })).toBeHidden()
  await page.getByRole('link', { name: 'View questionnaire', exact: true }).click()
  await expect(page).toHaveURL(/#questionnaire$/)
  await expect(page.getByRole('link', { name: 'Open questionnaire on WJX' })).toHaveAttribute(
    'href',
    'https://v.wjx.cn/vm/myDPKFn.aspx',
  )
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
})

test('the report is readable without JavaScript', async ({ browser, baseURL }) => {
  const page = await browser.newPage({ javaScriptEnabled: false, baseURL })
  await page.goto('/ADS401_GroupD_Report.html')
  await expect(page.getByRole('heading', { name: /Shared questions/ })).toBeVisible()
  await page.locator('label[for="guide-ai"]').click()
  await expect(page.getByRole('heading', { name: /Questions for AI users/ })).toBeVisible()
  await expect(page.getByRole('heading', { name: /Shared questions/ })).toBeHidden()
  await page.locator('label[for="guide-non"]').click()
  await expect(page.getByRole('heading', { name: /Questions for non-users/ })).toBeVisible()
  const scoreCounts = page.getByRole('table', {
    name: 'Number of respondents by satisfaction score',
  })
  await expect(scoreCounts).toBeHidden()
  await page.getByText('View score counts', { exact: true }).click()
  await expect(scoreCounts).toBeVisible()
  await expect(scoreCounts.locator('tbody tr')).toHaveCount(7)
  await page.getByText('Hide score counts', { exact: true }).click()
  await expect(scoreCounts).toBeHidden()
  await page.getByText('Statistical details', { exact: true }).click()
  await expect(page.getByRole('table', { name: /Main comparison/ })).toBeVisible()
  for (const name of [/Grouped chart/, /median difference/, /Application goals/]) {
    const figure = page.getByRole('img', { name })
    await expect(figure).toBeVisible()
    expect(
      await figure.evaluate((element: HTMLImageElement) => element.naturalWidth),
    ).toBeGreaterThan(0)
  }
  await page.close()
})
