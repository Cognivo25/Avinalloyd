"use client"

import React, { useRef } from "react"
import { cn } from "@/lib/utils"
import { useMotionValueEvent, useScroll } from "motion/react"

export const centralColumnStyle = "w-[90%] max-w-[1340px] mx-auto"
export const pageYPadding = "py-10 md:py-12 lg:py-20 xl:py-30 2xl:py-40"
const defaultTitleClass = "text-2xl md:text-3xl font-serif-luxury font-normal mb-2 text-[#141312]"
const defaultDescriptionClass = "text-base md:text-lg font-body font-normal mb-2 text-[#55524e] max-w-[440px] leading-[140%]"
const imageClass =
  "absolute top-0 right-0 ml-auto w-full max-w-[540px] h-full object-cover rounded-2xl transition-opacity duration-500 border border-[#c5a059]/30 shadow-xl"

const Image = ({
  src,
  alt,
  width,
  height,
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement> & { width?: number | string; height?: number | string }) => (
  <img src={src} alt={alt || ""} width={width} height={height} className={className} {...props} />
)

export interface ItemContent {
  title: string
  description: string
  role?: string
  period?: string
  metric?: string
  image: {
    url: string
    width: number
    height: number
    alt: string
  }
}

interface Props extends React.ComponentProps<"div"> {
  contentA: ItemContent
  contentB: ItemContent
  contentC: ItemContent
  titleClass?: string
  descriptionClass?: string
}

export const ScrollRevealContentA = ({
  contentA,
  contentB,
  contentC,
  titleClass = defaultTitleClass,
  descriptionClass = defaultDescriptionClass,
  className,
  ...props
}: Props) => {
  const [scrollProgress, setScrollProgress] = React.useState(0)
  const ref0 = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref0,
  })
  useMotionValueEvent(scrollYProgress, "change", () => {
    // @ts-ignore
    setScrollProgress(scrollYProgress.get ? scrollYProgress.get() : scrollYProgress.current || 0)
  })

  return (
    <div className={cn("bg-transparent", className)} ref={ref0} {...props}>
      <div className="max-w-[90vw] mx-auto">
        <div className="flex w-full mx-auto relative z-20">
          <div
            className={cn(centralColumnStyle, "sticky top-20 md:top-24 flex flex-col w-full items-start justify-center h-[calc(100vh-100px)]")}
          >
            <div className="flex flex-row gap-12 md:gap-16 lg:gap-24 xl:gap-32 w-full h-full items-center">
              <div className="lg:!w-[50vw] !w-full h-auto flex flex-col justify-center gap-8 md:gap-10">
                <PointItem
                  active={true}
                  number="01"
                  title={contentA.title}
                  description={contentA.description}
                  metric={contentA.metric}
                  period={contentA.period}
                  thresholdStart={0}
                  thresholdEnd={0.33}
                  scrollProgress={scrollProgress}
                />
                <PointItem
                  active={true}
                  number="02"
                  title={contentB.title}
                  description={contentB.description}
                  metric={contentB.metric}
                  period={contentB.period}
                  thresholdStart={0.33}
                  thresholdEnd={0.66}
                  scrollProgress={scrollProgress}
                />
                <PointItem
                  active={true}
                  number="03"
                  title={contentC.title}
                  description={contentC.description}
                  metric={contentC.metric}
                  period={contentC.period}
                  thresholdStart={0.66}
                  thresholdEnd={1}
                  scrollProgress={scrollProgress}
                />
              </div>
              <div className="hidden lg:flex flex-col justify-center items-center !w-[50vw] relative h-[480px] max-h-[70vh]">
                <Image
                  width={contentA.image.width}
                  height={contentA.image.height}
                  src={contentA.image.url}
                  alt={contentA.image.alt}
                  className={cn(imageClass, scrollProgress >= 0 && scrollProgress <= 0.35 ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none")}
                />
                <Image
                  width={contentB.image.width}
                  height={contentB.image.height}
                  src={contentB.image.url}
                  alt={contentB.image.alt}
                  className={cn(imageClass, scrollProgress > 0.35 && scrollProgress <= 0.68 ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none")}
                />
                <Image
                  width={contentC.image.width}
                  height={contentC.image.height}
                  src={contentC.image.url}
                  alt={contentC.image.alt}
                  className={cn(imageClass, scrollProgress > 0.68 ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none")}
                />
              </div>
            </div>
          </div>
          <div className="h-[280vh]" />
        </div>
      </div>
    </div>
  )
}

export default ScrollRevealContentA

const getBarPercentageHeight = (scrollProgress: number, thresholdStart: number, thresholdEnd: number) => {
  if (scrollProgress < thresholdStart) {
    return 0
  }
  if (scrollProgress > thresholdEnd) {
    return 100
  }
  return ((scrollProgress - thresholdStart) / (thresholdEnd - thresholdStart)) * 100
}

const PointItem = ({
  active,
  number,
  title,
  description,
  metric,
  period,
  thresholdStart,
  thresholdEnd,
  scrollProgress,
}: {
  active: boolean
  number: string
  title: string
  description: string
  metric?: string
  period?: string
  thresholdStart: number
  thresholdEnd: number
  scrollProgress: number
}) => {
  const barHeightPercentage = getBarPercentageHeight(scrollProgress, thresholdStart, thresholdEnd)
  const isActive = barHeightPercentage > 0
  return (
    <div className={cn("flex flex-col interactive w-full transition-opacity duration-300", active ? "opacity-100" : "opacity-40")}>
      <div className="w-full flex items-center gap-3">
        <span className={cn("font-serif-luxury text-xl md:text-2xl font-normal transition-opacity duration-300", isActive ? "text-[#b3884d] opacity-100" : "text-[#78746d] opacity-40")}>
          {number}
        </span>
        {period && (
          <span className="font-mono-code text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-sm bg-[#edeae4] text-[#55524e]">
            {period}
          </span>
        )}
        {metric && (
          <span className="font-mono-code text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-sm bg-[#b3884d]/15 text-[#8c6527] border border-[#b3884d]/30 font-semibold">
            {metric}
          </span>
        )}
      </div>
      <div className="w-full flex relative left-[4px] mt-2">
        <div className="w-[36px] flex items-start justify-center relative shrink-0">
          <div className="h-full w-[2px] bg-[#141312]/10 absolute top-0 left-[50%] -translate-x-1/2 rounded-full" />
          <div
            className="h-full w-[2px] bg-[#b3884d] absolute top-0 left-[50%] -translate-x-1/2 rounded-full transition-all duration-75"
            style={{ height: `${barHeightPercentage}%` }}
          />
        </div>
        <div className="w-[calc(100%-36px)] pl-2">
          <div className="flex flex-col gap-1.5">
            <h3 className={cn(defaultTitleClass, "transition-all duration-300", isActive ? "opacity-100 text-[#141312]" : "opacity-40 text-[#78746d]")}>
              {title}
            </h3>
            <p className={cn(defaultDescriptionClass, "transition-all duration-300", isActive ? "opacity-100 text-[#55524e]" : "opacity-40 text-[#78746d]")}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
