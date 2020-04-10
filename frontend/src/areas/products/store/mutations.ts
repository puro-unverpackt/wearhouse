import { MutationTree } from 'vuex';
import { IProductsState } from './state';

export const PRODUCTS_ARRAY = 'products';

export const mutations: MutationTree<IProductsState> = {
    [PRODUCTS_ARRAY](state, value: Array<any>) {
        state.products = value;
    }
};
