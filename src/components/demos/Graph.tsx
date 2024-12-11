import type p5 from "p5";
import Demo from "./Demo";


export default function Graph() {
    const GraphSketch = (p5: p5) => {
        let angle = 0;

        p5.setup = () => {
            const parent = document.getElementById("p5-container");
            if (parent) {
                p5.createCanvas(parent.clientWidth, parent.clientWidth, p5.WEBGL).parent(parent);
            }
        }
        p5.draw = () => {
            p5.background(0);
            p5.orbitControl()

            p5.push();
            p5.rotateX(angle);
            p5.rotateY(angle);

            // Function to draw axis and scales
            const drawAxis = (
                color: string,
                x1: number,
                y1: number,
                z1: number,
                x2: number,
                y2: number,
                z2: number,
                step: number
            ) => {
                p5.stroke(color);
                p5.line(x1, y1, z1, x2, y2, z2);
                for (let i = step; i <= Math.abs(x2 || y2 || z2); i += step) {
                    p5.strokeWeight(2);
                    if (x2) p5.line(i * Math.sign(x2), -5, 0, i * Math.sign(x2), 5, 0);
                    if (y2) p5.line(-5, i * Math.sign(y2), 0, 5, i * Math.sign(y2), 0);
                    if (z2) p5.line(-5, 0, i * Math.sign(z2), 5, 0, i * Math.sign(z2));
                }
            };

            // Draw positive and negative axes with scales
            drawAxis("red", 0, 0, 0, 180, 0, 0, 20);
            drawAxis("green", 0, 0, 0, 0, 180, 0, 20);
            drawAxis("blue", 0, 0, 0, 0, 0, 180, 20);
            drawAxis("darkred", 0, 0, 0, -180, 0, 0, 20);
            drawAxis("darkgreen", 0, 0, 0, 0, -180, 0, 20);
            drawAxis("darkblue", 0, 0, 0, 0, 0, -180, 20);

            p5.pop();

            angle += 0.01;
        }
    };

    return <Demo id="p5-container" sketch={GraphSketch} className="w-full" />
}