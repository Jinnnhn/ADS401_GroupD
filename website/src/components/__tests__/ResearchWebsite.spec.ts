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
  it('distinguishes planned recruitment from results and uses a public slide copy', () => {
    const page = mount(HomeView)
    expect(page.text()).toContain('40–60 responses planned, not collected')
    expect(page.text()).toContain('No pilot findings')
    expect(page.find('a[href$="Presentation2Slides_Public.pdf"]').exists()).toBe(true)
  })
})
