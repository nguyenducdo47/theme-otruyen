<template>
  <footer class="bg-white">
    <div class="max-w-7xl px-4 py-12 mx-auto space-y-8 overflow-hidden">
      <div class="flex justify-center mt-8 space-x-6">
        <NuxtLink
          target="_blank"
          rel="noopener noreferrer"
          to="https://www.facebook.com/ducdo.210501/"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">Facebook</span>
          <Icon name="mdi:facebook" size="28" />
        </NuxtLink>
      </div>
      <p class="mt-8 text-base leading-6 text-center text-gray-400">
        © {{ new Date().getFullYear() }} NComics™. All rights reserved.
      </p>
    </div>
  </footer>
</template>
