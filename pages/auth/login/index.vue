<template>
    <v-sheet width="100%" color="transparent" class="py-16">
        <v-container>
            <v-row>
                <v-col cols="12" md="6" class="mx-auto">
                    <v-form ref="loginForm" @submit.prevent="onSubmit">
                        <v-card rounded="lg" variant="outlined" color="deep-orange-lighten-3" class="px-10 py-13">
                            <v-row>
                                <v-col cols="12" md="7" class="mx-auto">

                                    <label for="email"></label>
                                    <v-text-field v-model="loginForm.email" :rules="[validationRules.required]"
                                        variant="outlined" type="email" id="email"></v-text-field>
                                    <label for="password"></label>
                                    <v-text-field v-model="loginForm.password" :rules="[validationRules.required]"
                                        variant="outlined" color="deep-orange-lighten-3" type="password"
                                        id="password"></v-text-field>
                                    <div class="d-flex justify-center">

                                    </div>
                                </v-col>
                                <v-col cols="12" md="6" class="mx-auto">
                                    <v-btn block class="" color="deep-orange-lighten-3" variant="elevated" elevation="0"
                                        type="submit">
                                        login
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </v-sheet>

</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';

const loginForm = {
    email: '',
    password: ''
}
const email = ref('nehalhomoda00@gmail.com')
const password = ref('12345');
const loginFormRef = ref(null)
// const isLoggedIn = ref(false)
const authStore = useAuthStore()
const { isLoggedIn } = storeToRefs(authStore)
const validationRules = {
    required: (v: any) => !!v || 'required',

}
const onSubmit = () => {

    console.log('dddd', isLoggedIn.value)
    if (!loginFormRef.value) return
    //@ts-ignore
    const valid = loginForm.value.validate()
    if (!valid) return
    if (email.value == loginForm.email && password.value == loginForm.password) {
        isLoggedIn.value = true
    }

}
</script>

<style scoped></style>