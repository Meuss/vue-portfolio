<template>
  <div class="homepage">
    <div class="image"></div>
    <div class="homepage-content">
      <div class="tm">
        <h1 class="thomas loading">Thomas</h1>
        <div class="space"></div>
        <h1 class="miller loading">Miller</h1>
      </div>
      <div class="under loading">
        <socials></socials>
        <p>I’m frontend web developer from Switzerland, currently working at a small agency called macmac.</p>
        <p>One day I decided I wanted to know how the internet worked. I haven’t stopped learning since.</p>
        <p>{{message}}</p>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import anime from 'animejs';
import scrollmonitor from 'scrollmonitor';
import RevealFx from '../assets/scripts/revealfx';
/* eslint-enable */
import Socials from './Socials';

export default {
  name: 'Home',
  data() {
    return {
      // title: 'Home Page',
      message: '',
    };
  },
  components: {
    socials: Socials,
  },
  mounted() {
    this.animateThomas();
    this.animateMiller();
  },
  methods: {
    animateThomas: () => {
      const thomas = document.querySelector('.thomas');
      thomas.classList.remove('loading');
      const thomasfx = new RevealFx(thomas, {
        revealSettings: {
          duration: 500,
          onCover(contentEl) {
            contentEl.style.opacity = 1; // eslint-disable-line
          },
        },
      });
      setTimeout(() => { thomasfx.reveal(); }, 500);
    },
    animateMiller: () => {
      const miller = document.querySelector('.miller');
      miller.classList.remove('loading');
      const millerfx = new RevealFx(miller, {
        revealSettings: {
          duration: 600,
          onCover(contentEl) {
            contentEl.style.opacity = 1; // eslint-disable-line
          },
          onComplete() {
            anime({
              targets: '.space',
              duration: 300,
              elasticity: 400,
              height: 0,
              complete: () => {
                document.querySelector('.under').classList.remove('loading');
              },
            });
          },
        },
      });
      setTimeout(() => { millerfx.reveal(); }, 700);
    },
  },
};

</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
.homepage {
  height: 100%;
  display: flex;
  position: relative;
}
.image {
  height: 100%;
  width: calc(100% / 3);
  background-image: url("/static/me_popart.jpg");
  background-size: cover;
  background-position: center center;
  filter: grayscale(0);
}
.homepage-content {
  padding: 35vh 60px 60px 60px;
}
.tm {
  transform: translateX(-8vw);
  color: black;
  @include font-bold;
  position: relative;
  margin-bottom: 50px;
  h1 {
    font-size: 100px;
    line-height: 80px;
    margin-bottom: 0px;
    padding: 5px 10px 0px 10px;
    display: inline-block;
  }
}
.space {
  height: 25px;
}
.thomas.loading,
.miller.loading {
  opacity: 0;
}
.under {
  opacity: 1;
  transition: opacity 0.2s ease-out;
  &.loading {
    opacity: 0;
  }
}

</style>
