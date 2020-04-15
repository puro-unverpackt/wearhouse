<template>
    <span>
        <v-stepper-step :complete="activ_step > step" :step="step" v-if="activ_step <= step">
            <span v-text="$t('areas.orders.wizard.suppliers.select')" />
        </v-stepper-step>

        <v-stepper-step :complete="activ_step > step" :step="step" v-else>
            <span v-text="$t('areas.orders.wizard.suppliers.selected', { supplier: supplier.id })" />
        </v-stepper-step>

        <v-stepper-content :step="step">
            <ValidationObserver ref="observer" v-slot="{ invalid }">
                <v-form lazy-validation @submit.prevent>
                    <ValidationProvider
                        v-slot="{ errors }"
                        :name="$t('areas.orders.wizard.suppliers.suppliers')"
                        rules="required"
                        type="text"
                    >
                        <v-autocomplete
                            auto-select-first
                            :error-messages="errors"
                            :items="suppliers"
                            item-text="name"
                            item-value="id"
                            :label="$t('areas.orders.wizard.suppliers.suppliers')"
                            required
                            v-model="supplier.id"
                        />
                    </ValidationProvider>
                </v-form>

                <!-- todo <v-btn text v-text="$t('common.cancel')" />  -->
                <v-btn
                    color="green darken-1"
                    :disabled="invalid"
                    text
                    v-text="$t('common.next')"
                    @click="nextStep"
                />
            </ValidationObserver>
        </v-stepper-content>
    </span>
</template>

<script lang="ts">
import Vue from "vue";

import { required } from "vee-validate/dist/rules";
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";
extend("required", required);

import { createNamespacedHelpers } from "vuex";

import { ORDERS } from "../../store/name";
import { ORDERS_WIZARD } from "../../store/Wizard/name";
import { NEXT_STEP } from "../../store/Wizard/actions";
import { STEP } from "../../store/Wizard/getters";
const { mapActions, mapGetters } = createNamespacedHelpers(
    `${ORDERS}/${ORDERS_WIZARD}`
);

import { SUPPLIERS } from "../../../suppliers/store/name";
import { INITIALIZE } from "../../../suppliers/store/actions";
import { ALL_SUPPLIERS } from "../../../suppliers/store/getters";
const {
    mapActions: mapActionsSupplier,
    mapGetters: mapGettersSupplier
} = createNamespacedHelpers(SUPPLIERS);

export default Vue.extend({
    name: "OrdersWizardSupplier",
    components: {
        ValidationProvider,
        ValidationObserver
    },
    computed: {
        ...mapGetters({
            activ_step: STEP
        }),
        ...mapGettersSupplier({
            suppliers: ALL_SUPPLIERS
        })
    },
    methods: {
        ...mapActions({
            nextStep: NEXT_STEP
        }),
        ...mapActionsSupplier({
            initialize: INITIALIZE
        })
    },
    mounted: function() {
        // this.$refs.observer.reset();
        this.initialize();
    },
    data() {
        return {
            supplier: {}
        };
    },
    props: {
        step: {
            type: Number,
            required: true
        }
    }
});
</script>