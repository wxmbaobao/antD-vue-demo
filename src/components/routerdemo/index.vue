<template>
  <div class="hello">
    <button @click="click1">动态路由匹配</button>
  </div>
</template>

<script>
export default {
  name: 'RouterDemo',
  props: {
    msg: String
  },
  methods:{
    click1(){
      this.$router.push('/router1/666')
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
