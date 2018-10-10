<template>
  <div class="container">
    <h1 class="page-header">01.v-指令</h1>
    <p>-- {{ msg }} --</p>
  </div>
</template>

<script>
export default {
  name: '01',
  data () {
    return {
      msg: 'first page'
    }
  }
}
</script>

<style scoped lang="stylus"> // lang属性用来指定css样式的语言,指定为stylus可以在样式标签里使用js语法,连注释都和js一样
  .container{
    width: 100%;
    height: 100%;
    background: url("../assets/h2.jpg") no-repeat fixed 50% 50%;
    background-size: cover;
  }
</style>
