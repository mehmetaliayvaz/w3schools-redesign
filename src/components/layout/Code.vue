<template>
  <vue-code-highlight language="javascript">
    <pre>{{ code }}</pre>
  </vue-code-highlight>
</template>

<script>
import { component as VueCodeHighlight } from 'vue-code-highlight';

export default {
  name: 'Code',
  components:{
    VueCodeHighlight,
  },
  props: ['code'],
}
</script>