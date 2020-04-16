import Vue from 'vue';
import VueRouter, { Route } from 'vue-router';

Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'home', redirect: { name: 'suppliers' } },
    {
        path: '/orders',
        name: 'orders',
        // route level code-splitting
        // this generates a separate chunk (orders.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "orders" */ '../areas/orders/views/Orders.vue')
    },
    {
        path: '/orders/:id',
        name: 'orders-wizard',
        component: () => import(/* webpackChunkName: "orders" */ '../areas/orders/views/Wizard.vue'),
        props: (route: Route) => ({ id: Number(route.params.id) })
    },
    {
        path: '/suppliers',
        name: 'suppliers',
        // route level code-splitting
        // this generates a separate chunk (suppliers.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "suppliers" */ '../areas/suppliers/views/Suppliers.vue')
    },
    {
        path: '/products',
        name: 'products',
        // route level code-splitting
        // this generates a separate chunk (products.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "products" */ '../areas/products/views/Products.vue')
    }
];

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
});

export default router;
