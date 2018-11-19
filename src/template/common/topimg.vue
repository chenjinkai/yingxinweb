<template>
    <div id="top-image" class="top-image-container">
        <div class="container">
            <div class="top-image">
                <img :src="src" class="img-responsive" alt="Responsive image">
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
    import topImagePath from '../../images/top_image.jpg'
    export default{
        data(){
            return {
                src:topImagePath
            }
        }
    }
</script>