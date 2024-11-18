<template>
    <div class="nav-drawer d-md-none d-block">
        <div class="close-btn-wrap pt-3 pe-2 d-flex justify-end">
            <v-btn class="close-btn"   @click="handleCloseDrawer" variant="text" icon="" density="compact">
                <v-icon color="grey-darken-1" size="30">mdi mdi-close</v-icon>
            </v-btn>
        </div>
        <div class="px-6">
            <v-divider></v-divider>
        </div>
        <template v-for="(item, index) in links">

            <NuxtLink class="link py-3 px-6 d-flex justify-space-between " :to="item.link">{{ item.name }}
                <v-icon>mdi mdi-chevron-right</v-icon>
            </NuxtLink>


            <div class="px-6">
                <v-divider class="" :class="index == 5 ? 'd-none' : 'd-block'"></v-divider>
            </div>
        </template>

    </div>
</template>

<script setup lang="ts">
import RoutesManager from '~/core/manager/RoutesManager';
const emits = defineEmits(['close-drawer'])
const handleCloseDrawer = () => {
    emits('close-drawer')
}
const links = ref({
    1: { name: 'home', link: RoutesManager.home, items: [{ name: '', link: '' }], categories: [] },
    2: { name: 'shop', link: RoutesManager.shop, items: [{ name: '', link: '' }], categories: [{ name: '', link: '', items: [{ name: '', link: '' }] }] },
    3: { name: 'pages', link: RoutesManager.pages, items: [{ name: '', link: '' }], categories: [] },
    4: { name: 'blog', link: RoutesManager.blog, items: [{ name: '', link: '' }], categories: [] },
    5: { name: 'Contact us', link: RoutesManager.contact, items: [], categories: [] }
})

</script>

<style scoped lang="scss">
.nav-drawer {
    position: fixed;
    top: 0;
    width: 300px;
    height: 100vh;
    background-color: white;
    animation: slideLeft 0.5s ease-in-out;

    .close-btn-wrap {
        height: 80px;

        .close-btn {
            &:hover {
                transform: rotate(90deg);
            }
            
        }

    }


    .link {
        color: black;
        cursor: pointer;

        &:hover {
            color: #FFB200;
            transition: all 0.3s ease-in-out;
        }

    }

}
</style>