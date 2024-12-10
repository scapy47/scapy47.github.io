import type p5 from "p5";
import { useEffect, useRef } from "react";

function sketch(p5: p5) {
    let circleX = 200;
    let circleY = 150;
    let circleRadius = 75;

    let graphX = 50;
    let graphY = 300;
    let graphAmplitude = 50;
    let graphPeriod = 300;
    p5.setup = () => {
        // p5.createCanvas(p5.windowWidth / 2, p5.windowHeight / 10 * 6, p5.WEBGL);
        p5.createCanvas(400, 400)
        p5.angleMode(p5.DEGREES)
        p5.describe(
            'Animated demonstration of a point moving around the unit circle, together with the corresponding sine and cosine values moving along their graphs.'
        );
    };

    p5.draw = () => {
        p5.background(0);
        // Set angle based on frameCount, and display current value 
        let angle = p5.frameCount % 360;
        p5.fill(255);
        p5.textSize(20);
        p5.textAlign(p5.LEFT, p5.CENTER);
        p5.text(`angle: ${angle}`, 25, 25);
        // Draw circle and diameters
        p5.noFill();
        p5.stroke(128);
        p5.strokeWeight(3);
        p5.circle(circleX, circleY, 2 * circleRadius);
        p5.line(circleX, circleY - circleRadius, circleX, circleY + circleRadius);
        p5.line(circleX - circleRadius, circleY, circleX + circleRadius, circleY);
        // Draw moving points

        let pointX = circleX + circleRadius * p5.cos(angle);
        let pointY = circleY - circleRadius * p5.sin(angle);

        p5.line(circleX, circleY, pointX, pointY);

        p5.noStroke();

        p5.fill('white');
        p5.circle(pointX, pointY, 10);

        p5.fill('orange');
        p5.circle(pointX, circleY, 10);

        p5.fill('red');
        p5.circle(circleX, pointY, 10);

        // Draw graph

        p5.stroke('grey');
        p5.strokeWeight(3);
        p5.line(graphX, graphY, graphX + 300, graphY);
        p5.line(graphX, graphY - graphAmplitude, graphX, graphY + graphAmplitude);
        p5.line(
            graphX + graphPeriod,
            graphY - graphAmplitude,
            graphX + graphPeriod,
            graphY + graphAmplitude
        );

        p5.fill('grey');
        p5.strokeWeight(1);
        p5.textAlign(p5.CENTER, p5.CENTER);
        p5.text('0', graphX, graphY + graphAmplitude + 20);
        p5.text('360', graphX + graphPeriod, graphY + graphAmplitude + 20);
        p5.text('1', graphX / 2, graphY - graphAmplitude);
        p5.text('0', graphX / 2, graphY);
        p5.text('-1', graphX / 2, graphY + graphAmplitude);

        p5.fill('orange');
        p5.text('cos', graphX + graphPeriod + graphX / 2, graphY - graphAmplitude);
        p5.fill('red');
        p5.text('sin', graphX + graphPeriod + graphX / 2, graphY);

        // Draw cosine curve

        p5.noFill();
        p5.stroke('orange');
        p5.beginShape();
        for (let t = 0; t <= 360; t++) {
            let x = p5.map(t, 0, 360, graphX, graphX + graphPeriod);
            let y = graphY - graphAmplitude * p5.cos(t);
            p5.vertex(x, y);
        }
        p5.endShape();

        // Draw sine curve

        p5.noFill();
        p5.stroke('red');
        p5.beginShape();
        for (let t = 0; t <= 360; t++) {
            let x = p5.map(t, 0, 360, graphX, graphX + graphPeriod);
            let y = graphY - graphAmplitude * p5.sin(t);
            p5.vertex(x, y);
        }
        p5.endShape();

        // Draw moving line

        let lineX = p5.map(angle, 0, 360, graphX, graphX + graphPeriod);
        p5.stroke('grey');
        p5.line(lineX, graphY - graphAmplitude, lineX, graphY + graphAmplitude);

        // Draw moving points on graph

        let orangeY = graphY - graphAmplitude * p5.cos(angle);
        let redY = graphY - graphAmplitude * p5.sin(angle);

        p5.noStroke();

        p5.fill('orange');
        p5.circle(lineX, orangeY, 10);

        p5.fill('red');
        p5.circle(lineX, redY, 10);

    };
}

export default function P5demo() {
    const canvasRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let canvasInstance: p5
        (async () => {
            const p5 = (await import("p5")).default
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