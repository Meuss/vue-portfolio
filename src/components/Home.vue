<template>
  <div class="homepage">
    <div class="image"></div>
    <div class="homepage-content">
      <div class="tm">
        <h1 class="thomas loading">Thomas</h1>
        <div></div>
        <h1 class="miller loading">Miller</h1>
      </div>
      <div class="under loading">
        <div class="under-wrap">
          <socials></socials>
          <div class="cvs">
            CV (.pdf)
            <a href="/static/CV_Thomas_Miller_EN_2019.pdf" target="_blank">English</a>
            <a href="/static/CV_Thomas_Miller_FR_2019.pdf" target="_blank">Français</a>
          </div>
        </div>
        <div class="line"></div>
        <p>Frontend web developer from Switzerland.</p>
        <p>Currently looking for a new position, open to freelance projects.</p>
        <p>I'm rebuilding my portfolio, it will be online in a couple weeks.</p>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import anime from 'animejs';
import RevealFx from '../assets/scripts/revealfx';
/* eslint-enable */
import Socials from './Socials';

export default {
  name: 'Home',
  data() {
    return {
      // title: 'Home Page',
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
      setTimeout(() => {
        thomasfx.reveal();
      }, 500);
    },
    animateMiller: () => {
      const miller = document.querySelector('.miller');
      miller.classList.remove('loading');
      const millerfx = new RevealFx(miller, {
        revealSettings: {
          duration: 600,
          onCover(contentEl) {
            contentEl.style.opacity = 1; // eslint-disable-line
            document.querySelector('.under').classList.remove('loading');
          },
          onComplete() {},
        },
      });
      setTimeout(() => {
        millerfx.reveal();
      }, 700);
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
  height: 100vh;
  width: calc(100% / 3);
  background-image: url('/static/me_popart.jpg');
  background-size: cover;
  background-position: center center;
}
.homepage-content {
  padding: 35vh 60px 60px 60px;
}
.tm {
  transform: translateX(-8vw);
  color: $darkblue;
  @include font-bold;
  position: relative;
  margin-bottom: 50px;
  h1 {
    font-size: 100px;
    line-height: 75px;
    margin-bottom: 0px;
    padding: 5px 10px 0px 10px;
    display: inline-block;
    margin-top: 0px;
  }
}
.miller {
  margin-top: 5px;
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
.under-wrap {
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
    .cvs {
      margin-top: 15px;
    }
  }
  .cvs {
    display: flex;
    align-items: center;
    @media (max-width: 700px) {
      justify-content: center;
    }
    a {
      color: $darkblue;
      border-bottom: 1px dotted $darkblue;
      &:first-of-type {
        margin-right: 10px;
        margin-left: 10px;
      }
    }
  }
}
.line {
  height: 1px;
  background-color: $darkblue;
  margin: 15px 0px;
}
@media (max-width: 1100px) {
  .image {
    width: 40%;
  }
  .tm {
    transform: translateX(-100px);
  }
}
@media (max-width: 700px) {
  .homepage {
    flex-direction: column;
  }
  .homepage-content {
    padding: 30px;
  }
  .tm {
    transform: translateX(0px);
    margin-bottom: 10px;
    text-align: center;
    h1 {
      font-size: 30px;
      line-height: 34px;
      padding: 2px 5px 0px 5px;
    }
  }
  .image {
    width: 100%;
    height: 300px;
  }
  html,
  body,
  #app {
    // height: 100vh;
    // width: 100vw;
    overflow: hidden;
  }
  .socials {
    margin: 0 auto;
  }
  .under {
    font-size: 16px;
    line-height: 18px;
    text-align: center;
  }
}
@media (min-width: 701px) {
  .building {
    display: none;
  }
}
</style>
