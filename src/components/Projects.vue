<template>
  <div class="projects">
    <h1>{{ title }}</h1>
    <p>Most of these were built while working at macmac.</p>
    <ul class="wrapper">
      <li v-for="project in projects">
        <a :href="project.url" target="_blank">
          <div class="image-wrapper">
            <img :src="project.img" :alt="project.name">
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  li {
    position: relative;
    background: lighten(#f8f8f8, 3%);
  }
  img {
    max-width: 100%;
  }
  a {
    transition: transform .5s;
    text-decoration: none;
    color: #333;
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: opacity 2s cubic-bezier(.165, .84, .44, 1);
      box-shadow: 0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .15);
      content: '';
      opacity: 0;
      z-index: -1;
    }
    &:hover,
    &:focus {
      transform: scale3d(1.006, 1.006, 1);
      &::after {
        opacity: 1;
      }
    }
  }
  .card-title {
    margin: 10px 0px;
    text-align: center;
  }
}
</style>
