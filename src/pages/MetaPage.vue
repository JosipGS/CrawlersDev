<template>
  <q-page class=""> meta tags ftw </q-page>
</template>

<script lang="ts">
const metaAdder = (queryProperty: string, value: string) => {
  // It doesn't exist so lets make a HTML element string with the info we want

  const element =
    `<meta property="${queryProperty}" content="${value}" />` as never;

  // And insert it into the head
  document.head.insertAdjacentHTML('beforeend', element);
};

// import { useMeta } from 'quasar';

// const metaData = {
//   // sets document title
//   title: 'Index Page',
//   // optional; sets final title as "Index Page - My Website", useful for multiple level meta
//   titleTemplate: (title: string) => `${title} - My Website`,

//   // meta tags
//   meta: {
//     description: { name: 'description', content: 'Page 1' },
//     keywords: { name: 'keywords', content: 'Quasar website' },
//     equiv: {
//       'http-equiv': 'Content-Type',
//       content: 'text/html; charset=UTF-8',
//     },
//     // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
//     ogTitle: {
//       property: 'og:title',
//       // optional; similar to titleTemplate, but allows templating with other meta properties
//       template(ogTitle: string) {
//         return `${ogTitle} - My Website`;
//       },
//     },
//   },

//   // CSS tags
//   link: {
//     material: {
//       rel: 'stylesheet',
//       href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
//     },
//   },

//   // JS tags
//   script: {
//     ldJson: {
//       type: 'application/ld+json',
//       innerHTML: '{ "@context": "http://schema.org" }',
//     },
//   },

//   // <html> attributes
//   htmlAttr: {
//     'xmlns:cc': 'http://creativecommons.org/ns#', // generates <html xmlns:cc="http://creativecommons.org/ns#">,
//     empty: undefined, // generates <html empty>
//   },

//   // <body> attributes
//   bodyAttr: {
//     'action-scope': 'xyz', // generates <body action-scope="xyz">
//     empty: undefined, // generates <body empty>
//   },

//   // <noscript> tags
//   noscript: {
//     default: 'This is content for browsers with no JS (or disabled JS)',
//   },
// };

export default {
  preFetch() {
    // useMeta(metaData);
    metaAdder(
      'og:image',
      'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
    );
  },
};
</script>
