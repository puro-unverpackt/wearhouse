<template>
    <v-data-table
        class="elevation-1"
        :headers="headers"
        hide-default-footer
        :items="orders"
        :search="search"
    >
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title v-text="$t('areas.orders.title')" />
                <v-spacer />
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    :label="$t('areas.orders.search')"
                    single-line
                    hide-details
                />
            </v-toolbar>
        </template>

        <!-- actions -->
        <template v-slot:header.actions="{}">
            <v-btn
                color="primary"
                class="mb-2"
                tile
                v-text="$t('areas.orders.create.title')"
                @click="createOrder"
            />
        </template>

        <template v-slot:item.actions="{ item }">
            <router-link :to="{ name: 'orders-wizard', params: { id: item.id } }">
                <v-icon class="mr-2" small v-text="'mdi-pencil'" />
            </router-link>
            <delete-confirm :on-delete="deleteOrder" :on-delete-parameter="item" />
        </template>
    </v-data-table>
</template>

<script>
import DeleteConfirm from "../../../components/DeleteConfirm.vue";

import { createNamespacedHelpers } from "vuex";
import { ORDERS } from "../store/name";
import { GET_ORDERS, DELETE_ORDERS, CREATE_ORDERS } from "../store/actions";
import { ALL_ORDERS } from "../store/getters";
const { mapActions, mapGetters } = createNamespacedHelpers(ORDERS);

export default {
    components: {
        DeleteConfirm
    },
    computed: {
        ...mapGetters({
            orders: ALL_ORDERS
        })
    },
    data() {
        return {
            headers: [
                { text: this.$t("areas.orders.date"), value: "date" },
                { text: this.$t("areas.orders.state"), value: "orderState" },
                {
                    text: this.$t("areas.orders.supplier"),
                    value: "supplier.name"
                },
                {
                    sortable: false,
                    text: this.$t("common.summe"),
                    value: "summe"
                },
                {
                    align: "end",
                    sortable: false,
                    value: "actions"
                }
            ],
            search: ""
        };
    },
    methods: {
        ...mapActions({
            createOrder: CREATE_ORDERS,
            deleteOrder: DELETE_ORDERS,
            get: GET_ORDERS
        })
    }
};
</script>

<style scoped>
a {
    text-decoration: none;
}
</style>