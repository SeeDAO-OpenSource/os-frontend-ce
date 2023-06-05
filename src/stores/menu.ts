import { defineStore } from "pinia"
import { sidebarItem, type Menu } from "./menu.data"

export const useMenuStore = defineStore('menus', {
  state: (): { menus: Menu[] } => ({ menus: sidebarItem }),
  actions: {
    addMenu(menu: Menu, parent?: string) {
      if (parent) {
        const m = this.menus.find(m => m.title == parent)
        m?.children?.push(menu)
      } else {
        this.$patch((state) => {
          state.menus.push(menu)
        })
      }
    },
    addMenus(menus: Menu[]) {
      this.$patch((state) => {
        state.menus.push(...menus)
      })
    }
  },
  getters: {
    sortedMenus(): Menu[] {
      const items = this.menus.map(m => {
        return { ...m, order: m.order ?? 0 }
      })
      return items.sort((a, b) => {
        return a.order - b.order
      })
    }
  }
})