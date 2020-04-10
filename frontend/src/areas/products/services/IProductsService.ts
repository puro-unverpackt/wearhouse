export interface IProductsService {
    delete(product_id: number): Promise<any>;
    get(): Promise<any[]>;
    post(product: any): Promise<any>;
    put(product: any): Promise<any>;
}
