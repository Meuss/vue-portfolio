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
            <strong>CV [.pdf] :</strong>
            <a href="/static/CV_Thomas_Miller_EN.pdf" target="_blank">English</a>
            <a href="/static/CV_Thomas_Miller_FR.pdf" target="_blank">Français</a>
          </div>
        </div>
        <div class="line"></div>
        <div class="desc">
          <p>Passionate front-end web developer from Bulle, Switzerland.</p>
          <p>
            Currently working at <strong><a href="https://925.ch/">925 Interactive Sàrl</a></strong
            >, open to freelance projects as well.
          </p>
          <p>
            Take a look at my <strong><router-link to="/projects">portfolio</router-link></strong
            >.
          </p>
        </div>
      </div>
      <footer>
        <p>© {{ new Date().getFullYear() }} Thomas Miller</p>
      </footer>
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
  footer {
    position: fixed;
    bottom: 30px;
    right: 30px;
  }
}
.image {
  height: 100vh;
  width: calc(100% / 3);
  background-image: url('/static/linkedin.jpg');
  background-size: cover;
  background-position: center center;
}
.homepage-content {
  padding: 35vh 60px 60px 60px;
}
.tm {
  transform: translateX(-20px);
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
  .desc a {
    color: $darkblue;
    border-bottom: 1px dotted $darkblue;
  }
}
.under-wrap {
  display: flex;
  justify-content: space-between;
  @include sm {
    flex-direction: column;
    .cvs {
      margin-top: 15px;
    }
  }
  .cvs {
    display: flex;
    align-items: flex-end;
    @include sm {
      justify-content: center;
    }
    a {
      color: $darkblue;
      border-bottom: 1px dotted $darkblue;
      margin-bottom: -1px;
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
@include md {
  .image {
    min-width: 40%;
  }
}
@include sm {
  .homepage {
    flex-direction: column;
  }
  .homepage-content {
    padding: 0px 30px 30px 30px;
  }
  .tm {
    transform: translateY(-50px);
    color: $lightgray;
    margin-bottom: 10px;
    h1 {
      font-size: 30px;
      line-height: 34px;
      padding: 2px 2px 0px 0px;
    }
    & > div {
      display: none;
    }
  }
  .image {
    width: 100%;
    height: 40vh;
  }
  html,
  body,
  #app {
    overflow: hidden;
  }
  .socials {
    margin: 0 auto;
  }
  .under {
    font-size: 16px;
    line-height: 18px;
  }
  .under-wrap .cvs {
    justify-content: flex-start;
  }
}
</style>
