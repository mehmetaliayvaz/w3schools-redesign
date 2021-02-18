<template>
  <div class="Header">
    <div class="Header-logo">
      <router-link :to="{ name: 'home' }">
        <img src="../../assets/logo.png" alt="">
      </router-link>
      <span>THE WORLD’S LARGEST WEB DEVELOPER SITE</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
}
</script>