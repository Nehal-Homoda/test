<template>
 <v-sheet  class="py-16">
    <v-container>
        <v-row>
          <v-col cols="12" md="4" v-for="(item, index) in 5"  :key="index">
            <UserCardsProductCard
              name="car"
              image="/assets/imgs/hero/avatar.png"
            />
          </v-col>
          </v-row>

    </v-container>
 </v-sheet>
 
</template>
<script setup lang="ts">
</script>


<style lang="scss" scoped></style>
