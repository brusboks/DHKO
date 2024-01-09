<template>
    <ContentRenderer :key="data._id" :value="data.body">
      <ContentRendererMarkdown :value="data" />
    </ContentRenderer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const i18n = useI18n()
const route = useRoute()

const { data } = await useAsyncData(route.fullPath, () => queryContent('/').where({ _locale: i18n.locale.value, _path: route.fullPath.slice(3, route.fullPath.length) || "/"}).findOne())
useContentHead(data)
</script>