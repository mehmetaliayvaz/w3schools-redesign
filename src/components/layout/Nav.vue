<template>
  <div class="Nav">
    <Button :button="navPre"></Button>
    <Button :button="navNext"></Button>
  </div>
</template>

<script>
import Button from './Button';

export default {
  name: 'Nav',
  components: {
    Button,
  },
  data(){
    return {
      navPre: '< Previous',
      navNext: 'Next >',
    }
  }
}
</script>

<style>

</style>