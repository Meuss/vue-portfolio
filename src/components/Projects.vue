<template>
  <div class="projects loading">
    <h1>{{ title }}</h1>
    <p>Most of these were built while working at macmac.</p>
    <p>Feel free to visit them, keep in mind we have a great designer at macmac :-)</p>
    <ul class="wrapper">
      <li v-for="project in projects"  :class="project.shortname">
        <a :href="project.url" target="_blank">
          <div class="image-wrapper" :style="{ backgroundImage: 'url(' + project.img + ')' }">
          </div>
          <div class="project-title-wrapper">
            <div class="project-title">{{project.name}}</div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
// import anime from 'animejs';
import projects from '../assets/projects.json';
/* eslint-enable */

export default {
  name: 'Projects',
  data() {
    return {
      title: 'Web Projects',
      projects,
    };
  },
  methods: {
    callback: () => {
      // do work here
    },
  },
  mounted() {
    this.callback();
    // console.log('mounted');
  },
};
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(7, 228px);
  grid-gap: 30px;
  li {
    position: relative;
    background: lighten(#f8f8f8, 3%);
    &.probation {
      grid-column: 1/3;
      grid-row: 1/3;
    }
    &.adler {
      grid-column: 3/5;
      grid-row: 1/2;
      .image-wrapper {
        background-position: center center;
      }
    }
    &.easytube {
      grid-column: 3/4;
      grid-row: 2/4;
    }
    &.bimbosan {
      grid-column: 4/6;
      grid-row: 2/3;
    }
    &.aeberhard {
      grid-column: 4/6;
      grid-row: 3/5;
    }
    &.bubenberg {
      .image-wrapper {
        background-position: -7px top;
      }
    }
    &.sms {
      grid-column: 4/6;
      grid-row: 6/8;
      .image-wrapper {
        background-position: center center;
      }
    }
    &.hertigfleurs {
      grid-column: 1/3;
      grid-row: 5/7;
    }
    &.nydegger {
      .image-wrapper {
        background-position: left top;
      }
    }
    &.vulnerabilites {
      grid-column: 1/3;
      grid-row: 4/5;
    }
    &.sdgdm {
      .image-wrapper {
        background-position: left top;
      }
    }
    &.matuzon {

    }
  }
  a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    text-decoration: none;
    color: $black;
    box-shadow: 0 6px 10px 0 rgba(0,0,0,0.16);
    transition: box-shadow .25s;
    &:hover,
    &:focus {
      box-shadow: 0 15px 60px 0 rgba(0,0,0,0.2), 0 15px 30px 0 rgba(0,0,0,0.1);
      // .project-title-wrapper {
      //   opacity: 1;
      //   transition: opacity 0.4s ease-in;
      // }
      // .image-wrapper {
      //   opacity: 0.9;
      //   transition: opacity 0.4s ease-in;
      // }
    }
  }
  .image-wrapper {
    background-size: cover;
    background-position: top center;
    flex: 1;
    transition: opacity 0.4s ease-in 0.25s;
  }
  .project-title-wrapper {
    display: none;
    // position: absolute;
    // top: 0;
    // left: 0;
    // bottom: 0;
    // right: 0;
    // color: $white;
    // padding: 20px;
    // @include font-bold;
    // opacity: 0;
    // transition: opacity 0.4s ease-in 0.25s;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    // .project-title {
    //   background-color: $darkblue;
    //   padding: 10px 20px;
    // }
  }
}
</style>
