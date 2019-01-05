<template>
    <div>

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
    </div>
</template>

<script>
   $.get("http://localhost:8089/getLatestAppointments", function (data, status) {
       console.log(status);
       if (status === "success") {

       } else if(status === "error") {

       }
   });
</script>
