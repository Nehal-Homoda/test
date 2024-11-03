<template>
  <v-sheet class="py-16">
    <v-container>
      <v-row>
        <v-col cols="12" md="4" v-for="(item, index) in 5" :key="index">
          <UserCardsProductCard
            name="car"
            :image="images.avatar"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>
<script setup lang="ts">
import { images } from '~/core/manager/AssetssManager';
</script>


<style lang="scss" scoped></style>
