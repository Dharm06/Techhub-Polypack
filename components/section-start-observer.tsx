'use client'

import { useEffect } from 'react'

export default function SectionStartObserver() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('main section'))

    sections.forEach((section) => {
      section.classList.add('section-animate-start')

      if (section.classList.contains('no-section-lines')) return

      const existingLines = section.querySelector('.section-title-lines')
      if (existingLines) return

      const heading = section.querySelector('h1, h2')
      if (!heading || !heading.parentElement) return

      const lineWrap = document.createElement('div')
      lineWrap.className = 'section-title-lines'
      lineWrap.innerHTML = `
        <span class="section-title-line section-title-line-left"></span>
        <span class="section-title-line section-title-line-right"></span>
      `

      heading.insertAdjacentElement('afterend', lineWrap)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-animate-visible')

            const lines = entry.target.querySelector('.section-title-lines')
            if (lines) lines.classList.add('section-title-lines-visible')

            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.25 },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return null
}

