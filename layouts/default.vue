<script setup lang="ts">
// import { SharedAppNavBar } from '#build/components';
const showDrawer = ref(false)

const openNavDrawer = () => {
  showDrawer.value = true
}
const closeNavDrawer = () => {
  showDrawer.value = false
}
</script>

<template>
  <v-app>
    <v-main>
      <SharedAppNavBar @open-drawer="openNavDrawer" />
      <Transition name="slideLeft">
        <SharedAppNavDrawer @close-drawer="closeNavDrawer" v-if="showDrawer" />
      </Transition>
      <slot />
    </v-main>
  </v-app>
</template>