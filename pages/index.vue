<script lang="ts" setup>
import { meta } from '@/utils/data';

const [upcomingComics, ongoingComics, completedComics] = await Promise.all([
  useFetchData('/sap-ra-mat'),
  useFetchData('/dang-phat-hanh'),
  useFetchData('/hoan-thanh'),
]);

useSeoMeta(meta());
useServerSeoMeta(meta());
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

  <main class="max-w-6xl mx-auto py-5 px-3">
    
    <ComicsSlide
      title="Đang phát hành"
      :comics="ongoingComics.comics"
      icon="material-symbols-light:comic-bubble-rounded"
      link="/dang-phat-hanh"
    />
    <ComicsSlide
      title="Đã hoàn thành"
      :comics="completedComics.comics"
      icon="bxs:badge-check"
      link="/hoan-thanh"
    />
    <ComicsSlide
      title="Sắp ra mắt"
      :comics="upcomingComics.comics"
      icon="material-symbols-light:event-upcoming-outline-sharp"
      link="/sap-ra-mat"
    />
  </main>
</template>
