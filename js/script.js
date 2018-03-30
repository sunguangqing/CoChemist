$(function(){
    $(".prommr_btn").on("click", function(){
        $(this).toggleClass("on");
        $(".promm_reference").toggle();
    });

    // 图片放大
    $(".prom_img .promi_showbtn").on("click", function(){
        $(".prom_bigimg").fadeIn();
    });
    $(".prom_bigimg .close_show, .prom_bigimg").on("click", function(){
        $(".prom_bigimg").fadeOut();  
    });

    // Topics 切换
    $(".prom_tabs .promt_title").each(function() {
        $(this).on("click", function(){
            $(this).addClass("active").siblings().removeClass("active");
            $(this).next().show().siblings("div.promt_content").hide();
            var promtcontent = Math.ceil($(this).next().height() + 64);
            $(".prom_tabs").css("height", promtcontent);
        })        
    });
    function promtHeight(){
        var promtabs = Math.ceil($(".prom_tabs .promt_content.active").height() + 64);
        $(".prom_tabs").css("height", promtabs);
    }
    promtHeight();

    function mainHeight(){
        var maincontent = $(window).height() - $(".footer").outerHeight(true) - $(".hd_top").outerHeight(true); 
        $(".main").css("min-height", maincontent);
    }    
    mainHeight();

    var htmlWidth = $(window).width();
    $(window).resize(function() {   
        mainHeight();

        var refeWidth = $(window).width();  
        if(htmlWidth !== refeWidth){
            location.reload(true);  
        }
    })
  
    // 记住密码
    $(".loginm_registerbtn").on("click", function(){
        var _checked = $(".loginm_registerbtn input").prop("checked");
        if(_checked){
            $(".loginm_registerbtn span").addClass("active");
        }else{
            $(".loginm_registerbtn span").removeClass("active");
        }
    });

    //提示框
    $(".popoverone").on("click", function(){ 
        $(".popoverone").popover("show");
    });
    $(".popovertwo").on("click", function(){ 
        $(".popovertwo").popover("show");
    });

    // 添加邮箱
    $(".useremailadd .fa-plus").on("click", function(){
        var _emaillen = $(".usermr_content .addemail").length;
        if(_emaillen < 6){
            var _html = '<div class="form-group addemail"><label class="col-sm-3 col-xs-4 control-label"></label><div class="col-sm-9 col-xs-8 useremailaddbox"><input type="email" class="form-control" id="mail" placeholder="....."><div class="useremailadd2"><i class="fa fa-minus"></i></div></div></div>';
            $(".addemail").last().after(_html);
        }else{
            $('#addEmailBox').modal({backdrop:"static"}); 
            $('html').css("overflow", "hidden");
            $(".hd_top").addClass("top_modal");
            $('body').bind("touchmove",function(e){
                e.prevenDefault();
            });
        }
    });
    $(".modal-dialog .close_btn").on("click", function(){
        $('html').css("overflow", "scroll");
        $(".hd_top").removeClass("top_modal");
        $('body').unbind("touchmove",function(e){
            e.prevenDefault();
        });
    });

    $(document).on("click", ".useremailadd2", function(e){
        $(this).parents(".addemail").remove();
    });

    $(".usermc_left .lg_hidden").on("click", function(e){
        e.stopPropagation();
        $(".userm_content .usercc_left").toggleClass("show");
    });

    $(document).on("click",function(){
        $(".userm_content .usercc_left").removeClass("show");
    })
    

    // Ｑ & A 切换标题
    $(".qa_tabbtn li").on("click", function(){
        var qa_tabtext = $(this).find("a").text();
        $(".qa_title").text(qa_tabtext);
    });
    
});

































