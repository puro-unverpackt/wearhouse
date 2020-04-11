<template>
    <v-dialog max-width="750px" persistent v-model="dialog">
        <template v-slot:activator="{ on }">
            <v-icon class="mr-2" small v-text="'mdi-pencil'" v-on:click="open(on)" />
        </template>

        <create-or-edit-card
            :save="save"
            :title="$t('areas.products.edit.title')"
            :value="product"
            @close="dialog = false"
        />
    </v-dialog>
</template>

<script>
import CreateOrEditCard from "./CreateOrEditCard.vue";

import { createNamespacedHelpers } from "vuex";
import { PRODUCTS } from "../store/name";
import { EDIT_PRODUCTS } from "../store/actions";
const { mapActions } = createNamespacedHelpers(PRODUCTS);

export default {
    components: {
        CreateOrEditCard
    },
    data: () => ({
        dialog: false,
        product: {}
    }),
    methods: {
        ...mapActions({
            edit: EDIT_PRODUCTS
        }),

        close: function() {
            this.dialog = false;
            this.product = Object.assign({});
        },
        open: function() {
            console.debug(this.item);
            this.product = Object.assign({}, this.item);
            this.product.supplierId = this.product.supplier.id;
            this.product.supplier = null;

            this.dialog = true;
        },
        save: function() {
            // Todo jobu - string/int Modelbinding??
            this.product.amountFactor = Number(this.product.amountFactor);
            this.product.purchasingPrice = Number(this.product.purchasingPrice);
            this.product.sellingPrice = Number(this.product.sellingPrice);

            this.edit(this.product);
            this.close();
        }
    },
    props: {
        item: {
            type: Object,
            required: true
        }
    }
};
</script>
