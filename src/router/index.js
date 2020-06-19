import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router= new Router({
    // base:'',
    routes: [
        {
            path: '/home',
            name: 'home',
            component: () => import('../pages/home'),
            meta:{
                pageIndex:'',
                title:""
            }
        }
    ],
    // mode:'history'
})
router.afterEach((to,form)=>{
    
})
export default router
