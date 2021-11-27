<template>
  <h1 class="text-2xl">
    User Roles Management - Create a new role
  </h1>
  <div class="mt-16">
    <RoleForm
      @role:cancel="goBack"
      @role:save="createRole"
    />
  </div>
  <PageLoader :active="loading" />
</template>
<script setup>
import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import useRolesStore from '../services/useRolesStore';
import PageLoader from '../components/PageLoader.vue';
import RoleForm from '../components/RoleForm.vue';

const { action_createRole } = useRolesStore();
const router = useRouter();

const loading = ref(false);
const role = ref(null);

const goBack = () => router.push({ name: 'RoleList' });
const createRole = async (formData) => {
  loading.value = true;
  try {
    await action_createRole(formData);
    goBack();
  } finally {
    loading.value = false;
  }
};
</script>
