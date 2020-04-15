import { IRootState } from '@/store/store';
import { GetterTree } from 'vuex';
import { IOrdersWizardState } from './state';

export const STEP = 'step';

export const getters: GetterTree<IOrdersWizardState, IRootState> = {
    [STEP]: (state) => state.step
};
