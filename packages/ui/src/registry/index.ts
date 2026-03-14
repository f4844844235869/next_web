/**
 * 业务组件注册表
 * 用于集中管理和导出所有业务组件
 */

import type { ComponentType } from "react"

export interface ComponentMeta {
  /** 组件名称 */
  name: string
  /** 组件描述 */
  description: string
  /** 组件分类 */
  category: "business" | "layout" | "form" | "display" | "feedback"
  /** 组件路径 */
  path: string
  /** 是否为客户端组件 */
  isClient: boolean
  /** 依赖的其他组件 */
  dependencies?: string[]
  /** 组件标签 */
  tags?: string[]
}

export interface RegisteredComponent<T = unknown> extends ComponentMeta {
  /** 组件实例 */
  component: ComponentType<T>
}

// 组件元数据注册表
export const componentRegistry: Map<string, ComponentMeta> = new Map()

// 已注册的组件
const registeredComponents: Map<string, RegisteredComponent> = new Map()

/**
 * 注册组件到注册表
 */
export function registerComponent<T>(
  component: ComponentType<T>,
  meta: ComponentMeta
): void {
  componentRegistry.set(meta.name, meta)
  registeredComponents.set(meta.name, {
    ...meta,
    component: component as ComponentType<unknown>,
  })
}

/**
 * 获取已注册的组件
 */
export function getComponent<T = unknown>(
  name: string
): RegisteredComponent<T> | undefined {
  return registeredComponents.get(name) as RegisteredComponent<T> | undefined
}

/**
 * 获取所有已注册的组件
 */
export function getAllComponents(): RegisteredComponent[] {
  return Array.from(registeredComponents.values())
}

/**
 * 按分类获取组件
 */
export function getComponentsByCategory(
  category: ComponentMeta["category"]
): RegisteredComponent[] {
  return getAllComponents().filter((c) => c.category === category)
}

/**
 * 按标签获取组件
 */
export function getComponentsByTag(tag: string): RegisteredComponent[] {
  return getAllComponents().filter((c) => c.tags?.includes(tag))
}

/**
 * 检查组件是否已注册
 */
export function isComponentRegistered(name: string): boolean {
  return componentRegistry.has(name)
}

/**
 * 获取组件元数据
 */
export function getComponentMeta(name: string): ComponentMeta | undefined {
  return componentRegistry.get(name)
}

/**
 * 获取所有组件元数据列表
 */
export function getAllComponentMeta(): ComponentMeta[] {
  return Array.from(componentRegistry.values())
}
