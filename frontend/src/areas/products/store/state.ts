import { ProductDto } from '../types/productDto';

export interface IProductsState {
    products: Array<ProductDto>;
}

export const state: IProductsState = {
    products: []
};
