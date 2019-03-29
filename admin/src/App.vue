<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html, body {
  min-width: 1210px;
}
#app {
  font-family: 'MicrosoftYaHei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.clearfix:after {
  content: '';
  display: block;
  height: 0;
  font-size: 0;
  overflow: hidden;
  clear: both;
}
a {
  text-decoration: none;
}
</style>
