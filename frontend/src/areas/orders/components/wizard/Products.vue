<template>
    <span>
        <v-stepper-step :complete="activ_step > step" :step="step" v-if="activ_step <= step">
            <span v-text="$t('areas.orders.wizard.products.select')" />
        </v-stepper-step>

        <v-stepper-step :complete="activ_step > step" :step="step" v-else>
            <span v-text="$t('areas.orders.wizard.products.selected', { products: products })" />
        </v-stepper-step>

        <v-stepper-content :step="step">
            <ValidationObserver ref="observer" v-slot="{ invalid }">
                <v-data-table dense :headers="headers" hide-default-footer :items="products" tile>
                    <template v-slot:item.amount="{ item }">
                        <v-text-field flat type="number" v-mode="item.amount" />
                    </template>
                </v-data-table>

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

<script>
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

import { PRODUCTS } from "../../../products/store/name";
import { INITIALIZE } from "../../../products/store/actions";
import { ALL_PRODUCTS } from "../../../products/store/getters";
const {
    mapActions: mapActionsProduct,
    mapGetters: mapGettersProduct
} = createNamespacedHelpers(PRODUCTS);

export default {
    name: "OrdersWizardProduct",
    components: {
        ValidationProvider,
        ValidationObserver
    },
    computed: {
        ...mapGetters({
            activ_step: STEP
        }),
        ...mapGettersProduct({
            products: ALL_PRODUCTS
        })
    },
    data() {
        return {
            headers: [
                {
                    text: this.$t("areas.products.number"),
                    type: "number",
                    value: "number"
                },
                { text: this.$t("areas.products.name"), value: "name" },
                {
                    text: this.$t("areas.products.supplier"),
                    value: "supplier.name"
                },
                {
                    sortable: false,
                    text: this.$t("areas.products.purchasingPrice"),
                    value: "purchasingPrice"
                },
                {
                    align: "end",
                    sortable: false,
                    text: this.$t("areas.products.amount"),
                    value: "amount",
                    width: 10
                }
            ]
        };
    },
    methods: {
        ...mapActions({
            nextStep: NEXT_STEP
        }),
        ...mapActionsProduct({
            initialize: INITIALIZE
        })
    },
    mounted: function() {
        // this.$refs.observer.reset();
        this.initialize();
    },
    props: {
        step: {
            type: Number,
            required: true
        }
    }
};
</script>
