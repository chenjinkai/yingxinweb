<template>
    <footer>
        <div class="container footer">
            <div class="row footer-band">
                <div class="col-md-6">
                    <h4><img :src="src"></h4>
                    <p>我们一直致力于为用户提供更好的体验，更优质的服务！</p>
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-3 text-right">

                        </div>
                        <div class="col-md-3 text-right">

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
</template>
<style>

</style>
<script>
    import BrandImgPath from "../../images/bottom-logo.png";
    export default {
        data(){
            return {
                src: BrandImgPath
            }
        }
    }

</script>
