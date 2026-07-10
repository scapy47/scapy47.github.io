import { cn } from "@/lib/utils";
import type { ComponentProps } from "preact";

type props = {
} & ComponentProps<"div">;

const Carousel = ({ children, className, ...rest }: props) => {
  return (
    <div className={cn("flex w-full h-fit overflow-hidden", className)} {...rest}>
      <div className={"animate-carousel flex flex-none"}>{children}</div>
      <div aria-hidden className={"animate-carousel flex flex-none"}>{children}</div>
    </div>
  )
}

export default Carousel
