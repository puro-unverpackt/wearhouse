import { MutationTree } from 'vuex';
import { IOrdersWizardState } from './state';

export const NEXT_STEP = 'nextStep';
export const ORDER = 'order';
export const STEP = 'step';

export const mutations: MutationTree<IOrdersWizardState> = {
    [NEXT_STEP](state) {
        state.step++;
    },
    [ORDER](state, value: any) {
        state.id = value.id;
        state.products = value.products;
        state.supplier = value.supplier;
    },
    [STEP](state, value: number) {
        state.step = value;
    }
};
