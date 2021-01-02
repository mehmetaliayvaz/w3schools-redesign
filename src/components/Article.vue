<template>
  <div>
    <Article-Sidebar></Article-Sidebar>
    <Article-Content></Article-Content>
  </div>
</template>

<script>
import ArticleSidebar from './layout/ArticleSidebar';
import ArticleContent from './layout/ArticleContent';

export default {
  name: 'Article',
  components: {
    ArticleContent,
    ArticleSidebar
  }
}
</script>