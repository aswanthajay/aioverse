<template>
  <div
    class="flex items-start gap-x-4 p-4 rounded-lg bg-primary-50/15 dark:bg-primary-800/15"
  >
    <div class="w-12 h-12 p-3 rounded-full bg-primary/20">
      <UIcon
        name="i-lucide-user-round"
        class="w-6 h-6 text-primary-400 dark:text-primary-500"
      />
    </div>

    {{ content }}
  </div>
</template>

<script setup lang="ts">
defineProps<{ content: string }>();
</script>
