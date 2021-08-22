<template>
  <div role="alert" class="fr-alert" :class="alertClass">
    <p class="fr-alert__title break-word">{{title}}</p>
    <p class="break-word" v-if="description">{{description}}</p>
    <ul v-if="descriptions">
      <li class="break-word" v-for="description in descriptions">{{description}}</li>
    </ul>
  </div>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  title: String,
  description: String,
  descriptions: Array,
  success: Boolean,
  error: Boolean,
})

const alertClass =  computed(() => {
  let statusClass = ''
  if(!props.success && !props.error) {
    statusClass = 'fr-alert--info'
  } else if(props.success) {
    statusClass = 'fr-alert--success'
  } else {
    statusClass = 'fr-alert--error'
  }
  return statusClass;
})

</script>

<style scoped>

</style>