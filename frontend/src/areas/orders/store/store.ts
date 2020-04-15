import Vue from 'vue';
import Vuex, { Module } from 'vuex';
import { IRootState } from '../../../store/store';

import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';
import { IOrdersState, state } from './state';

Vue.use(Vuex);

const namespaced: boolean = true;

import { ORDERS_WIZARD } from './Wizard/name';
import WizardModule from './Wizard/store';

export const store: Module<IOrdersState, IRootState> = {
    actions,
    getters,
    modules: {
        [ORDERS_WIZARD]: WizardModule
    },
    mutations,
    namespaced,
    state
};

export default store;
