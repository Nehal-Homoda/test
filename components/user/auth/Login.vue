<template>
    <Transition name="slideRight">
        <div v-if="showLoginTransition" class="login-register-form-wrap px-7 py-9">


            <Transition name="fade">
                <div class="login-form" v-if="!isRegistered">
                    <div class="d-flex justify-space-between mb-5">
                        <h3>LOGIN</h3>
                        <v-btn class="close-btn" @click="handleClose" density="compact" icon="" variant="text">
                            <v-icon color="grey">mdi mdi-close</v-icon>
                        </v-btn>
                    </div>
                    <v-form ref="loginFormRef" @submit.prevent="onSubmit">
                        <input autocomplete="on" type="email" class=" dummy-input" id="email" name="email"
                            placeholder="Username or email address">
                        <input autocomplete="on" type="password" class="dummy-input">
                        <v-text-field v-model="loginForm.email" variant="outlined"
                            placeholder="Username or email address" type="email"></v-text-field>
                        <v-text-field v-model="loginForm.password" variant="outlined" placeholder="password"
                            type="password"></v-text-field>
                        <v-checkbox color="primary">
                            <template v-slot:label>
                                <h4 class="text-black">Remember me</h4>
                            </template>
                        </v-checkbox>
                        <button ref="loginBtn" type="submit" class="login-btn">
                            <span>Log in</span></button>
                        <div class="text-center mt-10">
                            <span class="register-title mx-2">Not a member ? </span>
                            <button @click="handleRegister" color="black" variant="text" density="compact"
                                class="register-btn">
                                <span class="btn-name">Register</span>
                            </button>
                        </div>
                    </v-form>
                </div>
            </Transition>



            <Transition name="fade">
                <div v-if="isRegistered" class="register-form  px-7 py-9">
                    <div class="d-flex justify-space-between mb-10">
                        <h3>REGISTER</h3>
                        <v-btn @click="handleClose" class="close-btn" icon="" density="compact" variant="text">
                            <v-icon color="grey">mdi mdi-close</v-icon>
                        </v-btn>
                    </div>
                    <v-form>
                        <input class="dummy-input" autocomplete="on" type="text" id="text" name="text"
                            placeholder="Username">
                        <input class="dummy-input" autocomplete="on" type="email" id="email" name="email"
                            placeholder="Email address">
                        <input class="dummy-input" autocomplete="on" type="password" id="password" name="password"
                            placeholder="Password">
                        <v-text-field type="text" placeholder="Username" variant="outlined"></v-text-field>
                        <v-text-field type="email" placeholder="Email address" variant="outlined">
                        </v-text-field>
                        <v-text-field placeholder="Password" variant="outlined"></v-text-field>
                        <p class="d-inline-block mb-10">A password will be sent to your email address.</p>
                        <h6 class=" d-inline-block mb-10 text-body-2"> Your personal data will be used to support
                            your
                            experience
                            throughout this website, to manage access to your account, and for other purposes described
                            in
                            our</h6>
                        <v-btn block type="submit" color="" class="py-6 register-btn">Register</v-btn>
                    </v-form>
                    <div class="text-center mt-10">
                        <span class="login-title mx-2">Already a member ? </span>
                        <button @click="openLoginForm" variant="text" density="compact" class="login-register-btn">
                            <span class="btn-name">Login</span>
                        </button>
                    </div>
                </div>
            </Transition>


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
    </Transition>
    <Transition name="fade">
        <div @click="handleClose" v-if="showOverlayTransition" class="overlay">
        </div>
    </Transition>

</template>

<script setup lang="ts">
const showFocusClass = ref(false)
const loginForm = ref({
    email: '',
    password: ''
})
const showLoginTransition = ref(false)
const showOverlayTransition = ref(false)
const isRegistered = ref(false)

const emits = defineEmits(['close-login'])

const handleClose = () => {
    showLoginTransition.value = false
    showOverlayTransition.value = false
    setTimeout(() => {
        emits('close-login')
    }, 500);
}
const handleRegister = () => {
    // emits('open-register')
    setTimeout(() => {
        isRegistered.value = true
    }, 300);
}
const openLoginForm = () => {
    setTimeout(() => {
        isRegistered.value = false
    }, 300);
}
const loginBtn = ref<HTMLButtonElement | null>(null)
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

onMounted(() => {

    showLoginTransition.value = true
    showOverlayTransition.value = true

    nextTick(() => {
        console.log(loginBtn.value)
        loginBtn.value?.focus()

    })

})

</script>

<style scoped lang="scss">
.login-register-form-wrap {
    position: fixed;
    top: 0;
    right: 0;
    width: 500px;
    height: 100vh;
    background-color: white;
    z-index: 999;
    transition: all 0.5s ease-in-out;
    // animation: slideRight 0.5 ease-in-out;

    .dummy-input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .login-btn {
        width: 100%;
        height: 45px;
        background-color: #ffa832;
        transition: all 1s ease-in-out;
        // box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.5)  ;
        border-radius: 3px;
        // animation: backgroundfade 2s ease-in-out;

        span {
            color: white;
        }

        &:hover,
        &:focus {
            background-color: black;
        }



    }

    .close-btn {

        &:hover {
            transform: rotate(90deg);
        }

    }

    .register-btn {
        .btn-name {
            position: relative;
            color: unset;

            &:hover {
                color: gold;
                transition: all 0.4s ease-in-out;
            }

            &::before {
                width: 100%;
                height: 1px;
                background-color: black;
                position: absolute;
                content: '';
                top: 30px;
                left: 50%;
                transform: translate(-50%, -50%);


            }
        }

    }

    .register-title {
        color: grey;
    }

    .login-form {
        transition: all 0.5s ease-in-out;
    }

    .register-form {
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        width: 500;
        height: 100vh;
        transition: all 0.5s ease-in-out;
        // background-color: white;

        .register-btn {
            background-color: #ffa832;
            color: white;
        }

        .close-btn {
            &:hover {
                transform: rotate(180deg)
            }
        }

        .login-register-btn {
            &:hover {
                color: black;
            }

            .btn-name {
                position: relative;
                color: #000;

                &:hover {
                    color: gold;
                    transition: all 0.4s ease-in-out;
                }

                &::before {
                    width: 100%;
                    height: 1px;
                    background-color: black;
                    position: absolute;
                    content: '';
                    top: 30px;
                    left: 50%;
                    transform: translate(-50%, -50%);


                }
            }

        }

        .login-title {
            color: grey;
        }
    }
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.144);
    z-index: 998;
}



// @keyframes backgroundfade {
//     0% {
//         background-color: gold;

//     }

//     100% {
//         background-color: #000;
//     }
// }</style>