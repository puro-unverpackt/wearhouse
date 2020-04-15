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

export default Vue.extend({
    name: "OrdersWizardStepper",
    components: {
        WizardStepper
    }
});
</script>