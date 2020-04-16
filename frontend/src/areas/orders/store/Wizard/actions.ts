import { IRootState } from '@/store/store';
import { ActionTree } from 'vuex';
import { IOrdersWizardState } from './state';

import { ordersService } from '../../services/OrdersService';

import { ORDERS_WIZARD } from './name';
import { NEXT_STEP, ORDER, STEP } from './mutations';
import { SupplierDto } from '@/areas/suppliers/types/supplierDto';

export const INITIALIZE = 'initialize';
export const SET_PRODUCTS = 'setProducts';
export const SET_SUPPLIER = 'setSupplier';

export const actions: ActionTree<IOrdersWizardState, IRootState> = {
    [INITIALIZE]({ commit, getters }: any, id: Number) {
        console.debug(ORDERS_WIZARD + '::' + INITIALIZE);

        ordersService.get(id).then((response: any) => {
            commit(ORDER, response);

            commit(STEP, 1);
            if (getters.supplier.id) {
                commit(NEXT_STEP);
            }
        });
    },
    [SET_PRODUCTS]({ commit, getters }: any, products: any) {
        console.debug(ORDERS_WIZARD + '::' + SET_PRODUCTS, 'products', products);

        let order = getters.order;
        products.forEach((product: any) => {
            product.amountFactor = Number(product.amountFactor);
            product.purchasingPrice = Number(product.purchasingPrice);
            product.quantity = Number(product.quantity);
        });
        order.products = products;

        ordersService.put(order).then((response: any) => {
            commit(ORDER, response);
            commit(NEXT_STEP);
        });
    },
    [SET_SUPPLIER]({ commit, getters }: any, supplier: SupplierDto) {
        console.debug(ORDERS_WIZARD + '::' + SET_SUPPLIER, 'supplier', supplier);

        let order = getters.order;
        order.supplier = supplier;

        ordersService.put(order).then((response: any) => {
            commit(ORDER, response);
            commit(NEXT_STEP);
        });
    }
};
