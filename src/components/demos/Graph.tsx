import type p5 from "p5";
import Demo from "./Demo";


export default function Graph() {
    const GraphSketch = (p5: p5) => {
        const axisLength = 200; // Length of axes
        const ticks = 10; // Number of ticks on each axis
        let font: p5.Font;

        p5.preload = () => {
            font = p5.loadFont("https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceSansPro-Regular.otf");
        };

        p5.setup = () => {
            const parent = document.getElementById("p5-container");
            if (parent) {
                p5.createCanvas(parent.clientWidth, window.innerWidth * 1.0, p5.WEBGL).parent(parent);
            }
            p5.textFont(font);
        };

        p5.windowResized = () => {
            const parent = document.getElementById("p5-container");
            if (parent) {
                p5.resizeCanvas(parent.clientWidth, parent.clientHeight);
            }
        };

        p5.draw = () => {
            p5.background(0);
            p5.orbitControl();

            // Draw axes with arrows and names
            drawAxis("x", axisLength, [255, 0, 0], [139, 0, 0], "X");
            drawAxis("y", axisLength, [0, 255, 0], [0, 100, 0], "Y");
            drawAxis("z", axisLength, [0, 0, 255], [0, 0, 139], "Z");
        };

        const drawAxis = (
            axis: "x" | "y" | "z",
            length: number,
            positiveColor: [number, number, number],
            negativeColor: [number, number, number],
            label: string
        ) => {
            p5.push();
            p5.strokeWeight(2);

            // Positive axis
            p5.stroke(...positiveColor);
            p5.line(0, 0, 0, axis === "x" ? length : 0, axis === "y" ? length : 0, axis === "z" ? length : 0);

            // Negative axis
            p5.stroke(...negativeColor);
            p5.line(0, 0, 0, axis === "x" ? -length : 0, axis === "y" ? -length : 0, axis === "z" ? -length : 0);

            // Arrow at positive end
            p5.push();
            p5.stroke(...positiveColor);
            p5.translate(axis === "x" ? length : 0, axis === "y" ? length : 0, axis === "z" ? length : 0);
            p5.cone(5, 20);
            p5.pop();

            // Arrow at negative end
            p5.push();
            p5.stroke(...negativeColor);
            p5.translate(axis === "x" ? -length : 0, axis === "y" ? -length : 0, axis === "z" ? -length : 0);
            p5.rotateX(axis === "z" ? p5.HALF_PI : 0); // Align cone properly for z-axis
            p5.rotateZ(axis === "y" ? p5.PI : 0); // Align cone for y-axis
            p5.cone(5, 20);
            p5.pop();

            // Draw ticks and scales
            for (let i = -ticks; i <= ticks; i++) {
                const pos = (i / ticks) * length;

                if (i === 0) continue; // Skip the origin

                p5.push();
                p5.noStroke();
                p5.fill(255);
                p5.textSize(12);

                if (axis === "x") {
                    p5.translate(pos, 0, 0);
                    p5.textAlign(p5.CENTER, p5.CENTER);
                    p5.text(i.toString(), 0, 15);
                } else if (axis === "y") {
                    p5.translate(0, pos, 0);
                    p5.textAlign(p5.RIGHT, p5.CENTER);
                    p5.text(i.toString(), -10, 0);
                } else if (axis === "z") {
                    p5.translate(0, 0, pos);
                    p5.textAlign(p5.CENTER, p5.CENTER);
                    p5.text(i.toString(), 0, 15);
                }
                p5.pop();
            }

            // Draw axis label
            p5.push();
            p5.fill(255);
            p5.textSize(16);
            p5.textAlign(p5.CENTER, p5.CENTER);
            const labelOffset = length + 30;

            if (axis === "x") {
                p5.translate(labelOffset, 0, 0);
                p5.text(label, 0, 15);
            } else if (axis === "y") {
                p5.translate(0, labelOffset, 0);
                p5.text(label, 0, 15);
            } else if (axis === "z") {
                p5.translate(0, 0, labelOffset);
                p5.text(label, 0, 15);
            }
            p5.pop();

            p5.pop();
        };
    };

    return <Demo id="p5-container" sketch={GraphSketch} className="w-full"/>
}