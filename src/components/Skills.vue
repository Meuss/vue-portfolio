<template>
  <div class="skills">
    <h1>{{title}}</h1>
    <h2>What I can do</h2>
    <ul class="skills-list">
      <li v-for="tool in tools" :key="tool.name">
        <!-- {{tool.name}} -->
        <img :src="tool.img" alt>
      </li>
    </ul>
    <h2>What I want to do more of</h2>
    <ul>
      <li>JAVASCRIIIIPT</li>
      <li>Wordpress REST API</li>
      <li>Express (node.js)</li>
      <li>Performance</li>
      <li>React native?</li>
      <li>JS Frameworks - Vue, React</li>
      <li>Animation: specifiSVG, greensock timelines</li>
      <li>Working in bigger teams</li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Skills",
  data() {
    return {
      title: "Skills",
      tools: [
        {
          languages: {
            html: {
              img: "/static/skills-icons/html-5.svg"
            },
            css: {
              img: "/static/skills-icons/css-3.svg"
            },
            "javascript (ES6)": {
              img: "/static/skills-icons/javascript.svg"
            }
          }
        },

        {
          name: "jquery",
          img: "/static/skills-icons/jquery.svg"
        },
        {
          name: "php",
          img: "/static/skills-icons/php.svg"
        },
        {
          name: "git",
          img: "/static/skills-icons/git.svg"
        },
        {
          name: "github",
          img: "/static/skills-icons/github-icon.svg"
        },
        {
          name: "scss",
          img: "/static/skills-icons/sass.svg"
        },
        {
          name: "vue",
          img: "/static/skills-icons/vue.svg"
        },
        {
          name: "webpack",
          img: "/static/skills-icons/webpack.svg"
        },
        {
          name: "gulp",
          img: "/static/skills-icons/gulp.svg"
        },
        {
          name: "kirby cms",
          img: "/static/skills-icons/kirby.svg"
        },
        {
          name: "wordpress",
          img: "/static/skills-icons/wordpress-icon.svg"
        },
        {
          name: "babel",
          img: "/static/skills-icons/babel.svg"
        },
        {
          name: "crossbrowser--- browserstack?",
          img: "/static/skills-icons/browserstack.svg"
        },
        // {
        //   name: 'responsive',
        //   img: '/static/skills-icons/responsive.svg',
        // },
        {
          name: "sketch",
          img: "/static/skills-icons/sketch.svg"
        },
        {
          name: "photoshop",
          img: "/static/skills-icons/photoshop.svg"
        },
        {
          name: "shopify",
          img: "/static/skills-icons/shopify.svg"
        },
        {
          name: "woocommerce",
          img: "/static/skills-icons/woocommerce.svg"
        },
        {
          name: "seo--analytics",
          img: "/static/skills-icons/google-analytics.svg"
        },
        {
          name: "bootstrap",
          img: "/static/skills-icons/bootstrap.svg"
        },
        // {
        //   name: 'foundation',
        //   img: '/static/skills-icons/foundation.svg',
        // },
        {
          name: "susy",
          img: "/static/skills-icons/susy.svg"
        },
        // {
        //   name: 'snap-svg',
        //   img: '/static/skills-icons/snap-svg.svg',
        // },
        {
          name: "npm",
          img: "/static/skills-icons/npm.svg"
        },
        {
          name: "mysql",
          img: "/static/skills-icons/mysql.svg"
        },
        // {
        //   name: 'jekyll',
        //   img: '/static/skills-icons/jekyll.svg',
        // },
        // {
        //   name: 'jade',
        //   img: '/static/skills-icons/jade.svg',
        // },
        {
          name: "mailchimp",
          img: "/static/skills-icons/mailchimp-freddie.svg"
        },
        {
          name: "browsersync",
          img: "/static/skills-icons/browsersync.svg"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.skills-list {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 0px;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 50px;
  }
}
</style>
