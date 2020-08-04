<template>
  <div class="home">
    <nav style="padding:20px 0;">
      <router-link to="/index">首頁</router-link>|
      <router-link to="/products">產品列表</router-link>|
      <router-link to="/cart">購物車</router-link>|
      <router-link to="/login">登入</router-link>
    </nav>

      <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
  }
};
</script>
