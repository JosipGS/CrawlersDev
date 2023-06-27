import { RouteRecordRaw } from 'vue-router';

const metaAdder = (queryProperty: string, value: string) => {
  // It doesn't exist so lets make a HTML element string with the info we want
  const element =
    `<meta property="${queryProperty}" content="${value}" />` as never;

  // And insert it into the head
  document.head.insertAdjacentHTML('beforeend', element);
};

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/meta',
        component: () => import('pages/MetaPage.vue'),
        beforeEnter: () =>
          metaAdder(
            'og:image',
            'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
          ),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
