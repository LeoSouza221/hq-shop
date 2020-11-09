import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/quadrinho/:id',
    name: 'DetalhesQuadrinhos',
    component: () => import('../views/detalhesQuadrinhos/detalhesQuadrinhos.vue'),
  },
  {
    path: '/carrinho',
    name: 'Carrinho',
    component: () => import('../views/carrinho/Carrinho.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
