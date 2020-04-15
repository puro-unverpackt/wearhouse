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
        next: 'Weiter',
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
        // Orders
        orders: {
            wizard: {
                overview: {
                    overview: 'Bestellübersicht'
                },
                products: {
                    products: '@:areas.products.products',
                    select: 'Wählen Sie die @:areas.products.products aus',
                    selected: '@:areas.products.products {products}'
                },
                suppliers: {
                    select: 'Wählen Sie einen @:areas.suppliers.supplier aus',
                    selected: '@:areas.suppliers.supplier {supplier}',
                    suppliers: '@:areas.suppliers.suppliers'
                },
                wizard: 'Bestellung'
            }
        },

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
