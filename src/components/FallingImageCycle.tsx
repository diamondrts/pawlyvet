"use client"

import * as React from "react"
import { cn } from "../lib/utils"

// ✅ Imágenes dentro del componente
import portada from "./img/img4.png"
import img8 from "./img/img8.png"
import img3 from "./img/img3.png"

type Props = {
    intervalMs?: number
    className?: string
    frameClassName?: string
    imgClassName?: string
}

const FallingImageCycle: React.FC<Props> = ({
    intervalMs = 1400,
    className,
    frameClassName,
    imgClassName,
}) => {
    const images = React.useMemo(
        () => [
            { src: portada, alt: "Pawly Vet 1" },
            { src: img8, alt: "Pawly Vet 2" },
            { src: img3, alt: "Pawly Vet 3" },
        ],
        []
    )

    const len = images.length
    const [index, setIndex] = React.useState(0)
    const [dropping, setDropping] = React.useState(false)

    const nextIndex = (index + 1) % len
    const current = images[index]
    const next = images[nextIndex]

    // dispara la caída cada intervalMs
    React.useEffect(() => {
        if (len <= 1) return
        const t = window.setInterval(() => setDropping(true), intervalMs)
        return () => window.clearInterval(t)
    }, [len, intervalMs])

    const handleDropEnd = () => {
        // termina la animación -> avanzamos
        setIndex((i) => (i + 1) % len)
        setDropping(false)
    }

    return (
        <div className={cn("relative", className)}>
            {/* Keyframes locales (no necesitas tocar tailwind.config) */}
            {/* <style>{`
        @keyframes pawly-drop-left {
          0%   { transform: rotate(2deg) translate(0, 0); opacity: 1; }
          35%  { transform: rotate(-12deg) translate(-10px, 35px); opacity: 1; }
          100% { transform: rotate(-28deg) translate(-45px, 220px); opacity: 0; }
        }
      `}</style> */}

            <style>{`
  @keyframes pawly-drop-left {
    0% {
      transform: translate3d(0, 0, 0) rotate(2deg);
      opacity: 1;
    }
    35% {
      transform: translate3d(-12px, 55px, 0) rotate(-18deg);
      opacity: 1;
    }
    100% {
      transform: translate3d(-80px, 320px, 0) rotate(-75deg);
      opacity: 0;
    }
  }
`}</style>

            {/* Carta de atrás (next) - queda quieta */}
            <div
                className={cn(
                    "relative z-0 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white",
                    frameClassName
                )}
            >
                <img
                    src={next.src}
                    alt={next.alt ?? "Next image"}
                    className={cn("w-full h-auto object-cover", imgClassName)}
                    draggable={false}
                />
            </div>

            {/* Carta de arriba (current) - cae girando a la izquierda */}
            <div
                className={cn(
                    "absolute inset-0 z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white",
                    frameClassName
                )}
                style={{
                    transformOrigin: "50% 10%",
                    // transformOrigin: "top left",
                    animation: dropping ? "pawly-drop-left 650ms ease-in forwards" : "none",
                }}
                onAnimationEnd={dropping ? handleDropEnd : undefined}
            >
                <img
                    src={current.src}
                    alt={current.alt ?? "Current image"}
                    className={cn("w-full h-auto object-cover", imgClassName)}
                    draggable={false}
                />
            </div>
        </div>
    )
}

export default FallingImageCycle;
