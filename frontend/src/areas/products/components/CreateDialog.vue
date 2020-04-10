<template>
    <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
            <v-btn
                color="primary"
                class="mb-2"
                v-on="on"
                v-text="$t('areas.products.create.title')"
            />
        </template>

        <create-or-edit-card
            :save="save"
            :title="$t('areas.products.create.title')"
            v-model="product"
            @close="close"
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

            setTimeout(() => {
                this.product = Object.assign({});
            }, 300);
        },

        save: function() {
            this.create(this.product);
            this.close();
        }
    }
};
</script>
