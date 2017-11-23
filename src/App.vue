<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/projects">Web Projects</router-link>
      <router-link to="/sandbox">Sandbox</router-link>
      <router-link to="/resources">Resources</router-link>
      <router-link to="/skills">Skills</router-link>
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
import 'normalize.css';

export default {
  /* eslint-disable */
  name: 'app',
  methods: {
  },
};
</script>

<style lang="scss">
@import '~@/styles/variables.scss';
@import '~@/styles/global.scss';
body {
  min-height: 101vh;
  display: flex;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $black;
  background-color: $lightgray;
  @include font-regular;
  font-size: 18px;
  line-height: 22px;
}

#app {
  width: 100%;
  position: relative;
}

h1,
h2 {
  font-weight: normal;
  font-size: 40px;
  line-height: 45px;
  margin-bottom: 30px;
}
p {
  margin-bottom: 10px;
}
nav {
  a {
    color: $black;
    margin-bottom: 20px;
  }
  z-index: 1;
  position: absolute;
  top: 100px;
  right: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
footer {
  font-size: 12px;
  line-height: 12px;
  position: fixed;
  bottom: 30px;
  right: 100px;
}
.projects,
.sandbox,
.resources,
.skills {
  padding: 100px 0px;
  max-width: 1100px;
  margin: 0 auto;
  .sandboxes,
  .wrapper {
    margin-top: 30px;
  }
}
.block-revealer__element {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0;
  background-color: #f08080!important;
}
.block-revealer__content {
  background-color: transparent;
  padding: 0 5px;
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
