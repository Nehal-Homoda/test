<template>
  <v-card class="px-3 py-4" color="deep-orange-lighten-3" variant="outlined" rounded="large">
    <div class=" d-flex justify-end ">

      <!-- <v-dialog  max-width="500">
        <template v-slot:activator="{ props: activatorProps }"> -->
          <v-icon  @click="handleLikeProduct()" :color="isLiked ? 'red' : 'grey'">mdi
            mdi-thumb-up</v-icon>
        <!-- </template> -->

        <!-- <template v-slot:default="{ isActive }">
          <v-card title="Dialog">
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog> -->
    </div>
    <div class="d-flex flex-column justify-center align-center">
      <div>
        <v-img width="90" height="90" :src="image"></v-img>
      </div>
      <p class="text-black">{{ name }}</p>
    </div>
  </v-card>
</template>
<script setup lang="ts">
const props = defineProps(["image", "name","isLiked"]);
const emits=defineEmits(['handleNumberOfLike'])

// const isLiked = ref(false)

import { images } from "~/core/manager/RoutesManager";
const handleLikeProduct=()=>{
  
  emits('handleNumberOfLike')
  // console.log(value)
}
</script>


<style lang="scss" scoped></style>
