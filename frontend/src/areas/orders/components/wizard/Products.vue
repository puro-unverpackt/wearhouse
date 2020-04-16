<template>
    <span>
        <v-stepper-step :complete="activ_step > step" :step="step" v-if="activ_step <= step">
            <span v-text="$t('areas.orders.wizard.products.select')" />
        </v-stepper-step>

        <v-stepper-step :complete="activ_step > step" :step="step" v-else>
            <span
                v-text="$t('areas.orders.wizard.products.selected', { products: productNameList.join(', ')})"
            />
        </v-stepper-step>

        <v-stepper-content :step="step">
            <ValidationObserver ref="observer" v-slot="{ invalid }">
                <v-form @submit.prevent>
                    <v-data-table
                        dense
                        :headers="headers"
                        hide-default-footer
                        :items="products"
                        tile
                    >
                        <template v-slot:item.quantity="{ item }">
                            <ValidationProvider
                                v-slot="{ errors }"
                                :name="$t('areas.orders.wizard.products.amountQuantity')"
                                rules
                                type="numeric"
                                vid="amountQuantity"
                            >
                                <v-text-field
                                    flat
                                    :error-messages="errors"
                                    :min="1"
                                    type="number"
                                    v-model="item.quantity"
                                />
                            </ValidationProvider>
                        </template>

                        <template v-slot:item.purchasingPrice="{ item }">
                            <ValidationProvider
                                v-slot="{ errors }"
                                :name="$t('areas.orders.wizard.products.purchasingPrice')"
                                rules="min_value:0|numeric|required_if:amountQuantity"
                                type="numeric"
                            >
                                <v-text-field
                                    flat
                                    :error-messages="errors"
                                    v-model="item.purchasingPrice"
                                />
                            </ValidationProvider>
                        </template>

                        <template v-slot:item.amountFactor="{ item }">
                            <ValidationProvider
                                v-slot="{ errors }"
                                :name="$t('areas.orders.wizard.products.amountFactor')"
                                rules="min_value:0|numeric|required_if:amountQuantity"
                                type="numeric"
                            >
                                <v-text-field
                                    flat
                                    :error-messages="errors"
                                    v-model="item.amountFactor"
                                />
                            </ValidationProvider>
                        </template>
                    </v-data-table>
                </v-form>

                <v-btn
                    color="green darken-1"
                    :disabled="invalid"
                    text
                    v-text="$t('common.next')"
                    @click="save"
                />
            </ValidationObserver>
        </v-stepper-content>
    </span>
</template>

<script>
import {
    min_value,
    numeric,
    required,
    required_if
} from "vee-validate/dist/rules";
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";
extend("min_value", min_value);
extend("numeric", numeric);
extend("required_if", required_if);
extend("required", required);

import { createNamespacedHelpers } from "vuex";

import { ORDERS } from "../../store/name";
import { ORDERS_WIZARD } from "../../store/Wizard/name";
import { SET_PRODUCTS } from "../../store/Wizard/actions";
import { STEP, SUPPLIER, PRODUCTS } from "../../store/Wizard/getters";
const { mapActions, mapGetters } = createNamespacedHelpers(
    `${ORDERS}/${ORDERS_WIZARD}`
);

export default {
    name: "OrdersWizardProduct",
    components: {
        ValidationProvider,
        ValidationObserver
    },
    computed: {
        ...mapGetters({
            activ_step: STEP,
            activ_supplier: SUPPLIER,
            products: PRODUCTS
        }),
        productNameList: function() {
            let list = new Array();

            this.products.forEach(product => {
                if (product.quantity > 0) {
                    list.push(product.name);
                }
            });

            return list;
        }
    },
    data() {
        return {
            headers: [
                ,
                {
                    align: "end",
                    sortable: false,
                    text: this.$t(
                        "areas.orders.wizard.products.amountQuantity"
                    ),
                    value: "quantity",
                    width: 10
                },
                {
                    text: this.$t("areas.orders.wizard.products.name"),
                    value: "name"
                },
                {
                    sortable: false,
                    text: this.$t(
                        "areas.orders.wizard.products.purchasingPrice"
                    ),
                    value: "purchasingPrice"
                },
                {
                    sortable: false,
                    text: this.$t("areas.orders.wizard.products.amountFactor"),
                    value: "amountFactor"
                }
            ]
        };
    },
    methods: {
        ...mapActions({
            setProducts: SET_PRODUCTS
        }),
        save: function() {
            this.setProducts(this.products);
        }
    },
    props: {
        step: {
            type: Number,
            required: true
        }
    }
};
</script>
