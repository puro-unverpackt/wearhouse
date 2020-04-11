import { ProductCreateDto } from '../types/productCreateDto';
import { ProductDto } from '../types/productDto';
import { ProductEditDto } from '../types/productEditDto';

export interface IProductsService {
    delete(product_id: Number): Promise<Boolean>;
    get_all(): Promise<ProductDto[]>;
    get(id: Number): Promise<ProductDto>;
    post(product: ProductCreateDto): Promise<ProductDto>;
    put(product: ProductEditDto): Promise<ProductDto>;
}
