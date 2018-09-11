<template>
  <div class="hello">
   <h3>{{ msg }}</h3>
   <group>
      <cell title="title" value="value"></cell>
    </group>
  </div>
  
</template>

<script>
import { Cell, Group } from 'vux'
export default {
  name: 'Home',
  components: {
      Cell,
      Group
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
