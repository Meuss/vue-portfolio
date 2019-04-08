<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/projects">Web Projects</router-link>
      <router-link to="/sandbox">Learning Projects</router-link>
      <router-link to="/resources">Resources</router-link>
      <router-link to="/skills">Skills</router-link>
    </nav> -->

    <transition name="fade">
      <router-view></router-view>
    </transition>
    <footer>
      <p>© {{ new Date().getFullYear() }} Thomas Miller</p>
    </footer>
  </div>
</template>

<script>
import 'normalize.css';

export default {
  name: 'app',
  methods: {},
};
</script>

<style lang="scss">
@import '~@/styles/variables.scss';
@import '~@/styles/reset.scss';
body {
  min-height: 100vh;
  display: flex;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $darkblue;
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
  @include font-bold;
  letter-spacing: -1px;
  font-size: 40px;
  line-height: 45px;
  margin-bottom: 30px;
}
p {
  margin-bottom: 10px;
}
nav {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
  justify-content: center;
  a {
    padding: 10px 20px;
    color: $darkblue;
  }
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
  top: 5%;
  left: 0;
  width: 100%;
  height: 90%;
  pointer-events: none;
  opacity: 0;
  background-color: $blue !important;
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
