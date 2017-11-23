<template>
  <div class="projects">
    <h1>{{ title }}</h1>
    <p>Most of these were built while working at macmac.</p>
    <ul class="wrapper">
      <li v-for="project in projects"  :class="project.shortname">
        <a :href="project.url" target="_blank">
          <div class="image-wrapper" :style="{ backgroundImage: 'url(' + project.img + ')' }">
          </div>
          <div class="card-title">{{project.name}}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import projects from '../assets/projects.json';

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
  grid-template-rows: repeat(6, 228px);
  grid-gap: 30px;
  li {
    position: relative;
    background: lighten(#f8f8f8, 3%);
    &.probation {
      grid-column: 1/3;
      grid-row: 1/3;
    }
    &.easytube {
      grid-column: 3/4;
      grid-row: 2/4;
    }
    &.aeberhard {
      grid-column: 4/6;
      grid-row: 3/5;
    }
    &.sms {
      grid-column: 1/3;
      grid-row: 4/5;
    }
    &.hertigfleurs {
      grid-column: 1/3;
      grid-row: 5/7;
    }
    &.vulnerabilites {
      grid-column: 4/6;
      grid-row: 6/7;
    }
  }
  img {
    max-width: 100%;
  }
  a {
    // display: block;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    transition: transform .5s;
    text-decoration: none;
    color: $black;
    -webkit-backface-visibility: hidden; // trying to remove the blur
    transform: translateZ(0) scale(1.0, 1.0); // trying to remove the blur
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-shadow: 0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .15);
      content: '';
      z-index: -1;
    }
    &:hover,
    &:focus {
      // transform: scale3d(1.006, 1.006, 1);
      transform: scale(1.05);
    }
  }
  .image-wrapper {
    background-size: cover;
    background-position: center center;
    flex: 1;
  }
  .card-title {
    padding: 10px;
    text-align: center;
    background-color: #333;
    color: white;
  }
}
</style>
