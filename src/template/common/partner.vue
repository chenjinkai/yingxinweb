<template>
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
                    <img :src="src1" class="img-responsive center-block">
                </a>
            </div>
            <div class="col-md-2">
                <a href="#">
                    <img :src="src2" class="img-responsive center-block">
                </a>
            </div>
            <div class="col-md-2">
                <a href="#">
                    <img :src="src3" class="img-responsive center-block">
                </a>
            </div>
            <div class="col-md-2">
                <a href="#">
                    <img :src="src4" class="img-responsive center-block">
                </a>
            </div>
            <div class="col-md-2">

            </div>
            <div class="col-md-2">

            </div>
        </div>
    </div>
</template>
<style>
</style>
<script>
    import DuoleshiPath from "../../images/duoleshi.jpg"
    import Libang from "../../images/libang.jpg"
    import Niuyuan from "../../images/niuyuan.jpg"
    import Laoban from "../../images/laoban.jpg"

    export default {
        data() {
            return {
                src1: DuoleshiPath,
                src2: Libang,
                src3: Niuyuan,
                src4: Laoban
            }
        }
    }
</script>
