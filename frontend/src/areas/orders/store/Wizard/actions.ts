import { IRootState } from '@/store/store';
import { ActionTree } from 'vuex';
import { IOrdersWizardState } from './state';

import { ORDERS_WIZARD } from './name';
import { STEP } from './mutations';

export const NEXT_STEP = 'nextStep';

export const actions: ActionTree<IOrdersWizardState, IRootState> = {
    [NEXT_STEP]({ commit, state }: any) {
        console.debug(ORDERS_WIZARD + '::' + NEXT_STEP);
        commit(STEP, ++state.step);
    }
};
