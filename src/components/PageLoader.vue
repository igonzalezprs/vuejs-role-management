<template>
  <div
    v-if="active"
    class="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-gray-200 bg-opacity-50 transition-all"
  >
    <div class="flex justify-center items-center">
      <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-accent" />
    </div>
  </div>
</template>
<script setup>
defineProps({
  active: Boolean,
});
</script>
