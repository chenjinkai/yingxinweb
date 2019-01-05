<!-- static navbar -->
<template>
    <nav class="navbar navbar-custom navbar-static-top">

        <div class="container">
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li class="active">
                        <router-link to="/">首页</router-link>
                    </li>
                    <!--<li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                           aria-expanded="false">服务项目<span class="caret"></span></a>
                                            <ul class="dropdown-menu">
                                                <li><a href="#">卫生间装修</a></li>
                                                <li><a href="#">厨房装修</a></li>
                                                <li><a href="#">墙面整修</a></li>
                                                <li><a href="#">地板整修</a></li>
                                            </ul>
                    </li>-->
                    <li>
                        <router-link to="/service">服务项目</router-link>
                    </li>

                    <li><a href="#">维修师傅</a></li>
                    <li><a href="#">施工案例</a></li>
                    <li><a href="#">预约记录</a></li>
                    <li><a href="#">自营门店</a></li>
                    <li><a href="#">公司介绍</a></li>
                    <li><a href="#">联系方式</a></li>
                </ul>
            </div><!--/.nav-collapse -->
        </div>
    </nav>
</template>

<style>
    .navbar-custom {
        background-color: #00923f;
        border-color: #00923f;
        font-size: 16px;
    }

    .navbar-custom a {
        color: #fff;
        font-family: "微软雅黑";
    }

    .navbar-custom .navbar-brand {
        color: #fff;
    }

    .navbar-custom .navbar-brand:hover,
    .navbar-custom .navbar-brand:focus {
        color: #fff;
        background-color: #00b050;
    }

    .navbar-custom .navbar-text {
        color: #fff;
    }

    .navbar-custom .navbar-nav > li > a {
        color: #fff;
    }

    .navbar-custom .navbar-nav > li > a:hover,
    .navbar-custom .navbar-nav > li > a:focus {
        color: #fff;
        background-color: #00b050;
    }

    .navbar-custom .navbar-nav > .open > a,
    .navbar-custom .navbar-nav > .open > a:hover,
    .navbar-custom .navbar-nav > .open > a:focus {
        color: #fff;
        background-color: #00b050;
    }

    .navbar-custom .navbar-nav .dropdown .dropdown-menu {
        background-color: #00b050;
    }
</style>
<script>

</script>
