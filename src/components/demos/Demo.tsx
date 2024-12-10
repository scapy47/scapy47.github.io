import type p5 from "p5";
import { useEffect, useRef } from "react";

type P5ComponentProps = {
    [K in keyof p5]?: p5[K]
    // [K in keyof p5]?: p5[K] extends (...args: any[]) => any
    // ? (...args: Parameters<p5[K]>) => ReturnType<p5[K]>
    // : never;
};


export default function Demo(prop: P5ComponentProps) {
    const canvasRef = useRef<HTMLDivElement>(null)

    function sketch(p5: p5) {
        console.log(p5);
        
        p5.setup = () => p5.createCanvas(600, 400, p5.WEBGL);

        p5.draw = () => {
            p5.background(250);
            p5.normalMaterial();
            p5.push();
            p5.rotateZ(p5.frameCount * 0.01);
            p5.rotateX(p5.frameCount * 0.01);
            p5.rotateY(p5.frameCount * 0.01);
            p5.plane(100);
            p5.pop();
        };
    }


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

    return <div ref={canvasRef} />

}