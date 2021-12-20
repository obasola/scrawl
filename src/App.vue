<template>
  <div class="page">
    <div class="innerpage">
      <div id="nav">
        <Navigation />
      </div>
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
// @ is an alias to /src
import Navigation from "./components/Navigation.vue";


</script>

<style lang="scss">
.body{
  background-color: #000000;
  color: #ffffff;
}
.page {  
  color: #415411;
  background-color: #DDB970;
  font-weight: bold;
}
.innerpage{
  margin-left: 1.5em;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #41c8f8;
  a {
    font-weight: bold;
    color: #A9D387;

    &.router-link-exact-active {
      color: #42b983;
      font-weight: bold;
    }
  }
}

</style>