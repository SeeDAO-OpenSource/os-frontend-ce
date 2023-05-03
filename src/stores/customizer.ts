import { defineStore } from "pinia";

interface State {
  Sidebar_drawer: any;
  Customizer_drawer: boolean;
  SidebarColor: string;
  mini_sidebar: boolean;
  navbarColor: string;
  setHorizontalLayout: boolean;
  darktheme: boolean;
}

export const useCustomizerStore = defineStore({
  id: "customizer",
  state: (): State => ({
    Sidebar_drawer: null,
    Customizer_drawer: false,
    SidebarColor: "white", //Change Sidebar Color || 'white', | "#2b2b2b" | "rgb(44, 59, 164)" | "rgb(96, 44, 164)" | "rgb(151, 210, 219)" | "rgb(77, 86, 100)"
    mini_sidebar: false,
    navbarColor: "#f6f6f6",
    setHorizontalLayout: false, // Horizontal layout
    darktheme: false,
  }),

  getters: {},
  actions: {
    SET_SIDEBAR_DRAWER() {
      this.Sidebar_drawer = !this.Sidebar_drawer;
    },
    SET_MINI_SIDEBAR(payload: any) {
      this.mini_sidebar = payload;
    },
    SET_CUSTOMIZER_DRAWER(payload: any) {
      this.Customizer_drawer = payload;
    },
    SET_SIDEBAR_COLOR(payload: any) {
      this.SidebarColor = payload;
    },
    SET_NAVBAR_COLOR(payload: any) {
      this.navbarColor = payload;
    },
    SET_LAYOUT(payload: any) {
      this.setHorizontalLayout = payload;
    },
  },
});
