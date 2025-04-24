
import * as React from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  avatars: {
    name: string
    image?: string
  }[]
  max?: number
}

export function AvatarGroup({
  avatars,
  className,
  max = 4,
  ...props
}: AvatarGroupProps) {
  const totalAvatars = avatars.length
  const displayAvatars = avatars.slice(0, max)
  const remainingAvatars = totalAvatars - max > 0 ? totalAvatars - max : 0

  return (
    <div
      className={cn("flex -space-x-2 overflow-hidden", className)}
      {...props}
    >
      {displayAvatars.map((avatar) => (
        <Avatar
          key={avatar.name}
          className="inline-block border-2 border-background"
        >
          {avatar.image ? (
            <AvatarImage src={avatar.image} alt={avatar.name} />
          ) : null}
          <AvatarFallback>
            {avatar.name.split(" ").map((n) => n[0]).join("")}
          </AvatarFallback>
        </Avatar>
      ))}
      {remainingAvatars > 0 && (
        <Avatar className="inline-block border-2 border-background">
          <AvatarFallback>+{remainingAvatars}</AvatarFallback>
        </Avatar>
      )}
    </div>
  )
}
