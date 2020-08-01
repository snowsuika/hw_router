<template>
  <div>
    <div>後台的產品列表頁面</div>
    <table>
      <tr>
        <th>產品名稱</th>
        <th></th>
      </tr>
      <tr v-for="(item, index) in products" :key="index">
        <td>{{ item.title }}</td>
        <td> {{ item.content }} </td>
        <td> <router-link :to="`/admin/product/${item.id}`"> 看產品 </router-link> </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  // props: {
  //   token:String
  // },
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
