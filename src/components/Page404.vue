<template>
    <div class="lost">
      <h1>{{ title }}</h1>
      <img src="https://media.giphy.com/media/jWexOOlYe241y/giphy.gif" alt="confused-travolta">
    </div>
</template>

<script>

export default {
  name: 'Page404',
  data() {
    return {
      title: 'Page not found..',
    };
  },
  mounted() {
    // eslint-disable-next-line
    console.log('%c+', 'font-size: 1px; padding: 80px 80px; line-height: 360px; background: url(https://media.giphy.com/media/jWexOOlYe241y/giphy.gif); background-size: contain; color: transparent;');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
img {
  position: fixed; 
  bottom: 0px;
  right: 0px;
  height: 250px;
}
</style>