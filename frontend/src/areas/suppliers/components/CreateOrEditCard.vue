<template>
    <v-card>
        <v-card-title>
            <span class="headline" v-text="title" />
        </v-card-title>

        <ValidationObserver ref="observer" v-slot="{ invalid }">
            <v-form lazy-validation @submit.prevent="save">
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col sm="12">
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    :name="$t('areas.suppliers.name')"
                                    rules="required"
                                    type="text"
                                >
                                    <v-text-field
                                        autofocus
                                        :error-messages="errors"
                                        :label="$t('areas.suppliers.name')"
                                        required
                                        v-model="value.name"
                                        @enter="save"
                                    />
                                </ValidationProvider>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

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
import { required } from "vee-validate/dist/rules";
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";
extend("required", required);

export default {
    components: {
        ValidationProvider,
        ValidationObserver
    },
    methods: {
        close() {
            this.$emit("close");
            this.$refs.observer.reset();
        }
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
