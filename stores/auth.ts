

// import { defineStore } from "pinia";
export const useAuthStore = defineStore('auth', () => {
    // const user=ref('nn')
    const isLoggedIn = ref(false)

    const user = ref({
        email: 'nehalhomoda00@gmail.com',
        password: '12345'
    })
    const login =  (userEmail: string, userPassword: string) => {
        if (userEmail == user.value.email && userPassword == user.value.password) {
            isLoggedIn.value = true
        }
        else {
            isLoggedIn.value = false
        }

    }

    return {
        isLoggedIn,
        user,
        login
    }

})