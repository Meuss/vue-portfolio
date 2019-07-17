<template>
  <div id="app" :class="{ open: menuOpen }">
    <nav :class="currentPage">
      <router-link to="/">Home</router-link>
      <router-link to="/projects">Portfolio</router-link>
    </nav>
    <div id="mobile-menu-trigger">
      <div class="hamburger" @click="toggleMenu">
        <span class="top"></span>
        <span class="bot"></span>
      </div>
    </div>
    <div id="offcanvas">
      <div class="pages">
        <router-link to="/">Home</router-link>
        <router-link to="/projects">Portfolio</router-link>
      </div>
    </div>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <div
      id="popper_bcnrsnclcc"
      aria-hidden="true"
      class="v-popper__popper v-popper--theme-tooltip"
      style="position: absolute; will-change: transform; 
      top: 0px; left: 0px; transform: translate3d(374px, 562px, 0px);"
      x-placement="top"
    >
      <div class="v-popper__wrapper">
        <div class="v-popper__inner" style="position: relative;">
          <div><div>vue</div></div>
          <!---->
        </div>
        <div class="v-popper__arrow" style="left: 0px;"></div>
      </div>
    </div>
    <div id="mq"></div>
  </div>
</template>

<script>
import 'normalize.css';

export default {
  name: 'app',
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    checkIfShitBrowser() {
      const ua = window.navigator.userAgent;
      const trident = ua.indexOf('Trident/');
      if (trident > 0) {
        /* eslint-disable */
        alert(
          `Hello time traveler! It is ${new Date().getFullYear()}. Please stop using Internet Explorer.\r\nYou are holding the internet back. I have chosen to not waste my time supporting IE for my personal website, I'm sorry.\r\nSincerely, Thomas.`,
        );
        /* eslint-enable */
      }
    },
  },
  watch: {
    $route() {
      this.menuOpen = false;
    },
  },
  mounted() {
    /* eslint-disable */
    console.log(
      '%c+',
      'font-size: 1px; padding: 80px 80px; background: url(https://media.giphy.com/media/jWexOOlYe241y/giphy.gif); background-size: contain; color: transparent; background-repeat: no-repeat;',
    );
    console.log('You lost?');
    /* eslint-enable */
    // detect IE 11
    this.checkIfShitBrowser();
  },
  computed: {
    currentPage() {
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss">
@import '~@/styles/variables.scss';
@import '~@/styles/reset.scss';
html,
body {
  overflow-x: hidden;
}
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
input,
textarea,
button,
select,
a,
div {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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
b,
strong {
  @include font-bold;
  font-weight: normal !important;
  font-style: normal !important;
}
nav {
  transform: translateX(calc(((100vw - 1100px) / 2) - 25px));
  &.Home {
    transform: translateX(calc((100vw / 3) + 40px));
  }
  transition: transform 1s ease;
  @include md {
    transform: translateX(calc(5vw - 20px));
    &.Home {
      transform: translateX(calc(40vw + 40px));
    }
  }
  @include sm {
    display: none !important;
  }
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  a {
    display: inline-block;
    padding: 20px;
    color: $darkblue;
    &.router-link-exact-active {
      @include font-bold;
    }
  }
}
footer {
  font-size: 12px;
  line-height: 12px;
  text-align: right;
}
.projects,
.sandbox,
.skills {
  padding: 100px 0px;
  max-width: 1100px;
  margin: 0 auto;
  .sandboxes,
  .wrapper {
    margin-top: 30px;
  }
  @include md {
    max-width: 90%;
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
#offcanvas {
  display: none;
}
@include sm {
  #offcanvas {
    display: block;
    position: absolute;
  }
}
@include sm {
  .block-revealer__content {
    padding: 0;
  }
  .block-revealer__content {
    width: 98%;
  }
  footer {
    display: none !important;
  }
}
// =====================================================
// Hamburger anim
// =====================================================
#mobile-menu-trigger {
  display: none;
}
@include sm {
  #offcanvas {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0);
    position: fixed;
    top: 0;
    right: 0;
    background-color: $white;
    z-index: 5;
    padding: 50px 60px 30px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transform: translateX(100%);
    transition: transform 0.5s ease 0.1s, box-shadow 0.5s ease 0.1s;
    .pages {
      display: flex;
      flex-direction: column;
      a {
        font-size: 20px;
        line-height: 24px;
        color: $darkblue;
        &:first-of-type {
          margin-bottom: 10px;
        }
        &.router-link-exact-active {
          @include font-bold;
        }
      }
    }
  }
  #app.open #offcanvas {
    transform: translateX(0);
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.16);
  }
  #app.open #mobile-menu-trigger {
    position: fixed;
  }
  #mobile-menu-trigger {
    display: block;
    position: absolute;
    z-index: 6;
    top: 10px;
    right: 10px;
    height: 48px;
    width: 48px;
  }
}
.hamburger {
  cursor: pointer;
  position: absolute;
  width: 48px;
  height: 48px;
  transition: all 0.25s;
}
.top,
.bot {
  content: '';
  display: block;
  position: absolute;
  left: 11px;
  width: 25px;
  height: 2px;
  background: $darkblue;
  transform: rotate(0);
  transition: all 0.25s;
}
.top {
  top: 23px;
  transform: translateY(-3px);
}
.bot {
  bottom: 23px;
  transform: translateY(3px);
}
#app.open .hamburger {
  transform: rotate(90deg);
  .top {
    transform: rotate(45deg) translateY(0px);
  }
  .bot {
    transform: rotate(-45deg) translateY(0px);
  }
}
// =====================================================
// Tooltip css
// =====================================================
.v-popper__popper {
  display: block !important;
  z-index: 10000;

  .v-popper__wrapper {
    background: $blue;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }

  .v-popper__arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: $blue;
    z-index: 1;
  }

  &[x-placement^='top'] {
    margin-bottom: 5px;

    .v-popper__arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^='bottom'] {
    margin-top: 5px;

    .v-popper__arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^='right'] {
    margin-left: 5px;

    .v-popper__arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[x-placement^='left'] {
    margin-right: 5px;

    .v-popper__arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.15s, visibility 0.15s;
  }

  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.15s;
  }
}
// =====================================================
// Mediaqueries
// =====================================================
#mq {
  pointer-events: none;
  position: fixed;
  bottom: 0px;
  left: 0px;
  justify-content: center;
  align-items: center;
  z-index: 999999;
  display: flex;
  font-size: 12px;
  line-height: 12px;
  padding: 5px;
  color: $darkblue;
  background-color: $white;
  opacity: 0.7;
  display: none !important;
  &::after {
    @include lg() {
      content: 'lg > 1201';
    }
    @include md() {
      content: 'md <= 1200';
    }
    @include md1() {
      content: 'md1 <= 900';
    }
    @include sm() {
      content: 'sm <= 768';
    }
    @include xs() {
      content: 'xs <= 480';
    }
  }
}
</style>
