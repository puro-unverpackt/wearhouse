import { IRootState } from '../../../store/store';
import { ActionTree } from 'vuex';
import { ISuppliersState } from './state';

import { suppliersService } from '../services/SuppliersService';
import { SUPPLIERS_ARRAY } from './mutations';
import { SUPPLIERS } from './name';

export const INITIALIZE = 'getSuppliers';
export const CREATE_SUPPLIERS = 'createSuppliers';
export const DELETE_SUPPLIERS = 'deleteSuppliers';
export const EDIT_SUPPLIERS = 'editSuppliers';

export const actions: ActionTree<ISuppliersState, IRootState> = {
    [CREATE_SUPPLIERS]({ dispatch }: any, supplier: any) {
        console.debug(SUPPLIERS + '::' + CREATE_SUPPLIERS, 'supplier', supplier);

        suppliersService.post(supplier).then(() => {
            dispatch(INITIALIZE);
        });
    },
    [DELETE_SUPPLIERS]({ dispatch }: any, supplier: any) {
        console.debug(SUPPLIERS + '::' + DELETE_SUPPLIERS, 'supplier', supplier);

        suppliersService.delete(supplier.id).then(() => {
            dispatch(INITIALIZE);
        });
    },
    [EDIT_SUPPLIERS]({ dispatch }: any, supplier: any) {
        console.debug(SUPPLIERS + '::' + EDIT_SUPPLIERS, 'supplier', supplier);

        suppliersService.put(supplier).then(() => {
            dispatch(INITIALIZE);
        });
    },
    [INITIALIZE]({ commit }: any) {
        console.debug(SUPPLIERS + '::' + INITIALIZE);

        suppliersService.get().then((response: any[]) => {
            commit(SUPPLIERS_ARRAY, response);
        });
    }
};
