import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '../../views/HomeView.vue'
describe('research website', () => {
  it('shows the non-user branch without asking non-users to rate AI', async () => {
    const page = mount(HomeView)
    const button = page.findAll('button').find((b) => b.text() === 'Non-users')!
    await button.trigger('click')
    expect(button.attributes('aria-pressed')).toBe('true')
    expect(page.get('.survey-panel').text()).toContain('Reasons for not using AI')
    expect(page.get('.survey-panel').text()).not.toContain('Function ratings')
  })
  it('links to the study questionnaire and reports the eligible sample', () => {
    const page = mount(HomeView)
    expect(page.text()).toContain('24 submissions · 21 eligible responses')
    expect(page.get('a[href="https://v.wjx.cn/vm/hnRj6R1.aspx"]').text()).toContain('WJX')
  })
})
