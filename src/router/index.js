import Vue from "vue";
import VueRouter from "vue-router"; 

Vue.use(VueRouter);

const routes = [
  {
    path: "/", 
    redirect: '/home',
     
  }, 
  {
    path: "/login",
    name: "login",
    // redirect: '/home',
    component: () => import("../components/login.vue")
  },
  {
    path: "/home",
    name: "home", 
    component: () => import("../components/home.vue")
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if(to.path === '/login'){
   next();
  }else{
    let token = window.localStorage.token
    console.log(token);
    if(token === "null" || token === "" || token == undefined){
      next('/login')
    }else{
      next()
    }
  } 
 })


export default router;
