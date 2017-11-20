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
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
@import '~@/styles/global.scss';
.projects,
.sandbox,
.resources {
  max-width: 1100px;
  margin: 0 auto;  
}
#app {
  width: 100%;
}
nav {
  z-index: 1;
  position: absolute;
  top: 100px;
  right: 100px;
  display: flex;
  flex-direction: column;
  a {
    margin-right: 20px
  }
}
h1,
h2 {
  font-weight: normal;
  font-size: 40px;
  margin-bottom: 30px;
}
ul {
  list-style-type: none;
  padding: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
