export interface IOrdersWizardState {
    id: number;
    step: number;
    products: Array<any>;
    supplier: any;
}

export const state: IOrdersWizardState = {
    id: 0,
    step: 0,
    products: [],
    supplier: {}
};
