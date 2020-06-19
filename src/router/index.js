import Vue from 'vue'
import Routser from 'vue-router'
import {recordData} from '../vendor/commonMethods';
Vue.use(Routser)
const router= new Routser({
  routes: [
    {
      path: '/sprite',
      name: 'sprite',
      component: () => import('../pages/sprite'),
      meta:{
        pageIndex:26
      }
    }
  ],
  // mode:'history'
})
router.afterEach((to,form)=>{
    recordData(to.meta.pageIndex,to.query.channel)
})
export default router