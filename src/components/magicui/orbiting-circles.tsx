import { cn } from "@/components/lib/utils";
import React from "react";
export function OrbitingCircles({
  className,
  children,
  circleClassName = "stroke-black/10 stroke-1 dark:stroke-white/10",
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
}: {
  className?: string
  children?: React.ReactNode
  circleClassName?: string,
  reverse?: boolean
  duration?: number
  delay?: number
  radius?: number
  path?: boolean
}) {
  return (
     <>
        {path && (
           <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              className="pointer-events-none absolute inset-0 size-full"
           >
              <circle
                 className={circleClassName}
                 cx="50%"
                 cy="50%"
                 r={radius}
                 fill="none"
                 strokeDasharray="4 4"
              />
           </svg>
        )}

        <div
           style={
              {
                 "--duration": duration,
                 "--radius": radius,
                 "--delay": -delay,
                 transformOrigin: "center center", // 👈 this is key
              } as React.CSSProperties
           }
           className={cn(
              "animate-orbit  left-[46%] top-[45%]   absolute flex size-full transform-gpu items-center justify-center rounded-full border bg-black/10 [animation-delay:calc(var(--delay)*1000ms)] dark:bg-white/10",
              { "[animation-direction:reverse]": reverse },
              className,
           )}
        >
           {children}
        </div>
     </>
  )
}
