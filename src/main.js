// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
// 	console.log("beforeEach!");
// 	window.location.href = "https://account.xiaomi.com/pass/serviceLogin?sid=miotstore&callback=";
// 	// window.location.href = `http://youpin.mi.com/app/shop/login?followup=https://home.mi.com/main#${to.path}`;
// 	// window.location.href = `http://youpin.mi.com/app/shop/login?followup=https://home.mi.com/main#${to.path}`;
// });


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
