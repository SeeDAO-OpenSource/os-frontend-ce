<template>
  <div class="header-logo-wrapper">
    <div class="logo-wrapper">
      <router-link to="/">
        <h4 class="for-dark mb-1">
            <img
              class="img-fluid mb-1"
              src="../../assets/images/logo/logo_dark.png"
              width="200"
              alt
            />
        </h4>
        <h4 class="for-light mb-1">
            <img
              class="img-fluid mb-1"
              src="../../assets/images/logo/logo_light.png"
              width="200"
              alt
            />
        </h4>
      </router-link>
    </div>
    <div class="toggle-sidebar" @click="toggle_sidebar">
      <feather
        class="status_toggle middle sidebar-toggle"
        type="align-center"
        id="sidebar-toggle"
      ></feather>
    </div>
  </div>
</template>

<script>
export default {
  name: "Logo",
  methods: {
    toggle_sidebar() {
      this.$store.dispatch("menu/opensidebar")
    }
  }
}
</script>
