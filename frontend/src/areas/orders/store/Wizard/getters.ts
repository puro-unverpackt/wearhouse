import { IRootState } from '@/store/store';
import { GetterTree } from 'vuex';
import { IOrdersWizardState } from './state';

export const ORDER = 'order';
export const PRODUCTS = 'products';
export const STEP = 'step';
export const SUPPLIER = 'supplier';

export const getters: GetterTree<IOrdersWizardState, IRootState> = {
    [ORDER]: (state) => {
        return state;
    },
    [STEP]: (state) => state.step,
    [PRODUCTS]: (state) => state.products,
    [SUPPLIER]: (state) => state.supplier
};
