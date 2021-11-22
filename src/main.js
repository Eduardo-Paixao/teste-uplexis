import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBriefcase, faTree, faGavel, faGlobe, faUniversity, faBan, faGlobeAmericas, faGem, faMale, faPiggyBank } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBriefcase, faTree, faGavel, faGlobe, faUniversity, faBan, faGlobeAmericas, faGem, faMale, faPiggyBank)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;
Vue.use(Antd);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
