<template>
  <div class="resources">
    <h1>{{ title }}</h1>
    <p>A collection of resources I love and want to share for any other webdevs out there.</p>
    <youtube :video-id="videoId" ref="youtube"></youtube>
    <h2>Podcasts</h2>
    <ul class="podcasts">
      <li v-for="podcast in podcasts">
        <img :src="podcast.img" :alt="podcast.name" @click="handleClick(podcast)" class="podcast-img">
      </li>
    </ul>
    <transition name="enterRight">
      <div v-model="selectedPodcast" v-if="selectedPodcast" class="details-wrapper">
        <img :src="selectedPodcast.img" :alt="selectedPodcast.name">
        <div class="details">
          <svg @click="hidePodcast" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.9 21.9" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 21.9 21.9">
            <path d="M14.1,11.3c-0.2-0.2-0.2-0.5,0-0.7l7.5-7.5c0.2-0.2,0.3-0.5,0.3-0.7s-0.1-0.5-0.3-0.7l-1.4-1.4C20,0.1,19.7,0,19.5,0  c-0.3,0-0.5,0.1-0.7,0.3l-7.5,7.5c-0.2,0.2-0.5,0.2-0.7,0L3.1,0.3C2.9,0.1,2.6,0,2.4,0S1.9,0.1,1.7,0.3L0.3,1.7C0.1,1.9,0,2.2,0,2.4  s0.1,0.5,0.3,0.7l7.5,7.5c0.2,0.2,0.2,0.5,0,0.7l-7.5,7.5C0.1,19,0,19.3,0,19.5s0.1,0.5,0.3,0.7l1.4,1.4c0.2,0.2,0.5,0.3,0.7,0.3  s0.5-0.1,0.7-0.3l7.5-7.5c0.2-0.2,0.5-0.2,0.7,0l7.5,7.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4c0.2-0.2,0.3-0.5,0.3-0.7  s-0.1-0.5-0.3-0.7L14.1,11.3z"/>
          </svg>
          <h2>{{selectedPodcast.name}}</h2>
          <h3>{{selectedPodcast.desc}}</h3>
          <a :href="selectedPodcast.url" target="_blank">Podcast link</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import podcasts from '../assets/podcasts.json';

export default {
  name: 'Resources',
  data() {
    return {
      title: 'Resources',
      podcasts,
      selectedPodcast: null,
      videoId: 'E1oZhEIrer4',
    };
  },
  methods: {
    handleClick(podcast) {
      if (this.selectedPodcast === null) {
        this.selectedPodcast = podcast;
      } else {
        this.selectedPodcast = null;
        setTimeout(() => {
          this.selectedPodcast = podcast;
        }, 200);
      }
    },
    hidePodcast() {
      this.selectedPodcast = null;
    },
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
svg {
  cursor: pointer;
  position: absolute;
  width: 15px;
  right: 20px;
  path {
    fill: #2c3e50;
  }
}
.podcasts {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 10px;
  li {
    padding: 0;
  }
}
.podcast-img {
  max-width: 100%;
  // border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
}
img {
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
.details-wrapper {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  margin-top: 30px;
  grid-gap: 10px;
  img {
    border-right: 1px solid rgba(44, 62, 80, 0.14);
    grid-column: 1/3;
    max-width: 100%;
  }
}
.details {
  grid-column: 3/9;
  position: relative;
  background-color: #fff;
  padding: 20px;
}
.enterRight-enter-active,
.enterRight-leave-active {
  transition: all 0.4s ease;
}

.enterRight-enter-active {
  transition-delay: 0.25s;
}

.enterRight-enter,
.enterRight-leave-active {
  transform: translateX(-100px);
  opacity: 0;
}
</style>