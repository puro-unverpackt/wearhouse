import BaseService from '../../../services/BaseService';
import { IProductsService } from './IProductsService';

import { ProductCreateDto } from '../types/productCreateDto';
import { ProductDto } from '../types/productDto';
import { ProductEditDto } from '../types/productEditDto';

export default class ProductsService extends BaseService implements IProductsService {
    private PRODUCTS_URL: string;

    constructor(base_url: string = '') {
        super();
        console.debug('productsService::constructor', base_url);

        this.PRODUCTS_URL = `${this.BASE_URL}/products`;
    }

    delete(product_id: Number): Promise<Boolean> {
        return super.delete(`${this.PRODUCTS_URL}/${product_id}`);
    }

    get_all(): Promise<ProductDto[]> {
        return super.get(this.PRODUCTS_URL);
    }

    get(id: Number): Promise<ProductDto> {
        return super.get(`${this.PRODUCTS_URL}/${id}`);
    }

    post(product: ProductCreateDto): Promise<ProductDto> {
        return super.post(this.PRODUCTS_URL, product);
    }

    put(product: ProductEditDto): Promise<ProductDto> {
        return super.put(`${this.PRODUCTS_URL}/${product.id}`, product);
    }
}

export const productsService = new ProductsService();
