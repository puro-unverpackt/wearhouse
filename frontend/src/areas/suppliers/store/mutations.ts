import { MutationTree } from 'vuex';
import { ISuppliersState } from './state';

export const SUPPLIERS_ARRAY = 'suppliers';

export const mutations: MutationTree<ISuppliersState> = {
    [SUPPLIERS_ARRAY](state, value: Array<any>) {
        state.suppliers = value;
    }
};
