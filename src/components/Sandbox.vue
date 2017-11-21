<template>
  <div class="sandbox">
    <h1>{{ title }}</h1>
    <p>A collection of small learning projects I've made over the years.</p>
    <p>Keep in mind most of these were built only for learning purposes, I have not done any crossbrowser testing and not many are adapted for mobile. So chrome desktop ftw.</p>
    <p>I'm a big fan of tutorials, I've made lots of stuff thanks to great teachers like <a href="https://twitter.com/wesbos">@wesbos</a>, <a href="https://twitter.com/christopher4lis">@christopher4lis</a>, <a href="https://twitter.com/DevTipsShow">@DevTipsShow</a>,...</p>
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
