<template>
  <b-dropdown
    id="langddm"
    class="translate_wrapper ml-2"
    variant="light"
    size="sm"
    toggle-class="language-button"
  >
    <template slot="button-content">
      <i class="flag-icon" :class="langIcon"></i>
      <span class="name">{{ $i18n.locale }}</span>
    </template>
    <b-dropdown-item
      v-for="(l, index) in localeOptions"
      :key="index"
      @click="changeLocale(l)"
    >
      <i class="flag-icon" :class="l.icon"></i>
      {{ l.name }}</b-dropdown-item
    >
  </b-dropdown>
</template>

<script>
  import { mapActions } from 'vuex';
  import { localeOptions } from '../../constants/config';

  export default {
    name: 'Language',
    data() {
      return {
        localeOptions,
        langIcon: localStorage.getItem('currentLanguageIcon') || 'flag-icon-cn',
      };
    },
    watch: {
      '$i18n.locale'(to, from) {
        if (from !== to) {
          this.$router.go(this.$route.path);
        }
      },
    },
    methods: {
      ...mapActions(['setLang']),
      changeLocale(locale) {
        this.setLang(locale);
      },
    },
  };
</script>
