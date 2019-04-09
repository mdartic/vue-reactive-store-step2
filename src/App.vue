<template>
  <div id="app">
    <p v-if="myComputedState">{{ myComputedState }}</p>
    <p>Last data fetched : {{ state.data }}</p>
    <button @click="fetchData">Fetch data</button>
  </div>
</template>


<script>
import { store, fetchData } from "@/store";

export default {
  name: "App",
  data: () => ({
    state: store.state
  }),
  computed: {
    myComputedState: store.computed.myComputedState
  },
  methods: {
    fetchData
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
