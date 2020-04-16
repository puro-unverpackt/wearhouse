<template>
    <v-container fluid>
        <v-row alignement="center" justify="center">
            <v-col :xs="12">
                <wizard-stepper />
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";

import WizardStepper from "../components/wizard/Stepper.vue";

import { createNamespacedHelpers } from "vuex";

import { ORDERS } from "../store/name";
import { ORDERS_WIZARD } from "../store/Wizard/name";

import { INITIALIZE } from "../store/Wizard/actions";
const { mapActions } = createNamespacedHelpers(`${ORDERS}/${ORDERS_WIZARD}`);

export default Vue.extend({
    name: "OrdersWizard",
    components: {
        WizardStepper
    },
    methods: {
        ...mapActions({
            initialize: INITIALIZE
        })
    },
    mounted: function() {
        this.initialize(this.id);
    },
    props: {
        id: {
            type: Number,
            required: true
        }
    }
});
</script>