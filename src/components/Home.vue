<template>
  <div>
    <Header-Menu :menu="menu"></Header-Menu>
    <Home-Sidebar></Home-Sidebar>
    <Home-Content></Home-Content>
  </div>
</template>

<script>
import HeaderMenu from './layout/HeaderMenu';
import HomeSidebar from './layout/HomeSidebar';
import HomeContent from './layout/HomeContent';

export default {
  name: 'Home',
  components: {
    HeaderMenu,
    HomeSidebar,
    HomeContent
  },
  data(){
    return {
      menu: {
        data: ['Tutorials', 'References', 'Examples', 'Exercises', 'Certificates'],
        color: '#4CAF50'
      }
    }
  }
}
</script>