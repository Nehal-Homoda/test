

// import { defineStore } from "pinia";
export const useAuthStore = defineStore('auth', () => {
    // const user=ref('nn')
    const isLoggedIn = ref(false)

    const user = {
        email: 'nehalhomoda00@gmail.com',
        password: '12345'
    }
    
    return {
        isLoggedIn,
        user
    }

})