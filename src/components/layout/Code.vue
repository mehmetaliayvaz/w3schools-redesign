<template>
  <div v-highlight>
    <vue-code-highlight language="javascript">
      <pre class="language-javascript">
        <code class="language-javascript">
{{ code }}
        </code>   
      </pre>
    </vue-code-highlight>
  </div>

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