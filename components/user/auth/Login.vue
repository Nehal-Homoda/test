<template>
    <div class="login-form px-5 py-10">
        <div class="d-flex justify-space-between mb-8">
            <h3>LOGIN</h3>
            <v-btn class="close-btn" @click="handleCloseLoginForm" density="compact" icon="" variant="text">
                <v-icon color="grey">mdi mdi-close</v-icon>
            </v-btn>
        </div>
        <v-form ref="loginFormRef" @submit.prevent="onSubmit">
            <input autocomplete="on" type="email" class=" dummy-input" id="email">
            <input autocomplete="on" type="password" class="dummy-input">
            <v-text-field v-model="loginForm.email" variant="outlined" placeholder="Username or email address"
                type="email" id="email"></v-text-field>
            <v-text-field v-model="loginForm.password" variant="outlined" placeholder="password"
                type="password"></v-text-field>
            <v-btn type="submit" class="login-btn">
                <span>Log in</span></v-btn>
        </v-form>
        <div class="text-center">
            <v-snackbar v-model="snackbar" :timeout="timeout">
                Thank You,You are logged in

                <template v-slot:actions>
                    <v-btn color="blue" variant="text" @click="snackbar = false">
                        Close
                    </v-btn>
                </template>
            </v-snackbar>
        </div>
    </div>

</template>

<script setup lang="ts">
const loginForm = ref({
    email: '',
    password: ''
})
const emits = defineEmits(['close-login'])

const handleCloseLoginForm = () => {
    emits('close-login')
}
const loginFormRef = ref(null)
const authStore = useAuthStore()
const router = useRouter()
const { isLoggedIn, user } = storeToRefs(authStore)
const { login } = useAuthStore()
const snackbar = ref(false)
const timeout = ref(1000)
const onSubmit = async () => {
    if (!loginFormRef.value) return
    //@ts-ignore
    const { valid } = await loginFormRef.value.validate()
    if (!valid) {
        return
    }
    login(loginForm.value.email, loginForm.value.password)
    if (isLoggedIn.value == true) {
        router.push('/')
        snackbar.value = true
        setTimeout(() => {
            emits('close-login')
        }, 1100);

    }
}
</script>

<style scoped lang="scss">
.login-form {
    position: fixed;
    top: 0;
    right: 0;
    width: 500px;
    height: 100vh;
    background-color: white;
    z-index: 999;
    // animation: slideRight 0.5 ease-in-out;


    .login-btn {
        width: 100%;
        background-color: black;
        animation: backgroundfade 2s ease-in-out;

        span {
            color: white;
        }

    }

    .close-btn {

        &:hover {
            transform: rotate(90deg);
        }

    }

}

@keyframes backgroundfade {
    0% {
        background-color: gold;

    }

    100% {
        background-color: #000;
    }
}
</style>