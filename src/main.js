// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import FastClick from 'fastclick'
FastClick.attach(document.body);

Vue.config.productionTip = false


// Vue.directive('scrollShow', {
//   bind: (el) => {
//     window.addEventListener('scroll', () => {
//       if (document.body.scrollTop + 600 > el.offsetTop) {
//         for (let i = 0; i < el.children.length; i++) {
//           setTimeout(() => {
//             el.children[i] ? el.children[i].style.display = 'block' : 0
//           }, 500 * i)
//         }
//       }
//     })
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

