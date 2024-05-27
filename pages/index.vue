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

<template>
 

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
