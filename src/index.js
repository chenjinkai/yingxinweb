import Vue from 'vue';
import VueRouter from 'vue-router';
import TopImage from './template/common/topimg.vue';
import TopBar from './template/common/topbar.vue';
import Partner from './template/common/partner.vue';
import Footer from './template/common/footer.vue';
import Index from './template/index2.vue';
import Service from './template/service/service2.vue';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/bootstrap-theme.min.css';
import './css/common.css';

Vue.use(VueRouter);

new Vue({
    el: "#topImage",
    render: h => h(TopImage)
});

new Vue({
    el: "#partner",
    render: h => h(Partner)
});

new Vue({
    el: "#footer",
    render: h => h(Footer)
});

var router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            component: Index,
            meta: {
                title: '首页'
            }
        },
        {
            path: '/service',
            component: Service,
            meta: {
                title: '服务项目'
            }
        },
        {
            path: '*', redirect: '/'
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        window.document.title = to.meta.title;
    }
    next();
});

new Vue({
    el: "#app",
    router: router,
    components: {
        topbar: TopBar
    }
});
