<template>
  <div id="app">
    <Header></Header>
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from './components/layout/Header';

export default {
  name: 'App',
  components: {
    Header
  }

}

</script>

<style lang="scss">
  @import "./scss/app.scss";

  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity .2s ease-out;
  }
  /*.fade-leave{}*/
  .fade-leave-active{
    transition: opacity .2s ease-out;
    opacity: 0;
  }

</style>
