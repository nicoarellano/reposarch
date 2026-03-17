'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const captions = [
  <>A <strong>physical thing in real the real world</strong>, such as a building or a landscape, which are made out of atoms</>,
  <>The <strong>digital version of that object in virtual space</strong>, such as a BIM, GIS and all related metadata</>,
  <>And <strong>synchronized data connections between the two</strong>: sensors, IoT, cameras, etc</>,
]

// Column centres as % of stage width. 3 equal cols → centres at 1/6, 3/6, 5/6
const COL = { hidden: '115%', left: '16.67%', center: '50%', right: '83.33%' }

const stepPos = [
  [COL.center, COL.hidden, COL.hidden],
  [COL.left, COL.center, COL.hidden],
  [COL.left, COL.right, COL.center],
] as const

export default function DTDefinition() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.key === ' ' || e.key === 'ArrowRight') && step < 3) {
        e.stopImmediatePropagation()
        e.preventDefault()
        setStep(s => s + 1)
      } else if (e.key === 'ArrowLeft' && step > 0) {
        e.stopImmediatePropagation()
        e.preventDefault()
        setStep(s => s - 1)
      }
      // Space/ArrowRight at step === 3: don't intercept — let the global handler change the slide
    }
    window.addEventListener('keydown', handler, { capture: true })
    return () => window.removeEventListener('keydown', handler, { capture: true })
  }, [step])

  return (
    <div className="flex flex-col h-full w-full select-none">

      {/* Image stage */}
      <div
        className="relative flex-1 min-h-0 overflow-hidden cursor-pointer"
        onClick={() => setStep(s => Math.min(s + 1, 3))}
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
          What is a Digital Twin?
        </div>

        {/* Inner container — shifts down to leave room for the title */}
        <div
          className="absolute inset-0 transition-all duration-700 ease-in-out"
          style={{ top: step > 0 ? '3.5rem' : 0 }}
        >
          {/* Image 1 — physical building */}
          <div
            className="absolute top-0 bottom-0 transition-all duration-700 ease-in-out"
            style={{
              left: step === 0 || stepPos[step - 1][0] === COL.hidden ? '50%' : stepPos[step - 1][0],
              width: '33.33%',
              transform: step === 0 || stepPos[step - 1][0] === COL.hidden ? 'translateX(-50%) scale(0.4)' : 'translateX(-50%)',
              opacity: step === 0 || stepPos[step - 1][0] === COL.hidden ? 0 : 1,
              pointerEvents: step === 0 || stepPos[step - 1][0] === COL.hidden ? 'none' : 'auto',
            }}
          >
            <div className="relative w-full h-full">
              <Image src="/images/dt/house bricks.png" alt="physical" fill className="object-contain" />
            </div>
          </div>

          {/* Image 2 — digital building */}
          <div
            className="absolute top-0 bottom-0 transition-all duration-700 ease-in-out"
            style={{
              left: step === 0 || stepPos[step - 1][1] === COL.hidden ? '50%' : stepPos[step - 1][1],
              width: '33.33%',
              transform: step === 0 || stepPos[step - 1][1] === COL.hidden ? 'translateX(-50%) scale(0.4)' : 'translateX(-50%)',
              opacity: step === 0 || stepPos[step - 1][1] === COL.hidden ? 0 : 1,
              pointerEvents: step === 0 || stepPos[step - 1][1] === COL.hidden ? 'none' : 'auto',
            }}
          >
            <div className="relative w-full h-full">
              <Image src="/images/dt/house bits.png" alt="digital" fill className="object-contain" />
            </div>
          </div>

          {/* Image 3 — data icon with expanding wave rings */}
          <div
            className="absolute top-0 bottom-0 transition-all duration-700 ease-in-out"
            style={{
              left: step === 0 || stepPos[step - 1][2] === COL.hidden ? '50%' : stepPos[step - 1][2],
              width: '33.33%',
              transform: step === 0 || stepPos[step - 1][2] === COL.hidden ? 'translateX(-50%) scale(0.4)' : 'translateX(-50%)',
              opacity: step === 0 || stepPos[step - 1][2] === COL.hidden ? 0 : 1,
              pointerEvents: step === 0 || stepPos[step - 1][2] === COL.hidden ? 'none' : 'auto',
            }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Wave rings emanating from centre */}
              {[0, 1, 2].map(n => (
                <span
                  key={n}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '35%',
                    aspectRatio: '1 / 1',
                    borderRadius: '50%',
                    border: '2px solid currentColor',
                    animation: step === 3 ? `dt-wave 2.4s ease-out ${n * 0.8}s infinite` : 'none',
                    opacity: 0,
                  }}
                />
              ))}
              {/* Data / wifi icon */}
              <div className="relative w-1/4 h-1/4 animate-pulse ">
                <Image src="/images/dt/data.png" alt="data" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>{/* end inner container */}
      </div>

      {/* Large caption for the currently active (centred) image */}
      <div className="relative h-10 mt-2 mb-1">
        {captions.map((caption, i) => (
          <h4
            key={i}
            className="absolute inset-0 text-xl font-semibold text-center transition-all duration-500 leading-snug"
            style={{
              opacity: step === i + 1 ? 1 : 0,
              transform: step === i + 1 ? 'translateY(0)' : 'translateY(6px)',
              pointerEvents: 'none',
            }}
          >
            {caption}
          </h4>
        ))}
      </div>

      {/* Small captions — appear once each image has settled into its position */}
      <div className="flex flex-col gap-1">
        {captions.map((caption, i) => (
          <p
            key={i}
            className="text-base transition-all duration-700 mt-5"
            style={{
              opacity: step > i + 1 ? 1 : 0,
              transform: step > i + 1 ? 'translateY(0)' : 'translateY(6px)',
            }}
          >
            <span className="font-semibold">{i + 1}.</span> {caption}
          </p>
        ))}
      </div>

      <style>{`
        @keyframes dt-wave {
          0%   { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(4); opacity: 0;   }
        }
      `}</style>
    </div>
  )
}
