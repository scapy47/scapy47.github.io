import { cn } from "@/lib/utils";
import type { ComponentChildren, ComponentProps } from "preact";

type props = {
  children: ComponentChildren,
  pauseOnHover?: boolean,
  vertical?: boolean,
  reverse?: boolean,
  repeat?: number,
} & ComponentProps<"div">;

const Marquee = ({ children, pauseOnHover, reverse, vertical, className, repeat, ...rest }: props) => {
  return (
    <div {...rest}
      className={cn("[--duration:4s] [--gap:1rem]", {
        "flex-row": !vertical,
        "flex-col": vertical,
      }, className)}
    >
      {Array.from(new Int8Array(repeat || 0), (_, i) => (
        <div
          key={i}
          className={cn("flex shrink-0 justify-around gap-(--gap)", {
            "animate-marquee flex-row": !vertical,
            "animate-marquee-vertical flex-col": vertical,
            "group-hover:[animation-play-state:paused]": pauseOnHover,
            "[animation-direction:reverse]": reverse,
          })}
        >
          {children}
        </div>
      ))}
    </div>
  )
}

export default Marquee
