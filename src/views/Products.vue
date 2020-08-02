<template>
  <div class="products">
    <loading :active.sync="isLoading"></loading>
    <div class="container">
    <table class="table table-hover" v-if="products.length">
      <thead>
        <tr>
          <th>產品名稱</th>
          <th>查看產品細節</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="item in products" :key="item.id">
        <td> {{ item.title }} </td>
        <td>
          <!-- 進入的方式有兩種 -->
          <!-- 第一種：透過 router-link -->
          <router-link :to="`/product/${item.id}`">查看商品細節</router-link>
          <!-- 第二種：透過方法，使用 @click="自定義的方法" -->
          <!-- <button type="button" @click="goPath(item.id)">查看商品細節</button> -->
        </td>
      </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
export default {
  // 因為 Loading 使用全域的方式引入，所以可以在任何地方呼叫他
  data() {
    return {
      products:[],
    };
  },
  created() {
    this.isLoading = true;
    // 屬於掛載在 Ｖue 環境下的 axios
    //環境變數：概念是因為可能會有開發團隊、測試環境、正式機，所以就會把參數拉出來，並依據不同團隊去做設定
    // process.env 屬於 Nodejs 的語法，因為目前 cli 是運行在 Nodejs 環境下
    // 加入環境變數後機器一定要重啟
    this.$http.get(`${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products`)
      .then((res) => {
        this.products = res.data.data;
        this.isLoading = false;
      });
  },
  methods: {
    // goPath(id){
      // 進入特定頁面：
      // (1) $route:只能取值
      // (2) $router：方法
      // this.$router.push(`/product/${id}`)
    // }
  },
}
</script>