<template>
    <v-data-table
        class="elevation-1"
        :headers="headers"
        hide-default-footer
        item-key="number"
        :items="products"
        :search="search"
        tile
    >
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title v-text="$t('areas.products.title')" />
                <v-spacer />
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    :label="$t('areas.products.search')"
                    single-line
                    hide-details
                />
            </v-toolbar>
        </template>

        <!-- actions -->
        <template v-slot:header.actions="{}">
            <create-dialog />
        </template>

        <template v-slot:item.actions="{ item }">
            <edit-dialog :item="item" />
            <delete-confirm :on-delete="deleteProduct" :on-delete-parameter="item" />
        </template>
    </v-data-table>
</template>

<script>
import CreateDialog from "./CreateDialog.vue";
import DeleteConfirm from "../../../components/DeleteConfirm.vue";
import EditDialog from "./EditDialog.vue";

import { PRODUCTS } from "../store/name";
import { GET_PRODUCTS, DELETE_PRODUCTS } from "../store/actions";
import { ALL_PRODUCTS } from "../store/getters";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters } = createNamespacedHelpers(PRODUCTS);

export default {
    components: {
        CreateDialog,
        DeleteConfirm,
        EditDialog
    },
    computed: {
        ...mapGetters({
            products: ALL_PRODUCTS
        })
    },
    data() {
        return {
            headers: [
                {
                    text: this.$t("areas.products.number"),
                    type: "number",
                    value: "number"
                },
                { text: this.$t("areas.products.name"), value: "name" },
                {
                    text: this.$t("areas.products.supplier"),
                    value: "supplier.name"
                },
                {
                    sortable: false,
                    text: this.$t("areas.products.purchasingPrice"),
                    value: "purchasingPrice"
                },
                {
                    sortable: false,
                    text: this.$t("areas.products.sellingPrice"),
                    value: "sellingPrice"
                },
                {
                    sortable: false,
                    text: this.$t("areas.products.amountFactor"),
                    value: "amountFactor"
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
            deleteProduct: DELETE_PRODUCTS,
            get: GET_PRODUCTS
        }),

        editItem: function(item) {
            console.debug(item);
        }
    }
};
</script>
