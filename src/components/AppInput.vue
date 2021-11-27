<template>
  <div class="relative w-full app-input">
    <div
      v-bind="$attrs"
      :type="type"
      class="w-full"
      @click="toggleDrawer"
    >
      <input
        :value="modelValue"
        class="ml-3 block w-full truncate focus:outline-none focus:border-none"
        :placeholder="placeholder"
        @input="emit('update:modelValue')"
      >
      <span class="app-input-icon--right">
        <slot name="icon" />
      </span>
    </div>
  </div>
</template>
<script setup>
import { ref } from '@vue/reactivity';

const props = defineProps({
  placeholder: String,

  type: {
    type: String,
    default: 'text',
  },

  modelValue: String,
});

const emit = defineEmits(['update:modelValue']);
</script>
