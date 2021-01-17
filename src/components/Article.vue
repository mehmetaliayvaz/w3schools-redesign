<template>
  <div>
    <Header-Menu :menu="menu"></Header-Menu>
    <div class="Home-content">
      <Article-Sidebar></Article-Sidebar>
      <Article-Content></Article-Content>
    </div>
  </div>
</template>

<script>
import HeaderMenu from './layout/HeaderMenu';
import ArticleSidebar from './layout/ArticleSidebar';
import ArticleContent from './layout/ArticleContent';

export default {

  name: 'Article',
  components: {
    ArticleContent,
    ArticleSidebar,
    HeaderMenu
  },
  data(){
    return {
      menu: {
        data: ['Html', 'Css', 'Javascript', 'Sql', 'Python', 'Php', 'Bootstrap', 'How To', 'More', 'References'],
        color: '#929292'
      }
    }
  }



}
</script>