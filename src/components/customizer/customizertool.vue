<template>
  <a
    class="nav-link"
    :class="{ 'active show': customizer == 'layouts' }"
    id="c-pills-home-tab"
    @click="openCustomizerSetting('layouts')"
    href="javascript:void(0)"
  >
    <div class="settings">
      <i class="icon-paint-bucket"></i>
    </div>
    <span>Quick option</span>
  </a>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'CustomizerTool',
    computed: {
      ...mapState({
        customizer: (state) => state.menu.customizer
      }),
    },
    methods : {
      openCustomizerSetting(val) {
        this.$store.state.menu.customizer = val;
      },
    }
  };
</script>
