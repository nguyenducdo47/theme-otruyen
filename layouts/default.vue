<script lang="ts" setup>
const showFloatIcon = ref<boolean>(false);
const isInReading = ref<boolean>(false);
const isLoading = ref<boolean>(true);
const loadingDiv = ref<HTMLDivElement>();

const route = useRoute();

onMounted(() => {
  isInReading.value = !!route.params.chapterId;
  document.addEventListener('scroll', () => {
    const heightOffset = document.documentElement.scrollTop;
    showFloatIcon.value = heightOffset > 2000;
  });
  isLoading.value = false;
  setTimeout(() => {
    if (loadingDiv.value) {
      loadingDiv.value.style.display = 'none';
    }
  }, 1000);
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

watch(route, (route) => {
  isInReading.value = !!route.params.chapterId;
});
</script>
<style>
    .zalo-container img {
        max-width: 100%;
        height: auto;
        padding: 5px
    }

    .zalo-container {
        position: fixed;
        width: 40px;
        height: 40px;
        bottom: 110px;
        z-index: 9999999
    }

    .zalo-container {
        right: 33px
    }

    .zalo-container a {
        display: block
    }

    .zalo-container span {
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;
        -ms-align-items: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #1182fc;
        position: relative
    }

    @keyframes zoomIn_zalo {
        from {
            opacity: 0;
            transform: scale3d(.3, .3, .3)
        }

        50% {
            opacity: 1
        }
    }

    .zoomIn_zalo {
        animation-name: zoomIn_zalo
    }

    .animated_zalo {
        animation-duration: 1s;
        animation-fill-mode: both
    }

    .animated_zalo.infinite {
        animation-iteration-count: infinite
    }

    .cmoz-alo-circle {
        width: 50px;
        height: 50px;
        top: -5px;
        right: -5px;
        position: absolute;
        background-color: transparent;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
        border: 2px solid rgba(17, 130, 252, .8);
        opacity: .1;
        border-color: #1182fc;
        opacity: .5
    }

    .cmoz-alo-circle-fill {
        width: 60px;
        height: 60px;
        top: -10px;
        position: absolute;
        -webkit-transition: all .2s ease-in-out;
        -moz-transition: all .2s ease-in-out;
        -ms-transition: all .2s ease-in-out;
        -o-transition: all .2s ease-in-out;
        transition: all .2s ease-in-out;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
        border: 2px solid transparent;
        -webkit-transition: all .5s;
        -moz-transition: all .5s;
        -o-transition: all .5s;
        transition: all .5s;
        background-color: rgba(17, 130, 252, .45);
        opacity: .75;
        right: -10px
    }

    @-webkit-keyframes pulse_zalo {
        from {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1)
        }

        50% {
            -webkit-transform: scale3d(1.05, 1.05, 1.05);
            transform: scale3d(1.05, 1.05, 1.05)
        }

        to {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1)
        }
    }

    @keyframes pulse_zalo {
        from {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1)
        }

        50% {
            -webkit-transform: scale3d(1.05, 1.05, 1.05);
            transform: scale3d(1.05, 1.05, 1.05)
        }

        to {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1)
        }
    }

    .pulse_zalo {
        -webkit-animation-name: pulse_zalo;
        animation-name: pulse_zalo
    }

    .hotline-phone-ring-wrap {
        position: fixed;
        bottom: 0;
        right: 0;
        z-index: 999999
    }

    .hotline-phone-ring {
        position: relative;
        visibility: visible;
        background-color: transparent;
        width: 110px;
        height: 110px;
        cursor: pointer;
        z-index: 11;
        -webkit-backface-visibility: hidden;
        -webkit-transform: translateZ(0);
        transition: visibility .5s;
        left: 0;
        bottom: 0;
        display: block
    }

    .hotline-phone-ring-circle {
        width: 87px;
        height: 87px;
        top: 10px;
        left: 10px;
        position: absolute;
        background-color: transparent;
        border-radius: 100%;
        border: 2px solid #e60808;
        -webkit-animation: phonering-alo-circle-anim 1.2s infinite ease-in-out;
        animation: phonering-alo-circle-anim 1.2s infinite ease-in-out;
        transition: all .5s;
        -webkit-transform-origin: 50% 50%;
        -ms-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
        opacity: .5
    }

    .hotline-phone-ring-circle-fill {
        width: 57px;
        height: 57px;
        top: 25px;
        left: 25px;
        position: absolute;
        background-color: rgba(230, 8, 8, .7);
        border-radius: 100%;
        border: 2px solid transparent;
        -webkit-animation: phonering-alo-circle-fill-anim 2.3s infinite ease-in-out;
        animation: phonering-alo-circle-fill-anim 2.3s infinite ease-in-out;
        transition: all .5s;
        -webkit-transform-origin: 50% 50%;
        -ms-transform-origin: 50% 50%;
        transform-origin: 50% 50%
    }

    .hotline-phone-ring-img-circle {
        background-color: #e60808;
        width: 33px;
        height: 33px;
        top: 37px;
        left: 37px;
        position: absolute;
        background-size: 20px;
        border-radius: 100%;
        border: 2px solid transparent;
        -webkit-animation: phonering-alo-circle-img-anim 1s infinite ease-in-out;
        animation: phonering-alo-circle-img-anim 1s infinite ease-in-out;
        -webkit-transform-origin: 50% 50%;
        -ms-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        align-items: center;
        justify-content: center
    }

    .hotline-phone-ring-img-circle .pps-btn-img {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex
    }

    .hotline-phone-ring-img-circle .pps-btn-img img {
        width: 20px;
        height: 20px
    }

    .hotline-bar {
        position: absolute;
        background: rgba(230, 8, 8, .75);
        height: 40px;
        width: 175px;
        line-height: 40px;
        border-radius: 3px;
        padding: 0 10px;
        background-size: 100%;
        cursor: pointer;
        transition: all .8s;
        -webkit-transition: all .8s;
        z-index: 9;
        box-shadow: 0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .1);
        border-radius: 50px !important;
        right: 33px;
        bottom: 37px
    }

    .hotline-bar>a {
        color: #fff;
        text-decoration: none;
        font-size: 15px;
        font-weight: 700;
        text-indent: 40px;
        letter-spacing: 1px;
        line-height: 40px;
        font-family: Arial
    }

    .hotline-bar>a:active,
    .hotline-bar>a:hover {
        color: #fff
    }

    @-webkit-keyframes phonering-alo-circle-anim {
        0% {
            -webkit-transform: rotate(0) scale(.5) skew(1deg);
            -webkit-opacity: .1
        }

        30% {
            -webkit-transform: rotate(0) scale(.7) skew(1deg);
            -webkit-opacity: .5
        }

        100% {
            -webkit-transform: rotate(0) scale(1) skew(1deg);
            -webkit-opacity: .1
        }
    }

    @-webkit-keyframes phonering-alo-circle-fill-anim {
        0% {
            -webkit-transform: rotate(0) scale(.7) skew(1deg);
            opacity: .6
        }

        50% {
            -webkit-transform: rotate(0) scale(1) skew(1deg);
            opacity: .6
        }

        100% {
            -webkit-transform: rotate(0) scale(.7) skew(1deg);
            opacity: .6
        }
    }

    @-webkit-keyframes phonering-alo-circle-img-anim {
        0% {
            -webkit-transform: rotate(0) scale(1) skew(1deg)
        }

        10% {
            -webkit-transform: rotate(-25deg) scale(1) skew(1deg)
        }

        20% {
            -webkit-transform: rotate(25deg) scale(1) skew(1deg)
        }

        30% {
            -webkit-transform: rotate(-25deg) scale(1) skew(1deg)
        }

        40% {
            -webkit-transform: rotate(25deg) scale(1) skew(1deg)
        }

        50% {
            -webkit-transform: rotate(0) scale(1) skew(1deg)
        }

        100% {
            -webkit-transform: rotate(0) scale(1) skew(1deg)
        }
    }

</style>

<template>
   <div class="zalo-container"> 
    <a id="zalo-btn" href="https://zalo.me/0879292571" target="_blank" rel="noopener noreferrer nofollow">
        <div class="animated_zalo infinite zoomIn_zalo cmoz-alo-circle"></div>
        <div class="animated_zalo infinite pulse_zalo cmoz-alo-circle-fill"></div> 
        <span><img src="/img/zalo-icon.png" alt="Contact Me on Zalo"></span>
    </a> 
  </div>
  <Navbar v-show="!isInReading" />
  <slot />
  <div
    :class="`fixed z-50 inset-0 bg-white flex items-center justify-center duration-300 ${
      isLoading
        ? 'opacity-1 pointer-events-auto'
        : 'opacity-0 pointer-events-none'
    }`"
    ref="loadingDiv"
  >
    <svg
      class="pl"
      viewBox="0 0 200 200"
      width="200"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="pl-grad1" x1="1" y1="0.5" x2="0" y2="0.5">
          <stop offset="0%" stop-color="#22c55e" />
          <stop offset="100%" stop-color="#3b82f6" />
        </linearGradient>
        <linearGradient id="pl-grad2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#22c55e" />
          <stop offset="100%" stop-color="#3b82f6" />
        </linearGradient>
      </defs>
      <circle
        class="pl__ring"
        cx="100"
        cy="100"
        r="82"
        fill="none"
        stroke="url(#pl-grad1)"
        stroke-width="36"
        stroke-dasharray="0 257 1 257"
        stroke-dashoffset="0.01"
        stroke-linecap="round"
        transform="rotate(-90,100,100)"
      />
      <line
        class="pl__ball"
        stroke="url(#pl-grad2)"
        x1="100"
        y1="18"
        x2="100.01"
        y2="182"
        stroke-width="36"
        stroke-dasharray="1 165"
        stroke-linecap="round"
      />
    </svg>
  </div>
  <button
    @click="scrollToTop"
    :class="`fixed p-2 bottom-6 right-6 flex items-center justify-center aspect-square rounded-full shadow bg-gray-50 -rotate-45 duration-200 sm:bottom-6 sm:right-6 ${
      showFloatIcon
        ? 'opacity-1 pointer-events-auto'
        : 'opacity-0 pointer-events-none'
    }`"
  >
    <Icon name="fluent:rocket-20-regular" size="30" />
  </button>
  <Footer v-show="!isInReading" />
</template>

<style scoped>
.pl {
  display: block;
  width: 6.25em;
  height: 6.25em;
}
.pl__ring,
.pl__ball {
  animation: ring 2s ease-out infinite;
}
.pl__ball {
  animation-name: ball;
}

@keyframes ring {
  from {
    stroke-dasharray: 0 257 0 0 1 0 0 258;
  }
  25% {
    stroke-dasharray: 0 0 0 0 257 0 258 0;
  }
  50%,
  to {
    stroke-dasharray: 0 0 0 0 0 515 0 0;
  }
}
@keyframes ball {
  from,
  50% {
    animation-timing-function: ease-in;
    stroke-dashoffset: 1;
  }
  64% {
    animation-timing-function: ease-in;
    stroke-dashoffset: -109;
  }
  78% {
    animation-timing-function: ease-in;
    stroke-dashoffset: -145;
  }
  92% {
    animation-timing-function: ease-in;
    stroke-dashoffset: -157;
  }
  57%,
  71%,
  85%,
  99%,
  to {
    animation-timing-function: ease-out;
    stroke-dashoffset: -163;
  }
}
</style>
