<template>
  <h1>{{t('home')}}</h1>
  <p>{{t('welcome')}}</p>
  <div class="fr-grid-row fr-grid-row--gutters">
    <div class="fr-col-6 fr-col-md-4 fr-col-lg-3">
      <div class="fr-tile fr-enlarge-link fr-tile--horizontal">
        <div class="fr-tile__body">
          <h4 class="fr-tile__title">
            <router-link :to="{name: 'dummy-hash'}" class="fr-tile__link" href>{{t('dummy-hash')}}</router-link>
          </h4>
          <p class="fr-tile__desc">{{t('dummy-hash-description')}}</p>
        </div>
      </div>
    </div>
    <div class="fr-col-6 fr-col-md-4 fr-col-lg-3">
      <div class="fr-tile fr-enlarge-link fr-tile--horizontal">
        <div class="fr-tile__body">
          <h4 class="fr-tile__title">
            <router-link :to="{name: 'hash'}" class="fr-tile__link" href>{{t('hash')}}</router-link>
          </h4>
          <p class="fr-tile__desc">{{t('hash-description')}}</p>
        </div>
      </div>
    </div>
    <div class="fr-col-6 fr-col-md-4 fr-col-lg-3">
      <div class="fr-tile fr-enlarge-link fr-tile--horizontal">
        <div class="fr-tile__body">
          <h4 class="fr-tile__title">
            <router-link :to="{name: 'profile'}"  class="fr-tile__link" href>{{t('profile')}}</router-link>
          </h4>
          <p class="fr-tile__desc">{{t('profile-description')}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useI18n} from "vue-i18n";

const { t } = useI18n()
</script>

<style scoped>

</style>