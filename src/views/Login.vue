<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <div class="form-signin">
      <form class="form-signin" @submit.prevent="signin">
        <h1 class="h3 mb-3 font-weight-normal">
          後台管理者登入頁面
        </h1>
        <div class="form-group">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input id="inputEmail" v-model="user.email" type="email" class="form-control" placeholder="Email address"
            required autofocus>
        </div>
        <div class="form-group">
          <label for="inputPassword" class="sr-only">Password</label>
          <input id="inputPassword" v-model="user.password" type="password" class="form-control"
            placeholder="Password" required>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">
          登入
        </button>
        <p class="mt-5 mb-3 text-muted">
          &copy; 2020~∞ - 六角學院
        </p>
      </form>
      </div>
    </div>
    
  </div>
</template>


<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      token:'',
    }
  },
  created() {
  },
  methods: {
      signin(){
        const api = `${process.env.VUE_APP_APIPATH}/api/auth/login`;
        this.isLoading = true;
        this.$http.post(api, this.user).then((res)=>{
          const token = res.data.token;
          const expired = res.data.expired;
          //把token 存進 cookie
          document.cookie = `token=${token};expires=${new Date(expired * 1000)}`;
          this.isLoading = false;
          //登入成功的話轉換頁面
          this.$router.push('/admin');
        }).catch((err) =>{
          console.log(err)
        })
    }
  },
}
</script>

<style lang="scss">
  .form-signin{
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }
</style>

