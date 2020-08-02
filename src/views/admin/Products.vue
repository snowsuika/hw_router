<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container">
    <table class="table table-hover" v-if="products.length">
      <thead>
      <tr>
        <th>產品名稱</th>
        <th>產品描述</th>
        <th>查看商品細節</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in products" :key="index">
        <td> {{ item.title }} </td>
        <td class="text-left"> {{ item.content }} </td>
        <td> <router-link :to="`/admin/product/${item.id}`"> 查看商品細節 </router-link> </td>
      </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  props: {
    token:String
  },
  created() {
    //後台 API
    const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/ec/products`;
    this.isLoading = true;
    this.$http.get(url).then(res => {
      console.log(res);
      this.products = res.data.data;
      this.isLoading = false;
    });
  }
};
</script>
