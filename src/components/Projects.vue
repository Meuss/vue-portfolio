<template>
  <div class="projects loading">
    <h1>{{ title }}</h1>
    <p>Most of these projects were developed while I was working or freelancing for <a class="macmac-link" href="https://macmac.ch" target="_blank">macmac</a>.</p>
    <ul class="wrapper">
      <li v-for="(project, index) in projects" :class="[project.shortname, project.size]" :key="index">
        <a :href="project.url" target="_blank">
          <div class="screen">
            <svg viewBox="0 0 71 71" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <polygon
                  transform="translate(55.897139, 15.470120) rotate(-45.000000) translate(-55.897139, -15.470120) "
                  points="60.3219715 -2.02987972 55.3345967 2.95749516 64.0253906 11.6482891 33.9723073 11.9758079 33.9723073 19.085294 64.0164081 19.2511676 55.3097135 27.9578622 60.3219715 32.9701203 77.8219715 15.4701203"
                ></polygon>
                <polygon
                  points="39.0145344 8 39.0145344 16.6389096 8.33830373 16.6389096 8.33830373 62.7352028 54.761409 62.7352028 54.761409 30.6549107 63 30.6549107 63 71.0267855 -1.67865721e-13 71.0267855 0 8"
                ></polygon>
              </g>
            </svg>
          </div>
          <div class="image-wrapper" :data-img="project.img" :class="{ 'is-favorite': project.favorite }"></div>
          <div v-if="project.favorite" class="favorite"></div>
          <svg
            v-if="project.favorite"
            version="1.1"
            class="star"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 53.867 53.867"
            style="enable-background: new 0 0 53.867 53.867;"
            xml:space="preserve"
          >
            <polygon
              points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 
            10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "
            />
          </svg>
          <div class="project-title-wrapper">
            <div class="tech">
              <div
                class="icon"
                v-for="(icon, techIndex) in project.tech"
                :key="techIndex"
                v-tooltip="{
                  content: icon,
                  placement: 'top',
                  offset: 10,
                  delay: {
                    show: 500,
                    hide: 300,
                  },
                }"
              >
                <img :class="icon" :src="`/static/tech-icons/${icon}.svg`" alt="icon" />
              </div>
            </div>
            <div class="project-title">{{ project.name }}</div>
            <div class="project-details">
              <div v-if="project.year" class="project-year">{{ project.year }}</div>
              <div v-if="project.viewurl" class="project-viewurl">
                <span class="spacer">&nbsp;–</span>
                <span v-if="project.viewurl.length < 20">{{ project.viewurl }}</span>
                <span v-else>{{ project.viewurl.substring(0, 20) + '...' }}</span>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
    <div class="sandbox-links">
      <h1>Sandbox Projects</h1>
      <p>
        A small collection of projects for learning purposes over the years:
        <router-link to="/sandbox">sandbox&nbsp;projects</router-link>
      </p>
    </div>
    <div class="others">
      <h1>Other noteworthy websites</h1>
      <ul>
        <li><a href="https://niche.cc/" target="blank">niche.cc</a></li>
        <li><a href="https://dietschweiler-stiftung.ch/" target="blank">dietschweiler-stiftung.ch</a></li>
        <li><a href="http://www.neuenschwanderag.com" target="blank">neuenschwanderag.com</a></li>
        <li><a href="https://schwery.com/" target="blank">schwery.com</a></li>
        <li><a href="https://thomas-hefti.ch/" target="blank">thomas-hefti.ch</a></li>
        <li><a href="https://daylaw.ch/" target="blank">daylaw.ch</a></li>
        <li><a href="https://matuzon.ch/" target="blank">matuzon.ch</a></li>
        <li><a href="http://yuma.ch/" target="blank">yuma.ch</a></li>
        <li><a href="https://bern-bubenberg.ch/" target="blank">bern-bubenberg.ch</a></li>
        <li><a href="https://cci-media.ch/" target="blank">cci-media.ch</a></li>
        <li><a href="http://aspr-svg.ch" target="blank">aspr-svg.ch</a></li>
        <li><a href="http://polio.ch" target="blank">polio.ch</a></li>
        <li><a href="http://prof-in-courtepin.ch/" target="blank">prof-in-courtepin.ch</a></li>
        <li><a href="https://prosaj.ch/" target="blank">prosaj.ch</a></li>
        <li><a href="https://sdgdm.ch/" target="blank">sdgdm.ch</a></li>
        <li><a href="https://tfo.ch/" target="blank">tfo.ch</a></li>
      </ul>
    </div>
    <footer>
      <p>© {{ new Date().getFullYear() }} Thomas Miller</p>
    </footer>
  </div>
</template>

<script>
/* eslint-disable */
import projects from '../assets/projects.json';
import { store } from '../store/store';
/* eslint-enable */

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
    calculateImgSizes() {
      // load the appropriate images from cloudinary
      /* eslint-disable-next-line */
      Array.from(document.querySelectorAll('ul.wrapper li a .image-wrapper[data-img]')).forEach(image => {
        const desiredSize = Math.ceil(image.parentElement.clientWidth);
        // only get from a subset of images (because of cloudinary transforms limit)
        const sizes = [200, 300, 500, 800, 1080, 1600];
        /* eslint-disable-next-line */
        const result = sizes.filter(number => number > desiredSize);
        const imageSize = `w_${this.closestNumber(result, desiredSize)}`;
        let extraParams = '';
        if (store.state.pixelRatio === 1) {
          extraParams = ',f_auto';
        } else {
          extraParams = ',f_auto,dpr_2';
        }
        const url = `${this.baseUrl}${imageSize}${extraParams}/vue-portfolio/projects/${image.dataset.img}`;
        /* eslint-disable-next-line */
        image.style.backgroundImage = `url(${url})`;
      });
    },
    /* eslint-disable-next-line */
    closestNumber: function(array, num) {
      let i = 0;
      let minDiff = 1000;
      let ans;
      /* eslint-disable-next-line */
      for (i in array) {
        const m = Math.abs(num - array[i]);
        if (m < minDiff) {
          minDiff = m;
          ans = array[i];
        }
      }
      return ans;
    },
  },
  mounted() {
    this.callback();
    this.calculateImgSizes();
  },
  computed: {
    baseUrl() {
      return store.state.baseUrl;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
.macmac-link {
  border-bottom: 1px dotted $darkblue;
  color: $darkblue;
  @include font-bold;
}
.wrapper {
  display: grid;
  margin-bottom: 80px;
  grid-auto-rows: 200px;
  grid-gap: 30px;
  grid-template-columns: repeat(6, 1fr);
  li {
    position: relative;
    background: lighten(#f8f8f8, 3%);
    grid-column: span 2;
    grid-row: span 2;
    &.wide {
      grid-row: span 1;
    }
    // bg img positions
    &.adler {
      .image-wrapper {
        background-position: center center;
      }
    }
    &.sms {
      .image-wrapper {
        background-position: center center;
      }
    }
    &.nydegger {
      .image-wrapper {
        background-position: left top;
      }
    }
  }
  @include md {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 250px;
    grid-gap: 40px;
  }
  @include md1 {
    grid-auto-rows: 200px;
    grid-gap: 30px;
  }
  @include sm {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 120px;
    grid-gap: 50px;
    padding-right: 10%;
    padding-left: 10%;
    li {
      grid-column: span 1;
      grid-row: span 4;
      &.wide {
        grid-row: span 2;
      }
    }
  }
  @media (max-width: 600px) {
    padding-right: 0;
    padding-left: 0;
  }
  @include xs {
    grid-auto-rows: 60px;
  }
  // HOVER FIXES
  @include sm {
    li .favorite,
    li svg {
      z-index: 2;
    }
    li a .project-title-wrapper {
      position: static;
      opacity: 1;
      transform: translateY(0);
      .project-title,
      .project-year {
        display: none;
      }
      .project-viewurl {
        @include font-bold;
      }
    }
  }
  a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    text-decoration: none;
    color: $black;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.16);
    transition: box-shadow 0.25s;
    overflow: hidden;
    position: relative;
    &:hover {
      box-shadow: 0 15px 60px 0 rgba(0, 0, 0, 0.2), 0 15px 30px 0 rgba(0, 0, 0, 0.1);
      @media (min-width: 769px) {
        .image-wrapper {
          transform: scale(1.05);
        }
        .project-title-wrapper {
          opacity: 1;
          transform: translateY(0);
        }
        .screen {
          opacity: 1;
        }
        .project-title-wrapper .tech .icon {
          opacity: 1;
          transform: translateX(0);
          transition: all 0.3s ease;
          &:nth-child(1) {
            transition-delay: 0.4s;
          }
          &:nth-child(2) {
            transition-delay: 0.5s;
          }
          &:nth-child(3) {
            transition-delay: 0.6s;
          }
          &:nth-child(4) {
            transition-delay: 0.7s;
          }
          &:nth-child(5) {
            transition-delay: 0.8s;
          }
          &:nth-child(6) {
            transition-delay: 0.9s;
          }
        }
      }
    }
  }
  .screen {
    background-color: rgba(2, 43, 58, 0.7);
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: opacity 0.6s ease;
    z-index: 1;
    svg {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 20px;
      height: 20px;
      polygon {
        fill: $lightgray;
      }
    }
    @include xs {
      background-color: transparent;
      opacity: 1;
      svg {
        padding: 8px;
        top: 0px;
        right: 0px;
        width: 35px;
        height: 35px;
        background-color: $darkblue;
        border-bottom-left-radius: 3px;
      }
    }
  }
  .image-wrapper {
    z-index: 0;
    background-size: cover;
    background-position: top center;
    flex: 1;
    transition: all 0.9s ease;
  }
  .favorite {
    pointer-events: none;
    position: absolute;
    bottom: -40px;
    right: -25px;
    box-shadow: -1px -1px 20px 0 rgba(0, 0, 0, 0.3);
    background: linear-gradient(90deg, #020024 0%, #4545bf 57%, #2dceef 100%);
    width: 170px;
    height: 80px;
    transform: rotate(-25deg);
    transform-origin: 50% 50%;
    border-top: 1px solid $lightgray;
  }
  .star {
    pointer-events: none;
    width: 20px;
    height: 20px;
    position: absolute;
    bottom: 17px;
    right: 17px;
    animation: 0.5s jump ease infinite alternate;
    polygon {
      fill: $white;
    }
  }
  .project-title-wrapper {
    z-index: 1;
    opacity: 0;
    transform: translateY(100%);
    transition: transform 0.4s ease 0.2s, opacity 0.3s ease 0.2s;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 5px 10px;
    background-color: $lightgray;
    color: $darkblue;
    .tech {
      display: flex;
      position: absolute;
      top: -40px;
      right: 0px;
      .icon {
        width: 32px;
        height: 32px;
        background-color: white;
        margin-right: 10px;
        padding: 4px;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transform: translateX(15px);
        transition: all 0.3s ease 0.5s;
        img {
          height: 20px;
          max-width: 20px;
        }
        @include sm {
          display: none;
        }
      }
    }
    .project-title {
      @include font-bold;
    }
    .project-details {
      display: flex;
      @include font-light;
      font-size: 16px;
      line-height: 20px;
      margin-top: 5px;
      .spacer {
        @include sm {
          display: none;
        }
      }
    }
  }
}
.sandbox-links {
  margin-bottom: 80px;
  a {
    border-bottom: 1px dotted $darkblue;
    color: $darkblue;
    @include font-bold;
  }
}
.others {
  li {
    margin-bottom: 5px;
  }
  a {
    border-bottom: 1px dotted $darkblue;
    color: $darkblue;
  }
}
@keyframes jump {
  0% {
    transform: scale(1);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  }
  100% {
    transform: scale(1.1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
}
</style>
