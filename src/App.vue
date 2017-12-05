<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }

</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  li {
    list-style: none;
  }
  /*去除chrome选中发光*/

  input,
  button,
  select,
  textarea {
    outline: none;
  }

  #app {
    height: 100%;
  }

</style>
