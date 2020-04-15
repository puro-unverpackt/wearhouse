import { MutationTree } from 'vuex';
import { IOrdersWizardState } from './state';

export const STEP = 'step';

export const mutations: MutationTree<IOrdersWizardState> = {
    [STEP](state, value: Number) {
        state.step = value;
    }
};
