<template>
  <h1 class="text-2xl">
    Role List
  </h1>
  <div class="mt-16 w-full">
    <div class="flex">
      <AppSelect
        v-model="selected"
        :items="items"
        class="w-1/2 mr-4"
      />
      <AppInput
        v-model="input"
        class="w-1/2"
      >
        <template #icon>
          <img
            src="icons/search.svg"
            class="h-5 w-5"
          >
        </template>
      </AppInput>
    </div>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import AppSelect from '../components/AppSelect.vue';
import AppInput from '../components/AppInput.vue';

const items = [
  { id: 1, label: 'Foo bar!' },
  { id: 2, label: 'Foo baz!' },
];

const input = ref('');

const selected = ref(null);

</script>
