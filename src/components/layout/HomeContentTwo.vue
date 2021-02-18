<template>
  <div class="Home-content-content content-two">
    <div class="Content-container">
      <div class="code">
      <h3>Example</h3>
      <img src="../../assets/css-code.png" alt="">
    </div>
    <div class="description">
      <h1>{{ info.title }}</h1>
      <p>{{ info.description }}</p>
      <div class="description-button">
        <Button :button="info.buttonLeft"></Button>
        <Button :button="info.buttonRight"></Button>
      </div>
    </div>
  </div>
    </div>
</template>

<script>
import Button from './Button';

export default {
  name: 'HomeContentTwo',
  components: {
    Button
  },
  props: ['info']

}
</script>