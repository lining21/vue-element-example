<template>
  <div
    :class="classObj"
    class="app-wrapper"
  >
    <sidebar class="sidebar-container" />
    <div
      class="main-container"
    >
      <app-main />
    </div>
  </div>
</template>

<script>
// import RightPanel from '@/components/RightPanel';
import { mapState } from 'vuex';
import {
  AppMain, Sidebar
  // TagsView, Navbar, Settings
} from './components';

export default {
  name: 'Layout',
  components: {
    AppMain,
    Sidebar
  },
  computed: {
    ...mapState({})
  },
  methods: {
    handleClickOutside() {
      // this.$store.dispatch('app/closeSideBar', { withoutAnimation: false });
    }
  }
};
</script>

<style lang="scss" scoped>
  // @import "~@/styles/mixin.scss";
  // @import "~@/styles/variables.scss";

  .app-wrapper {
    // @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - 200px);
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }

  .mobile .fixed-header {
    width: 100%;
  }
</style>
