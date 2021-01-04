<template>
  <div class="Home-content-content">
    <div class="Content-container">
      <div class="description">
      <h1>{{ info.title }}</h1>
      <p>{{ info.description }}</p>
      <div class="description-button">
        <button>{{ info.buttonLeft }}</button>
        <button>{{ info.buttonRight }}</button>
      </div>
    </div>
    <div class="code">
      <h3>Example</h3>
      <img src="../../assets/html-code.png" alt="">
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeContentOne',
  props: ['info']

}
</script>