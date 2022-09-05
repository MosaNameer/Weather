<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
  import { useAppManager } from '#imports'

  const appManager = useAppManager()
  // App Configuration
  appManager.addApp({
      "name": "Weather",
      "title": "الطقس",
      "minWidth": 400,
      "minHeight": 300,
  })
</script>
