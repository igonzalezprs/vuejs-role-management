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

    <div
      v-if="getRoles.length"
      class="mt-16 flex flex-wrap gap-4"
    >
      <RoleCard
        v-for="role in getRoles"
        :key="role.id"
        class="w-1/2"
        :role="role"
        @role:delete="deleteRole"
        @role:update="updateRole"
      />
    </div>
    <PageLoader :active="loading" />
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';

import { onBeforeMount } from '@vue/runtime-core';
import AppSelect from '../components/AppSelect.vue';
import AppInput from '../components/AppInput.vue';
import RoleCard from '../components/RoleCard.vue';

import useRolesStore from '../services/useRolesStore';
import PageLoader from '../components/PageLoader.vue';

const { getRoles, action_fetchRoleList, action_deleteRole } = useRolesStore();
const router = useRouter();

const items = [
  { id: 1, label: 'Foo bar!' },
  { id: 2, label: 'Foo baz!' },
];

const loading = ref(false);
const input = ref('');
const selected = ref(null);

const deleteRole = async (roleId) => {
  loading.value = true;
  try {
    await action_deleteRole(roleId);
  } finally {
    loading.value = false;
  }
};

const updateRole = async (roleId) => {
  router.push({ name: 'RoleEdit', params: { roleId } });
};

onBeforeMount(async () => {
  loading.value = true;
  try {
    await action_fetchRoleList();
  } finally {
    loading.value = false;
  }
});

</script>
