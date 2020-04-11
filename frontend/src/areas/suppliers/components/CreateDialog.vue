<template>
    <v-dialog max-width="750px" persistent v-model="dialog">
        <template v-slot:activator="{ on }">
            <v-btn
                color="primary"
                class="mb-2"
                tile
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
            this.supplier = Object.assign({});
        },
        save: function() {
            this.create(this.supplier);
            this.close();
        }
    }
};
</script>
