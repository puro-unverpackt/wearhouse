import Vue from 'vue';
import Vuex, { Store } from 'vuex';

Vue.use(Vuex);

// RootState
export interface IRootState {
    version: string;
}
export const RootState: IRootState = {
    version: '0.0.1'
};

// Modules
import orders from '../areas/orders/store/store';
import { ORDERS } from '../areas/orders/store/name';

import products from '../areas/products/store/store';
import { PRODUCTS } from '../areas/products/store/name';

import suppliers from '../areas/suppliers/store/store';
import { SUPPLIERS } from '../areas/suppliers/store/name';

export const store = new Vuex.Store({
    modules: {
        [ORDERS]: orders,
        [PRODUCTS]: products,
        [SUPPLIERS]: suppliers
    },
    state: RootState
});

export default store;
