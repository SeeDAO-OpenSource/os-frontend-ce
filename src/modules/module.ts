import { RouterView, type RouteRecordRaw } from "vue-router"
import router from '@/router'
import { h, type Component } from "vue"
import { useMenuStore } from "@/stores/menu"
import type { Menu } from "@/stores/menu.data"

const moduleComponent: Component = () => h(RouterView)
moduleComponent.displayName = 'router-passthrough'

export interface MenuItem extends Menu {
  parent?: string
}

export interface Module {
  name: string
  routes?: RouteRecordRaw[],
  menus?: MenuItem[],
}

let modules: Module[] = []

export async function loadModules(): Promise<void> {
  const moduleModules = import.meta.globEager('./*/index.ts')
  modules = Object.values(moduleModules).map(
    (module) => module.default
  )
}

export async function registerModules(): Promise<void> {
  const menuStore = useMenuStore()
  modules.forEach((module) => {
    router.addRoute({
      name: module.name,
      path: `/${module.name}`,
      component: () => import("@/layouts/full/Dashboard.vue"),
      children: module.routes || [],
    })
    menuStore.addMenus(module.menus?.filter(m => m.parent) ?? [])
  })

  modules.forEach((module) => {
    const subMenus = module.menus?.filter(m => !m.parent)
    if (subMenus) {
      subMenus.forEach((menu) => {
        menuStore.addMenu(menu, menu.parent)
      })
    }
  })

  const a = router.getRoutes()
  console.log(a)
}