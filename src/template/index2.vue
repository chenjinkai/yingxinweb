<template>
    <div>
        <div class="row">
            <!--        <div class="col-md-4">
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
                    </div>-->
            <div class="col-md-12 carousel-container">
                <!--轮播图 -->
                <div id="imgCircle" class="carousel slide" data-ride="carousel" data-interval="3000">
                    <!--轮播（Carousel）指标 -->
                    <ol class="carousel-indicators">
                        <li data-target="#imgCircle" data-slide-to="0" class="active"></li>
                        <li data-target="#imgCircle" data-slide-to="1"></li>
                        <li data-target="#imgCircle" data-slide-to="2"></li>
                        <li data-target="#imgCircle" data-slide-to="3"></li>
                    </ol>
                    <!--轮播（Carousel）项目 -->
                    <div class="carousel-inner">
                        <div class="item active">
                            <img src="../images/carousel_1.png" alt="First slide">
                        </div>
                        <div class="item">
                            <img src="../images/carousel_2.png" alt="Second slide">
                        </div>
                        <div class="item">
                            <img src="../images/carousel_3.png" alt="Second slide">
                        </div>
                        <div class="item">
                            <img src="../images/carousel_4.png" alt="Second slide">
                        </div>
                    </div>
                    <!--轮播（Carousel）导航：就是左右箭头，可省略 -->
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
                <img src="../images/step.jpg" style="width: 100%;height: 150px;">
            </div>
        </div>

        <div class="row">
            <div class="page-header col-md-12">
                <h4>服务内容</h4>
            </div>
        </div>
        <div class="row service-row">
            <div class="col-md-3">
                <a href="#"><img src="../images/service_1.jpg" class="img-responsive center-block"></a>
            </div>
            <div class="col-md-3 service-img-grid">
                <a href="#"><img src="../images/service_2.jpg" class="img-responsive center-block"></a>
            </div>
            <div class="col-md-3 service-img-grid">
                <a href="#"><img src="../images/service_3.jpg" class="img-responsive center-block"></a>
            </div>
            <div class="col-md-3 service-img-grid">
                <a href="#"><img src="../images/service_4.jpg" class="img-responsive center-block"></a>
            </div>
        </div>

    </div>
</template>
