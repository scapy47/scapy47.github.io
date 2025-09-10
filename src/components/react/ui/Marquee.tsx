import { Children, useEffect, useRef, useState, type ReactNode } from "react"
import { motion, useAnimation } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode,
  className?: string
  speed?: number
  direction?: "left" | "right"
  pauseOnHover?: boolean
}

export default function ({
  children,
  className,
  speed = 1000,
  direction = "left",
  pauseOnHover
}: Props) {

  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [singleWidth, setSingleWidth] = useState(0);


  // measure widths and update on resize
  useEffect(() => {
    if (!contentRef.current) return;
    const measure = () => {
      // width of one copy (not the duplicated full strip)
      const w = contentRef.current!.offsetWidth;
      setSingleWidth(w);
    };

    measure();

    const ro = new ResizeObserver(measure);
    if (contentRef.current) ro.observe(contentRef.current);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [children]);

  // start animation whenever width/speed/direction changes
  useEffect(() => {
    if (!singleWidth || !controls) return;

    const distance = singleWidth; // we translate by exactly one copy's width
    const duration = distance / Math.max(1, speed); // seconds = px / (px/s)

    const from = direction === "left" ? 0 : -distance;
    const to = direction === "left" ? -distance : 0;

    controls.start({
      x: [from, to],
      transition: {
        x: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          duration,
          ease: "linear",
        },
      },
    });
  }, [singleWidth, speed, direction, controls]);


  const childArr = Children.toArray(children)
  return (
    <div
      ref={containerRef}
      className={cn("overflow-hidden w-full", className)}
    >
      <motion.div
        className="inline-flex whitespace-nowrap"
        animate={controls}
        style={{ display: "inline-flex" }}
      >
        <div ref={contentRef} className="inline-flex whitespace-nowrap">
          {childArr.map((c, i) => (
            <div key={`m-item-${i}`} className="inline-flex items-center">
              {c}
            </div>
          ))}
        </div>

        <div className="inline-flex whitespace-nowrap" aria-hidden>
          {childArr.map((c, i) => (
            <div key={`m-item-dup-${i}`} className="inline-flex items-center">
              {c}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
