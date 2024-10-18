<template>
    <v-card color="deep-orange-lighten-3" variant="outlined" class="d-flex flex-column justify-center align-center"  rounded="large">
     <v-img width="30" height="30" :src="image"></v-img>
     <p class="text-black">{{ name }}</p>
    </v-card>
</template>
<script setup lang="ts">
const props=defineProps(['image','name'])

</script>


<style lang="scss" scoped></style>
