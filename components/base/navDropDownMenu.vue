<template>
  <div class="nav-drop-down">
    <!-- BUTTON -->
    <div  ref="btnElement" class="">
      <NuxtLink @mouseenter="showMenu = true" class="link text-body-1 btn-wrap">
        <v-icon> mdi mdi-chevron-down </v-icon>
        hhh
      </NuxtLink>
    </div>
    <!-- MENU -->
    <div v-if="showMenu" ref="menuElement" class="nav-drop-down-menu">
      <slot name="menu"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

const btnElement = ref(null);
const menuElement = ref(null);
const showMenu = ref(false);


const elementCheckHoverHandler = (event) => {

  if (!btnElement.value) return;

  if (btnElement.value != event.target) {
    console.log('in')
    showMenu.value = false;
  }

  console.log('hover')
}

onMounted(() => {
  document.documentElement.addEventListener('mouseover', elementCheckHoverHandler)
})
onBeforeUnmount(() => {
  document.documentElement.removeEventListener('hover', elementCheckHoverHandler)
})


</script>

<style scoped lang="scss">
.nav-drop-down {
  position: relative;
  // overflow: visible;

  .nav-drop-down-menu {
    min-width: 250px;
    box-shadow: 0 0 6px #00000050;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 1;
    // pointer-events: none;
    padding: 20px 20px;
  }

  &:hover {
    color: #FFB200;




  }
}
</style>