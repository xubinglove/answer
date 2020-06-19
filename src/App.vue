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
html, body, #app {
  width: 100%;
  height: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
#app {
  font-size: 16px;
  font-family:'PingFang SC', 'STHeiti','Microsoft YaHei','Helvetica','Arial','sans-serif';
}
</style>