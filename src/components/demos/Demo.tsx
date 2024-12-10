import type p5 from "p5";
import { useEffect, useRef } from "react";

interface prop {
    sketch: (p5: p5) => void;
    className?: string,
}

export default function Demo({ sketch, className }: prop) {
    const canvasRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let canvasInstance: p5
        (async () => {
            const p5 = (await import("p5")).default
            // console.log(await import("p5"))
            canvasInstance = new p5(sketch, canvasRef.current!)

            if (canvasRef.current) {
                const canvas = canvasRef.current.querySelector('canvas')
                if (canvas) {
                    canvas.style.margin = '0 auto'
                    canvas.style.display = 'block'
                }
            }

        })()
        return () => {
            canvasInstance.remove()
        }
    }, [])

    return <div className={className} ref={canvasRef} />

}