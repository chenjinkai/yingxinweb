import 'bootstrap/dist/css/bootstrap.min.css';
import './css/bootstrap-theme.min.css';
import './css/common.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import TopImage from './template/common/topimg.vue';
import TopBar from './template/common/topbar.vue';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
Vue.use(VueRouter);

new Vue({
    el: "#topImage",
    render: h=>h(TopImage)
});

new Vue({
    el: "#topBar",
    render: h=>h(TopBar)
});
