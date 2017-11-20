<template>
  <div class="outer">
    <div class="image"></div>
    <div class="tm">
      <h1>Thomas</h1>
      <h1>Miller</h1>
    </div>
    <p>I’m frontend web developer from Switzerland, currently working at mamac ltd. One day I decided I wanted to know how the internet worked. I haven’t stopped learning and creating websites since that day.</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      // title: 'Home Page',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '~@/styles/global.scss';
.outer {
  height: 100%;
  display: flex;
  position: relative;
}
.image {
  height: 100%;
  width: 25%;
  background-image: url("/static/me_popart.jpg");
  background-size: cover;
  background-position: center center;
  filter: grayscale(0.5);
}
.tm {
  position: absolute;
  top: 50%;
  left: 23%;
  transform: translateY(-50%);
  color: black;
  @include font-bold;
  h1 {
    font-size: 90px;
    line-height: 65px;
    margin: 0px;
  }
}
</style>
