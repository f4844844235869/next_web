/**
 * 组件注册表初始化
 * 在应用启动时调用此函数以注册所有组件
 */

// 导入并执行业务组件注册
import "./business"

// 导出注册表 API
export {
  componentRegistry,
  registerComponent,
  getComponent,
  getAllComponents,
  getComponentsByCategory,
  getComponentsByTag,
  isComponentRegistered,
  getComponentMeta,
  getAllComponentMeta,
  type ComponentMeta,
  type RegisteredComponent,
} from "./index"

// 导出业务组件元数据
export { businessComponentsMeta } from "./business"

/**
 * 初始化注册表
 * 在应用启动时调用此函数
 */
export function initializeRegistry(): void {
  // 业务组件已在 import 时自动注册
  console.log("[Registry] 组件注册表已初始化")
}
