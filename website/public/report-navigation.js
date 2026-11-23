const contents = document.querySelector('.contents')
const list = document.querySelector('#contents-links')

if (contents && list) {
  const sections = Array.from(list.querySelectorAll('a'), (link) => ({
    link,
    target: document.getElementById(link.hash.slice(1)),
  })).filter(({ target }) => target)

  const toggle = document.createElement('button')
  toggle.type = 'button'
  toggle.className = 'contents-toggle'
  toggle.setAttribute('aria-controls', list.id)
  toggle.setAttribute('aria-expanded', 'false')
  const label = document.createElement('span')
  label.textContent = 'On this page'
  const current = document.createElement('span')
  current.className = 'contents-current'
  toggle.append(label, current)
  contents.insertBefore(toggle, list)
  contents.classList.add('contents-enhanced')

  function setExpanded(open) {
    toggle.setAttribute('aria-expanded', String(open))
  }

  toggle.addEventListener('click', () => {
    setExpanded(toggle.getAttribute('aria-expanded') !== 'true')
  })
  list.addEventListener('click', (event) => {
    if (event.target.closest('a')) setExpanded(false)
  })
  contents.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setExpanded(false)
      toggle.focus()
    }
  })

  let frame = 0
  function updateCurrent() {
    frame = 0
    const bar = toggle.offsetHeight ? toggle : contents
    const position = Math.max(0, bar.getBoundingClientRect().bottom) + 48
    let active = null
    for (const section of sections) {
      if (section.target.getBoundingClientRect().top <= position) active = section.link
    }
    for (const { link } of sections) {
      if (link === active) link.setAttribute('aria-current', 'location')
      else link.removeAttribute('aria-current')
    }
    const next = active?.textContent ?? ''
    if (current.textContent !== next) current.textContent = next
  }

  function scheduleUpdate() {
    if (!frame) frame = requestAnimationFrame(updateCurrent)
  }

  window.addEventListener('scroll', scheduleUpdate, { passive: true })
  function updateLayout() {
    document.documentElement.style.setProperty('--contents-bar-height', contents.offsetHeight + 'px')
    scheduleUpdate()
  }

  window.addEventListener('resize', updateLayout)
  window.addEventListener('hashchange', scheduleUpdate)
  window.addEventListener('load', updateLayout)
  updateLayout()
}
