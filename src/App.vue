<template>
  <!-- Liens directs uniquement -->
  <header role="banner" class="fr-header">
    <div class="fr-header__body">
      <div class="fr-container">
        <div class="fr-header__body-row">
          <div class="fr-header__brand fr-enlarge-link">
            <div class="fr-header__brand-top">
              <div class="fr-header__logo">
                <p class="fr-logo">
                  République
                  <br>Française
                </p>
              </div>
              <div class="fr-header__navbar">
                <button class="fr-btn--menu fr-btn" data-fr-opened="false" aria-controls="modal-833" aria-haspopup="menu" title="Menu" id="fr-btn-menu-mobile">
                  {{t('menu')}}
                </button>
              </div>
            </div>
            <div class="fr-header__service">
              <router-link :to="{name: 'home'}" title="Accueil - Nicolas KEMPF - Test Front-end">
                <p class="fr-header__service-title">{{t('my-name')}}</p>
              </router-link>
              <p class="fr-header__service-tagline">{{t('current-project')}}</p>
            </div>
          </div>
          <div class="fr-header__tools">
            <div class="fr-header__tools-links">
              <ul class="fr-links-group">
                <template v-if="authenticated">
                  <li>
                    <router-link class="fr-link fr-fi-account-line" :to="{name: 'profile'}">{{t('profile')}}</router-link>
                  </li>
                  <li>
                    <a href="#" class="fr-link fr-fi-lock-line" @click.prevent="logout">{{t('logout')}}</a>
                  </li>
                </template>
                <template v-else>
                  <li>
                    <router-link class="fr-link fr-fi-lock-line" :to="{name: 'login'}">{{t('login')}}</router-link>
                  </li>
                  <li>
                    <router-link class="fr-link fr-fi-account-line" :to="{name: 'register'}">{{t('register')}}</router-link>
                  </li>
                </template>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Navigation principale -->
    <div class="fr-header__menu fr-modal" id="modal-833" aria-labelledby="fr-btn-menu-mobile">
      <div class="fr-container">
        <button class="fr-link--close fr-link" aria-controls="modal-833">Fermer</button>
        <div class="fr-header__menu-links"></div>
        <nav class="fr-nav" id="navigation-832" role="navigation" aria-label="Menu principal">
          <ul class="fr-nav__list">
            <li class="fr-nav__item">
              <router-link class="fr-nav__link" :to="{name: 'dummy-hash'}">{{t('dummy-hash')}}</router-link>
            </li>
            <li class="fr-nav__item">
              <router-link class="fr-nav__link" :to="{name: 'hash'}">{{t('hash')}}</router-link>
            </li>
            <li class="fr-nav__item" v-if="authenticated">
              <router-link class="fr-nav__link" :to="{name: 'profile'}">{{t('profile')}}</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <div class="fr-container fr-mt-3v">
    <router-view></router-view>
  </div>
</template>

<script setup>
import {useI18n} from "vue-i18n";
import {useStore} from "vuex";
import {computed} from "vue";
import {logout} from './services/auth';
const { t } = useI18n()
const store = useStore()

const authenticated = computed(() => store.getters.isAuthenticated)
</script>

<style>
</style>
