<template>
    <div>
        <div class="row">
            <div id="carousel-div">
                <carousel></carousel>
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

<script>
    import carousel from './index/carousel.vue';
    export default {
        name: 'carousel-div',
        components:{
            "carousel":carousel
        }
    }
</script>