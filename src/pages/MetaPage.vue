<template>Meta page</template>
<script lang="ts">
export default {
  preFetch() {
    console.log('running preFetch');
    document.head.innerHTML +=
      '<meta property="og:image" content="https://blog.mozilla.org/wp-content/blogs.dir/278/files/2021/08/moz_explains_blue_links_blog_header.jpg">';
  },
};
</script>
