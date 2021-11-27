<template>
  <h1 class="text-2xl">
    User Roles Management
  </h1>
  <div class="mt-16 w-full">
    <div class="flex">
      <AppInput
        v-model="input"
        class="w-1/2 mr-4"
        placeholder="Search..."
      >
        <template #icon>
          <img
            src="icons/search.svg"
            class="h-5 w-5"
          >
        </template>
      </AppInput>
      <AppSelect
        v-model="selected"
        :items="items"
        class="w-1/2"
      />
    </div>

    <div class="mt-16 flex flex-wrap gap-4">
      <RoleCard
        v-for="n in 6"
        :key="n"
        class="w-1/3"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';

import AppSelect from '../components/AppSelect.vue';
import AppInput from '../components/AppInput.vue';
import RoleCard from '../components/RoleCard.vue';

const items = [
  { id: 1, label: 'Foo bar!' },
  { id: 2, label: 'Foo baz!' },
];

const input = ref('');

const selected = ref(null);

</script>
