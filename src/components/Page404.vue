<template>
  <div class="homepage">
    <div class="image"></div>
    <div class="homepage-content">
      <div class="tm">
        <h1 class="thomas loading">Thomas</h1>
        <div></div>
        <h1 class="miller loading">Miller</h1>
      </div>
      <div class="lost">
        <h3>{{ title }}</h3>
        <img src="https://media.giphy.com/media/jWexOOlYe241y/giphy.gif" alt="confused-travolta" />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import anime from 'animejs';
import RevealFx from '../assets/scripts/revealfx';

export default {
  name: 'Page404',
  data() {
    return {
      title: 'Page not found..',
    };
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
            // document.querySelector('.under').classList.remove('loading');
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '~@/styles/variables.scss';
.lost img {
  position: fixed;
  bottom: 0px;
  right: 0px;
  height: 250px;
}
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
  .desc a {
    color: $darkblue;
    border-bottom: 1px dotted $darkblue;
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
