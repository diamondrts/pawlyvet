"use client"
import { useEffect, useMemo, useState } from "react";
import * as React from "react";
import { cn } from "../lib/utils";

import portada from "./img/img4.png";
import img8 from "./img/img8.png";
import img3 from "./img/img3.png";

type Props = {
    intervalMs?: number
    className?: string
    frameClassName?: string
    imgClassName?: string
}

const BASE_TRANSFORM = "translate3d(0,0,0) rotate(0deg)";
const ANIM_MS = 2000;
// const ANIM_MS = 900;
 
const FallingImageCycle: React.FC<Props> = ({
    intervalMs = 3000, 
    // intervalMs = 2600, 
    // intervalMs = 1400,
    className,
    frameClassName,
    imgClassName,
}) => {
    const images = useMemo(
        () => [
            { src: portada, alt: "Pawly Vet 1" },
            { src: img8, alt: "Pawly Vet 2" },
            { src: img3, alt: "Pawly Vet 3" },
        ],
        []
    )

    const len = images.length
    const [index, setIndex] = useState(0)
    const [dropping, setDropping] = useState(false)

    const nextIndex = (index + 1) % len
    const current = images[index]
    const next = images[nextIndex]

    useEffect(() => {
        images.forEach((i) => {
            const im = new Image()
            im.src = i.src
        })
    }, [images])


    // dispara la caída cada intervalMs
    useEffect(() => {
        if (len <= 1) return;
        if (dropping) return;

        const t = window.setInterval(() => setDropping(true), intervalMs)

        return () => window.clearInterval(t)
    }, [len, intervalMs, index, dropping])

    const handleDropEnd = () => {
        setIndex((i) => (i + 1) % len)
        setDropping(false)
    }

    return (
        // <div className={cn("relative w-full aspect-[4/3]", className)}>
        <div className={cn("relative w-full aspect-[2.5/3]", className)}>
            {/* transform: translate3d(0, 0, 0) rotate(3deg); */}
            <style>{` 
  @keyframes pawly-drop-left {
    0% {
        transform: ${BASE_TRANSFORM};
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
            {/* Back card */}
            <div
                className={cn(
                    "relative z-0 h-full w-full rounded-[3rem] overflow-hidden border-10 border-white",
                    frameClassName
                )}
            >
                <img
                    src={next.src}
                    alt={next.alt ?? "Next image"}
                    className={cn("w-full h-full object-cover", imgClassName)}
                    draggable={false}
                />
            </div>

            {/* Top card */}
            {/* <div
                className={cn(
                    "absolute inset-0 z-10 h-full w-full rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white",
                    frameClassName
                )}
                style={{
                    transformOrigin: "50% 10%",
                    animation: dropping ? "pawly-drop-left 2000ms ease-in forwards" : "none",
                }}
                onAnimationEnd={dropping ? handleDropEnd : undefined}
            > */}
            <div
                className={cn(
                    "absolute inset-0 z-10 h-full w-full rounded-[3rem] overflow-hidden  border-10 border-white",
                    frameClassName
                )}
                style={{
                    transformOrigin: "50% 10%",
                    // ✅ evita salto/blink inicial
                    transform: dropping ? undefined : BASE_TRANSFORM,
                    // ✅ reduce flicker
                    willChange: "transform, opacity",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transformStyle: "preserve-3d",
                    animation: dropping
                        ? `pawly-drop-left ${ANIM_MS}ms cubic-bezier(.2,.9,.2,1) forwards`
                        : "none",
                }}
                onAnimationEnd={dropping ? handleDropEnd : undefined}
            >
                <img
                    src={current.src}
                    alt={current.alt ?? "Current image"}
                    className={cn("w-full h-full object-cover", imgClassName)}
                    draggable={false}
                />
            </div>
        </div>
    )
}

export default FallingImageCycle;
