import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import homepage from '../../pages/1_homepage/homepage.vue'
import login from '../../pages/2_login/login.vue'
import register from '../../pages/3_register/register.vue'
import personalpage from '../../pages/4_personalpage/personalpage.vue'
import class_search from '../../pages/5_class_search/class_search.vue'
import bigevent from '../../pages/6_bigevent/bigevent.vue'
import comments from '../../pages/7_comments/comments.vue'
import schoolphoto from '../../pages/8_schoolphoto/schoolphoto.vue'
import groupphoto from '../../pages/9_groupphoto/groupphoto.vue'
import recruit from '../../pages/10_recruit/recruit.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // } ,
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/personalpage',
      name: 'personalpage',
      component: personalpage
    },
    {
      path: '/class_search',
      name: 'class_search',
      component: class_search
    },
    {
      path: '/bigevent',
      name: 'bigevent',
      component: bigevent
    },
    {
      path: '/comments',
      name: 'comments',
      component: comments
    },
    {
      path: '/schoolphoto',
      name: 'schoolphoto',
      component: schoolphoto
    }
    ,
    {
      path: '/groupphoto',
      name: 'groupphoto',
      component: groupphoto
    }
    ,
    {
      path: '/recruit',
      name: 'recruit',
      component: recruit
    }
  ]
})
