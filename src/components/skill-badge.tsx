import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface SkillBadgeProps {
  name: string
  level: number
}

export default function SkillBadge({ name, level }: SkillBadgeProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative">
      <Badge
        variant="outline"
        className="px-3 py-1 text-sm cursor-pointer transition-all duration-300 hover:bg-primary/10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        {name}
      </Badge>
      {isHovered && (
        <div className="absolute left-0 right-0 z-10 p-2 mt-2 text-xs bg-background border rounded-md shadow-md">
          <div className="mb-1 text-center">{level}%</div>
          <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
            <div
              className={cn('h-full bg-primary transition-all duration-500')}
              style={{ width: `${level}%` }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
