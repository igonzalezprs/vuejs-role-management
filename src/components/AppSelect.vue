<template>
  <div class="relative w-full">
    <button
      type="button"
      class="app-input w-full"
      @click="toggleDrawer"
    >
      <span class="ml-3 block truncate">
        {{ modelValue && modelValue.label || placeholder || 'Select an item...' }}
      </span>
      <span class="app-input-icon--right">
        <img
          src="icons/chevron-down.svg"
          class="h-5 w-5"
        >
      </span>
    </button>
    <ul
      v-if="open"
      class="absolute w-full z-10 mt-1 bg-white shadow-lg max-h-56 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
      tabindex="-1"
      role="listbox"
      aria-labelledby="listbox-label"
      aria-activedescendant="listbox-option-3"
    >
      <li
        v-for="item in items"
        id="listbox-option-0"
        :key="item.value"
        class="cursor-default select-none relative py-2 pl-3 pr-9 hover:text-white hover:bg-accent"
        :class="getItemClass(item.id)"
        role="option"
        @click="selectItem(item)"
      >
        <span class="font-normal ml-3 block truncate">
          {{ item.label }}
        </span>

        <span
          v-if="isSelected(item.id)"
          class="absolute inset-y-0 right-0 flex items-center pr-4"
          :class="getItemCheckmarkClass(item.id)"
        >
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from '@vue/reactivity';

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },

  placeholder: String,
  modelValue: String,
});

const emit = defineEmits(['update:modelValue']);

// Check if select is open
const open = ref(false);

const toggleDrawer = () => {
  open.value = !open.value;
};

// Logic for current selection
const isSelected = (id) => props.modelValue && props.modelValue.id === id;
const selectItem = (item) => {
  emit('update:modelValue', item);
  toggleDrawer();
};

// Styling
const getItemClass = (id) => (isSelected(id) ? 'text-white bg-accent' : 'text-gray-900');
const getItemCheckmarkClass = (id) => (isSelected(id) ? 'text-white' : 'text-accent');

</script>
