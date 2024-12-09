import { useEffect, useRef } from "react"
import p5 from "p5";

interface props {
    sketch: () => any
}

const P5wrapper = ({ sketch }: props) => {
    console.log(sketch);

    const canvasRef = useRef<HTMLDivElement>(null)

    useEffect(() => {

        const p5canvas = new p5(sketch, canvasRef.current ? canvasRef.current : undefined);
        return () => {
            p5canvas.remove();
        }
    })

    return <div ref={canvasRef}></div>
}

export default P5wrapper