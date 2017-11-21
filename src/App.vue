<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/projects">Web Projects</router-link>
      <router-link to="/sandbox">Sandbox</router-link>
      <router-link to="/resources">Resources</router-link>
    </nav>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <footer>
      <p>Copyright © 2017 Thomas Miller</p>
    </footer>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  name: 'app',
  methods: {
  },
};
</script>

<style lang="scss">
@import '~@/styles/global.scss';
.projects,
.sandbox,
.resources {
  padding: 100px 0px;
  max-width: 1100px;
  margin: 0 auto;
  .sandboxes,
  .wrapper {
    margin-top: 30px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-property: all;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

</style>
