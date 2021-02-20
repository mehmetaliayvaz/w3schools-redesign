<template>
  <div class="Home-content-content">
    <div class="Content-container">
      <div class="description">
        <h1>{{ info.title }}</h1>
        <p>{{ info.description }}</p>
        <div class="description-button">
          <Button :button="info.buttonLeft"></Button>
          <Button :button="info.buttonRight"></Button>
        </div>
      </div>
      <div class="code">
        <h3>Example</h3>
        <Code :code="info.code"></Code>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button';
import Code from './Code';

export default {
  name: 'HomeContentOne',
  components:{
    Button,
    Code,
  },
  props: ['info']

}
</script>