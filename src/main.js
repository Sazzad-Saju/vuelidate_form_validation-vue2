import Vue from 'vue'
import Vuelidate from 'vuelidate'
// import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'

Vue.use(Vuelidate)
Vue.config.productionTip = false



new Vue({
    render: function(h) { return h(App) },
}).$mount('#app')