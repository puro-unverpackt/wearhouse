export default {
    //////////////
    /// COMMON ///
    //////////////
    common: {
        application: {
            title: 'puro-unverpackt'
        },
        cancel: 'cancel',
        delete: 'delete',
        language: 'language',
        login: 'login',
        logout: 'logout',
        name: 'name',
        number: 'number',
        repeat: 'repeat',
        save: 'save',
        time: 'time',
        title: 'title'
    },

    //////////////////
    /// COMPONENTS ///
    //////////////////
    components: {
        deleteConfirm: {
            cancel: '@:common.cancel',
            confirm: '@:common.delete',
            text: 'Are you sure you want to delete this entry?',
            title: 'delete confirm'
        }
    },

    product: 'product',
    products: 'products',
    supplier: 'supplier',
    suppliers: 'suppliers'
};
