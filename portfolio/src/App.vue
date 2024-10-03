
<script>
  import AppHeader from './components/AppHeader.vue';


  export default {
    data() {
      return {
        title: 'Portfolio',
      }
    },
    name: 'App',
    components: {
      AppHeader
    }
  }
</script>

<template>
    <div id="app">
      <AppHeader />
      <router-view></router-view>
    </div>
</template>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>

