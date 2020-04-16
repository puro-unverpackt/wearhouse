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
        date: 'Datum',
        delete: 'Löschen',
        language: 'Sprache',
        login: 'Login',
        logout: 'Logout',
        name: 'Name',
        next: 'Weiter',
        number: 'Nummer',
        repeat: 'Wiederholen',
        save: 'Speichern',
        state: 'Status',
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
        // Orders
        orders: {
            date: '@:common.date',
            orders: 'Bestellungen',
            search: 'Bestellung suchen',
            state: '@:common.state',
            title: '@:areas.orders.orders',

            create: {
                title: 'Neue Bestellung'
            },

            wizard: {
                overview: {
                    overview: 'Bestellübersicht'
                },
                products: {
                    amountFactor: '@:areas.products.amountFactor',
                    amountQuantity: 'Anzahl',
                    name: '@:areas.products.name',
                    products: '@:areas.products.products',
                    purchasingPrice: '@:areas.products.purchasingPrice',
                    select: 'Wählen Sie die @:areas.products.products aus',
                    selected: '@:areas.products.products ({products})'
                },
                suppliers: {
                    select: 'Wählen Sie einen @:areas.suppliers.supplier aus',
                    selected: '@:areas.suppliers.supplier ({supplier})',
                    suppliers: '@:areas.suppliers.suppliers'
                },
                wizard: 'Bestellung'
            }
        },

        // Products
        products: {
            amountFactor: 'Stück grösse (kg)',
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
            search: 'Produkt suchen',
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
            search: 'Lieferant suchen',
            supplier: 'Lieferant',
            suppliers: 'Lieferanten',
            title: '@:areas.suppliers.suppliers'
        }
    }
};
