<template>
  <div
    class="tab-pane fade"
    :class="{ 'active show': customizer == 'settings' }"
    id="c-pills-home"
  >
    <h6>Layout Type</h6>
    <ul class="main-layout layout-grid">
      <li
        data-attr="ltr"
        :class="{ active: layoutType == 'ltr' }"
        @click="customizeLayoutType('ltr')"
      >
        <div class="header bg-light">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="body">
          <ul>
            <li class="bg-light sidebar"></li>
            <li class="bg-light body">
              <span class="badge badge-primary">LTR</span>
            </li>
          </ul>
        </div>
      </li>
      <li
        data-attr="rtl"
        :class="{ active: layoutType == 'rtl' }"
        @click="customizeLayoutType('rtl')"
      >
        <div class="header bg-light">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="body">
          <ul>
            <li class="bg-light body">
              <span class="badge badge-primary">RTL</span>
            </li>
            <li class="bg-light sidebar"></li>
          </ul>
        </div>
      </li>
      <li v-bind:style="boxlayout ? '' : 'display: none;'"
        data-attr="box"
        :class="{ active: layoutType == 'box-layout' }"
        @click="customizeLayoutType('box-layout')"
        class="box-layout px-3"
      >
        <div class="header bg-light">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="body">
          <ul>
            <li class="bg-light sidebar"></li>
            <li class="bg-light body">
              <span class="badge badge-primary">Box</span>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <h6 class="">Sidebar settings</h6>
    <ul class="sidebar-setting layout-grid">
      <li
        data-attr="default-sidebar"
        :class="{
          active: layout.settings.sidebar_setting == 'default-sidebar',
        }"
        @click="customizeSidebarSetting('default-sidebar')"
      >
        <div class="header bg-light">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="body bg-light">
          <span class="badge badge-primary">Default</span>
        </div>
      </li>
      <li
        data-attr="border-sidebar"
        :class="{
          active: layout.settings.sidebar_setting == 'border-sidebar',
        }"
        @click="customizeSidebarSetting('border-sidebar')"
      >
        <div class="header bg-light">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="body bg-light">
          <span class="badge badge-primary">Border</span>
        </div>
      </li>
      <li
        data-attr="iconcolor-sidebar"
        :class="{
          active: layout.settings.sidebar_setting == 'iconcolor-sidebar',
        }"
        @click="customizeSidebarSetting('iconcolor-sidebar')"
      >
        <div class="header bg-light">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="body bg-light">
          <span class="badge badge-primary">icon Color</span>
        </div>
      </li>
    </ul>
    <h6 class="">Unlimited Color</h6>
    <ul class="layout-grid unlimited-color-layout">
      <input id="ColorPicker1" type="color" value="#7366ff" name="Background" />
      <input id="ColorPicker2" type="color" value="#f73164" name="Background" />
      <button
        type="button"
        class="color-apply-btn btn btn-primary color-apply-btn"
        @click="customizeColor"
      >
        Apply
      </button>
      <button
        type="button"
        class="color-apply-btn btn btn-primary color-reset-btn ml-2"
        @click="resetColor"
      >
        Reset
      </button>
    </ul>
    <h6 class="">Mix Layout</h6>
    <ul class="layout-grid customizer-mix">
      <li
        class="color-layout"
        data-attr="light-only"
        :class="{ active: mixLayout == 'light-only' }"
        @click="customizeMixLayout('light-only')"
      >
        <div class="header bg-light">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="body">
          <ul>
            <li class="bg-light sidebar"></li>
            <li class="bg-light body"></li>
          </ul>
        </div>
      </li>
      <li
        class="color-layout"
        data-attr="dark-sidebar"
        :class="{ active: mixLayout == 'dark-sidebar' }"
        @click="customizeMixLayout('dark-sidebar')"
      >
        <div class="header bg-light">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="body">
          <ul>
            <li class="bg-dark sidebar"></li>
            <li class="bg-light body"></li>
          </ul>
        </div>
      </li>
      <li
        class="color-layout"
        data-attr="dark-only"
        :class="{ active: mixLayout == 'dark-only' }"
        @click="customizeMixLayout('dark-only')"
      >
        <div class="header bg-dark">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="body">
          <ul>
            <li class="bg-dark sidebar"></li>
            <li class="bg-dark body"></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'CustomSetting',
    data () {
      return {
        layoutType: 'ltr',
        mixLayout: 'default',
      };
    },
    computed: {
      ...mapState({
        customizer: (state) => state.menu.customizer,
        layout: (state) => state.layout.layout,
        data: (state) => JSON.stringify(state.layout.layout),
        boxlayout: (state) => state.layout.boxlayout,
      }),
    },
    methods: {
      customizeLayoutType(val) {
        this.$store.dispatch('layout/setLayoutType', val);
        this.layoutType = val;
      },
      customizeSidebarSetting(val) {
        this.layout.settings.sidebar_setting = val;
      },
      customizeColor() {
        const primary = document.getElementById('ColorPicker1').value;
        const secondary = document.getElementById('ColorPicker2').value;
        this.$store.dispatch('layout/setColorScheme', { primary, secondary });
      },
      resetColor() {
        localStorage.setItem('primary_color', '#7366ff');
        localStorage.setItem('secondary_color', '#f73164');
        window.location.reload();
      },
      customizeMixLayout(val) {
        this.mixLayout = val;
        this.$store.dispatch('layout/setLayout', val);
      },
    },
  };
</script>
