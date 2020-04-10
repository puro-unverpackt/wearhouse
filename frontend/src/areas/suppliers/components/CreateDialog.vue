<template>
    <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
            <v-btn
                color="primary"
                class="mb-2"
                v-on="on"
                v-text="$t('areas.suppliers.create.title')"
            />
        </template>

        <create-or-edit-card
            :save="save"
            :title="$t('areas.suppliers.create.title')"
            v-model="supplier"
            @close="close"
        />
    </v-dialog>
</template>

<script>
import CreateOrEditCard from "./CreateOrEditCard.vue";

import { createNamespacedHelpers } from "vuex";
import { SUPPLIERS } from "../store/name";
import { CREATE_SUPPLIERS } from "../store/actions";
const { mapActions } = createNamespacedHelpers(SUPPLIERS);

export default {
    components: {
        CreateOrEditCard
    },
    data: () => ({
        dialog: false,
        supplier: {}
    }),
    methods: {
        ...mapActions({
            create: CREATE_SUPPLIERS
        }),

        close: function() {
            this.dialog = false;

            setTimeout(() => {
                this.supplier = Object.assign({});
            }, 300);
        },

        save: function() {
            this.create(this.supplier);
            this.close();
        }
    }
};
</script>
