import BaseService from '../../../services/BaseService';
import { ISuppliersService } from './ISuppliersService';

export default class SuppliersService extends BaseService implements ISuppliersService {
    private SUPPLIERS_URL: string;

    constructor(base_url: string = '') {
        super();
        console.debug('suppliersService::constructor', base_url);

        this.SUPPLIERS_URL = `${this.BASE_URL}/suppliers`;
    }

    delete(supplier_id: any): Promise<any> {
        return super.DELETE(`${this.SUPPLIERS_URL}/${supplier_id}`);
    }

    get(): Promise<any[]> {
        return super.GET(this.SUPPLIERS_URL);
    }

    post(supplier: any): Promise<any> {
        return super.POST(this.SUPPLIERS_URL, supplier);
    }

    put(supplier: any): Promise<any> {
        return super.PUT(`${this.SUPPLIERS_URL}/${supplier.id}`, supplier);
    }
}

export const suppliersService = new SuppliersService();
