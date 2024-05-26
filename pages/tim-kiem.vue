<script lang="ts" setup>
import { Comic } from 'types';

const comics = ref<Comic[]>([]);
const query = ref<string>('');
const isFetching = ref<boolean>(true);
const totalPages = ref<number>(1);
const currentPage = ref<number>(1);

const route = useRoute();
const router = useRouter();

const getSearchComics = async () => {
  try {
    isFetching.value = true;
    const data = await useFetchData(
      `/tim-kiem?q=${query.value}&page=${currentPage.value}`
    );
    comics.value = data?.comics;
    totalPages.value = data?.totalPages;
  } catch (err) {
    console.log(err);
  } finally {
    isFetching.value = false;
  }
};

query.value = route.query.q as string;
currentPage.value = route.query.page ? Number(route.query.page) : 1;
await getSearchComics();

const handleChangePage = (page: number) => {
  currentPage.value = page;
  router.replace({ query: { ...route.query, page } });
};

watch(route, async (route) => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  query.value = route.query.q as string;
  currentPage.value = route.query.page ? Number(route.query.page) : 1;
  await getSearchComics();
});
</script>

<template>
  <Head>
    <Title>{{ `${query ? `${query} | NComics` : 'NComics'}` }}</Title>
    <Meta name="description" content="Free comic and manga reader online" />
  </Head>
  <main class="max-w-6xl mx-auto min-h-screen py-16 px-3">
    <div
      class="flex items-center flex-wrap gap-1 text-gray-500 font-bold text-lg"
    >
      <NuxtLink to="/">Home</NuxtLink>
      <Icon name="icon-park:right" size="16" />
      <span>Search result</span>
      <Icon name="icon-park:right" size="16" />
      <span class="text-black">{{ query }}</span>
    </div>
    <h4
      class="text-2xl text-center mt-8 font-bold text-gray-600"
      v-show="!isFetching && !comics.length"
    >
      No result
    </h4>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 py-5">
      <template v-if="isFetching">
        <li
          v-for="(_, idx) in new Array(8)"
          :key="idx"
          class="bg-gray-200 animate-pulse rounded-lg w-full h-44"
        ></li>
      </template>
      <template v-else>
        <NuxtLink
          :to="`/truyen-tranh/${comic.slug}`"
          v-for="comic in comics"
          :key="comic.slug"
          class="flex flex-col sm:flex-row gap-4 rounded-lg border border-gray-100 bg-gray-50 p-4"
        >
          <img
            :src="`https://img.otruyenapi.com/uploads/comics/${comic.thumb_url}`"
            :alt="comic.name"
            class="rounded aspect-[2/3] w-44 mx-auto sm:w-auto sm:h-36 border border-emerald-500 object-cover"
          />
          <div class="text-gray-500 font-bold w-full">
            <h3 class="text-lg text-black leading-5">
              {{ comic.name }}
              <!-- <span class="text-sm text-gray-500">
                ({{ comic.lastest_chapters[0]?.name || 'Updating' }})
              </span> -->
            </h3>
            <p class="flex items-center gap-1 text-emerald-500">
              <template v-if="Array.isArray(comic.author)">
                {{ comic.author.join(' | ') }}
              </template>
              <template v-else-if="comic.author === 'Updating'">
                <Icon name="mdi:dots-circle" size="16" />
                Updating
              </template>
              <template v-else>
                {{ comic.author }}
              </template>
            </p>
            <p class="text-sm line-clamp-2 font-semibold">
              {{ comic.short_description }}
            </p>
            <ul class="text-sm flex items-center flex-wrap gap-2 mt-1">
              <li
                v-for="genre in comic.genres"
                :key="genre.id"
                class="bg-cyan-100 text-cyan-800 text-xs px-2.5 py-0.5 rounded-full"
              >
                {{ genre.name }}
              </li>
            </ul>
          </div>
        </NuxtLink>
      </template>
    </ul>
    <vue-awesome-paginate
      v-show="!isFetching && comics.length"
      :total-items="totalPages"
      :items-per-page="1"
      :max-pages-shown="3"
      v-model="currentPage"
      :show-ending-buttons="true"
      :hide-prev-next-when-ends="true"
      :disable-breakpoint-buttons="true"
      :on-click="handleChangePage"
    >
      <template #first-page-button>
        <Icon name="icon-park:go-start" size="28" />
      </template>
      <template #prev-button>
        <Icon name="icon-park:left" size="28" />
      </template>
      <template #next-button>
        <Icon name="icon-park:right" size="28" />
      </template>
      <template #last-page-button>
        <Icon name="icon-park:go-end" size="28" />
      </template>
    </vue-awesome-paginate>
  </main>
</template>
