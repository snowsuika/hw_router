<template>
  <div>
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
  // props: {
  //   token:String
  // },
  created() {
    const ProductId = this.$route.params.id;
    this.isLoading = true;

    this.$http.get(`${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/ec/product/${ProductId}`)
      .then((res) => {
        this.product = res.data.data;
        this.isLoading = false;
      });
  },
}
</script>