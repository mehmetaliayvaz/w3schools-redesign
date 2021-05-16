<template>
  <div class="Home-content-wrapper">
    <Home-Content-One :info="info1"></Home-Content-One>
    <Home-Content-Two :info="info2"></Home-Content-Two>
    <Home-Content-One :info="info3"></Home-Content-One>
    <Home-Content-Two :info="info4"></Home-Content-Two>
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
  },
  data(){
    return {
      info1: {
        title: 'HTML',
        language: 'html',
        description: 'The language for building web pages',
        buttonLeft: 'Learn HTML',
        buttonRight: 'Learn Reference',
        code: `<h3>Hello Word</h3>
<h1>This is a Heading</h1>
<p>This is a paragraph.</p>`,
      },
      info2: {
        title: 'CSS',
        language: 'css',
        description: 'The language for styling web pages',
        buttonLeft: 'Learn CSS',
        buttonRight: 'Learn Reference',
        code: `body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}`,
      },
      info3: {
        title: 'JAVASCRIPT',
        language: 'javascript',
        description: 'The language for programming web pages',
        buttonLeft: 'Learn JAVASCRIPT',
        buttonRight: 'Learn Reference',
        code: `<button onclick="myFunction()">Click Me!</button>
function myFunction() {
  var x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "red";
}`,
      },
      info4: {
        title: 'SQL',
        language: 'sql',
        description: 'A language for accessing databases',
        buttonLeft: 'Learn SQL',
        buttonRight: 'Learn Reference',
        code: 'SELECT * FROM Customers;',
      },
    }
  }
}
</script>
