<template>
  <v-card class="px-3 py-4" color="deep-orange-lighten-3" variant="outlined" rounded="large">
    <div class=" d-flex justify-end ">

      
          <v-icon  @click="handleLikeProduct()" :color="isLiked ? 'red' : 'grey'">mdi
            mdi-thumb-up</v-icon>
      
    </div>
    <div class="d-flex flex-column justify-center align-center">
      <div>
        <v-img width="90" height="90" :src="image"></v-img>
      </div>
      <p class="text-black">{{ name }}</p>
    </div>
  </v-card>
</template>
<script setup>
const props = defineProps(["image", "name"]);
const emits=defineEmits(['handleLike'])
const isLiked=ref(false)
// const isLiked = ref(false)

import { images } from "~/core/manager/AssetssManager";
const handleLikeProduct=()=>{
  isLiked.value=!isLiked.value
  
  emits('handleLike',isLiked.value)
  // console.log(value)
}
</script>


<style lang="scss" scoped></style>
