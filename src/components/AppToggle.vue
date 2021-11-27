<template>
  <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
    <input
      id="toggle"
      type="checkbox"
      name="toggle"
      :checked="modelValue"
      class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer "
      @change="change"
    >
    <label
      for="toggle"
      class="
      toggle-label
      block
      overflow-hidden
      h-6
      rounded-full
      bg-gray-300
      cursor-pointer
    "
    />
  </div>
</template>
<script setup>
defineProps({
  modelValue: Boolean,
});

const emit = defineEmits(['update:modelValue']);

const change = (event) => {
  emit('update:modelValue', event.target.checked);
};
</script>
