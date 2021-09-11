<template>
  <main class="px-4 py-10 text-center text-teal-700 dark:text-gray-200">
    <router-view />
    <div>
      <button
        class="btn m-3 text-sm mt-8"
        @click="router.back()"
      >
        {{ t('button.back') }}
      </button>
    </div>
  </main>
</template>