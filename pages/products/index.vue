<template>
  <v-sheet class="py-16">
    <v-container>
      <v-row>
        <v-col cols="12" md="3" v-for="(item, index) in products" :key="index">
          <UserCardsProductCard :isLiked="isLiked" @handle-number-of-like="changeNumber()" :name="item.name" :image="item.imageUrl" />
        </v-col>
      </v-row>
      <div class="">
        the number of liked message is
      </div>

    </v-container>
  </v-sheet>

</template>
<script setup lang="ts">
let arr = []
const isLiked=ref(false)
const products = ref<Product[]>([]);
const list = [...products.value]
import { images } from '~/core/manager/RoutesManager';
import type { Product } from '~/interfaces/product';
onMounted(async () => {
  const response = await fetch('/products.json');
  const data = await response.json();
  products.value = data.products
})
const changeNumber = () => {
isLiked.value=!isLiked.value
}
</script>


<style lang="scss" scoped></style>
