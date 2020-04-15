import { IRootState } from '../../../store/store';
import { GetterTree } from 'vuex';
import { IOrdersState } from './state';

export const ALL_ORDERS = 'allOrders';

export const getters: GetterTree<IOrdersState, IRootState> = {
    [ALL_ORDERS]: (state) => state.orders
};
