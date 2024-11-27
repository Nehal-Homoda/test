<template>
  <v-sheet class="py-16">
    <v-container>

      <v-toolbar class="mb-10">
        <template v-slot:extension>
          <v-tabs  v-model="tab" align-tabs="title">
            <v-tab @click="$router.push(item.link)" v-for="(item,index) in items" :key="index" :text="item.name" :value="item.name"></v-tab>
          </v-tabs>
        </template>
      </v-toolbar>



      <v-row>
        <v-col cols="12" md="3" v-for="(item, index) in products" :key="index">
          <UserCardsProductCard @handle-like="changeNumber($event)" :name="item.name" :image="item.imageUrl" />
        </v-col>
      </v-row>

      <v-dialog v-model="dialog" max-width="500">
        <template v-slot:default="{ isActive }">
          <v-card rounded="lg" class="d-flex align-center justify-center  py-2">
            <v-card-text> number of liked products is {{ likedCount }} </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn text="Close" @click="isActive.value = false"></v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>

    </v-container>
  </v-sheet>
</template>
<script setup lang="ts">
const tab = ref(null)
const items = ref({
  1: { name: 'Offers', link: RoutesManager.contact },
  2: { name: 'Best Selling', link: RoutesManager.blog }
})
const text = 'jj'
const products = ref<Product[]>([]);
import RoutesManager from "~/core/manager/RoutesManager";
import type { Product } from "~/interfaces/product";
onMounted(async () => {
  const response = await fetch("/products.json");
  const data = await response.json();
  products.value = data.products;
});
const dialog = ref(false);
const likedCount = ref(0);
const changeNumber = (isLiked: boolean) => {
  dialog.value = true;
  if (isLiked) {
    likedCount.value++;
    console.log(likedCount.value);
  } else {
    likedCount.value--;
  }
};
</script>


<style lang="scss" scoped>
.liked-message {
  width: 80%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
}
</style>
