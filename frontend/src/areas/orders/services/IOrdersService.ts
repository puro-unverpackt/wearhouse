export interface IOrdersService {
    delete(order_id: Number): Promise<any>;
    get(id: Number): Promise<any>;
    get_all(): Promise<any[]>;
    post(order: any): Promise<any>;
    put(order: any): Promise<any>;
}
