define(['jquery'],function($){
    //退出按钮操作
    $('.logout').on('click',function(){
        $.ajax({
            url: '/api/employee/employeeLogout',
            type: 'get',
            success:function(info){
                if(info.success){
                    location.href = '/login.html';
                }
            }
        })
    });
    //检测是否登录
    $.ajax({
        url: '/api/employee/checkRootLogin',
        type: 'get',
        success: function(info){
            if(info.error){
                location.href = '/login.html';
            }
        }
    })

})