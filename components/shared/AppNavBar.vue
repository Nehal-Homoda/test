<template>
  <v-sheet width="100%" color="transparent" class="position-relative">
    <v-container class="pa-0">
      <!-- <v-btn @click="login" rounded="lg" variant="outlined" elevation="0" color="deep-orange-lighten-3">
            login
          </v-btn> -->
      <div class="nav-bar">
        <v-btn @click="handleOpenDrawer" icon="" variant="text" density="compact" elevation="0" class="d-md-none d-block">
          <v-icon size="30">mdi mdi-menu</v-icon>
        </v-btn>
        <div class="logo">
          <v-img width="120" height="120" :src="images.logo"></v-img>
        </div>
        <div class="links-wrap">
          <NuxtLink class="link text-body-1 " v-for="(item, index) in links" :class="{ 'full-width-menu': index == 2 }"
            :to="item.link">{{ item.name }}
            <v-icon v-if="index != 5"> mdi mdi-chevron-down </v-icon>
            <Transition name="slideUp">
              <div class="items" v-if="index == 1">
                <span>Home v1 — Modern Elegance</span>
                <span>Home v2 — Rustic Comfort</span>
                <span>Home v3 — Minimalist Chic</span>
                <span>Home v4 — Industrial Vibes</span>
              </div>
            </Transition>
            <Transition name="slideUp">
              <div class="items full-width-menu px-16" v-if="index == 2">

                <v-container>

                  <v-row>
                    <v-col cols="12" md="3" v-for="item in 4">
                      <div class="d-flex flex-column text-subtitle-1">
                        <h4>Shop pages </h4>
                        <span>Shop — Left Sidebar </span>
                        <span>Shop — Right Sidebar</span>
                        <span>Shop — Fullwidth</span>
                        <span>Shop — No Sidebar</span>
                        <span>Shop — Masonry</span>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>

              </div>
            </Transition>
            <Transition name="slideUp">
              <div class="items" v-if="index == 3">
                <span>Home v1 — Modern Elegance</span>
                <span>Home v2 — Rustic Comfort</span>
                <span>Home v3 — Minimalist Chic</span>
                <span>Home v4 — Industrial Vibes</span>
              </div>
            </Transition>
            <Transition name="slideUp">
              <div class="items" v-if="index == 4">
                <span>Home v1 — Modern Elegance</span>
                <span>Home v2 — Rustic Comfort</span>
                <span>Home v3 — Minimalist Chic</span>
                <span>Home v4 — Industrial Vibes</span>
              </div>
            </Transition>
          </NuxtLink>
        </div>
        <div class="icons-wrap d-flex ga-md-5">
          <button>
            <v-icon>mdi mdi-account</v-icon>
          </button>
          <v-btn icon="" density="compact" variant="text">
            <v-icon>mdi mdi-magnify</v-icon>
          </v-btn>
          <v-btn class="d-md-block d-none" icon="" density="compact" variant="text">
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
import RoutesManager from '~/core/manager/RoutesManager';
const isLoggedIn = ref(false)
const snackbar = ref(false)
const timeout = ref(2000)
const router = useRouter()
const login = () => {
  router.push(RoutesManager.userLogin)
  isLoggedIn.value = true
  snackbar.value = true
}
const emits=defineEmits(['open-drawer'])
const handleOpenDrawer=()=>{
emits('open-drawer')
}


const links = ref({
  1: { name: 'home', link: RoutesManager.home, items: [{ name: '', link: '' }], categories: [] },
  2: { name: 'shop', link: RoutesManager.shop, items: [], categories: [{ name: '', link: '', items: [{ name: '', link: '' }] }] },
  3: { name: 'pages', link: RoutesManager.pages, items: [{ name: '', link: '' }], categories: [] },
  4: { name: 'blog', link: RoutesManager.blog, items: [{ name: '', link: '' }], categories: [] },
  5: { name: 'Contact us', link: RoutesManager.contact, items: [], categories: [] }
})


</script>

<style scoped lang="scss">
.nav-bar {
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  place-items: center;
  // align-items: center;

  .logo {
    justify-self: start;
  }

  .links-wrap {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;

    .link {
      height: 100%;
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #000;
      font-weight: bold;
      cursor: pointer;
      position: relative;

      &.full-width-menu {
        position: unset;
      }

      &:hover,
      &.router-link-exact-active {
        color: #FFB200;
        transition: all 0.3s ease-in-out;
      }

      .items {
        display: none;
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        // min-width: 300px;
        box-shadow: 5px 5px 30px #00000013;
        padding: 20px 20px;
        color: black;
        // transition: all 0.3s ease-in-out;
        z-index: 99;
        animation: slideUpMenu 300ms ease-in-out;

        &.full-width-menu {
          width: 100vw;
        }

        span {
          &:hover {
            color: #FFB200;
            transition: all 0.3s ease-in-out;
          }
        }


      }



      &:hover {
        .items {
          display: flex;
          flex-direction: column;
          gap: 1em;
          text-wrap: nowrap;


        }
      }

    }
    @media (max-width:1000px) {
      display: none;
      
    }
  }

  .icons-wrap {
    justify-self: end;
    // display: flex;
    // gap: 0.8em;

  }
}

@keyframes slideUpMenu {
  from {
    transform: translateY(5px) translateX(-50%);
    opacity: 0;

  }
}
</style>