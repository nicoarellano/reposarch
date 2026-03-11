'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const items = [
    {
        src: '/images/defence/silos.png',
        alt: 'Fragmented data silos',
        caption: <>Fragmented <strong>data silos</strong></>,
    },
    {
        src: '/images/defence/proprietaryBoxes.png',
        alt: 'Proprietary solutions',
        caption: <>Big dependency on <strong>proprietary</strong> solutions, <strong>closed file formats</strong> and <strong>black boxed opaque processes</strong></>,
    },
    {
        src: '/images/defence/bim-gis.png',
        alt: 'BIM/GIS interoperability',
        caption: <><strong>Interoperability failures</strong> and poor <strong>BIM/GIS</strong> integration</>,
    },
    {
        src: '/images/defence/interaction.png',
        alt: 'Technical knowledge barriers',
        caption: <><strong>Technical knowledge barriers</strong> exclude non-technical stakeholders</>,
    },
]

// Quadrant centres as % of stage (TL, TR, BL, BR)
const QUADRANTS = [
    { left: '25%', top: '25%' },
    { left: '75%', top: '25%' },
    { left: '25%', top: '75%' },
    { left: '75%', top: '75%' },
]

// step 0:   intro title "Why CDT?"
// step 1-4: image i is "active" when step === i+1; settled when step > i+1
// step 5:   all images in quadrants — next key press lets global handler advance the slide
const MAX_STEP = items.length + 1

export default function CdtWhy() {
    const [step, setStep] = useState(0)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if ((e.key === ' ' || e.key === 'ArrowRight') && step < MAX_STEP) {
                e.stopImmediatePropagation()
                e.preventDefault()
                setStep(s => s + 1)
            } else if (e.key === 'ArrowLeft' && step > 0) {
                e.stopImmediatePropagation()
                e.preventDefault()
                setStep(s => s - 1)
            }
        }
        window.addEventListener('keydown', handler, { capture: true })
        return () => window.removeEventListener('keydown', handler, { capture: true })
    }, [step])

    return (
        <div className="flex flex-col h-full w-full select-none">

            {/* Image stage */}
            <div
                className="relative flex-1 min-h-0 overflow-hidden cursor-pointer"
                onClick={() => setStep(s => Math.min(s + 1, MAX_STEP))}
            >
                {/* Single animated title: large+centred at step 0, small+top at step > 0 */}
                <div
                    className="absolute transition-all duration-700 ease-in-out pointer-events-none"
                    style={step === 0 ? {
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: '5rem',
                        zIndex: 20,
                        whiteSpace: 'nowrap',
                    } : {
                        top: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: '3rem',
                        zIndex: 20,
                        whiteSpace: 'nowrap',
                    }}
                >
                    Why CDT?
                </div>

                {/* Inner container — shifts down to leave room for the title */}
                <div
                    className="absolute inset-0 transition-all duration-700 ease-in-out"
                    style={{ top: step > 0 ? '3.5rem' : 0 }}
                >
                    {items.map((item, i) => {
                        const isActive = step === i + 1
                        const isSettled = step > i + 1
                        const shown = step > i

                        const pos = isSettled ? QUADRANTS[i] : { left: '50%', top: '50%' }
                        const size = isActive ? '62%' : '32%'

                        return (
                            <div
                                key={i}
                                className="absolute transition-all duration-700 ease-in-out"
                                style={{
                                    left: '50%',
                                    top: shown ? pos.top : '50%',
                                    marginLeft: isSettled ? `calc(${pos.left} - 50%)` : '0px',
                                    width: size,
                                    height: size,
                                    transform: shown
                                        ? 'translate(-50%, -50%)'
                                        : 'translate(-50%, -50%) scale(0.4)',
                                    opacity: shown ? 1 : 0,
                                    zIndex: isActive ? 10 : 1,
                                }}
                            >
                                <div className="relative w-full h-full">
                                    <Image src={item.src} alt={item.alt} fill className="object-contain" />
                                </div>

                                {/* Big caption shown only while this image is active at centre */}
                                <div
                                    className="absolute left-1/2 transition-all duration-500"
                                    style={{
                                        top: '100%',
                                        transform: 'translateX(-50%)',
                                        width: '160%',
                                        textAlign: 'center',
                                        opacity: isActive ? 1 : 0,
                                        marginTop: '0.5rem',
                                        pointerEvents: 'none',
                                    }}
                                >
                                    <h4 className="text-xl font-semibold leading-snug">{item.caption}</h4>
                                </div>
                            </div>
                        )
                    })}

                    {/* Canada logo — appears at centre once all 4 images are settled */}
                    <div
                        className="absolute transition-all duration-700 ease-in-out"
                        style={{
                            left: '50%',
                            top: '50%',
                            width: '36%',
                            height: '36%',
                            transform: step >= items.length + 1
                                ? 'translate(-50%, -50%) scale(1)'
                                : 'translate(-50%, -50%) scale(0.4)',
                            opacity: step >= items.length + 1 ? 1 : 0,
                            zIndex: 5,
                        }}
                    >
                        <div className="relative w-full h-full">
                            <Image src="/images/cdt/canada-logo.png" alt="Canada's Digital Twin" fill className="object-contain" />
                        </div>
                    </div>
                </div>{/* end inner container */}
            </div>

            {/* Small caption list — each line appears once its image has settled into the corner */}
            <div className="flex flex-col gap-1 mt-3">
                {items.map((item, i) => (
                    <p
                        key={i}
                        className="text-base transition-all duration-700"
                        style={{
                            opacity: step > i + 1 ? 1 : 0,
                            transform: step > i + 1 ? 'translateY(0)' : 'translateY(6px)',
                        }}
                    >
                        <span className="font-semibold">{i + 1}.</span> {item.caption}
                    </p>
                ))}
            </div>
        </div>
    )
}
