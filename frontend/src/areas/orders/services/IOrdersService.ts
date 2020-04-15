export interface IOrdersService {
    delete(order_id: number): Promise<any>;
    get(): Promise<any[]>;
    post(order: any): Promise<any>;
    put(order: any): Promise<any>;
}
