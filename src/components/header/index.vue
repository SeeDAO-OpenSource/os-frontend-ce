<template>
  <div class="header-wrapper row m-0">
    <!-- <SearchBar /> -->
    <Logo />
    <div class="left-header col horizontal-wrapper pl-0">
      <ul class="horizontal-menu">
        <!-- <BonusUI />
        <LevelMenu /> -->
      </ul>
    </div>
    <div class="nav-right col-8 pull-right right-header p-0">
      <ul class="nav-menus">
        <li>
          <Mode />
        </li>
        <li class="language-nav">
          <Language />
        </li>
        <!-- <li>
          <span class="header-search"
            ><feather type="search" @click="search_open()"></feather
          ></span>
        </li> -->
        <!-- <Notifications /> -->
        <!-- <li class="onhover-dropdown">
          <div class="notification-box">
            <feather type="star" @click="bookmark_open()"></feather>
          </div>
          <Bookmark v-bind:activeclass="bookmark" />
        </li> -->
        <!-- <Cart /> -->
        <!-- <li>
          <Message />
        </li> -->
        <!-- <li class="maximize">
          <Maximize />
        </li> -->
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Profile />
      </ul>
    </div>
    <h5
      style="position: absolute; right: 20%; z-index: 30"
      class="d-none d-lg-block d-print-block btn btn-outline-primary ml-3"
    >
      ⚙️ {{$t("Under-Construction")}} 
    </h5>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Bookmark from "../bookmark";
import BonusUI from "./bonusUI";
import LevelMenu from "./levelMenu";
import Language from "./language";
import Notifications from "./notifications";
import Mode from "./mode";
import Cart from "./cart";
import Message from "./message";
import Maximize from "./maximize";
import Profile from "./profile";
import Logo from "./logo";
import SearchBar from "./search";

export default {
  name: "Search",
  components: {
    Bookmark,
    BonusUI,
    LevelMenu,
    Language,
    Notifications,
    Mode,
    Cart,
    Message,
    Maximize,
    Profile,
    Logo,
    SearchBar,
  },
  data() {
    return {
      bookmark: false,
    };
  },
  computed: {
    ...mapState({
      menuItems: (state) => state.menu.searchData,
      megamenuItems: (state) => state.menu.megamenu,
      searchOpen: (state) => state.menu.searchOpen,
    }),
  },
  methods: {
    search_open() {
      this.$store.state.menu.searchOpen = true;
    },
    bookmark_open() {
      this.bookmark = !this.bookmark;
    },
  },
};
</script>
