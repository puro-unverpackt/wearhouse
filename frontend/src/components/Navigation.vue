<template>
    <v-navigation-drawer app :clipped="false" fixed :style="styleNavigationDrawer" v-model="value">
        <v-list>
            <template v-for="(item, key) in navigation">
                <router-link class="layout-default-router-link" :key="key" :to="item.to">
                    <v-list-item exact router>
                        <v-list-item-action>
                            <v-icon v-text="item.icon" />
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title v-text="$t(item.title)" />
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    props: {
        theme: {
            type: String,
            required: true
        },
        value: {
            type: Boolean,
            required: true
        }
    },
    data: () => ({
        fixed: false,
        navigation: [
            {
                icon: "mdi-domain",
                title: "areas.suppliers.suppliers",
                to: { name: "suppliers" }
            },
            {
                icon: "mdi-food-apple",
                title: "areas.products.products",
                to: { name: "products" }
            },
            {
                icon: "mdi-cart",
                title: "areas.orders.orders",
                to: { name: "orders" }
            }

            // cash-register
        ]
    }),
    computed: {
        styleNavigationDrawer() {
            return {
                background: this.$vuetify.theme.themes[this.theme].secondary
            };
        }
    },
    watch: {
        value(newVal) {
            this.$emit("input", newVal);
        }
    }
};
</script>

<style scoped>
.layout-default-router-link {
    text-decoration: none;
}
</style>
