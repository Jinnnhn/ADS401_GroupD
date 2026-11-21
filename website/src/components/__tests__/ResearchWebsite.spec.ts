import { readFileSync } from 'node:fs'
import { describe, it, expect } from 'vitest'

const html = readFileSync('public/ADS401_GroupD_Report.html', 'utf8')

describe('final research report', () => {
  it('resolves all in-page links', () => {
    const report = new DOMParser().parseFromString(html, 'text/html')
    for (const link of report.querySelectorAll('a[href^="#"]')) {
      const id = link.getAttribute('href')!.slice(1)
      expect(report.getElementById(id), id).not.toBeNull()
    }
  })
})
