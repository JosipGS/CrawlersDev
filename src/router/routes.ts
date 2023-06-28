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
              property: 'og:title',
              content: 'XXXXXXXXXXXXXXXX!!!!!!!!!!!',
            },
            {
              property: 'og:description',
              content: 'Please make this work!!!!!!!!!!!',
            },
            {
              property: 'og:image',
              content:
                'https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg',
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
