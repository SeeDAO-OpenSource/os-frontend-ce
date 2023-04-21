<template>
  <a
    class="nav-link"
    :class="{ 'active show': customizer == 'settings' }"
    id="c-pills-home-tab"
    @click="openCustomizerSetting('settings')"
    href="javascript:void(0)"
  >
    <div class="settings">
      <i class="icon-settings"></i>
    </div>
    <span>Quick option</span>
  </a>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'CustomSetting',
    computed: {
      ...mapState({
        customizer: (state) => state.menu.customizer,
      }),
    },
    methods: {
      openCustomizerSetting(val) {
        this.$store.state.menu.customizer = val;
      },
    },
  };
</script>
