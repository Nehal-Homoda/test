<template>
    <div>
        <v-app-bar elevation="0">
            <v-btn @click="login" rounded="lg" variant="outlined" elevation="0" color="deep-orange-lighten-3" >
                login
            </v-btn>
        </v-app-bar>
    </div>



    <template>
  <div class="text-center">
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
    Thank You,You are logged in

      <template v-slot:actions>
        <v-btn
          color="blue"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
</template>

<script setup lang="ts">
import  { userLogin} from '~/core/manager/RoutesManager'; 
const isLoggedIn=ref(false)
const snackbar=ref(false)
const timeout=ref(2000)
const router=useRouter()
const login=()=>{
    router.push(userLogin)
    isLoggedIn.value=true
    snackbar.value=true
}
</script>

<style scoped></style>