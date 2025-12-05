import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'
  
  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-lg sm:rounded-xl border-t",
        "bg-gradient-to-b from-gray-100/50 to-gray-50/10",
        "p-3 sm:p-4 md:p-6 text-start",
        "hover:from-gray-200/60 hover:to-gray-100/20",
        "w-[280px] sm:w-[300px] md:max-w-[320px] flex-shrink-0",
        "transition-colors duration-300",
        "border border-gray-200",
        "touch-manipulation",
        className
      )}
    >
      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
        <Avatar className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className="flex flex-col items-start min-w-0 flex-1">
          <h3 className="text-sm sm:text-base font-semibold leading-none text-gray-900 truncate w-full">
            {author.name}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 truncate w-full mt-0.5">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed line-clamp-3 sm:line-clamp-none">
        {text}
      </p>
    </Card>
  )
}
