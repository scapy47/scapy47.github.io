import type p5 from "p5";
import { useEffect, useRef } from "react";

interface prop {
    sketch: (p5: p5) => void;
    className?: string,
    id?: string,
}

export default function Demo({ sketch, className, id }: prop) {
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
    }, [sketch, className])

    return <div id={id} className={className} ref={canvasRef} />

}