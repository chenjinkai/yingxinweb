<template>
    <div class="row">

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
                        <img src="../../images/carousel_1.png" alt="First slide">
                    </div>
                    <div class="item">
                        <img src="../../images/carousel_2.png" alt="Second slide">
                    </div>
                    <div class="item">
                        <img src="../../images/carousel_3.png" alt="Second slide">
                    </div>
                    <div class="item">
                        <img src="../../images/carousel_4.png" alt="Second slide">
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
</template>