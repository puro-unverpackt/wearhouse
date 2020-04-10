<template>
    <v-container fluid>
        <v-row alignement="center" justify="center">
            <v-col :xs="12">
                <table-container />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import TableContainer from "../components/TableContainer.vue";

import { SUPPLIERS } from "../store/name";
import { INITIALIZE } from "../store/actions";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers(SUPPLIERS);

export default {
    components: {
        TableContainer
    },
    methods: {
        ...mapActions({
            initialize: INITIALIZE
        })
    },
    mounted() {
        this.initialize();
    }
};
</script>

<style></style>
