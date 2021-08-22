<template>
  <div class="fr-mt-6w well fr-py-4w fr-px-6v fr-col-offset-md-2 fr-col-md-8">
    <h1>{{t('login')}}</h1>
    <Alert v-if="state.loginError" :title="t('incorrect-credentials')" :error="true"/>
    <form @submit.prevent="login">
      <DsfrInput
          class="fr-mt-3v"
          :label="t('username')"
          id="username"
          type="text"
          v-model="state.username"
      />
      <DsfrInput
          class="fr-mt-3v"
          :label="t('password')"
          id="password"
          type="password"
          v-model="state.password"
      />
      <div class="fr-mt-3v">
        <button type="submit" class="fr-btn">
          {{t('validate')}}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>

import {useI18n} from "vue-i18n";
import {reactive} from "vue";
import DsfrInput from "../components/Input.vue";
import Alert from "../components/Alert.vue";
import sendLogin from "../services/login";
import {postLogin} from "../services/auth";

const { t } = useI18n()
const state = reactive({
  username: '',
  password: '',
  loginError: false,
})

function login() {
  state.loginError = false
  sendLogin(state.username, state.password).then(data => postLogin(data.token)).catch((err) => {
    if(err.response.status === 401) {
      state.loginError = true
    }
  })
}
</script>

<style scoped>
</style>