<template>
  <div class="sandbox">
    <router-link class="back" to="/projects">
      <svg
        version="1.1"
        id="arrow-left"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 31.494 31.494"
        style="enable-background:new 0 0 31.494 31.494;"
        xml:space="preserve"
      >
        <path
          d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554
        c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587
        c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z"
        />
      </svg>
      back to Portfolio
    </router-link>
    <h1>{{ title }}</h1>
    <p>Small projects I've made over the years, <strong>for learning/fun purposes only.</strong></p>
    <p>Some are old or ugly, probably break in some browsers and few are adapted for mobile. I'm sorry.</p>
    <ul class="sandboxes">
      <li v-for="(sandbox, index) in sandboxes" :key="index">
        <a :href="sandbox.url" target="_blank">
          <div class="image" :style="{ backgroundImage: 'url(' + sandbox.img + ')' }"></div>
          <div class="card-title">{{ sandbox.name }}</div>
        </a>
      </li>
    </ul>
    <footer>
      <p>© {{ new Date().getFullYear() }} Thomas Miller</p>
    </footer>
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

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
.sandbox {
  .back {
    color: $darkblue;
    position: absolute;
    margin-top: -30px;
    display: flex;
    #arrow-left {
      width: 12px;
      height: 22px;
      margin-right: 8px;
      path {
        fill: $darkblue;
      }
    }
  }
}
.sandboxes {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 248px;
  grid-gap: 20px;
  margin-bottom: 80px;
  @include md {
    grid-template-columns: repeat(4, 1fr);
  }
  @include md1 {
    grid-template-columns: repeat(3, 1fr);
  }
  @include sm {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 45vw;
  }
  @include xs {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 80vw;
  }
  li {
    position: relative;
    background: lighten(#f8f8f8, 3%);
  }
  a {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    text-decoration: none;
    color: #333;
    z-index: 1;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16);
    transition: box-shadow 0.25s;
    &:hover,
    &:focus {
      box-shadow: 0 15px 60px 0 rgba(0, 0, 0, 0.2), 0 15px 30px 0 rgba(0, 0, 0, 0.1);
    }
  }
  .image {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 42px;
    background-size: cover;
    background-position: center center;
  }
  .card-title {
    height: 42px;
    padding: 10px;
    text-align: center;
  }
}
</style>
