<template>
  <router-view />
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  preFetch() {
    const route = useRoute();
    console.log(route.params);
    console.log('running preFetch in app');
    document.head.innerHTML +=
      '<meta property="og:image" content="https://www.searchenginejournal.com/wp-content/uploads/2021/06/8-creative-ways-to-earn-or-build-links-to-your-site-60c778090d7da.png">';
  },
};
</script>
