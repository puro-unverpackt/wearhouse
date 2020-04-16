<template>
    <span>
        <v-stepper-step :complete="activ_step > step" :step="step">
            <span v-text="$t('areas.orders.wizard.overview.overview')" />
        </v-stepper-step>

        <v-stepper-content :step="step">
            <v-btn color="green darken-1" text v-text="$t('common.next')" @click="save" />
        </v-stepper-content>
    </span>
</template>

<script lang="ts">
import Vue from "vue";

import { createNamespacedHelpers } from "vuex";

import { ORDERS } from "../../store/name";
import { ORDERS_WIZARD } from "../../store/Wizard/name";
import { STEP } from "../../store/Wizard/getters";
const { mapGetters } = createNamespacedHelpers(`${ORDERS}/${ORDERS_WIZARD}`);

export default Vue.extend({
    name: "OrdersWizaOrdersWizardOverviewrdSupplier",
    computed: {
        ...mapGetters({
            activ_step: STEP
        })
    },
    methods: {
        save: function() {
            // todo
            this.$router.push({ name: "home" });
        }
    },
    props: {
        step: {
            type: Number,
            required: true
        }
    }
});
</script>