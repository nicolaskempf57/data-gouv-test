<template>
  <div class="fr-input-group" :class="{'fr-input-group--error': props.errorState, 'fr-input-group--valid': props.successState}">
    <label class="fr-label" :for="props.id">{{props.label}}
      <span v-if="props.description" class="fr-hint-text">{{props.description}}</span></label>
    <input
        class="fr-input fr-col-8"
        :class="{'fr-input--error': props.errorState, 'fr-input--valid': props.successState}"
        :type="props.type"
        :id="props.id"
        required="required"
        :value="props.modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    />
    <p class="fr-error-text" v-if="props.errorState">
      {{props.errorDescription}}
    </p>
    <p class="fr-valid-text" v-else-if="props.successState">
      {{props.successDescription}}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  id: String,
  type: String,
  description: String,
  successDescription: String,
  successState: Boolean,
  errorDescription: String,
  errorState: Boolean,
  modelValue: String,
})
const emits = defineEmits(['update:modelValue'])
</script>

<style scoped>

</style>