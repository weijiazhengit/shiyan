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
       redirect: '/list',
    component: () => import("../components/home.vue"),
    children:[
      {
        path:"/list",
        name:"list",
    
        component:()=> import('../components/list/list.vue')
      },
      {
        path:"/video",
        name:"video",
    
        component:()=> import('../components/video/video.vue')
      },
      {
        path:"/echarts",
        name:"echarts",
    
        component:()=> import('../components/echarts/echarts.vue')
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if(to.path === '/login'){
   next();
  }else{
    let token = window.sessionStorage.token 
    if(token === "null" || token === "" || token == undefined){
      next('/login')
    }else{
      next()
    }
  } 
 })


export default router;
