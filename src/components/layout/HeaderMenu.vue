<template>
  <div class="Header-menu" :style="{ backgroundColor: menu.color }">
    <ul>
      <li v-for="(item, index) in menu.data" :key="index">
          <router-link :to="{ name: 'article' }">{{ item }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'HeaderMenu',
  props: ['menu']
}
</script>