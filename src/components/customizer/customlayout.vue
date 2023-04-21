<template>

  <div
    class="tab-pane fade"
    :class="{ 'active show': customizer == 'layouts' }"
    id="c-pills-home"
  >
    <ul class="sidebar-type layout-grid layout-types">
      <li data-attr="compact-sidebar">
        <div class="layout-img">
          <a @click="handlePageLayputs('compact-wrapper', 'Dubai')"
            ><img
              src="../../assets/images/layouts/1.jpg"
              class="img-fluid"
              alt="oneone"
          /></a>

          <h6>Dubai</h6>
        </div>
      </li>
      <li class="only-body" data-attr="default-body">
        <div class="layout-img">
          <a @click="handlePageLayputs('only-body', 'London')"
            ><img
              src="../../assets/images/layouts/2.jpg"
              class="img-fluid"
              alt="one"
          /></a>

          <h6>London</h6>
        </div>
      </li>
      <li data-attr="modern-layout">
        <div class="layout-img">
          <a @click="handlePageLayputs('compact-wrapper modern-type', 'Seoul')"
            ><img
              src="../../assets/images/layouts/9.jpg"
              class="img-fluid"
              alt="one"
          /></a>

          <h6>Seoul</h6>
        </div>
      </li>
      <li data-attr="material-layout">
        <div class="layout-img">
          <a
            @click="
              handlePageLayputs(
                'horizontal-wrapper material-type',
                'LosAngeles'
              )
            "
            ><img
              src="../../assets/images/layouts/10.jpg"
              class="img-fluid"
              alt="one"
          /></a>

          <h6>Los Angeles</h6>
        </div>
      </li>
      <li data-attr="dark-sidebar">
        <div class="layout-img">
          <a @click="handlePageLayputs('compact-wrapper dark-sidebar', 'Paris')"
            ><img
              src="../../assets/images/layouts/3.jpg"
              class="img-fluid"
              alt="one"
          /></a>

          <h6>Paris</h6>
        </div>
      </li>
      <li data-attr="compact-wrap">
        <div class="layout-img">
          <a @click="handlePageLayputs('compact-sidebar', 'Tokyo')"
            ><img
              src="../../assets/images/layouts/4.jpg"
              class="img-fluid"
              alt="one"
          /></a>

          <h6>Tokyo</h6>
        </div>
      </li>
      <li data-attr="color-sidebar">
        <div class="layout-img">
          <a
            @click="
              handlePageLayputs('compact-wrapper color-sidebar', 'Madrid')
            "
            ><img
              src="../../assets/images/layouts/5.jpg"
              class="img-fluid"
              alt="one"
          /></a>

          <h6>Madrid</h6>
        </div>
      </li>
      <li data-attr="compact-small">
        <div class="layout-img">
          <a
            @click="
              handlePageLayputs('compact-sidebar compact-small', 'Moscow')
            "
            ><img
              src="../../assets/images/layouts/6.jpg"
              class="img-fluid"
              alt="one"
          /></a>

          <h6>Moscow</h6>
        </div>
      </li>
      <li data-attr="box-layout" class="box-layout">
        <div class="layout-img">
          <a @click="handlePageLayputs('compact-wrapper box-layout', 'NewYork')"
            ><img
              src="../../assets/images/layouts/7.jpg"
              class="img-fluid"
              alt="one"
          /></a>

          <h6>New York</h6>
        </div>
      </li>
      <li data-attr="enterprice-type">
        <div class="layout-img">
          <a
            @click="
              handlePageLayputs(
                'horizontal-wrapper enterprice-type',
                'Singapore'
              )
            "
            ><img
              src="../../assets/images/layouts/8.jpg"
              class="img-fluid"
              alt="one"
          /></a>

          <h6>Singapore</h6>
        </div>
      </li>
      <li data-attr="material-icon">
        <div class="layout-img">
          <a
            @click="
              handlePageLayputs(
                'compact-sidebar compact-small material-icon',
                'Rome'
              )
            "
            ><img
              src="../../assets/images/layouts/11.jpg"
              class="img-fluid"
              alt="one"
          /></a>

          <h6>Rome</h6>
        </div>
      </li>
      <li data-attr="advance-type">
        <div class="layout-img">
          <a
            @click="
              handlePageLayputs(
                'horizontal-wrapper enterprice-type advance-layout',
                'Barcelona'
              )
            "
            ><img
              src="../../assets/images/layouts/12.jpg"
              class="img-fluid"
              alt="one"
          /></a>

          <h6>Barcelona</h6>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import { layoutClasses } from '../../constants/layout';

  export default {
    name: 'Customlayout',
    computed: {
      ...mapState({
        customizer: (state) => state.menu.customizer,
        layout: (state) => state.layout.layout,
        menuItems: state => state.menu.data,
        togglesidebar: (state) => state.menu.togglesidebar,
      }),
    },
    methods: {
      handlePageLayputs(val,layout) {
        const layoutobj = layoutClasses.find((item) => Object.keys(item).pop() === layout);
        this.$store.dispatch('layout/setCustomizeSidebarType', layoutobj[layout]);
        this.layout.settings.layout = layout; 
        this.$router.push({ query:{ layout: layout } }).catch(err => err);
        if(layoutobj[layout].split(' ').includes('compact-sidebar')) {
          this.$store.state.menu.activeoverlay = true;
          document.getElementById('sidebar-menu').classList.remove('d-flex');
        } else {
          this.$store.state.menu.activeoverlay = false;
          document.getElementById('sidebar-menu').classList.add('d-flex');
        }

        if(layout === 'Dubai') {
          this.$store.state.layout.boxlayout = true;
        } else {
          this.$store.state.layout.boxlayout = false;
        }

        if(layout === 'Tokyo' || layout === 'Moscow' || layout === 'Rome') {
          this.$store.state.menu.togglesidebar = true; 
        }
      },
    },
  };
</script>
