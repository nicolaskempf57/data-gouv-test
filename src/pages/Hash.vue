<template>
  <h1>{{t('hash')}}</h1>
  <p>{{t('hash-form')}}</p>
  <form @submit.prevent="sendHash">
    <DsfrInput
        :label="t('hash-form-text-label')"
        type="text"
        id="text"
        v-model="state.text"
    />
    <div class="fr-mt-6v fr-form-group">
      <fieldset class="fr-fieldset">
        <legend class="fr-fieldset__legend fr-text--regular" id='radio-legend'>
          {{t('hash-form-algorithm-label')}}
        </legend>
        <div class="fr-fieldset__content">
          <div class="fr-radio-group" v-for="algorithm in algorithms">
            <input required="required" type="radio" :id="algorithm" name="radio" :value="algorithm" v-model="state.algorithm">
            <label class="fr-label" :for="algorithm">{{algorithm.toUpperCase()}}
            </label>
          </div>
        </div>
      </fieldset>
    </div>
    <ul class="fr-btns-group fr-btns-group--inline">
      <li>
        <button type="submit" class="fr-btn">
          {{t('validate')}}
        </button>
      </li>
      <li>
        <button type="button" @click="allHashes" class="fr-btn fr-btn--secondary">
          {{t('all-algorithms')}}
        </button>
      </li>
    </ul>
  </form>
  <div class="fr-mt-3v">
    <Alert
        v-if="state.title"
        :title="state.title"
        :description="state.description"
        :descriptions="state.descriptions"
        :success="state.success"
        :error="!state.loading && !state.success"
    />
  </div>
</template>

<script setup>
import getHash from "../services/getHash";
import {reactive} from "vue";
import Alert from "../components/Alert.vue";
import {useI18n} from "vue-i18n";
import algorithms from '../services/algorithms';
import DsfrInput from "../components/Input.vue";

const { t } = useI18n()
const state = reactive({
  hash: null,
  loading: 0,
  success: false,
  text: '',
  algorithm: '',
  title: '',
  description: '',
  descriptions: [],
})
function sendHash () {
  state.loading = 1
  state.descriptions = []
  getHash(state.text, state.algorithm).then(data => {
    state.success = true
    state.title = t('hash-success-title', {hash: data.hash})
    state.description = t('hash-success-description', {algorithm: state.algorithm})
  }).catch((err) => {
    state.success = false
    state.title = t('error-title')
    state.description = err.response.data.message
  }).finally(() => state.loading = 0)
}

function allHashes () {
  state.title = t('hash-success-all-algorithms-title', {text: state.text})
  state.description = ''
  state.descriptions = []
  for(let algorithm of algorithms) {
    state.loading++
    getHash(state.text, algorithm).then(data => {
      state.success = true
      state.descriptions.push(t('hash-success-all-algorithm-description', {algorithm: algorithm, hash: data.hash}))
    }).catch((err) => {
      state.success = false
      state.descriptions.push(t('hash-success-all-algorithm-description', {algorithm: algorithm, hash: err.response.data.message}))
    }).finally(() => state.loading--)
  }
}

</script>

<style scoped>

</style>