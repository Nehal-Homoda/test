

// import { defineStore } from "pinia";
export const useAuthStore=defineStore('auth',()=>{
    // const user=ref('nn')
   const isLoggedIn=ref(false)
 

   return {isLoggedIn}

})