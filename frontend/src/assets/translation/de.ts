export default {
    //////////////
    /// COMMON ///
    //////////////
    common: {
        actions: '',
        application: {
            title: 'puro-unverpackt'
        },
        cancel: 'Abbrechen',
        delete: 'Löschen',
        language: 'Sprache',
        login: 'Login',
        logout: 'Logout',
        name: 'Name',
        number: 'Nummer',
        repeat: 'Wiederholen',
        save: 'Speichern',
        time: 'Zeit',
        title: 'Title'
    },

    //////////////////
    /// COMPONENTS ///
    //////////////////
    components: {
        deleteConfirm: {
            cancel: '@:common.cancel',
            confirm: '@:common.delete',
            text: 'Möchten sie diesen Eintrag wirklich löschen?',
            title: 'Löschen bestätigen'
        }
    },

    /////////////
    /// AREAS ///
    /////////////
    areas: {
        // Products
        products: {
            amountFactor: 'Stück grösse',
            amountUnit: 'Einheit',
            create: {
                title: 'Neues Produkt'
            },
            edit: {
                title: 'Produkt beabeiten'
            },
            name: '@:common.name',
            number: '@:common.number',
            product: 'Produkt',
            products: 'Produkte',
            purchasingPrice: 'Einkaufspreis',
            sellingPrice: 'Verkaufspreis',
            supplier: '@:areas.suppliers.supplier',
            title: '@:areas.products.products'
        },

        // Suppliers
        suppliers: {
            create: {
                title: 'Neuer Lieferant'
            },
            edit: {
                title: 'Lieferant beabeiten'
            },
            name: '@:common.name',
            supplier: 'Lieferant',
            suppliers: 'Lieferanten',
            title: '@:areas.suppliers.suppliers'
        }
    }
};
