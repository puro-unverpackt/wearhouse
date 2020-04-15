import { MutationTree } from 'vuex';
import { IOrdersState } from './state';

export const ORDERS_ARRAY = 'orders';

export const mutations: MutationTree<IOrdersState> = {
    [ORDERS_ARRAY](state, value: Array<any>) {
        state.orders = value;
    }
};
