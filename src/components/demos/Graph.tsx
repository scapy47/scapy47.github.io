/*
import Demo from "./Demo";
import "p5"


export default function Graph() {
    const GraphSketch = () => {
        let angle = 0;

        setup = () => {
            const parent = document.getElementById("p5-container");
            if (parent) {
                createCanvas(parent.clientWidth, parent.clientWidth, WEBGL).parent(parent);
            }
        }
        draw = () => {
            background(0);
            orbitControl()

            push();
            rotateX(angle);
            rotateY(angle);

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
                stroke(color);
                line(x1, y1, z1, x2, y2, z2);
                for (let i = step; i <= Math.abs(x2 || y2 || z2); i += step) {
                    strokeWeight(2);
                    if (x2) line(i * Math.sign(x2), -5, 0, i * Math.sign(x2), 5, 0);
                    if (y2) line(-5, i * Math.sign(y2), 0, 5, i * Math.sign(y2), 0);
                    if (z2) line(-5, 0, i * Math.sign(z2), 5, 0, i * Math.sign(z2));
                }
            };

            // Draw positive and negative axes with scales
            drawAxis("red", 0, 0, 0, 180, 0, 0, 20);
            drawAxis("green", 0, 0, 0, 0, 180, 0, 20);
            drawAxis("blue", 0, 0, 0, 0, 0, 180, 20);
            drawAxis("darkred", 0, 0, 0, -180, 0, 0, 20);
            drawAxis("darkgreen", 0, 0, 0, 0, -180, 0, 20);
            drawAxis("darkblue", 0, 0, 0, 0, 0, -180, 20);

            pop();

            angle += 0.01;
        }
    };

    return <Demo id="p5-container" sketch={GraphSketch} className="w-full" />
}
*/
