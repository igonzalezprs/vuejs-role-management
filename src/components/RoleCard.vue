<template>
  <div class="border-4 border-darkGray bg-white min-h-card flex flex-col relative">
    <div class="absolute top-4 right-4 bg-red-600 rounded-md text-white px-2 py-1 text-sm">
      INACTIVE
    </div>
    <div class="p-6 flex-grow flex flex-col justify-center">
      <div class="text-2xl font-semibold">
        Super Administrator
      </div>
      <div class="text-md text-gray-600">
        Administrator role
      </div>
      <div class="text-sm mt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quam impedit, porro dignissimos nostrum consectetur sint accusantium ut iste minima nihil, ducimus nam ipsum provident quia hic vel facere dolores?
      </div>
      <div class="flex mt-4">
        <img
          v-for="n in 4"
          :key="n"
          src="http://placekitten.com/60/60"
          class="h-8 w-8 mr-1 rounded-full"
        >
      </div>
    </div>
    <div class="bg-backgroundGray h-16 flex items-center px-6">
      foo bar
    </div>
  </div>
</template>
