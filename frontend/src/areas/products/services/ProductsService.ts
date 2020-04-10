import BaseService from '../../../services/BaseService';
import { IProductsService } from './IProductsService';

export default class ProductsService extends BaseService implements IProductsService {
    private PRODUCTS_URL: string;

    constructor(base_url: string = '') {
        super();
        console.debug('productsService::constructor', base_url);

        this.PRODUCTS_URL = `${this.BASE_URL}/products`;
    }

    delete(product_id: any): Promise<any> {
        return super.delete(`${this.PRODUCTS_URL}/${product_id}`);
    }

    get(): Promise<any[]> {
        return super.get(this.PRODUCTS_URL);
    }

    post(product: any): Promise<any> {
        return super.post(this.PRODUCTS_URL, product);
    }

    put(product: any): Promise<any> {
        return super.put(`${this.PRODUCTS_URL}/${product.id}`, product);
    }
}

export const productsService = new ProductsService();
