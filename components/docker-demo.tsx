"use client"

import React, { useEffect, useState } from 'react'

const FAKE_CONTAINERS = [
  { id: 'a1b2c3d4e5', name: 'vibe-server', image: 'vibe:latest', status: 'Up 3 hours', ports: '0.0.0.0:8080->80/tcp' },
  { id: 'f6g7h8i9j0', name: 'db-postgres', image: 'postgres:14', status: 'Up 2 days', ports: '5432/tcp' },
  { id: 'k1l2m3n4o5', name: 'redis-cache', image: 'redis:7', status: 'Up 5 hours', ports: '6379/tcp' },
  { id: 'p6q7r8s9t0', name: 'worker', image: 'worker:stable', status: 'Up 10 mins', ports: '' },
]

export default function DockerDemo() {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    function onScroll() {
      try {
        // Show demo once user has scrolled past half the first viewport
        const shouldShow = window.scrollY > window.innerHeight * 0.5
        setVisible(shouldShow)
      } catch (e) {
        // ignore (SSR safety)
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const results = FAKE_CONTAINERS.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()))

  if (!visible) return null

  return (
    <div
      aria-live="polite"
      className="fixed left-4 right-4 md:left-auto md:right-8 bottom-6 z-50 md:bottom-8 md:w-[480px] md:max-w-full"
    >
      <div className="rounded-lg bg-[#0b1220] border border-[#263241] shadow-lg overflow-hidden text-sm">
        <div className="flex items-center justify-between px-3 py-2 bg-[#071022] border-b border-[#16232b]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff5f56] block" />
            <span className="w-2 h-2 rounded-full bg-[#ffbd2e] block" />
            <span className="w-2 h-2 rounded-full bg-[#27c93f] block" />
            <span className="ml-2 text-xs text-muted-foreground">Demo: docker ps</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              aria-pressed={!expanded}
              title={expanded ? 'Collapse' : 'Expand'}
              onClick={() => setExpanded((s) => !s)}
              className="text-muted-foreground px-2 py-1 rounded hover:bg-white/5"
            >
              {expanded ? '−' : '+'}
            </button>
            <button
              aria-label="Close demo"
              onClick={() => setVisible(false)}
              className="text-muted-foreground px-2 py-1 rounded hover:bg-white/5"
            >
              ✕
            </button>
          </div>
        </div>

        {expanded && (
          <div className="px-3 py-3 font-mono text-xs text-white">
            <div className="mb-2">{`$ docker ps --format "table {{.ID}}\t{{.Names}}\t{{.Image}}\t{{.Status}}\t{{.Ports}}"`}</div>

            <div className="max-h-40 overflow-auto pr-2">
              <table className="w-full text-left">
                <thead className="text-[11px] text-[#9aa8b7]">
                  <tr>
                    <th className="pb-2">CONTAINER ID</th>
                    <th className="pb-2">NAMES</th>
                    <th className="pb-2">IMAGE</th>
                    <th className="pb-2">STATUS</th>
                    <th className="pb-2">PORTS</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((c) => (
                    <tr
                      key={c.id}
                      onClick={() => scrollToSection(c.name)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') scrollToSection(c.name)
                      }}
                      className={`cursor-pointer align-top border-t border-transparent hover:bg-white/2 ${
                        query && c.name.toLowerCase().includes(query.toLowerCase()) ? 'bg-white/5' : ''
                      }`}
                    >
                      <td className="py-2 text-[12px] text-[#cbd8e3]">{c.id.slice(0, 12)}</td>
                      <td className="py-2 font-medium">{c.name}</td>
                      <td className="py-2 text-[#9fb2c9]">{c.image}</td>
                      <td className="py-2 text-[#9fb2c9]">{c.status}</td>
                      <td className="py-2 text-[#9fb2c9]">{c.ports || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-3 flex items-center gap-2">
              <label htmlFor="docker-filter" className="sr-only">
                Filter containers
              </label>
              <input
                id="docker-filter"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const nm = query.trim()
                    if (nm) scrollToSection(nm)
                  }
                }}
                placeholder="Type container name to jump to that section (e.g. vibe-server)"
                className="w-full bg-[#04101a] border border-[#11303f] placeholder:text-[#6f8a98] px-2 py-1 rounded text-xs"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function scrollToSection(name: string) {
  if (!name) return
  // normalize
  const candidates = [
    `#${name}`,
    `#${name.replace(/\s+/g, '-').toLowerCase()}`,
    `[data-section="${name}"]`,
    `[data-section="${name.replace(/\s+/g, '-').toLowerCase()}"]`,
  ]

  let el: Element | null = null
  for (const sel of candidates) {
    try {
      el = document.querySelector(sel)
    } catch (e) {
      // ignore invalid selectors
    }
    if (el) break
  }

  if (el) {
    ;(el as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'center' })
    // briefly highlight
    const prev = el.classList.contains('ring-2')
    el.classList.add('ring-2', 'ring-primary')
    setTimeout(() => {
      if (!prev) el.classList.remove('ring-2', 'ring-primary')
    }, 1600)
  } else {
    // no matching section — briefly show browser-native alert (non-blocking: use console)
    console.info(`No section found for '${name}'`)
  }
}
