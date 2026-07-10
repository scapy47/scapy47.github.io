import { cn } from "@/lib/utils";
import type { ComponentProps } from "preact";

type props = {
  rep?: number
} & ComponentProps<"div">;

const Carousel = ({ children, className, rep = 1, ...rest }: props) => {
  return (
    <div className={cn("flex w-full h-fit overflow-hidden", className)} {...rest}>
      <div className={"animate-carousel flex flex-none"}>{children}</div>
      {Array.from({ length: rep }, () => (
        <div aria-hidden className={"animate-carousel flex flex-none"}>{children}</div>
      ))}
    </div>
  )
}

export default Carousel
