import BaseService from '../../../services/BaseService';
import { IOrdersService } from './IOrdersService';

export default class OrdersService extends BaseService implements IOrdersService {
    private ORDERS_URL: string;

    constructor(base_url: string = '') {
        super();
        console.debug('ordersService::constructor', base_url);

        this.ORDERS_URL = `${this.BASE_URL}/orders`;
    }

    delete(order_id: Number): Promise<any> {
        return super.DELETE(`${this.ORDERS_URL}/${order_id}`);
    }

    get(order_id: Number): Promise<any> {
        return super.GET(`${this.ORDERS_URL}/${order_id}`);
    }

    get_all(): Promise<any[]> {
        return super.GET(this.ORDERS_URL);
    }

    post(order: any): Promise<any> {
        return super.POST(this.ORDERS_URL, order);
    }

    put(order: any): Promise<any> {
        return super.PUT(`${this.ORDERS_URL}/${order.id}`, order);
    }
}

export const ordersService = new OrdersService();
