'use client'
import { useState, useEffect } from 'react'

export interface ClickListProps {
    title: string
    items: React.ReactNode[]
}

export default function ClickList({ title, items }: ClickListProps) {
    const [visible, setVisible] = useState(0)
    const max = items.length

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if ((e.key === ' ' || e.key === 'ArrowRight') && visible < max) {
                e.stopImmediatePropagation()
                e.preventDefault()
                setVisible(v => v + 1)
            } else if (e.key === 'ArrowLeft' && visible > 0) {
                e.stopImmediatePropagation()
                e.preventDefault()
                setVisible(v => v - 1)
            }
            // Space/ArrowRight at max: don't intercept — let the global handler change the slide
        }
        window.addEventListener('keydown', handler, { capture: true })
        return () => window.removeEventListener('keydown', handler, { capture: true })
    }, [visible, max])

    return (
        <div
            className="flex flex-col w-3/4 selection:ct-none cursor-pointer mt-10"
            style={{ height: '100%', minHeight: 0 }}
            onClick={() => setVisible(v => Math.min(v + 1, max))}
        >
            <h3>{title}</h3>
            <ul className="flex flex-col justify-center gap-8 flex-1 min-h-0 list-none p-0 m-0">
                {items.map((item, i) => (
                    <li
                        key={i}
                        className="flex gap-3 items-start transition-all duration-500"
                        style={{
                            opacity: visible > i ? 1 : 0,
                            transform: visible > i ? 'translateY(0)' : 'translateY(10px)',
                        }}
                    >
                        <span className="text-2xl font-bold tabular-nums shrink-0" style={{ minWidth: '2.5rem' }}>
                            {String(i + 1).padStart(2, '0')}
                        </span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
