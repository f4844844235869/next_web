"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"

const userCardVariants = cva(
  "relative flex flex-col overflow-hidden rounded-lg border border-border bg-card text-card-foreground transition-all",
  {
    variants: {
      variant: {
        default: "shadow-sm hover:shadow-md",
        outlined: "border-2 hover:border-primary/50",
        elevated: "shadow-lg hover:shadow-xl",
      },
      size: {
        sm: "p-3 gap-2",
        default: "p-4 gap-3",
        lg: "p-6 gap-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface UserCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof userCardVariants> {
  /** 用户名称 */
  name: string
  /** 用户头像 URL */
  avatar?: string
  /** 用户邮箱 */
  email?: string
  /** 用户角色/职位 */
  role?: string
  /** 是否显示操作按钮 */
  showActions?: boolean
  /** 关注按钮点击回调 */
  onFollow?: () => void
  /** 消息按钮点击回调 */
  onMessage?: () => void
}

/**
 * UserCard 业务组件
 * 用于展示用户信息的卡片组件
 */
function UserCard({
  className,
  variant,
  size,
  name,
  avatar,
  email,
  role,
  showActions = true,
  onFollow,
  onMessage,
  ...props
}: UserCardProps) {
  return (
    <div
      className={cn(userCardVariants({ variant, size, className }))}
      {...props}
    >
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-muted">
          {avatar ? (
            <img
              src={avatar}
              alt={`${name} 的头像`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-primary/10 text-lg font-semibold text-primary">
              {name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-medium text-foreground">{name}</h3>
          {role && (
            <p className="truncate text-sm text-muted-foreground">{role}</p>
          )}
          {email && (
            <p className="truncate text-xs text-muted-foreground">{email}</p>
          )}
        </div>
      </div>

      {showActions && (
        <div className="flex gap-2 pt-2">
          <Button
            variant="default"
            size="sm"
            className="flex-1"
            onClick={onFollow}
          >
            关注
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={onMessage}
          >
            消息
          </Button>
        </div>
      )}
    </div>
  )
}

export { UserCard, userCardVariants }
