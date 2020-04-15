<template>
    <v-data-table
        class="elevation-1"
        :headers="headers"
        hide-default-footer
        :items="suppliers"
        :search="search"
    >
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title v-text="$t('areas.suppliers.title')" />
                <v-spacer />
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    :label="$t('areas.suppliers.search')"
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
            <delete-confirm :on-delete="deleteSupplier" :on-delete-parameter="item" />
        </template>
    </v-data-table>
</template>

<script>
import CreateDialog from "./CreateDialog.vue";
import DeleteConfirm from "../../../components/DeleteConfirm.vue";
import EditDialog from "./EditDialog.vue";

import { createNamespacedHelpers } from "vuex";
import { SUPPLIERS } from "../store/name";
import { GET_SUPPLIERS, DELETE_SUPPLIERS } from "../store/actions";
import { ALL_SUPPLIERS } from "../store/getters";
const { mapActions, mapGetters } = createNamespacedHelpers(SUPPLIERS);

export default {
    components: {
        CreateDialog,
        DeleteConfirm,
        EditDialog
    },
    computed: {
        ...mapGetters({
            suppliers: ALL_SUPPLIERS
        })
    },
    data() {
        return {
            headers: [
                { text: this.$t("areas.suppliers.name"), value: "name" },
                {
                    align: "end",
                    value: "actions",
                    sortable: false
                }
            ],
            search: ""
        };
    },
    methods: {
        ...mapActions({
            deleteSupplier: DELETE_SUPPLIERS,
            get: GET_SUPPLIERS
        }),

        editItem: function(item) {
            console.debug(item);
        }
    }
};
</script>

<style></style>
