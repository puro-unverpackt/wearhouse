<template>
    <v-stepper v-model="actual_step" vertical>
        <step-supplier :step="1" />
        <step-products :step="2" />
        <step-overview :step="3" />
    </v-stepper>
</template>

<script>
import StepOverview from "./Overview.vue";
import StepProducts from "./Products.vue";
import StepSupplier from "./Supplier.vue";

import { createNamespacedHelpers } from "vuex";
import { ORDERS } from "../../store/name";
import { ORDERS_WIZARD } from "../../store/Wizard/name";
import { STEP } from "../../store/Wizard/getters";
const { mapGetters } = createNamespacedHelpers(`${ORDERS}/${ORDERS_WIZARD}`);

export default {
    name: "OrdersWizardStepper",
    components: {
        StepOverview,
        StepProducts,
        StepSupplier
    },
    computed: {
        ...mapGetters({
            actual_step: STEP
        })
    }
};
</script>