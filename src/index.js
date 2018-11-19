import 'bootstrap/dist/css/bootstrap.min.css'
import './css/bootstrap-theme.min.css'
import './css/common.css'
import Vue from 'vue'
import TopImage from './template/common/topimg.vue'
import 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js'
new Vue({
    el: "#topImage",
    render: h=>h(TopImage)
});
