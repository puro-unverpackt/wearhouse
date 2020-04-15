
        <v-stepper-step :complete="step > 3" step="3">
            <span v-text="$t('areas.orders.wizard.overview.overview')" />
        </v-stepper-step>

        <v-stepper-content step="3">
            <!-- todo <v-btn text v-text="$t('common.cancel')" />  -->
            <v-btn
                color="green darken-1"
                :disabled="invalid"
                text
                v-text="$t('common.next')"
                @click="step = 3"
            />
        </v-stepper-content>