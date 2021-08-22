<template>
  <div class="fr-mt-6w well fr-py-4w fr-px-6v fr-col-offset-md-2 fr-col-md-8">
    <h1>{{t('register')}}</h1>
    <form @submit.prevent="register">
    <DsfrInput
        class="fr-mt-3v"
        :label="t('username')"
        id="username"
        type="text"
        :errorDescription="t('username-already-exists')"
        :errorState="state.usernameError"
        v-model="state.username"
    />
    <DsfrInput
        class="fr-mt-3v"
        :label="t('password')"
        id="password"
        type="password"
        :errorDescription="t('password-mismatch')"
        :errorState="passwordError"
        :successDescription="t('password-match')"
        :successState="passwordSuccess"
        v-model="state.password"
    />
    <DsfrInput
        class="fr-mt-3v"
        :label="t('confirm-password')"
        id="confirm-password"
        type="password"
        :errorDescription="t('password-mismatch')"
        :errorState="passwordError"
        :successDescription="t('password-match')"
        :successState="passwordSuccess"
        v-model="state.confirmPassword"
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
import {computed, reactive} from "vue";
import DsfrInput from "../components/Input.vue";
import postRegister from "../services/register";
import {postLogin} from "../services/auth";
const { t } = useI18n()
const state = reactive({
  username: '',
  password: '',
  confirmPassword: '',
  usernameError: false,
})

const passwordError = computed(() => state.password.length > 0 && state.confirmPassword.length > 0 && state.password !== state.confirmPassword)
const passwordSuccess = computed(() => state.password.length > 0 && state.confirmPassword.length > 0 && state.password === state.confirmPassword)

function register() {
  state.usernameError = false
  postRegister(state.username, state.password).then(data =>
      postLogin(data.token)
  ).catch((err) => {
    if(err.response.status === 409) {
      state.usernameError = true
    }
  })
}
</script>

<style scoped>

</style>