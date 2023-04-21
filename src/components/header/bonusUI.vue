<template>
  <li class="mega-menu outside">
    <a
      class="nav-link"
      :class="{ active: openbonusUI }"
      href="javascript:void(0);"
      @click="openmegamenu"
    >
      <feather type="layers"></feather><span>Bonus Ui</span>
    </a>
    <div
      class="mega-menu-container nav-submenu menu-to-be-close"
      :class="{ 'd-block': openbonusUI }"
    >
      <div class="container-fluid">
        <div class="row">
          <div
            class="col mega-box"
            v-for="(menuItem, index) in megamenuItems"
            :key="index"
          >
            <div class="mobile-title d-none" v-if="index == 0">
              <h5>Mega menu</h5>
             <feather ty pe="x" @click="closeBonusUI"></feather>
            </div>
            <div
              class="link-section"
              :class="[menuItem.design, { active: menuItem.active }]"
            >
              <div>
                <h6 @click="setNavActive(menuItem, index)">
                  {{ menuItem.title }}
                </h6>
              </div>
              <ul :class="{ open: menuItem.active }">
                <li
                  v-for="(childrenItem, index) in menuItem.children"
                  :key="index"
                >
                  <router-link :to="childrenItem.path">
                    <feather
                      :type="childrenItem.icon"
                      v-if="childrenItem.icon"
                    ></feather>
                    {{ childrenItem.title }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'BonusUI',
    data() {
      return {
        openbonusUI: false,
      };
    },
    computed: {
      ...mapState({
        megamenuItems: (state) => state.menu.megamenu,
      }),
    },
    methods: {
      openmegamenu() {
        this.openbonusUI = !this.openbonusUI;
      },
      closeBonusUI() {
        this.openbonusUI = false;
      },
      setNavActive(item) {
        this.$store.dispatch('menu/setBonusNavActive', item);
      },
    },
  };
</script>
