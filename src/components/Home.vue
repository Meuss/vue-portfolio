<template>
  <div class="homepage">
    <div class="image"></div>
    <div class="homepage-content">
      <div class="tm">
        <h1>Thomas</h1>
        <h1>Miller</h1>
      </div>
      <socials></socials>
      <p>I’m frontend web developer from Switzerland, currently working at a small agency called macmac.</p>
      <p>One day I decided I wanted to know how the internet worked. I haven’t stopped learning since.</p>
    </div>
  </div>
</template>

<script>
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
};

</script>

<style lang="scss" scoped>
@import '~@/styles/global.scss';
.homepage {
  height: 100%;
  display: flex;
  position: relative;
}
.image {
  height: 100%;
  width: calc(100% / 3);
  background-image: url("/static/me_popart.jpg");
  background-size: cover;
  background-position: center center;
  filter: grayscale(0);
}
.homepage-content {
  padding: 35vh 60px 60px 60px;
}
.tm {
  transform: translateX(-6vw);
  color: black;
  @include font-bold;
  h1 {
    font-size: 100px;
    line-height: 85px;
    margin-bottom: 0px;
  }
  margin-bottom: 50px;
}


</style>
