import type { Module } from '@/modules/module'
import { h } from 'vue'

const m: Module = {
  name: 'auth',
  routes: [
    {
      path: 'roles',
      name: 'roles',
      component: () => import("./pages/role/index.vue"),
    }],
  menus: [
    {
      title: "权限管理",
      icon: "home",
      children: [
        {
          title: "角色管理",
          icon: "home",
          to: "/auth/roles"
        }
      ]
    }
  ]
}
export default m