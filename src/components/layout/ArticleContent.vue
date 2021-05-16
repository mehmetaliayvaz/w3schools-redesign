<template>
  <div class="Home-content-wrapper Content-container">
    <div class="Article-content">

      <Title :title="title.one"></Title>
      <Code :code="code.one"></Code>
      <Nav></Nav>
      <Paragraph :text="text.one"></Paragraph>
      <Paragraph :text="text.one"></Paragraph>
      <Button :button="button"></Button>
      <Paragraph :text="text.two"></Paragraph>
      <Paragraph :text="text.two"></Paragraph>
    </div>
  </div>
</template>

<script>
import Title from './Title';
import Button from './Button';
import Paragraph from './Paragraph';
import Nav from './Nav.vue';
import Code from './Code';

export default {
  name: 'ArticleContent',
  components: {
    Button,
    Title,
    Paragraph,
    Nav,
    Code,
  },
  data(){
    return {
      button: 'Learn',
      text: {
        one: "We recommend reading this tutorial, in the sequence listed in the menu. If you have a large screen, the menu will always be present on the left. If you have a small screen, open the menu by clicking the top menu sign",
        two: "Examples are better than 1000 words. Examples are often easier to understand than text explanations. This tutorial supplements all explanations with clarifying Try it Yourself examples.",

      },
      title: {
        one: "Learn Javascript",
      },
      code: {
        one: `<button onclick="myFunction()">Click Me!</button>
function myFunction() {
  var x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "red";
}`,
              
        
      }
    }
  }
}
</script>

<style>

</style>