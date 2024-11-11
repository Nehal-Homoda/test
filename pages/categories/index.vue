<template>
  <v-sheet class="py-16">
    <v-container>
      <!-- <v-row> -->
      <!-- <v-col cols="12" md="4" v-for="(item, index) in 5" :key="index"> -->
      <div class="card-section">
        <UserCardsProductCard name="car" :image="images.avatar" v-for="(item, index) in 10" :key="index" />
      </div>
      <!-- </v-col> -->
      <!-- </v-row> -->
    </v-container>
  </v-sheet>
</template>
<script setup lang="ts">
import { images } from '~/core/manager/AssetssManager';
</script>


<style lang="scss" scoped>
.card-section {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 15px 15px;

  @media (max-width:1200px) {
    grid-template-columns: repeat(3,1fr) ;

  }

  @media (max-width:992px) {
    grid-template-columns: repeat(2,1fr);

  }

  @media (max-width:600px) {
    grid-template-columns: 1fr ;

  }
}
</style>
