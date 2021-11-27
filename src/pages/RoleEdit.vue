<template>
  <h1 class="text-2xl">
    User Roles Management - Edit role {{ role && role.name }}
  </h1>
  <div
    v-if="role"
    class="mt-16"
  >
    <RoleForm
      :role="role"
      @role:cancel="goBack"
      @role:save="updateRole"
    />
  </div>
  <PageLoader :active="loading" />
</template>
<script setup>
import { ref } from '@vue/reactivity';
import { onBeforeMount } from '@vue/runtime-core';
import { useRoute, useRouter } from 'vue-router';
import useRolesStore from '../services/useRolesStore';
import PageLoader from '../components/PageLoader.vue';
import RoleForm from '../components/RoleForm.vue';

const { action_getRole, action_updateRole } = useRolesStore();
const route = useRoute();
const router = useRouter();

const loading = ref(false);
const role = ref(null);

const goBack = () => router.push({ name: 'RoleList' });
const updateRole = async (formData) => {
  loading.value = true;
  try {
    await action_updateRole({
      roleId: route.params.roleId,
      roleData: formData,
    });
    goBack();
  } finally {
    loading.value = false;
  }
};

onBeforeMount(async () => {
  loading.value = true;
  role.value = await action_getRole(route.params.roleId);
  loading.value = false;
});
</script>
