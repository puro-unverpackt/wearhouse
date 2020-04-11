<template>
    <v-card>
        <v-card-title>
            <span class="headline" v-text="title" />
        </v-card-title>

        <ValidationObserver ref="observer" v-slot="{ invalid }">
            <v-form lazy-validation ref="form" @submit.prevent="save">
                <v-card-text>
                    <v-container>
                        <v-row cols="12">
                            <v-col sm="6">
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    :name="$t('areas.products.number')"
                                    rules="required|numeric"
                                    type="number"
                                >
                                    <v-text-field
                                        :error-messages="errors"
                                        :label="$t('areas.products.number')"
                                        required
                                        v-model="value.number"
                                    />
                                </ValidationProvider>
                            </v-col>
                            <v-col sm="6">
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    :name="$t('areas.products.name')"
                                    rules="required"
                                    type="text"
                                >
                                    <v-text-field
                                        :error-messages="errors"
                                        :label="$t('areas.products.name')"
                                        required
                                        v-model="value.name"
                                    />
                                </ValidationProvider>
                            </v-col>
                        </v-row>

                        <v-row cols="12">
                            <v-col sm="12">
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    :name="$t('areas.products.supplier')"
                                    rules="required"
                                    type="text"
                                >
                                    <v-autocomplete
                                        auto-select-first
                                        :error-messages="errors"
                                        :items="suppliers"
                                        item-text="name"
                                        item-value="id"
                                        :label="$t('areas.products.supplier')"
                                        required
                                        v-model="value.supplierId"
                                        @enter="save"
                                    />
                                </ValidationProvider>
                            </v-col>
                        </v-row>

                        <v-row cols="12">
                            <v-col sm="6">
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    :name="$t('areas.products.purchasingPrice')"
                                    rules="numeric"
                                    type="number"
                                >
                                    <v-text-field
                                        :error-messages="errors"
                                        :label="$t('areas.products.purchasingPrice')"
                                        v-model="value.purchasingPrice"
                                    />
                                </ValidationProvider>
                            </v-col>
                            <v-col sm="6">
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    :name="$t('areas.products.sellingPrice')"
                                    rules="numeric"
                                    type="number"
                                >
                                    <v-text-field
                                        :error-messages="errors"
                                        :label="$t('areas.products.sellingPrice')"
                                        v-model="value.sellingPrice"
                                    />
                                </ValidationProvider>
                            </v-col>
                        </v-row>

                        <v-row cols="12">
                            <v-col sm="6">
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    :name="$t('areas.products.amountFactor')"
                                    rules="numeric"
                                    type="number"
                                >
                                    <v-text-field
                                        :error-messages="errors"
                                        :label="$t('areas.products.amountFactor')"
                                        required
                                        v-model="value.amountFactor"
                                    />
                                </ValidationProvider>
                            </v-col>
                            <v-col sm="6">
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    :name="$t('areas.products.amountUnit')"
                                    type="text"
                                >
                                    <v-text-field
                                        :error-messages="errors"
                                        :label="$t('areas.products.amountUnit')"
                                        required
                                        v-model="value.amountUnit"
                                    />
                                </ValidationProvider>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-spacer />

                    <v-btn text v-text="$t('common.cancel')" @click="close" />

                    <v-btn
                        color="green darken-1"
                        :disabled="invalid"
                        text
                        v-text="$t('common.save')"
                        @click="save"
                    />
                </v-card-actions>
            </v-form>
        </ValidationObserver>
    </v-card>
</template>

<script>
import { numeric, required } from "vee-validate/dist/rules";
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";
extend("numeric", numeric);
extend("required", required);

import { createNamespacedHelpers } from "vuex";
import { SUPPLIERS } from "../../suppliers/store/name";
import { INITIALIZE } from "../../suppliers/store/actions";
import { ALL_SUPPLIERS } from "../../suppliers/store/getters";
const {
    mapActions: mapActionsSupplier,
    mapGetters: mapGettersSupplier
} = createNamespacedHelpers(SUPPLIERS);

export default {
    components: {
        ValidationProvider,
        ValidationObserver
    },
    computed: {
        ...mapGettersSupplier({
            suppliers: ALL_SUPPLIERS
        })
    },
    methods: {
        ...mapActionsSupplier({
            initialize: INITIALIZE
        }),
        close() {
            this.$emit("close");
        }
    },
    mounted: function() {
        this.$refs.observer.reset();
        this.initialize();
    },
    props: {
        save: {
            type: Function,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        value: {
            type: Object,
            required: true
        }
    }
};
</script>
