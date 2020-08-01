<template>
  <div id="app">
    <loading :active.sync="isLoading"></loading>
    <div id="nav">
      <router-link to="/">首頁</router-link>|
      <router-link to="/about">關於商店</router-link>|
      <router-link to="/products">產品列表</router-link>|
      <router-link to="/cart">購物車</router-link>|
      <router-link to="/login">後台登入</router-link>|
    </div>
      <hr>
    <router-view />
  </div>
</template>

<script>
//這邊所有的元件都是採用 export default 的方式把元件給匯出出來
export default {
  // 因為 Loading 使用全域的方式引入，所以可以在任何地方呼叫他
  data() {
    return {
      isLoading: false
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
