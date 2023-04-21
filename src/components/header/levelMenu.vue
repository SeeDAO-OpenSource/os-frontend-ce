<template>
  <li class="level-menu outside" @click="openlevelmenu">
    <a class="nav-link" href="#">
      <feather type="inbox"></feather>
      <span>Level Menu</span></a
    >
    <ul
      class="header-level-menu menu-to-be-close"
      :class="{ 'd-block': openLevelmenu }"
    >
      <li>
        <router-link
          to="/app/filemanager"
          class="sidebar-link sidebar-title"
          router-link-exact-active
        >
          <feather type="git-pull-request"></feather>
          <span>File manager </span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/my/profile"
          class="sidebar-link sidebar-title"
          router-link-exact-active
        >
          <feather type="users"></feather><span>Users</span>
        </router-link>
        <ul class="header-level-sub-menu">
          <li>
            <router-link
              to="/my/profile"
              class="sidebar-link sidebar-title"
              router-link-exact-active
            >
              <feather type="user"></feather><span>User Profile</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/users/edit"
              class="sidebar-link sidebar-title"
              router-link-exact-active
            >
              <feather type="user-minus"></feather>
              <span>User Edit</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/users/cards"
              class="sidebar-link sidebar-title"
              router-link-exact-active
            >
              <feather type="user-check"></feather><span>Users Cards</span>
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link
          to="/app/kanban"
          class="sidebar-link sidebar-title"
          router-link-exact-active
        >
          <feather type="airplay"></feather><span>Kanban Board</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/app/bookmark"
          class="sidebar-link sidebar-title"
          router-link-exact-active
        >
          <feather type="heart"></feather><span>Bookmark</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/pages/social-app"
          class="sidebar-link sidebar-title"
          router-link-exact-active
        >
          <feather type="zap"></feather><span>Social App </span>
        </router-link>
      </li>
    </ul>
  </li>
</template>

<script>
  export default {
    name: 'LevelMenu',
    data() {
      return {
        openLevelmenu: false,
      };
    },
    methods: {
      openlevelmenu() {
        this.openLevelmenu = !this.openLevelmenu;
      },
    },
  };
</script>
