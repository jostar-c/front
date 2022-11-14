// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import globalvariable from '../global_variable.js'
import globalfunc from '../global_func'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
<<<<<<< HEAD

=======
import './assets/common.css'
>>>>>>> 0117a06 (修改了后台框架，初步完成后台留言审核， 前台主页)
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.global = globalvariable
Vue.use(globalfunc)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
