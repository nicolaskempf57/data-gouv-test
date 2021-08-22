<template>
  <h1>{{t('profile')}}</h1>
  <Alert v-if="!state.user" :title="state.title" :description="state.description" :error="!state.loading && !state.user"/>
  <div v-if="state.user" class="fr-callout fr-fi-information-line">
    <p class="fr-callout__title">{{ state.user.username }}</p>
    <p class="fr-callout__text">
      {{t('user-details', {id: state.user.id, date: state.user.registered_on})}}
    </p>
    <button class="fr-btn" @click="logout">
      {{t('logout')}}
    </button>
  </div>
</template>

<script setup>
import {reactive} from 'vue'
import Alert from "../components/Alert.vue";
import {useI18n} from "vue-i18n";
import getProfile from "../services/getProfile";
import {logout} from '../services/auth';

const { t } = useI18n()
const state = reactive({
  user: null,
  title: t('loading'),
  description: t('loading-description'),
  loading: true,
})

getProfile().then(data => {
  state.user = data
}).catch(err => {
  state.title = t('error-title')
  state.description = err.response.data.message
})
    .finally(() => state.loading = false)
</script>

<style scoped>

</style>