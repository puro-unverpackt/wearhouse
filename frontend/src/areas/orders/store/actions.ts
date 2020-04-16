import { IRootState } from '../../../store/store';
import { ActionTree } from 'vuex';
import { IOrdersState } from './state';

import { ordersService } from '../services/OrdersService';
import { ORDERS_ARRAY } from './mutations';
import { ORDERS } from './name';

import router from '@/router';

export const INITIALIZE = 'getSuppliers';
export const CREATE_ORDERS = 'createSuppliers';
export const DELETE_ORDERS = 'deleteSuppliers';
export const EDIT_ORDERS = 'editSuppliers';

export const actions: ActionTree<IOrdersState, IRootState> = {
    [CREATE_ORDERS]({}: any, order: any) {
        console.debug(ORDERS + '::' + CREATE_ORDERS);

        ordersService.post(order).then((response) => {
            router.push({ name: 'orders-wizard', params: { id: response.id } });
        });
    },
    [DELETE_ORDERS]({ dispatch }: any, order: any) {
        console.debug(ORDERS + '::' + DELETE_ORDERS, 'order', order);

        ordersService.delete(order.id).then(() => {
            dispatch(INITIALIZE);
        });
    },
    [EDIT_ORDERS]({ dispatch }: any, order: any) {
        console.debug(ORDERS + '::' + EDIT_ORDERS, 'order', order);

        ordersService.put(order).then(() => {
            dispatch(INITIALIZE);
        });
    },
    [INITIALIZE]({ commit }: any) {
        console.debug(ORDERS + '::' + INITIALIZE);

        ordersService.get_all().then((response: any[]) => {
            commit(ORDERS_ARRAY, response);
        });
    }
};
