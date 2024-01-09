<template>
  <div class="min-h-screen flex flex-col">
    
    <header class="p-10 bg-gradient-to-tr from-teal-800 to-teal-600 shadow-md flex flex-col justify-center items-center">
      <nav class="absolute top-0 right-0 p-4">
        <NuxtLink v-if="$i18n.locale != 'en'" lang="en" class="text-white no-underline flex items-center gap-1" :to="switchLocalePath('en')" @click="setLocale('en')"><LocaleIcon/>English</NuxtLink>
        <NuxtLink v-if="$i18n.locale != 'no'" lang="no" class="text-white no-underline flex items-center gap-1" :to="switchLocalePath('no')" @click="setLocale('no')"><LocaleIcon/>Norsk</NuxtLink> 
      </nav>
      <h1 class="font-bold text-3xl text-white mb-2">DHKO</h1>
      <h2 class="text-xl text-white">{{$t('description')}}</h2>
            <ContentNavigation v-slot="{ navigation }" :query='localizedPages'>
        <nav class="mt-5 ">
          <ul class="flex space-x-4">
            <li v-for="link of navigation" :key="link._path">
              <NuxtLink :to="'/' + $i18n.locale + link._path" class="text-white hover:text-tertiary">{{ link.title }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </ContentNavigation>  
    </header>
    <main class="container mx-auto p-10">
    <NuxtPage/>
    </main>
    <footer class="p-5 bg-orange-100 shadow-md">
      <p class="text-slate-800">&copy; 2022 DHKO</p>
    </footer>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const i18n = useI18n()
const route = useRoute()

const localizedPages = queryContent().where({ _locale: i18n.locale.value })

const titleTemplate = (titleChunk) => {
  return route.params.slug ? `${titleChunk} - dhko.no` : 'dhko.no';

}
useHead({
    titleTemplate,
    htmlAttrs: {
      lang: i18n.locale.value
    }
})


</script>