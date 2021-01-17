<template>
  <div class="Article-sidebar">
    <Sidebar-Li :menu="menu"></Sidebar-Li>
  </div>
</template>

<script>
import SidebarLi from './SidebarLi';

export default {

  name: 'ArticleSidebar',
  components:{
    SidebarLi
  },
  data(){
    return {
      menu: {
        html: ['Learn HTML', 'Learn CSS', 'Learn Bootstrap', 'Learn W3.CSS', 'Learn Colors', 'Learn Icons', 'Learn Graphics', 'Learn How To', 'Learn Sass'],
        javascript: ['Learn JavaScript', 'Learn jQuery', 'Learn React', 'Learn AngularJS', 'Learn JSON', 'Learn AJAX', 'Learn HTML-DOM', 'Learn AppML', 'Learn W3.JS'],
        server: ['Learn SQL', 'Learn PHP', 'Learn ASP', 'Learn Node.js', 'Learn Raspberry Pi']
      }
    }
  }
}
</script>