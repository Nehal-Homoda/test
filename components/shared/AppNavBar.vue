<template>
  <v-sheet width="100%" color="transparent">
    <v-container class="pa-0">
      <!-- <v-btn @click="login" rounded="lg" variant="outlined" elevation="0" color="deep-orange-lighten-3">
            login
          </v-btn> -->
      <div class="nav-bar">
        <div class="logo">
          <v-img width="120" height="120" :src="images.logo"></v-img>
        </div>
        <div class="links-wrap">

          <NuxtLink class="link text-body-1 " v-for="(item, index) in links" :to="item.link">{{ item.name }}

            <v-icon v-if="index != 5"> mdi mdi-chevron-down </v-icon>
            <div class="items" v-if="index == 1">
              <span>ssss</span>
              <span>ssss</span>

            </div>
          </NuxtLink>



        </div>


        <div class="icons-wrap d-flex ga-3">
          <v-btn icon="" density="compact" variant="text">
            <v-icon>mdi mdi-account-outline</v-icon>

          </v-btn>
          <v-btn icon="" density="compact" variant="text">
            <v-icon>mdi mdi-magnify</v-icon>

          </v-btn>
          <v-btn icon="" density="compact" variant="text">
            <v-icon>mdi mdi-heart-outline</v-icon>

          </v-btn>
          <v-btn icon="" density="compact" variant="text">
            <v-icon>mdi mdi-shopping-outline</v-icon>

          </v-btn>

        </div>

      </div>

    </v-container>
  </v-sheet>



  <template>
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
  </template>
</template>

<script setup lang="ts">
import { images } from '~/core/manager/AssetssManager';
import { userLogin, home, shop, pages, blog, contact } from '~/core/manager/RoutesManager';
const isLoggedIn = ref(false)
const snackbar = ref(false)
const timeout = ref(2000)
const router = useRouter()
const login = () => {
  router.push(userLogin)
  isLoggedIn.value = true
  snackbar.value = true
}


const links = ref({
  1: { name: 'home', link: home },
  2: { name: 'shop', link: shop },
  3: { name: 'pages', link: pages },
  4: { name: 'blog', link: blog },
  5: { name: 'Contact us', link: contact }
})


</script>

<style scoped lang="scss">
.nav-bar {
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  place-items: center;
  // align-items: center;

  .logo {
    justify-self: start;
  }

  .links-wrap {
    display: flex;
    gap: 2rem;

    .link {
      text-decoration: none;
      color: #000;
      font-weight: bold;
      cursor: pointer;

      .items {
        display: none;

      }

      &.router-link-exact-active {
        color: #FFB200;
      }

      &:hover {
        .items {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }

  .icons-wrap {
    justify-self: end;
  }
}
</style>