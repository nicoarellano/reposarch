'use client'
import { useState } from 'react'
import Image from 'next/image'

const captions = [
  'A physical thing in real space, such as a building and its urban context and landscape',
  'The digital version of that product in virtual space, such as a BIM, GIS and all related metadata',
  'And synchronized data connections between the two: sensors, IoT, cameras, etc',
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

  return (
    <div className="flex flex-col h-full w-full select-none">
      <h3>What is a Digital Twin?</h3>

      {/* Image stage — fills all space between title and captions */}
      <div
        className="relative flex-1 min-h-0 overflow-hidden cursor-pointer"
        onClick={() => setStep(s => Math.min(s + 1, 2))}
      >
        {/* Image 1 — physical building */}
        <div
          className="absolute top-0 bottom-0 transition-all duration-700 ease-in-out"
          style={{
            left: stepPos[step][0],
            width: '33.33%',
            transform: 'translateX(-50%)',
            opacity: stepPos[step][0] === COL.hidden ? 0 : 1,
            pointerEvents: stepPos[step][0] === COL.hidden ? 'none' : 'auto',
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
            left: stepPos[step][1],
            width: '33.33%',
            transform: 'translateX(-50%)',
            opacity: stepPos[step][1] === COL.hidden ? 0 : 1,
            pointerEvents: stepPos[step][1] === COL.hidden ? 'none' : 'auto',
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
            left: stepPos[step][2],
            width: '33.33%',
            transform: 'translateX(-50%)',
            opacity: stepPos[step][2] === COL.hidden ? 0 : 1,
            pointerEvents: stepPos[step][2] === COL.hidden ? 'none' : 'auto',
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
                  height: '35%',
                  borderRadius: '50%',
                  border: '2px solid currentColor',
                  animation: step === 2 ? `dt-wave 2.4s ease-out ${n * 0.8}s infinite` : 'none',
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
      </div>

      {/* Captions — reveal one by one */}
      <div className="flex flex-col gap-1 mt-3">
        {captions.map((caption, i) => (
          <p
            key={i}
            className="text-sm transition-all duration-1000"
            style={{
              opacity: step >= i ? 1 : 0,
              transform: step >= i ? 'translateY(0)' : 'translateY(6px)',
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
