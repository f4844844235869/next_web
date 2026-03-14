/**
 * 业务组件注册文件
 * 新增业务组件时在此文件中注册
 */

import { registerComponent, type ComponentMeta } from "./index"
import { UserCard } from "../components/business/user-card"
import { StatCard } from "../components/business/stat-card"

// UserCard 组件元数据
const userCardMeta: ComponentMeta = {
  name: "UserCard",
  description: "用户信息卡片组件，用于展示用户头像、名称、角色等信息",
  category: "business",
  path: "@workspace/ui/components/business/user-card",
  isClient: true,
  dependencies: ["Button"],
  tags: ["用户", "卡片", "信息展示"],
}

// StatCard 组件元数据
const statCardMeta: ComponentMeta = {
  name: "StatCard",
  description: "统计数据卡片组件，用于展示数值、趋势等统计信息",
  category: "business",
  path: "@workspace/ui/components/business/stat-card",
  isClient: true,
  dependencies: [],
  tags: ["统计", "卡片", "数据展示", "仪表盘"],
}

// 注册业务组件
export function registerBusinessComponents(): void {
  registerComponent(UserCard, userCardMeta)
  registerComponent(StatCard, statCardMeta)
}

// 导出组件元数据供外部使用
export const businessComponentsMeta = [userCardMeta, statCardMeta]

// 自动注册
registerBusinessComponents()
