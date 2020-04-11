<template>
    <v-dialog max-width="750px" persistent v-model="dialog">
        <template v-slot:activator="{ on }">
            <v-btn color="primary" tile v-on="on" v-text="$t('areas.products.create.title')" />
        </template>

        <create-or-edit-card
            :save="save"
            :title="$t('areas.products.create.title')"
            v-model="product"
            @close="dialog = false"
        />
    </v-dialog>
</template>

<script>
import CreateOrEditCard from "./CreateOrEditCard.vue";

import { createNamespacedHelpers } from "vuex";
import { PRODUCTS } from "../store/name";
import { CREATE_PRODUCTS } from "../store/actions";
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
            create: CREATE_PRODUCTS
        }),
        close: function() {
            this.dialog = false;
            this.product = Object.assign({});
        },
        save: function() {
            // Todo jobu - string/int Modelbinding??
            this.product.amountFactor = Number(this.product.amountFactor);
            this.product.purchasingPrice = Number(this.product.purchasingPrice);
            this.product.sellingPrice = Number(this.product.sellingPrice);

            this.create(this.product);
            this.close();
        }
    }
};
</script>
