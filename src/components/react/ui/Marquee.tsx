import { Children, useEffect, type ReactNode } from "react"
import { motion, useAnimation } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode,
  className?: string
  speed?: number
  direction?: "left" | "right"
  pauseOnHover?: boolean
}

export default function({
  children,
  className,
  speed = 0.5,
  direction = "left",
  pauseOnHover
}: Props) {

  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
      transition: {
        x: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      },
    })
  }, [controls, direction, speed])

  const childArr = Children.toArray(children)
  return (
    <div className={cn("")}>
      {childArr.map((c, i) => {
        return <motion.div
          key={`maq-${i}`}
          initial={{
            x: direction === "left" ? "0%" : "-50%",
          }}
          className={cn("", className)}
          animate={controls}
          children={c}
        />
      })}
    </div>
  )
}
