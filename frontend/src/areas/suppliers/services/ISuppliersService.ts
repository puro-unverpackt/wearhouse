export interface ISuppliersService {
    delete(supplier_id: number): Promise<any>;
    get(): Promise<any[]>;
    post(supplier: any): Promise<any>;
    put(supplier: any): Promise<any>;
}
