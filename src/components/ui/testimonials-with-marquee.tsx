import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "bg-gradient-to-b from-gray-50 to-white text-gray-900",
      "py-12 sm:py-16 md:py-24 lg:py-32 px-0",
      "w-full overflow-x-hidden",
      className
    )}>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center sm:gap-6 md:gap-8 lg:gap-16 px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-full">
          <h2 className="w-full max-w-[720px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight text-gray-900 px-2 sm:px-0">
            {title}
          </h2>
          <p className="w-full max-w-[600px] text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-600 px-2 sm:px-0">
            {description}
          </p>
        </div>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-4 sm:mt-6 md:mt-8 lg:mt-12">
          <div className="group flex overflow-hidden p-1 sm:p-2 [--gap:0.5rem] sm:[--gap:0.75rem] md:[--gap:1rem] [gap:var(--gap)] flex-row [--duration:25s] sm:[--duration:30s] md:[--duration:40s] w-full">
            <div className="flex shrink-0 justify-start [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 sm:w-1/3 bg-gradient-to-r from-gray-50 sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 sm:w-1/3 bg-gradient-to-l from-gray-50 sm:block" />
        </div>
      </div>
    </section>
  )
}
