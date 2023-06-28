import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/meta',
        component: () => import('pages/MetaPage.vue'),
        meta: {
          title: 'Meta Page test',
          metaTags: [
            {
              name: 'description',
              content: 'Please make this work!!!!!!!!!!!',
            },
            {
              property: 'og:description',
              content: 'Please make this work!!!!!!!!!!!',
            },
          ],
        },
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
