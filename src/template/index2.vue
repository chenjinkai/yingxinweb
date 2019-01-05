<template>
    <div>
        <div id="carousel-div">
            <carousel></carousel>
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

        <div id="serviceContent-div">
            <serviceContent></serviceContent>
        </div>

        <div id="newAppointment-div">
            <newAppointment></newAppointment>
        </div>
    </div>
</template>

<script>
    import carousel from './index/carousel.vue';
    import serviceContent from './index/serviceContent.vue';
    import newAppointment from './index/newAppointment.vue'

    export default {
        name: 'carousel-div',
        components: {
            "carousel": carousel,
            "serviceContent": serviceContent,
            "newAppointment": newAppointment
        }
    }
</script>