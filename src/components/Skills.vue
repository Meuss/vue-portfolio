<template>
  <div class="skills">
    <h1>{{title}}</h1>
    <ul>
      <li v-for="tool in tools">
        {{tool}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'skills',
  data() {
    return {
      title: 'skills',
      tools: [
        'git',
        'html',
        'css',
        'scss',
        'javascript',
        'php',
        'jquery',
        'vuejs',
        'es6',
        'webpack',
        'gulp',
        'kirby cms',
        'wordpress',
        'babel',
        'crossbrowser',
        'responsive',
        'sketch',
        'photoshop',
        'shopify',
        'woocommerce',
      ],
    };
  },
  methods: {
  },
};

</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';

</style>
