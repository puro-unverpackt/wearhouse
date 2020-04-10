<template>
    <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
            <v-icon class="mr-2" small v-text="'mdi-pencil'" v-on="on" />
        </template>

        <create-or-edit-card
            :save="save"
            :title="$t('areas.suppliers.edit.title')"
            v-model="supplier"
            @close="close"
        />
    </v-dialog>
</template>

<script>
import CreateOrEditCard from "./CreateOrEditCard.vue";

import { createNamespacedHelpers } from "vuex";
import { SUPPLIERS } from "../store/name";
import { EDIT_SUPPLIERS } from "../store/actions";
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
            edit: EDIT_SUPPLIERS
        }),
        open: function() {
            console.debug("open");
            this.supplier = this.value;
            this.dialog = true;
        },

        close: function() {
            this.dialog = false;

            setTimeout(() => {
                this.supplier = Object.assign({});
            }, 300);
        },

        save: function() {
            this.edit(this.supplier);
            this.close();
        }
    },
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    watch: {
        dialog: function() {
            this.supplier = Object.assign({}, this.item);
        }
    }
};
</script>
