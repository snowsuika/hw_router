import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "*", // 所有的路由都會經過這一段，避免用戶進入錯誤連結
    redirect:'/', 
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue")
  },
  {
    path: "/products",
    name: "products",
    component: () =>
      import("../views/Products.vue")
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
  //需要做驗證
  {
    path: "/admin",
    component: () =>
      import("../views/Dashboard.vue"),
    children: [{
        path: "products", //內層的斜線可以省略
        component: () =>
          import("../views/admin/Products.vue")
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