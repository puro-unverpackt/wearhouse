import { IRootState } from '../../../store/store';
import { GetterTree } from 'vuex';
import { ISuppliersState } from './state';

export const ALL_SUPPLIERS = 'allSuppliers';

export const getters: GetterTree<ISuppliersState, IRootState> = {
    [ALL_SUPPLIERS]: state => state.suppliers
};
