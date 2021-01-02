<template>
  <div>
    <Home-Sidebar></Home-Sidebar>
    <Home-Content></Home-Content>
  </div>
</template>

<script>
import HomeSidebar from './layout/HomeSidebar';
import HomeContent from './layout/HomeContent';

export default {
  name: 'Home',
  components: {
    HomeSidebar,
    HomeContent
  }
}
</script>