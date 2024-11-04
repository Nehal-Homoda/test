<template>
    <v-sheet width="100%" color="transparent" class="py-16">
        <v-container>
            <v-row>
                <v-col cols="12" md="6" class="mx-auto">
                    <div class="login-form">
                        <v-form ref="loginFormRef" class="" @submit.prevent="onSubmit"
                            :class="{ 'shake-form': isNotValid }">
                            <input autocomplete="on" type="email" class=" dummy-input" id="email">
                            <input autocomplete="on" type="password" class="dummy-input">
                            <v-card rounded="lg" variant="outlined" color="deep-orange-lighten-3" class="px-10 py-13">
                                <v-row>
                                    <v-col cols="12" md="7" class="mx-auto">

                                        <label for="email"></label>
                                        <v-text-field autocomplete="off" v-model="loginForm.email"
                                            :rules="[validationRules.required]" variant="outlined" type="email"
                                            id="email"></v-text-field>
                                        <label for="password"></label>
                                        <v-text-field autocomplete="off" v-model="loginForm.password"
                                            :rules="[validationRules.required]" variant="outlined"
                                            color="deep-orange-lighten-3" type="password" id="password"></v-text-field>
                                        <div class="d-flex justify-center">

                                        </div>
                                    </v-col>
                                    <v-col cols="12" md="6" class="mx-auto">
                                        <v-btn block class="" color="deep-orange-lighten-3" variant="elevated"
                                            elevation="0" type="submit">
                                            login
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-form>
                    </div>
                </v-col>
            </v-row>
            <v-sheet class="py-16" width="100%">
                <div class="d-flex justify-center ga-5">
                    <v-card class="animateOpacity mb-10" width="150" height="150" color="error"
                        :class="{ 'changeOpacity': isStarted }">

                    </v-card>
                    <v-card :class="{ 'changeBg': isStarted }" class="animateBg mb-10" width="150" height="150">

                    </v-card>
                    <v-card class="animateTransformRotate mb-10" :class="{ 'startTransformRotate': isStarted }"
                        width="150" height="150" color="error">

                    </v-card>
                    <v-card class="animateTransformScale mb-10" width="150" height="150" color="error"
                        :class="{ 'startTransformScale': isStarted }">

                    </v-card>
                    <v-card :class="{ 'addBorder': isStarted }" class="animateBorder mb-10" width="150" height="150"
                        color="error">

                    </v-card>
                    <v-card :class="{ 'changeColor': isStarted }" class=" mb-10 text-black" width="150" height="150"
                        color="error">
                        <div class="overlay">
                        </div>
                        <div class="position-relative">
                            <h1>yy</h1>
                            <p>aa</p>
                        </div>
                    </v-card>
                </div>
                <div class=" d-flex justify-center">
                    <v-btn @click="startAnimation" class="">start</v-btn>
                </div>
            </v-sheet>
        </v-container>
    </v-sheet>

</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';

const loginForm = {
    email: '',
    password: ''
}
const isStarted = ref(false)
const startAnimation = () => {
    isStarted.value = !isStarted.value
}
// const email = ref('nehalhomoda00@gmail.com')
// const password = ref('12345');
const loginFormRef = ref(null)
const isNotValid = ref(false)
// const isLoggedIn = ref(false)
const authStore = useAuthStore()
const { isLoggedIn, user } = storeToRefs(authStore)
const validationRules = {
    required: (v: any) => !!v || 'required',

}
const onSubmit = async () => {

    if (!loginFormRef.value) return
    //@ts-ignore
    const { valid } = await loginFormRef.value.validate()
    if (!valid) {
        isNotValid.value = true
        setTimeout(() => {
            isNotValid.value = false

        }, 1000);
        console.log(isNotValid.value)
        return
    }
    isNotValid.value = false
    // if (user.value.email == loginForm.email && user.value.password == loginForm.password) {
    //     isLoggedIn.value = true
    // }

}
</script>

<style scoped lang="scss">
// .animateOpacity {
//     transition: all 300ms ease-in-out;
//     opacity: 1;
// }

// .changeOpacity {
//     opacity: 0;



// }

// .animateBg {
//     transition: all 300ms ease-in-out;
//     background-color: rgb(0, 0, 0);
// }

// .changeBg {
//     background-color: rgb(0, 102, 128);

// }

// .animateTransformRotate {
//     transition: all 400ms ease-in-out;
// }

// .startTransformRotate {
//     transform: rotate(180deg);
// }

// .animateTransformScale {
//     transition: all 400ms ease-in-out;
//     transform: scale(1);
// }

// .startTransformScale {
//     transform: scale(0);
// }

// .animateBorder {
//     transition: all 200ms ease-in-out;
//     border: 2px thin black;
// }

// .addBorder {
//     border: 4px solid black;
// }

// .overlay {
//     width: 100%;
//     height: 100%;
//     transition: all 300ms ease-in-out;
//     opacity: 0;
//     position: absolute;
//     background-color: white;
// }

// .changeColor {
//     .overlay {
//     opacity: 1;
// }
// }

// .login-form {
//     animation: fade 3s ease-in-out;
// }

// @keyframes fade {

//     0%,
//     100% {
//         transform: translateX(0) translateY(0);
//     }

//     25% {
//         transform: translateX(25%);
//     }

//     50% {
//         transform: translateX(25%) translateY(50%);
//     }

//     75% {
//         transform: translateX(0) translateY(50%);
//     }
// }

@keyframes fade {
    from {
        transform: translateX(-100%);

    }


    to {
        transform: translateX(0);
    }
}


@keyframes shake {
    0% {
        transform: translateX(0);
    }

    20% {

        transform: translateX(10%);
    }

    40% {
        transform: translateX(-10%);
    }

    60% {
        transform: translateX(5%);
    }

    80% {
        transform: translateX(-5%);
    }

    100% {
        transform: translateX(0);
    }

}

.shake-form {
    animation: shake 0.5s ease-in-out;
}

.login-form {
    animation: fade 1s ease-in-out;
}
</style>