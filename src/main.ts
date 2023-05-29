import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import router from "./router"
import vuetify from "./plugins/vuetify"
import "@/scss/style.scss"
import PerfectScrollbar from "vue3-perfect-scrollbar"
import VueApexCharts from "vue3-apexcharts"
// @ts-ignore:next-line
import InstantSearch from "vue-instantsearch/vue3/es"
import VCalendar from "v-calendar"
import VueFeather from "vue-feather"
import i18n from "./plugins/i18n"
import { useApi } from "./api/axios"
import { loadModules, registerModules } from "./modules/module"

initApp()

async function initApp() {
  useApi()
  const app = createApp(App)
  app.component(VueFeather.name, VueFeather)
  app.use(i18n)
  app.use(PerfectScrollbar)
  app.use(InstantSearch)
  app.use(createPinia())
  app.use(VCalendar, {})
  app.use(VueApexCharts)
  await loadModules()
  await registerModules()
  app.use(router)
  app.use(vuetify).mount("#app")

}
