<template>
  <div class="sandbox">
    <h1>{{ title }}</h1>
    <p>A collection of small learning projects I've made over the years.</p>
    <p>Keep in mind most of these were built only for learning purposes, I have not done any crossbrowser testing and not many are adapted for mobile (chrome desktop ftw).</p>
    <ul class="sandboxes">
      <li v-for="sandbox in sandboxes">
        <a :href="sandbox.url" target="_blank">
          <div class="image-wrapper">
            <img :src="sandbox.img" :alt="sandbox.name">
          </div>
          <div class="card-title">{{sandbox.name}}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import sandboxes from '../assets/sandbox.json';

export default {
  name: 'Sandbox',
  data() {
    return {
      title: 'Sandbox Projects',
      sandboxes,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '~@/styles/variables.scss';
.sandboxes {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  li {
    position: relative;
    background: lighten(#f8f8f8, 3%);
  }
  .image-wrapper {
    height: 206px;
    display: flex;
    flex-direction: column;
    justify-content: center;

  }
  img {
    max-width: 100%;
  }
  a {
    display: block;
    text-decoration: none;
    color: #333;
    z-index: 1;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16);
    transition: box-shadow .25s;
    &:hover,
    &:focus {
      box-shadow: 0 15px 60px 0 rgba(0,0,0,0.2), 0 15px 30px 0 rgba(0,0,0,0.1);
    }
  }
  .card-title {
    // margin: 10px 0px;
    padding: 10px;
    text-align: center;
  }
}
</style>
