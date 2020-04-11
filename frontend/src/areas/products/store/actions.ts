import { IRootState } from '../../../store/store';
import { ActionTree } from 'vuex';
import { IProductsState } from './state';

import { productsService } from '../services/ProductsService';
import { PRODUCTS_ARRAY } from './mutations';
import { PRODUCTS } from './name';

import { ProductCreateDto } from '../types/productCreateDto';
import { ProductDto } from '../types/productDto';
import { ProductEditDto } from '../types/productEditDto';

export const CREATE_PRODUCTS = 'createProducts';
export const DELETE_PRODUCTS = 'deleteProducts';
export const EDIT_PRODUCTS = 'editProducts';
export const GET_PRODUCT = 'getProduct';
export const INITIALIZE = 'getProducts';

export const actions: ActionTree<IProductsState, IRootState> = {
    [CREATE_PRODUCTS]({ dispatch }: any, product: ProductCreateDto) {
        console.debug(PRODUCTS + '::' + CREATE_PRODUCTS, 'product', product);

        productsService.post(product).then(() => {
            dispatch(INITIALIZE);
        });
    },
    [DELETE_PRODUCTS]({ dispatch }: any, product: ProductDto) {
        console.debug(PRODUCTS + '::' + DELETE_PRODUCTS, 'product', product);

        productsService.delete(product.id).then(() => {
            dispatch(INITIALIZE);
        });
    },
    [EDIT_PRODUCTS]({ dispatch }: any, product: ProductEditDto) {
        console.debug(PRODUCTS + '::' + EDIT_PRODUCTS, 'product', product);

        productsService.put(product).then(() => {
            dispatch(INITIALIZE);
        });
    },
    [GET_PRODUCT]({ dispatch }: any, productId: number) {
        console.debug(PRODUCTS + '::' + GET_PRODUCT, 'productId', productId);

        productsService.get(productId).then((response: ProductDto) => {
            // dispatch(INITIALIZE);
        });
    },
    [INITIALIZE]({ commit }: any) {
        console.debug(PRODUCTS + '::' + INITIALIZE);

        productsService.get_all().then((response: ProductDto[]) => {
            commit(PRODUCTS_ARRAY, response);
        });
    }
};
