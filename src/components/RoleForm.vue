<template>
  <div class="flex align-center mt-4">
    <span class="mr-6 form-label">Name</span>
    <AppInput v-model="formData.name" />
  </div>

  <div class="flex align-center mt-4">
    <span class="mr-6 form-label">Type</span>
    <AppSelect
      v-model="formData.type"
      :items="roleTypes"
    />
  </div>

  <div class="flex align-center mt-4">
    <span class="mr-6 form-label">Description</span>
    <AppInput v-model="formData.description" />
  </div>

  <div class="flex align-center mt-4">
    <span class="mr-6 form-label">Editable</span>
    <AppToggle v-model="formData.editable" />
  </div>

  <div class="flex align-center mt-8">
    <span class="mr-6 form-label">Active</span>
    <AppToggle v-model="formData.active" />
  </div>

  <div
    v-if="role.users"
    class="mt-10"
  >
    <div class="text-2xl">
      Users
    </div>
    <ul>
      <li
        v-for="user in formData.users"
        :key="user.id"
        class="flex items-center mt-4 w-1/3"
      >
        <img
          :src="user.photo_url"
          class="h-8 w-8 mr-4 rounded-full"
        >
        <span class="flex-grow">{{ user.first_name }} {{ user.last_name }}</span>
        <button
          class="p-2 text-red-600 hover:bg-red-200"
          @click="removeUser(user.id)"
        >
          X
        </button>
      </li>
    </ul>
  </div>

  <div class="text-right mt-16">
    <button
      class="font-semibold py-1 px-2 hover:bg-gray-200 transition-all duration-300"
      @click="emit('role:cancel')"
    >
      CANCEL
    </button>
    <button
      class="text-accent font-semibold py-1 px-2 hover:bg-green-100 transition-all duration-300"
      @click="emit('role:save', formData)"
    >
      SAVE
    </button>
  </div>
</template>
<script setup>
import { onMounted } from '@vue/runtime-core';
import { ref } from '@vue/reactivity';
import AppInput from './AppInput.vue';
import AppSelect from './AppSelect.vue';
import AppToggle from './AppToggle.vue';

const roleTypes = [
  { id: 1, label: 'Administrator Role', value: 'admin' },
  { id: 2, label: 'Job Administration Role', value: 'job_admin' },
];

const props = defineProps({
  role: Object,
});

const emit = defineEmits(['role:cancel', 'role:save']);

const formData = ref({
  name: '',
  type: 'admin',
  description: '',
  editable: false,
  active: true,
  users: [],
  created_on: '',
});

const removeUser = (id) => {
  formData.value.users = formData.value.users.filter((user) => user.id !== id);
};

onMounted(() => {
  if (props.role) {
    formData.value = { ...props.role };
  }
});

</script>
