import { IRootState } from '../../../store/store';
import { ActionTree } from 'vuex';
import { IProductsState } from './state';

import { productsService } from '../services/ProductsService';
import { PRODUCTS_ARRAY } from './mutations';
import { PRODUCTS } from './name';

export const INITIALIZE = 'getProducts';
export const CREATE_PRODUCTS = 'createProducts';
export const DELETE_PRODUCTS = 'deleteProducts';
export const EDIT_PRODUCTS = 'editProducts';

export const actions: ActionTree<IProductsState, IRootState> = {
    [CREATE_PRODUCTS]({ dispatch }: any, product: any) {
        console.debug(PRODUCTS + '::' + CREATE_PRODUCTS, 'product', product);

        productsService.post(product).then(() => {
            dispatch(INITIALIZE);
        });
    },
    [DELETE_PRODUCTS]({ dispatch }: any, product: any) {
        console.debug(PRODUCTS + '::' + DELETE_PRODUCTS, 'product', product);

        productsService.delete(product.id).then(() => {
            dispatch(INITIALIZE);
        });
    },
    [EDIT_PRODUCTS]({ dispatch }: any, product: any) {
        console.debug(PRODUCTS + '::' + EDIT_PRODUCTS, 'product', product);

        productsService.put(product).then(() => {
            dispatch(INITIALIZE);
        });
    },
    [INITIALIZE]({ commit }: any) {
        console.debug(PRODUCTS + '::' + INITIALIZE);

        productsService.get().then((response: any[]) => {
            commit(PRODUCTS_ARRAY, response);
        });
    }
};
