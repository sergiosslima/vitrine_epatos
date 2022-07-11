import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/Home.vue';
import Sobre from '../views/Sobre.vue';
import Contato from '../views/Contato.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/sobre',
        name: 'sobre',
        component: Sobre
    },
    {
        path: '/contato',
        name: 'contato',
        component: Contato
    }
];

const router = createRouter({history: createWebHistory(), routes});

export default router;