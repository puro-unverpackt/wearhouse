import { MutationTree } from 'vuex';
import { IProductsState } from './state';
import { ProductDto } from '../types/productDto';

export const PRODUCTS_ARRAY = 'products';

export const mutations: MutationTree<IProductsState> = {
    [PRODUCTS_ARRAY](state, value: Array<ProductDto>) {
        state.products = value;
    }
};
