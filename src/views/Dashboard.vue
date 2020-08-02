<template>
  <div>
    <nav style="padding:20px 0;">
      <router-link to="/">回前台頁面</router-link>｜
      <router-link to="/admin/products">產品列表</router-link>｜
      <router-link to="/admin/orders">訂單列表</router-link>｜
      <router-link to="/admin/coupons">優惠券</router-link>｜
      <a href="#" @click.prevent="signOut()">登出</a>
    </nav>
    <!-- 當驗證成功的時候在元件上面使用 props 把 token 給子元件 -->
    <!-- 寫 v-if="checkSuccess" 當非同步事件跑完後才顯示 router-view -->
    <router-view :token="token" v-if="checkSuccess"></router-view>
  </div>
</template>

<script>
export default {
  //確認是否在登入的狀態
  data() {
    return {
      token:'',
      checkSuccess:false, // 驗證登入狀態
    }
  },
  created() {
    this.checkLogin()
  },
  methods: {
    checkLogin(){
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,"$1");
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
      
      const api = `${process.env.VUE_APP_APIPATH}api/auth/check`;
      this.$http.post(api,{
        "api_token":this.token
        })
        .then(() => {
          // console.log(res)
          this.checkSuccess = true;
        })
        .catch((err)=>{
          console.log(err)
          //錯誤的時候要把他踢回去 Login
          this.$router.push('/login')
        })
    },
    signOut(){
      const api = `${process.env.VUE_APP_APIPATH}api/auth/logout`;

      this.$http.post(api,{
        "api_token":this.token
        })
        .then(() => {
          this.checkSuccess = false;
          this.$router.push('/login');
        })
        .catch((err)=>{
          console.log(err)
        })
    }
  },
}
</script>