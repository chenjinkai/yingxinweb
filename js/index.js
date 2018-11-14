var headBar = {
    props: ["links"],
    template: "<ul class=\"nav\">" +
        "<li><a href=\"/admin/home.do\">首页</a></li>" +
        "<li v-for=\"link in links\"><a v-bind:href='link.link' target='_blank'>{{ link.name }}</a></li>" +
        "</ul>"
}

var app = new Vue({
    el: '#app',
    data: {
        links : [
            {"name": "删除文件", "link":"/admin/deleteFile.do", "description":"物理删除配置文件！"},
            {"name": "删除配置关联关系", "link":"/admin/deleteReference.do", "description":"删除配置继承和引用关系！"},
            {"name": "删除子环境", "link":"/admin/deleteBuildGroup.do", "description":"删除子环境，以及子环境下所有配置！"},
            {"name": "rest api管理", "link":"/admin/apis.do", "description":"rest api以及访问权限管理！"}
        ]
    },
    components: {
        "head-bar" : headBar
    }
});