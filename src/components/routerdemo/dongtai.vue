<template>
  <div class="hello">
    <div>{{id}}</div>
  </div>
</template>

<script>
export default {
  name: 'RouterDemo',
  data(){
    return{
      id:this.$route.params.id
    }
  },
 
  props: {
    msg: String
  },
  created(){
    
  },
  methods:{
    

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
