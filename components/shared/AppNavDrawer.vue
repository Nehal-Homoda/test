<template>
    <Transition name="slideLeft">

        <div v-if="showDrawerTransition" class="nav-drawer d-md-none d-block">
            <div class="close-btn-wrap pt-3 pe-2 d-flex justify-end">
                <v-btn class="close-btn" @click="handleCloseDrawer" variant="text" icon="" density="compact">
                    <v-icon color="grey-darken-1" size="30">mdi mdi-close</v-icon>
                </v-btn>
            </div>
            <div class="px-6">
                <v-divider></v-divider>
            </div>
            <div class="drawer-content">
                <div class="link-wrapper">
                    <template v-for="(item, index) in links">
                        <NuxtLink @click="handleSelectedItem(item)"
                            class="link py-3 px-6 d-flex justify-space-between ">{{
                                item.name }}
                            <v-icon>mdi mdi-chevron-right</v-icon>
                        </NuxtLink>
                        <div class="px-6">
                            <v-divider class="" :class="index == 5 ? 'd-none' : 'd-block'"></v-divider>
                        </div>
                    </template>
                </div>


                <div class="items-link" v-if="selectedCategory">
                    <NuxtLink @click="hideItems" class="link py-3 px-3 d-flex align-center"><v-icon>mdi
                            mdi-chevron-left</v-icon> {{
                                selectedCategory.name }}
                    </NuxtLink>

                    <div class="px-6">
                        <v-divider></v-divider>
                    </div>
                    <template v-for="(item, index) in selectedCategory.categories">
                        <NuxtLink @click="handleSelectedItem(item)"
                            class="link py-3 px-6 d-flex justify-space-between ">
                            {{ item.name }}
                            <v-icon>mdi mdi-chevron-right</v-icon>
                        </NuxtLink>
                        <div class="px-6">
                            <v-divider class="" :class="index == 5 ? 'd-none' : 'd-block'"></v-divider>
                        </div>
                    </template>
                </div>
                <div class="items-link" v-if="selectedItem">

                    <NuxtLink @click="hideItems" class="link py-3 px-3 d-flex align-center"><v-icon>mdi
                            mdi-chevron-left</v-icon> {{
                                selectedItem.name }}
                    </NuxtLink>

                    <div class="px-6">
                        <v-divider></v-divider>
                    </div>
                    <template v-for="(item, index) in selectedItem.items">
                        <NuxtLink class="link py-3 px-6" :to="item.link">{{ item.name
                            }}

                        </NuxtLink>
                        <div class="px-6">
                            <v-divider class="" :class="index == 5 ? 'd-none' : 'd-block'"></v-divider>
                        </div>

                    </template>
                </div>

                <!-- <div class="items-link" v-if="selectedCategoryItem">
                    
                    <NuxtLink @click="hideItems" class="link py-3 px-3 d-flex align-center"><v-icon>mdi
                        mdi-chevron-left</v-icon> {{
                            selectedCategoryItem.name }}
                        </NuxtLink>
    
                    <div class="px-6">
                        <v-divider></v-divider>
                    </div>
                    <template v-for="(item, index) in selectedCategoryItem.items">
                        <NuxtLink class="link py-3 px-6" :to="item.link">{{ item.name
                            }}
    
                        </NuxtLink>
                        <div class="px-6">
                            <v-divider class="" :class="index == 5 ? 'd-none' : 'd-block'"></v-divider>
                        </div>
                    </template>
                </div> -->
            </div>

        </div>
    </Transition>
    <Transition name="fade">

        <div v-if="showOverlayTransition" @click="handleCloseDrawer" class="overlay">

        </div>
    </Transition>

</template>

<script setup lang="ts">
import RoutesManager from '~/core/manager/RoutesManager';
const emits = defineEmits(['close-drawer'])
const handleCloseDrawer = () => {
    showDrawerTransition.value=false
    showOverlayTransition.value=false
    setTimeout(() => {
        emits('close-drawer')
        
    }, 500);
}
const showDrawerTransition=ref(false)
const showOverlayTransition=ref(false)
type listItem = {
    name: '',
    link: '',
    items: [{ name: '', link: '' }],
    categories: []
}
type Category = {
    name: '',
    link: '',
    items: [{ name: '', link: '' }]
}
type SelectedCategory = {
    name: '',
    categories: Category[]
}
const selectedItem = ref<listItem | null>(null)
const selectedCategory = ref<SelectedCategory | null>(null)
const selectedCategoryItem = ref<Category | null>(null)
const links = ref({
    1: {
        name: 'home',
        link: RoutesManager.home,
        items: [
            { name: 'About Us', link: RoutesManager.about },
            { name: 'Our Services', link: RoutesManager.services },
            { name: 'Testimonials', link: RoutesManager.testimonials },
            { name: 'FAQ', link: RoutesManager.faq }
        ],
        categories: []
    },

    2: {
        name: 'shop',
        link: RoutesManager.shop,
        items: [], // Keeping empty as requested
        categories: [
            {
                name: 'Electronics',
                link: RoutesManager.shopElectronics,
                items: [
                    { name: 'Smartphones', link: RoutesManager.smartphones },
                    { name: 'Laptops', link: RoutesManager.laptops },
                    { name: 'Headphones', link: RoutesManager.headphones }
                ]
            },
            {
                name: 'Clothing',
                link: RoutesManager.shopClothing,
                items: [
                    { name: 'Men', link: RoutesManager.menClothing },
                    { name: 'Women', link: RoutesManager.womenClothing },
                    { name: 'Kids', link: RoutesManager.kidsClothing }
                ]
            },
            {
                name: 'Home & Kitchen',
                link: RoutesManager.shopHomeKitchen,
                items: [
                    { name: 'Furniture', link: RoutesManager.furniture },
                    { name: 'Appliances', link: RoutesManager.appliances },
                    { name: 'Decor', link: RoutesManager.decor }
                ]
            },
            {
                name: 'Home & Kitchen',
                link: RoutesManager.shopHomeKitchen,
                items: [
                    { name: 'Furniture', link: RoutesManager.furniture },
                    { name: 'Appliances', link: RoutesManager.appliances },
                    { name: 'Decor', link: RoutesManager.decor }
                ]
            }
        ]
    },

    3: {
        name: 'pages',
        link: RoutesManager.pages,
        items: [
            { name: 'Terms of Service', link: RoutesManager.termsOfService },
            { name: 'Privacy Policy', link: RoutesManager.privacyPolicy },
            { name: 'Cookie Policy', link: RoutesManager.cookiePolicy }
        ],
        categories: []
    },

    4: {
        name: 'blog',
        link: RoutesManager.blog,
        items: [
            { name: 'Latest Posts', link: RoutesManager.latestPosts },
            { name: 'Categories', link: RoutesManager.blogCategories },
            { name: 'Popular Posts', link: RoutesManager.popularPosts }
        ],
        categories: []
    },

    5: {
        name: 'Contact us',
        link: RoutesManager.contact,
        items: [
            { name: 'Email Us', link: RoutesManager.emailUs },
            { name: 'Call Us', link: RoutesManager.callUs },
            { name: 'Locate Us', link: RoutesManager.locateUs }
        ],
        categories: []
    }
});

const handleSelectedItem = (item: any) => {
    if (item.items.length) {
        selectedItem.value = item
        return
    }
    if (item.categories.length) {
        const obj: SelectedCategory = {
            name: item.name,
            categories: item.categories
        }
        selectedCategory.value = obj
    }

}

const handleSelectedCategoryItem = (categoryItem: any) => {
    const obj = {
        name: categoryItem.name,
        link: categoryItem.link,
        items: categoryItem.items
    }
    selectedCategoryItem.value = obj
}
const hideItems = () => {
    selectedItem.value = null
    selectedCategoryItem.value = null
    selectedCategory.value = null
}

onMounted(()=>{
    showDrawerTransition.value=true
    showOverlayTransition.value=true
})

</script>

<style scoped lang="scss">
.nav-drawer {
    position: fixed;
    top: 0;
    width: 300px;
    height: 100vh;
    background-color: white;
    // animation: slideLeft 0.5s ease-in-out;
    z-index: 999;
    overflow: hidden;

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

    .drawer-content {
        position: relative;

        .link-wrapper {
            position: relative;

        }

        .items-link {
            position: absolute;
            z-index: 100;
            width: 300px;
            height: 100vh;
            top: 0;
            display: flex;
            flex-direction: column;
            background-color: white;

        }
    }

}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 998;
    background-color: rgba(0, 0, 0, 0.096);
}
</style>