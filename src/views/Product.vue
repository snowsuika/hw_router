<template>
  <div class="product">
    <loading :active.sync="isLoading"></loading>
    {{ product.title }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      product:{},
    }
  },
  created() {
    // $route 屬性
    // $router 方法

    this.isLoading = true;
    const ProductId = this.$route.params.id; //透過這種方式可以把上面 id 取出來
    this.$http.get(`${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/product/${ProductId}`)
      .then((res) => {
        this.product = res.data.data;
        this.isLoading = false;
      });
  },
}
</script>