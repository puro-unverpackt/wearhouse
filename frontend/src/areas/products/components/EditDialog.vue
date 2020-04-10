<template>
    <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
            <v-icon class="mr-2" small v-text="'mdi-pencil'" v-on:click="open(on)" />
        </template>

        <create-or-edit-card
            :save="save"
            :title="$t('areas.products.edit.title')"
            v-model="product"
            @close="close"
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

            setTimeout(() => {
                this.product = Object.assign({});
            }, 300);
        },
        open: function(item) {
            console.debug(item, this.value);
            this.product = Object.assign({}, this.value);
            // this.product = this.value;
            // this.product.supplierId = this.value.supplier.id;
            this.dialog = true;
        },
        save: function() {
            this.edit(this.product);
            this.close();
        }
    },
    props: {
        value: {
            type: Object,
            required: true
        }
    }
};
</script>
