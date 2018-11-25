<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="Keywords" content="房屋维修,旧房装修,旧房翻新,墙面翻新,装修公司,厨房装修,卫生间装修"/>
    <meta name="Description" content="房屋维修,旧房装修,旧房翻新,墙面翻新,装修公司,厨房装修,卫生间装修"/>
    <title>瀛鑫房屋局部装修官网, 旧房翻新装修, 厨房，卫生间，地板, 墙面, 房屋维修服务公司</title>

    <!-- HTML5 shim 和 Respond.js 是为了让 IE8 支持 HTML5 元素和媒体查询（media queries）功能 -->
    <!-- 警告：通过 file:// 协议（就是直接将 html 页面拖拽到浏览器中）访问页面时 Respond.js 不起作用 -->
    <!--[if lt IE 9]>
    <script src="./js/html5shiv.min.js"></script>
    <script src="./js/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<div id="topImage"></div>
<div id="topBar"></div>
<!--&lt;!&ndash; static navbar &ndash;&gt;
<nav class="navbar navbar-custom navbar-static-top">

    <div class="container">
        <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li class="active"><a href="index.html">首页</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                       aria-expanded="false">服务项目<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">卫生间装修</a></li>
                        <li><a href="#">厨房装修</a></li>
                        <li><a href="#">墙面整修</a></li>
                        <li><a href="#">地板整修</a></li>
                    </ul>
                </li>
                <li><a href="#">维修师傅</a></li>
                <li><a href="#">施工案例</a></li>
                <li><a href="#">预约记录</a></li>
                <li><a href="#">自营门店</a></li>
                <li><a href="#">公司介绍</a></li>
                <li><a href="#">联系方式</a></li>
            </ul>
        </div>&lt;!&ndash;/.nav-collapse &ndash;&gt;
    </div>
</nav>-->

<div class="container" role="main">
    <div class="row">
        <div class="col-md-4">
            <div class="book-form">
                <form class="form-horizontal">
                    <div class="form-group">
                        <label for="name" class="col-md-3 control-label">联系人</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" autocomplete="off" id="name" placeholder="某先生，某女士">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="phone" class="col-md-3 control-label">联系电话</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" autocomplete="off" id="phone" placeholder="联系电话">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="service-detail" class="col-md-3 control-label">维修内容</label>
                        <div class="col-sm-9">
                        <textarea class="form-control" autocomplete="off" rows="2" id="service-detail"
                                  placeholder="卫生间装修，厨房装修，墙面整修，地板整修"></textarea>
                        </div>
                    </div>
                    <div class="form-group visit-date-container">
                        <label for="visit-date" class="col-md-3 control-label">上门日期</label>
                        <div class="input-group date form_date date-custom" data-date="" data-date-format="yyyy-MM-dd"
                             data-link-field="visit-date" data-link-format="yyyy-mm-dd">
                            <input class="form-control" type="text" value="" readonly>
                            <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                            <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                        </div>
                        <input type="hidden" id="visit-date" value=""/><br/>
                    </div>
                    <div class="form-group">
                        <label for="distinct" class="col-md-3 control-label">区域</label>
                        <div class="col-md-9">
                            <select class="form-control" id="distinct" name="distinct">
                                <option>宝山</option>
                                <option>闵行</option>
                                <option>浦东</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="address" class="col-sm-3 control-label">详细地址</label>
                        <div class="col-md-9">
                        <textarea class="form-control" autocomplete="off" rows="2" id="address"
                                  placeholder="详细地址"></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-md-offset-4 col-md-4">
                            <button type="submit" class="btn btn-lg btn-success">免费预约</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-md-8 carousel-container">
            <!-- 轮播图 -->
            <div id="imgCircle" class="carousel slide" data-ride="carousel" data-interval="3000">
                <!-- 轮播（Carousel）指标 -->
                <ol class="carousel-indicators">
                    <li data-target="#imgCircle" data-slide-to="0" class="active"></li>
                    <li data-target="#imgCircle" data-slide-to="1"></li>
                    <li data-target="#imgCircle" data-slide-to="2"></li>
                    <li data-target="#imgCircle" data-slide-to="3"></li>
                </ol>
                <!-- 轮播（Carousel）项目 -->
                <div class="carousel-inner">
                    <div class="item active">
                        <img src="images/carousel_1.png" alt="First slide">
                    </div>
                    <div class="item">
                        <img src="images/carousel_2.png" alt="Second slide">
                    </div>
                    <div class="item">
                        <img src="images/carousel_3.png" alt="Second slide">
                    </div>
                    <div class="item">
                        <img src="images/carousel_4.png" alt="Second slide">
                    </div>
                </div>
                <!-- 轮播（Carousel）导航：就是左右箭头，可省略 -->
                <a class="carousel-control left" href="#imgCircle"
                   data-slide="prev">‹
                </a>
                <a class="carousel-control right" href="#imgCircle"
                   data-slide="next">›
                </a>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="page-header col-md-12">
            <h4>服务流程</h4>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <img src="images/step.jpg" style="width: 100%;height: 150px;">
        </div>
    </div>

    <div class="row">
        <div class="page-header col-md-12">
            <h4>服务内容</h4>
        </div>
    </div>
    <div class="row service-row">
        <div class="col-md-3">
            <a href="#"><img src="images/service_1.jpg" class="img-responsive center-block"></a>
        </div>
        <div class="col-md-3 service-img-grid">
            <a href="#"><img src="images/service_2.jpg" class="img-responsive center-block"></a>
        </div>
        <div class="col-md-3 service-img-grid">
            <a href="#"><img src="images/service_3.jpg" class="img-responsive center-block"></a>
        </div>
        <div class="col-md-3 service-img-grid">
            <a href="#"><img src="images/service_4.jpg" class="img-responsive center-block"></a>
        </div>
    </div>

    <div class="row">
        <div class="page-header col-md-12">
            <h4>最新预约</h4>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-bordered booking-table">
                <tbody>
                <tr>
                    <th style="width:10%">服务类型</th>
                    <th style="width:50%">服务内容</th>
                    <th style="width:30%">客户信息</th>
                    <th style="width:10%">订单状态</th>
                </tr>
                <tr>
                    <td>厨房改造</td>
                    <td>（先电话沟通）二手房，使用面积20平方左右，需要整体翻新。请师傅联系客户了解情况报价和约时间，请引导客户淘宝网上支付费用</td>
                    <td>名称：卢***
                        电话：17765****96
                        地址：中国 广东 深圳 罗湖区-春风路庐山花园……
                        预约时间：2018-11-09 22:58
                    </td>
                    <td>待安排</td>
                </tr>
                <tr>
                    <td>厨房改造</td>
                    <td>（先电话沟通）二手房，使用面积20平方左右，需要整体翻新。请师傅联系客户了解情况报价和约时间，请引导客户淘宝网上支付费用</td>
                    <td>名称：卢***
                        电话：17765****96
                        地址：中国 广东 深圳 罗湖区-春风路庐山花园……
                        预约时间：2018-11-09 22:58
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>厨房改造</td>
                    <td>（先电话沟通）二手房，使用面积20平方左右，需要整体翻新。请师傅联系客户了解情况报价和约时间，请引导客户淘宝网上支付费用</td>
                    <td>名称：卢***
                        电话：17765****96
                        地址：中国 广东 深圳 罗湖区-春风路庐山花园……
                        预约时间：2018-11-09 22:58
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>厨房改造</td>
                    <td>（先电话沟通）二手房，使用面积20平方左右，需要整体翻新。请师傅联系客户了解情况报价和约时间，请引导客户淘宝网上支付费用</td>
                    <td>名称：卢***
                        电话：17765****96
                        地址：中国 广东 深圳 罗湖区-春风路庐山花园……
                        预约时间：2018-11-09 22:58
                    </td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div class="row working-ground">
        <div class="page-header col-md-12">
            <h4>施工现场</h4>
        </div>
    </div>
    <div class="row">
        <div class="col-md-3">
            <div>
                <img src="images/working_img_1.jpg" class="img-responsive center-block">
            </div>
            <div>
                瓷砖铺贴 北京市海淀区微波炉维修 压缩机维修 烟道维修 太阳
            </div>
        </div>
        <div class="col-md-3">
            <div>
                <img src="images/working_img_2.jpg" class="img-responsive center-block">
            </div>
            <div>
                抽油烟机维修 西安市灞桥区楼板开孔 中央空调安装 燃气灶维修
            </div>
        </div>
        <div class="col-md-3">
            <div>
                <img src="images/working_img_3.jpg" class="img-responsive center-block">
            </div>
            <div>
                墙面补腻子 北京市通州区环氧地坪漆 水表安装 监控设备安装
            </div>
        </div>
        <div class="col-md-3">
            <div>
                <img src="images/working_img_4.jpg" class="img-responsive center-block">
            </div>
            <div>
                背景墙瓷砖铺贴 西安市未央区组装衣柜 浴霸不出热风 液压机维
            </div>
        </div>
    </div>
    <div class="row margin-top">
        <div class="col-md-3">
            <div>
                <img src="images/working_img_1.jpg" class="img-responsive center-block">
            </div>
            <div>
                瓷砖铺贴 北京市海淀区微波炉维修 压缩机维修 烟道维修 太阳
            </div>
        </div>
        <div class="col-md-3">
            <div>
                <img src="images/working_img_2.jpg" class="img-responsive center-block">
            </div>
            <div>
                抽油烟机维修 西安市灞桥区楼板开孔 中央空调安装 燃气灶维修
            </div>
        </div>
        <div class="col-md-3">
            <div>
                <img src="images/working_img_3.jpg" class="img-responsive center-block">
            </div>
            <div>
                墙面补腻子 北京市通州区环氧地坪漆 水表安装 监控设备安装
            </div>
        </div>
        <div class="col-md-3">
            <div>
                <img src="images/working_img_4.jpg" class="img-responsive center-block">
            </div>
            <div>
                背景墙瓷砖铺贴 西安市未央区组装衣柜 浴霸不出热风 液压机维
            </div>
        </div>
    </div>


</div> <!-- /container -->

<div class="container">
    <div class="row">
        <div class="col-md-12 text-center margin-top">
            <h3>合作伙伴</h3>
        </div>
    </div>
    <hr/>
    <div class="row">
        <div class="col-md-2">
            <a href="#">
                <img src="images/duoleshi.jpg" class="img-responsive center-block">
            </a>
        </div>
        <div class="col-md-2">
            <a href="#">
                <img src="images/libang.jpg" class="img-responsive center-block">
            </a>
        </div>
        <div class="col-md-2">
            <a href="#">
                <img src="images/niuyuan.jpg" class="img-responsive center-block">
            </a>
        </div>
        <div class="col-md-2">
            <a href="#">
                <img src="images/laoban.jpg" class="img-responsive center-block">
            </a>
        </div>
        <div class="col-md-2">

        </div>
        <div class="col-md-2">

        </div>
    </div>
</div>

<footer>
    <div class="container footer">
        <div class="row footer-band">
            <div class="col-md-6">
                <h4><img src="images/bottom-logo.png"></h4>
                <p>我们一直致力于为用户提供更好的体验，更优质的服务！</p>
            </div>
            <div class="col-md-6">
                <div class="row">
                    <div class="col-md-3 text-right">
                        <!--<h4>联系方式</h4>-->
                        <!--<ul class="list-unstyled">-->
                        <!--<li><a href="#">关于我们</a></li>-->
                        <!--<li><a href="#">广告合作</a></li>-->
                        <!--<li><a href="#">友情链接</a></li>-->
                        <!--</ul>-->
                    </div>
                    <div class="col-md-3 text-right">
                        <!--<h4>联系方式</h4>-->
                        <!--<ul class="list-unstyled">-->
                        <!--<li><a href="#">关于我们</a></li>-->
                        <!--<li><a href="#">广告合作</a></li>-->
                        <!--<li><a href="#">友情链接</a></li>-->
                        <!--</ul>-->
                    </div>
                    <div class="col-md-3 text-right">
                        <h4>关于</h4>
                        <ul class="list-unstyled">
                            <li><a href="#">关于我们</a></li>
                            <li><a href="#">友情链接</a></li>
                            <li><a href="#">招聘</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3 text-right">
                        <h4>联系方式</h4>
                        <ul class="list-unstyled">
                            <li><a href="#">公众号</a></li>
                            <li><a href="#">办公电话</a></li>
                            <li><a href="#">办公地点</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="row beian">
            <div class="col-md-3">
            </div>
            <div class="col-md-3 text-right">
                <a href="#">京ICP备11008151号</a>
            </div>
            <div class="col-md-3 text-left">
                | 京公网安备11010802014853
            </div>
            <div class="col-md-3">
            </div>
        </div>
    </div>
</footer>
</body>
</html>
<style>

</style>
<script>
</script>
