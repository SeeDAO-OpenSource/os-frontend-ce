<template>
        <div id="sidebar-menu" class="d-flex">
          <!-- {{layoutobject}}	
          fdsfdsf{{[layoutobject.split(' ').includes('horizontal-wrapper')]}} -->
          <ul class="sidebar-links custom-scrollbar" id="myDIV"
          :style="[layoutobject.split(' ').includes('horizontal-wrapper')  ? layout.settings.layout_type=='rtl'? {'  -right': margin+'px'} : {'margin-left': margin+'px'} :  { margin : '0px'}]"
          >
            <li class="back-btn">
              <router-link to="/">
                <img
                  class="img-fluid"
                  src="../../assets/images/logo/logo-icon.png"
                  alt=""
              /></router-link>
              <div class="mobile-back text-right">
                <span>Back</span
                ><i class="fa fa-angle-right pl-2" aria-hidden="true"></i>
              </div>
            </li>
           <li
                v-for="(menuItem, index) in menuItems"
                :key="index"
                :class="{'active': menuItem.active, 'sidebar-main-title' : menuItem.type == 'headtitle'}"
                class="sidebar-list"
              >
                <!-- link title -->
                <div v-if="menuItem.type == 'headtitle'">
                  <h6 class="lan-1"><b>{{ $t(menuItem.headTitle1) }}</b></h6>
                  <p class="lan-2">{{ $t(menuItem.headTitle2) }}</p>
                </div>
                <!-- Sub -->
                <label
                      :class="'badge badge-'+menuItem.badgeType"
                      v-if="menuItem.badgeType"
                    >{{ $t(menuItem.badgeValue) }}</label>
                    <a
                  href="javascript:void(0)"
                  class="sidebar-link sidebar-title"
                  v-if="menuItem.type == 'sub'"
                  @click="setNavActive(menuItem, index)"
                >
                  <feather :type="menuItem.icon" class="top"></feather>
                  <span>
                    <b><b>{{ $t(menuItem.title) }}</b></b>
                  </span>
                  <div class="according-menu" v-if="menuItem.children">
                    <i class="fa fa-angle-right pull-right" ></i>
                  </div>
                </a>
                <!-- Link -->
                <router-link
                  :to="menuItem.path"
                  class="sidebar-link sidebar-title"
                  v-if="menuItem.type == 'link'"
                  router-link-exact-active
                  exact v-on:click.native="hidesecondmenu()"
                >
                  <feather :type="menuItem.icon" class="top"></feather>
                  <span>
                    <b>{{ $t(menuItem.title) }}</b>
                  </span>
                  <i class="fa fa-angle-right pull-right" v-if="menuItem.children"></i>
                </router-link>
                <!-- External Link -->
                <a
                  :href="menuItem.path"
                  class="sidebar-link sidebar-title"
                  v-if="menuItem.type == 'extLink'"
                  @click="setNavActive(menuItem, index)"
                >
                  <feather :type="menuItem.icon" class="top"></feather>
                  <span>
                    <b>{{ $t(menuItem.title) }}</b>
                  </span>
                  <i class="fa fa-angle-right pull-right" v-if="menuItem.children"></i>
                </a>
                <!-- External Tab Link -->
                <a
                  :href="menuItem.path"
                  target="_blank"
                  class="sidebar-link sidebar-title"
                  v-if="menuItem.type == 'extTabLink'"
                  @click="setNavActive(menuItem, index)"
                >
                  <feather :type="menuItem.icon" class="top"></feather>
                  <span>
                    <b>{{ $t(menuItem.title) }}</b>
                  </span>
                  <i class="fa fa-angle-right pull-right" v-if="menuItem.children"></i>
                </a>
                <!-- 2nd Level Menu -->
                <ul class="sidebar-submenu" v-if="menuItem.children" :class="{ 'menu-open': menuItem.active }">
                  <li
                    v-for="(childrenItem, index) in menuItem.children"
                    :key="index"
                    :class="{'active': childrenItem.active}"
                  >
                    <!-- Sub -->
                    <a
                      class="submenu-title"
                      href="javascript:void(0)"
                      v-if="childrenItem.type == 'sub'"
                      @click="setNavActive(childrenItem, index)"
                    >
                      <b>{{ $t(childrenItem.title) }}</b>
                      <label
                        :class="'badge badge-'+childrenItem.badgeType+' pull-right'"
                        v-if="childrenItem.badgeType"
                      >{{childrenItem.badgeValue}}</label>
                      <i class="fa pull-right mt-1" v-bind:class="[childrenItem.active ? 'fa fa-angle-down' : 'fa fa-angle-right']" v-if="childrenItem.children"></i>
                    </a>
                    <!-- Link -->
                    <router-link
                      class="submenu-title"
                      :to="childrenItem.path"
                      v-if="childrenItem.type == 'link'"
                      router-link-exact-active
                      exact v-on:click.native="hidesecondmenu()"
                    >
                      <b>{{ $t(childrenItem.title) }}</b>
                      <label
                        :class="'badge badge-'+childrenItem.badgeType+' pull-right'"
                        v-if="childrenItem.badgeType"
                      >{{ $t(childrenItem.badgeValue) }}</label>
                      <i class="fa fa-angle-right pull-right mt-1" v-if="childrenItem.children"></i>
                    </router-link>
                    <!-- External Link -->
                    <a :href="childrenItem.path" v-if="childrenItem.type == 'extLink'" class="submenu-title">
                      <b>{{ $t(childrenItem.title) }}</b>
                      <label
                        :class="'badge badge-'+childrenItem.badgeType+' pull-right'"
                        v-if="childrenItem.badgeType"
                      >{{ $t(childrenItem.badgeValue) }}</label>
                      <i class="fa fa-angle-right pull-right mt-1" v-if="childrenItem.children"></i>
                    </a>
                    <!-- External Tab Link -->
                    <a
                    class="submenu-title"
                      :href="childrenItem.path"
                      target="_blank"
                      v-if="childrenItem.type == 'extTabLink'"
                    >
                      <b>{{ $t(childrenItem.title) }}</b>
                      <label
                        :class="'badge badge-'+childrenItem.badgeType+' pull-right'"
                        v-if="childrenItem.badgeType"
                      >{{ $t(childrenItem.badgeValue) }}</label>
                      <i class="fa fa-angle-right pull-right mt-1" v-if="childrenItem.children"></i>
                    </a>
                    <!-- 3rd Level Menu -->
                    <ul class="nav-sub-childmenu submenu-content" v-if="childrenItem.children" :class="{ 'opensubchild': childrenItem.active }">
                      <li v-for="(childrenSubItem, index) in childrenItem.children" :key="index">
                        <!-- Link -->
                        <router-link
                          :to="childrenSubItem.path"
                          v-if="childrenSubItem.type == 'link'"
                          router-link-exact-active
                          exact v-on:click.native="hidesecondmenu()"
                        >
                          <b>{{ $t(childrenSubItem.title) }}</b>
                          <label
                            :class="'badge badge-'+childrenSubItem.badgeType+' pull-right'"
                            v-if="childrenSubItem.badgeType"
                          >{{ $t(childrenSubItem.badgeValue) }}</label>
                          <i class="fa fa-angle-right pull-right" v-if="childrenSubItem.children"></i>
                        </router-link>
                        <!-- External Link -->
                        <router-link
                          :to="childrenSubItem.path"
                          v-if="childrenSubItem.type == 'extLink'"
                          router-link-exact-active
                        >
                          <b>{{ $t(childrenSubItem.title) }}</b>
                          <label
                            :class="'badge badge-'+childrenSubItem.badgeType+' pull-right'"
                            v-if="childrenSubItem.badgeType"
                          >{{ $t(childrenSubItem.badgeValue) }}</label>
                          <i class="fa fa-angle-right pull-right" v-if="childrenSubItem.children"></i>
                        </router-link>
                        <!-- External Tab Link -->
                        <router-link
                          :to="childrenSubItem.path"
                          v-if="childrenSubItem.type == 'extLink'"
                          router-link-exact-active
                        >
                          <b>{{ $t(childrenSubItem.title) }}</b>
                          <label
                            :class="'badge badge-'+childrenSubItem.badgeType+' pull-right'"
                            v-if="childrenSubItem.badgeType"
                          >{{ $t(childrenSubItem.badgeValue) }}</label>
                          <i class="fa fa-angle-right pull-right" v-if="childrenSubItem.children"></i>
                        </router-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
          </ul>
        </div>
</template>
<script>
  import { mapState } from 'vuex';
  import { layoutClasses } from '../../constants/layout';
  
  export default {
    name: 'Navmenu',
    data() {
      return {
        layoutobj:{}
      };
    },
    computed: {
      ...mapState({
        menuItems: state => state.menu.data,
        layout: state => state.layout.layout,
        sidebar: state => state.layout.sidebarType,
        activeoverlay: (state) => state.menu.activeoverlay,
        togglesidebar: (state) => state.menu.togglesidebar,
        width: (state) => state.menu.width,
        height: (state) => state.menu.height,
        margin: (state) => state.menu.margin,
        menuWidth: (state) => state.menu.menuWidth,
      }),
      margin:{
        get(){
             return this.margin
           },
           set(newMargin){
             return newMargin
           } 
      },
      layoutobject: {	
        get: function () {	
          return JSON.parse(JSON.stringify(layoutClasses.find((item) => Object.keys(item).pop() === this.layout.settings.layout)))[this.layout.settings.layout];	
        },	
        set: function () {	
          this.layoutobj = layoutClasses.find((item) => Object.keys(item).pop() === this.layout.settings.layout);	
          this.layoutobj = JSON.parse(JSON.stringify(this.layoutobj))[this.layout.settings.layout];	
          return this.layoutobj;	
        }	
      }
    },
    watch: {
      width() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
        window.addEventListener('scroll',this.handleScroll);
        this.handleScroll(); 
        if (window.innerWidth < 992) {
          const newlayout = JSON.parse(JSON.stringify(this.layoutobject).replace('horizontal-wrapper', 'compact-wrapper'));
          document.querySelector('.page-wrapper').className = 'page-wrapper ' + newlayout;
          this.$store.state.menu.margin = 0;
        } else {
          document.querySelector('.page-wrapper').className = 'page-wrapper ' + this.layoutobject;
        }

        if((window.innerWidth < 1199 && this.layout.settings.layout === 'Tokyo') || (window.innerWidth < 1199 && this.layout.settings.layout === 'Moscow') || (window.innerWidth < 1199 && this.layout.settings.layout === 'Rome')) {
          this.menuItems.filter(menuItem => {
            menuItem.active = false;
          });
        }
      }
    },
    created() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
      if (this.$store.state.menu.width < 991) {
        this.layout.settings.layout = 'Dubai';	
        this.margin = 0;
      }
      setTimeout(()=> {
        const elmnt = document.getElementById('myDIV');
        this.$store.state.menu.menuWidth = elmnt.offsetWidth;   
        this.$store.state.menu.menuWidth > window.innerWidth  ? 
          (this.$store.state.menu.hideRightArrow = false,this.$store.state.menu.hideLeftArrowRTL = false) : 
          (this.$store.state.menu.hideRightArrow = false,this.$store.state.menu.hideLeftArrowRTL = true);
      }, 500);
      this.layoutobject = layoutClasses.find((item) => Object.keys(item).pop() === this.layout.settings.layout);	
      this.layoutobject = JSON.parse(JSON.stringify(this.layoutobject))[this.layout.settings.layout];
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize);
    },
    mounted() {   
      this.menuItems.filter(items => {
        if (items.path === this.$route.path)
          this.$store.dispatch('menu/setActiveRoute', items);
        if (!items.children) return false;
        items.children.filter(subItems => {
          if (subItems.path === this.$route.path)
            this.$store.dispatch('menu/setActiveRoute', subItems);
          if (!subItems.children) return false;
          subItems.children.filter(subSubItems => {
            if (subSubItems.path === this.$route.path)
              this.$store.dispatch('menu/setActiveRoute', subSubItems);
          });
        });
      });
    },
    methods: {
      handleScroll() {
        if(window.scrollY > 400){
          if(this.layoutobject.split(' ').pop() === 'material-type' || this.layoutobject.split(' ').pop() ==='advance-layout')
            document.querySelector('.sidebar-main').className = 'sidebar-main hovered';
        }else{
          if(document.getElementById('sidebar-main'))
            document.querySelector('.sidebar-main').className = 'sidebar-main';
        }
      },
      setNavActive(item) {
        this.$store.dispatch('menu/setNavActive', item);
        if(this.layoutobject.split(' ').includes('compact-sidebar') && window.innerWidth > 991) {
          if(this.menuItems.some(menuItem => menuItem.active === true)) {
            this.$store.state.menu.activeoverlay = true;
          } else {
            this.$store.state.menu.activeoverlay = false;
          }
        }
      },
      hidesecondmenu() {
        if(window.innerWidth < 991) {
          this.$store.state.menu.activeoverlay = false,
          this.$store.state.menu.togglesidebar = false;
          this.menuItems.filter(menuItem => {
            menuItem.active = false;
          });
        } else if(this.layoutobject.split(' ').includes('compact-sidebar')){
          this.$store.state.menu.activeoverlay = false,
          this.menuItems.filter(menuItem => {
            menuItem.active = false;
          });
        }
      },
      handleResize() {
        this.$store.state.menu.width = window.innerWidth - 450;
      },
    }
  };
</script>
