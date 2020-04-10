import { IRootState } from '../../../store/store';
import { GetterTree } from 'vuex';
import { IProductsState } from './state';

export const ALL_PRODUCTS = 'allProducts';

export const getters: GetterTree<IProductsState, IRootState> = {
    [ALL_PRODUCTS]: state => state.products
};
