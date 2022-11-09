import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import login from '../../pages/1_login/login.vue'
import homepage from '../../pages/2_homepage/homepage.vue'
import uesr_manage from '../../pages/3_uesr_manage/uesr_manage.vue'
import comments_manage from '../../pages/4_comments_manage/comments_manage.vue'
import recruit_manage from '../../pages/5_recruit_manage/recruit_manage.vue'
import photo_manage from '../../pages/6_photo_manage/photo_manage.vue'
import groupphoto_manage from '../../pages/7_groupphoto_manage/groupphoto_manage.vue'
import class_manage from '../../pages/8_class_manage/class_manage.vue'
import map_manage from '../../pages/9_map_manage/map_manage.vue'
import Live_manage from '../../pages/10_Live_manage/Live_manage.vue'

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
      name: 'login',
      component: login
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/uesr_manage',
      name: 'uesr_manage',
      component: uesr_manage
    },
    {
      path: '/comments_manage',
      name: 'comments_manage',
      component: comments_manage
    },
    {
      path: '/recruit_manage',
      name: 'recruit_manage',
      component: recruit_manage
    },
    {
      path: '/photo_manage',
      name: 'photo_manage',
      component: photo_manage
    },
    {
      path: '/groupphoto_manage',
      name: 'groupphoto_manage',
      component: groupphoto_manage
    },
    {
      path: '/class_manage',
      name: 'class_manage',
      component: class_manage
    }
    ,
    {
      path: '/map_manage',
      name: 'map_manage',
      component: map_manage
    }
    ,
    {
      path: '/Live_manage',
      name: 'Live_manage',
      component: Live_manage
    }
  ]
})
