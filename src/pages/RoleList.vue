<template>
  <h1 class="text-2xl">
    User Roles Management
  </h1>
  <div class="mt-16 w-full">
    <div class="flex">
      <AppInput
        v-model="search"
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
        v-model="selectedFilter"
        :items="filters"
        class="w-1/2"
      />
    </div>

    <div class="mt-16">
      <div
        v-if="filteredRoles.length"
        class="flex flex-wrap gap-4"
      >
        <RoleCard
          v-for="role in filteredRoles"
          :key="role.id"
          class="w-1/2"
          :role="role"
          @role:delete="deleteRole"
          @role:update="updateRole"
        />
      </div>
      <div
        v-else
        class="flex align-center justify-center text-3xl text-gray-400"
      >
        No roles available
      </div>
    </div>
    <PageLoader :active="loading" />
  </div>
</template>

<script setup>
import { computed, ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';

import { onBeforeMount } from '@vue/runtime-core';
import AppSelect from '../components/AppSelect.vue';
import AppInput from '../components/AppInput.vue';
import RoleCard from '../components/RoleCard.vue';

import useRolesStore from '../services/useRolesStore';
import PageLoader from '../components/PageLoader.vue';

const { getRoles, action_fetchRoleList, action_deleteRole } = useRolesStore();
const router = useRouter();

// Filter logic
const search = ref('');
const selectedFilter = ref('all');

const filters = [
  { label: 'Active and Inactive', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
];

const filteredRoles = computed(() => getRoles.value.filter((role) => {
  const matchesName = role.name.toLowerCase().includes(search.value.toLowerCase());
  let matchesActive = true;

  if (selectedFilter.value === 'active') {
    matchesActive = role.active;
  }
  if (selectedFilter.value === 'inactive') {
    matchesActive = !role.active;
  }

  return matchesActive && matchesName;
}));

const loading = ref(false);

const deleteRole = async (roleId) => {
  loading.value = true;
  try {
    await action_deleteRole(roleId);
    await action_fetchRoleList();
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
