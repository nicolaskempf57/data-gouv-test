<template>
  <h1>{{t('dummy-hash')}}</h1>
  <Alert :title="state.title" :description="state.description" :success="!!state.hash" :error="!state.loading && !state.hash"/>
</template>

<script setup>
import {reactive} from 'vue'
import getDummyHash from "../services/getDummyHash"
import Alert from "../components/Alert.vue";
import {useI18n} from "vue-i18n";

const { t } = useI18n()
const state = reactive({
  hash: null,
  title: t('loading'),
  description: t('loading-description'),
  loading: true,
})

getDummyHash().then(data => {
  state.hash = data
  state.title = t('dummy-hash-success-title', {hash: state.hash.random_hash})
  state.description = t('dummy-hash-success-description')
}).catch(err => {
  state.title = t('error-title')
  state.description = err.response.data.message
})
.finally(() => state.loading = false)
</script>

<style scoped>
</style>
