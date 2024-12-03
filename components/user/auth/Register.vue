<template>
    <div class="register-form py-10 px-5">
        <div class="d-flex justify-space-between mb-10">
            <h3>Register</h3>
            <v-btn @click="handleRegisterClose" class="close-btn" icon="" density="compact" variant="text">
                <v-icon color="grey">mdi mdi-close</v-icon>
            </v-btn>
        </div>
        <v-form>
            <v-text-field placeholder="Email address" variant="outlined">
            </v-text-field>
            <p class="register-subtitle">A password will be sent to your email address.</p>
            <span class="text-grey d-inline-block mb-10"> Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and for other purposes described in
                our</span>
            <v-btn block type="submit" color="" class="py-6 register-btn">Register</v-btn>
        </v-form>
        <div class="text-center mt-10">
            <span class="login-title mx-2">Already a member ? </span>
            <button variant="text" density="compact" class="login-btn">
                <span class="btn-name">Login</span>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const emits=defineEmits(['close-register'])
const handleRegisterClose=()=>{
emits('close-register')
}
</script>

<style scoped lang="scss">
.register-form {
    width: 500px;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    background-color: white;


    .register-btn {
        background-color: gold;
        color: white;
    }

    .close-btn {
        &:hover {
            transform: rotate(180deg)
        }
    }

    .register-subtitle {
        color: grey;
        margin-bottom: 30px;
        display: inline-block;
    }

    .login-btn {

        // color: gold;
        &:hover {
            color: black;
        }

        .btn-name {
            position: relative;

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
</style>