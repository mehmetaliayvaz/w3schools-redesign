<template>
  <div class="Sidebar-li">
    <ul>
      <h2>Html And Css</h2>
      <li v-for="(item, index) in menu.html" :key="index">
          <router-link :to="{ name: 'article' }">{{ item }}</router-link>
      </li>
    </ul>
    <ul>
      <h2>Javascript</h2>
      <li v-for="(item, index) in menu.javascript" :key="index">
          <router-link :to="{ name: 'article' }">{{ item }}</router-link>
      </li>
    </ul>
    <ul>
      <h2>Server Side</h2>
      <li v-for="(item, index) in menu.server" :key="index">
          <router-link :to="{ name: 'article' }">{{ item }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'SidebarLi',
  props: ['menu']
}
</script>