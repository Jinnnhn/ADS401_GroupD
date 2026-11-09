import { test, expect } from '@playwright/test'

test('research content, questionnaire interaction and survey link', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (e) => errors.push(e.message))
  await page.goto('/')
  await expect(page).toHaveTitle(/ADS401 Group D/)
  await expect(page.getByRole('heading', { level: 1 })).toContainText('What does')
  await page.getByRole('button', { name: 'Non-users', exact: true }).click()
  await expect(page.getByRole('heading', { name: 'Understand the choice' })).toBeVisible()
  await expect(page.getByRole('link', { name: /Open questionnaire on WJX/ })).toHaveAttribute(
    'href',
    'https://v.wjx.cn/vm/hnRj6R1.aspx',
  )
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(
    true,
  )
  expect(errors).toEqual([])
})

test('navigation reaches the questionnaire on desktop and mobile', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'View questionnaire' }).click()
  await expect(page).toHaveURL(/#questionnaire$/)
  await expect(page.getByRole('heading', { name: /Built around/ })).toBeInViewport()
})

test.describe('mobile menu', () => {
  test.use({ viewport: { width: 390, height: 844 } })

  test('opens, navigates and closes', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: 'Menu +' }).click()
    await expect(page.getByRole('navigation')).toBeVisible()
    await page
      .getByRole('navigation')
      .getByRole('link', { name: 'Questionnaire', exact: true })
      .click()
    await expect(page.getByRole('button', { name: 'Menu +' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    await expect(page).toHaveURL(/#questionnaire$/)
  })
})
