import { RouteRecordRaw } from 'vue-router';

export const NOME_ROTAS = {
  app: {
    home: 'home',
    cadastro: 'cadastro',
    pedido: 'pedido',
  },
} as const;

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: NOME_ROTAS.app.home,
    component: () => import('../pages/PageHome.vue'),
    meta: {
      layout: 'NoLayout',
    },
  },
  {
    path: '/cadastro',
    name: NOME_ROTAS.app.cadastro,
    component: () => import('../pages/PageCadastro.vue'),
    meta: {
      layout: 'NoLayout',
    },
  },
  {
    path: '/pedido',
    name: NOME_ROTAS.app.pedido,
    component: () => import('../pages/PagePedido.vue'),
    meta: {
      layout: 'NoLayout',
    },
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
