<template>
      <nav class="sidebar-main" id="sidebar-main">
        <li
          class="left-arrow"
          :class="{'d-none': layout.settings.layout_type =='rtl'? hideLeftArrowRTL: hideLeftArrow }"
          @click="(layoutobject.split(' ').includes('horizontal-wrapper') && layout.settings.layout_type==='rtl') ? scrollToLeftRTL() : scrollToLeft()"
        >
          <feather type="arrow-left"></feather>
        </li>
        <Navmenu />
        <li
          class="right-arrow"
          :class="{'d-none': layout.settings.layout_type=='rtl'? hideRightArrowRTL : hideRightArrow }"
          @click="(layoutobject == 'horizontal_sidebar' && layout.settings.layout_type=='rtl') ? scrollToRightRTL() : scrollToRight()"
        >
          <feather type="arrow-right"></feather>
        </li>
      </nav>
</template>
<script>
  import { mapState } from 'vuex';
  import { layoutClasses } from '../../constants/layout';
  import Navmenu from './navmenu.vue';
  import SBTService from "../../services/sbt.service"
  
  export default {
    name: 'Nav',
    components : {
      Navmenu
    },
    data() {
      return {
        layoutobj:{}	
      };
    },
    mounted() {
      SBTService.init()
    },
    computed: {
      ...mapState({
        layout: state => state.layout.layout,
        hideRightArrowRTL: (state) => state.menu.hideRightArrowRTL,
        hideLeftArrowRTL: (state) => state.menu.hideLeftArrowRTL,
        hideRightArrow: (state) => state.menu.hideRightArrow,
        hideLeftArrow: (state) => state.menu.hideLeftArrow,
        width: (state) => state.menu.width,
        height: (state) => state.menu.height,
        margin: (state) => state.menu.margin,
        menuWidth: (state) => state.menu.menuWidth,
      }),
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
      layoutobject() {
        setTimeout(()=> {
          const elmnt = document.getElementById('myDIV');
          this.$store.state.menu.menuWidth = elmnt.offsetWidth;
        }, 500);
      }
    },
    methods: {
      scrollToRightRTL() {
        this.temp = this.$store.state.menu.width + this.$store.state.menu.margin;
        // Checking condition for remaing margin
        if (this.temp === 0) {
          this.$store.state.menu.margin = this.temp;
          this.$store.state.menu.hideRightArrowRTL = false; 
        } else {
          this.$store.state.menu.margin += this.$store.state.menu.width;
          this.$store.state.menu.hideRightArrowRTL = false; 
          this.$store.state.menu.hideLeftArrowRTL = false; 
        }
      },
      scrollToLeftRTL() {
        // If Margin is reach between screen resolution
        if (this.$store.state.menu.margin <= -this.$store.state.menu.width) {
          this.$store.state.menu.margin += -this.$store.state.menu.width;
          this.$store.state.menu.hideLeftArrowRTL = true; 
        } else {
          this.$store.state.menu.margin += -this.$store.state.menu.width;
          this.$store.state.menu.hideRightArrowRTL = false; 
          this.$store.state.menu.activeoverlay = false;
        }
      },
      scrollToLeft() {
        // If Margin is reach between screen resolution
        if (this.$store.state.menu.margin >= -this.$store.state.menu.width) {
          this.$store.state.menu.margin = 0;
          this.$store.state.menu.hideLeftArrow = true; 
        } else {
          this.$store.state.menu.margin += this.$store.state.menu.width;
          this.$store.state.menu.hideRightArrow = false; 
        }
      },
      //   scrollToRight() {
      //     this.temp = this.$store.state.menu.menuWidth + this.$store.state.menu.width;
      //     // Checking condition for remaing margin
      //     if (this.temp > this.$store.state.menu.menuWidth) {
      //       this.$store.state.menu.margin = -this.temp;
      //       this.$store.state.menu.hideRightArrow = true;
      //     } else {
      //       this.$store.state.menu.margin += -this.$store.state.menu.width;
      //       this.$store.state.menu.hideLeftArrow = false;
      //     }
      //   }
      // scrollToRight() {
      //   this.temp = this.$store.state.menu.menuWidth + this.$store.state.menu.margin;
      //   // Checking condition for remaing margin
      //   if (this.temp >this.$store.state.menu.menuWidth) {
      //     this.$store.state.menu.margin = -this.temp;
      //   } else {
      //     this.$store.state.menu.margin += -this.$store.state.menu.width;
      //     this.$store.state.menu.hideLeftArrow = false; 
      //     if(this.$store.state.menu.margin <= -4689) {
      //       this.$store.state.menu.hideRightArrow = true; 
      //     }
      //   }
      // }
      scrollToRight() {
        this.temp = this.$store.state.menu.width - this.$store.state.menu.margin;
        // Checking condition for remaing margin
        if (this.temp + this.$store.state.menu.width > this.$store.state.menu.menuWidth) {
          this.$store.state.menu.margin = -this.temp;
          this.$store.state.menu.hideRightArrow = true;
        } else {
          this.$store.state.menu.margin += -this.$store.state.menu.width;
          this.$store.state.menu.hideLeftArrow = false;
        }
      }
    }
  };
</script>
