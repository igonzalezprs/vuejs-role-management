<template>
  <div class="border-4 border-darkGray bg-white min-h-card flex flex-col relative">
    <div
      v-if="!role.active"
      class="absolute top-4 right-4 bg-red-600 rounded-md text-white px-2 py-1 text-sm"
    >
      INACTIVE
    </div>
    <div class="p-6 flex-grow flex flex-col justify-center">
      <div class="text-2xl font-semibold">
        {{ role.name }}
      </div>
      <div class="text-md text-gray-600">
        {{ roleType }}
      </div>
      <div class="text-sm mt-8">
        {{ role.description }}
      </div>
      <div class="flex mt-4">
        <div
          v-for="user in role.users"
          :key="user.id"
          class="relative has-tooltip"
        >
          <img
            :src="user.photo_url"
            class="h-8 w-8 mr-1 rounded-full bg-black"
          >
          <span class="tooltip hover:visible hover:z-50">{{ user.first_name }} {{ user.last_name }}</span>
        </div>
      </div>
    </div>
    <div class="bg-backgroundGray h-16 flex items-center px-6 justify-between">
      <div class="text-sm text-gray-500">
        {{ getEditLabel }}
      </div>
      <img
        v-if="!role.editable"
        src="icons/lock.svg"
        class="h-5 w-5"
      >
      <div v-else>
        <button
          class="font-semibold py-1 px-2 hover:bg-gray-200 transition-all duration-300"
          @click="emit('role:update', role.id)"
        >
          EDIT
        </button>
        <button
          class="text-red-600 font-semibold py-1 px-2 hover:bg-red-200 transition-all duration-300"
          @click="emit('role:delete', role.id)"
        >
          DELETE
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from '@vue/reactivity';
import moment from 'moment';

const props = defineProps({
  role: Object,
});

const emit = defineEmits(['role:delete', 'role:update']);

const getFormattedDate = (date) => moment(date).format('DD/MM/YYYY');

const getEditLabel = computed(() => {
  if (!props.role.modified_on) {
    return `Date created: ${getFormattedDate(props.role.created_on)}`;
  }
  return props.role.created_on === props.role.modified_on
    ? `Date created: ${getFormattedDate(props.role.created_on)}`
    : `Last update: ${getFormattedDate(props.role.modified_on)}`;
});

const roleType = computed(() => {
  switch (props.role.type) {
    case 'admin': return 'Administrator Role';
    case 'job_admin': return 'Job Administration Role';
    default: return '-';
  }
});
</script>
