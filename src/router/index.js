import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // 所有的路由都會經過這一段，避免用戶進入錯誤連結
  {
    path: "*", 
    redirect:'/', 
  },
  {
    path: "/",
    component:()=>import("../views/Home.vue"),
    children:[
      //預設子路由
      {
        path: "",
        name: "FrontEnd",
        component: () => import("../views/Index.vue")
          
      },
      {
        path: "/index",
        name: "index",
        component: () => import("../views/Index.vue")
          
      },
      {
        path: "/products",
        name: "products",
        component: () => import("../views/Products.vue")
          
      },
      {
        path: "/product/:id", //冒號後面是可以自定義的
        name: "product",
        component: () =>
          import("../views/Product.vue")
      },
      {
        path: "/cart",
        name: "cart",
        component: () =>
          import("../views/Cart.vue")
      },
      {
        path: "/login",
        name: "login",
        component: () =>
          import("../views/Login.vue")
      },
    ]
  },
  
  //需要做驗證
  {
    path: '/admin',
    component: () =>
      import("../views/Dashboard.vue"),
      children: [
        //預設子路由
        {
          path: '', //內層的斜線可以省略
          name :'admin',
          component: () =>
            import("../views/admin/Products.vue")
        },
      {
        path: 'products', //內層的斜線可以省略
        name :'products',
        component: () =>
          import("../views/admin/Products.vue")
      },
      {
        path: "product/:id", //內層的斜線可以省略
        component: () =>
          import("../views/admin/Product.vue")
      },
      {
        path: "coupons", //內層的斜線可以省略
        component: () =>
          import("../views/admin/Coupons.vue")
      },
      {
        path: "orders", //內層的斜線可以省略
        component: () =>
          import("../views/admin/Orders.vue")
      },
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;

//開發順序：
// 1. 先開 vue 檔
// 2. 撰寫路由表
// 3. 補上連結 router-view