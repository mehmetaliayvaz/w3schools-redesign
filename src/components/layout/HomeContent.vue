<template>
  <div class="Home-content-wrapper">
    <Home-Content-One></Home-Content-One>
    <Home-Content-Two></Home-Content-Two>
  </div>
</template>

<script>
import HomeContentOne from './HomeContentOne';
import HomeContentTwo from './HomeContentTwo';

export default {
  name: 'HomeContent',
  components: {
    HomeContentOne,
    HomeContentTwo
  }
}
</script>

<style>
  .Home-content-wrapper {
    flex: 1;
  }
</style>