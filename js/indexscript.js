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
    
    if(htmlWidth < 1024){
        // 切换li
         $(".indexcl_tabbox .indexcl_change").on("click", function(){
             $(".indexcl_tabbox .nav-tabs").toggle();
         });
         $(".indexcl_tabbox .nav-tabs li").on("click", function(){
             $(".indexcl_tabbox .nav-tabs").hide();
             $(".indexcl_tabbox .indexcl_change").text($(this).text());
         });
 
         function tabpanBr(){
             $(".indexcl_tabs2 .tab-content .tab-pane").each(function(){
                 var tabas = $(this).find("a"),
                     tabalen = tabas.length;
                 if(tabalen >= 3 && tabalen <= 4){
                     tabas.eq(1).after("<br />");
                 }else if(tabalen > 4 && tabalen <= 6){
                     tabas.eq(1).after("<br />");
                     tabas.eq(3).after("<br />");
                 }else if(tabalen > 6){
                     tabas.eq(Math.floor(tabalen/3)).after("<br />");
                     tabas.eq(Math.floor(2*tabalen/3)).after("<br />");
                 }
             });
         }
         tabpanBr();
         
         // 首页滑动
         $(".indexcl_hotchemicals").swipe({
             swipeLeft:function(){
                 // 向左滑动执行
                 var _index = $(".indexcl_hotchemicals > .row.active").index() + 1,            
                     _len = $(".indexcl_hotchemicals > .row").length;
                 if(_index < _len){
                     $(".indexcl_hotchemicals > .row").eq(_index).addClass("active").siblings().removeClass("active");
                     $(".paginationbox ul li").eq(_index).addClass("active").siblings().removeClass("active");
                 }
             },
             swipeRight:function(){
                 // 向右滑动执行
                 var _index = $(".indexcl_hotchemicals > .row.active").index() - 1;
                 if(_index >= 0){
                     $(".indexcl_hotchemicals > .row").eq(_index).addClass("active").siblings().removeClass("active");
                     $(".paginationbox ul li").eq(_index).addClass("active").siblings().removeClass("active");
                 }
             }
         });
         
         $(".indexcl_chemists").swipe({
             swipeLeft:function(){
                 // 向左滑动执行
                 var _index = $(".indexcl_chemists > .row.active").index() + 1,            
                     _len = $(".indexcl_chemists > .row").length;
                 if(_index < _len){
                     $(".indexcl_chemists > .row").eq(_index).addClass("active").siblings().removeClass("active");
                     $(".paginationbox ul li").eq(_index).addClass("active").siblings().removeClass("active");
                 }
             },
             swipeRight:function(){
                 // 向右滑动执行
                 var _index = $(".indexcl_chemists > .row.active").index() - 1;
                 if(_index >= 0){
                     $(".indexcl_chemists > .row").eq(_index).addClass("active").siblings().removeClass("active");
                     $(".paginationbox ul li").eq(_index).addClass("active").siblings().removeClass("active");
                 }
             }
         });
     }
 
     // Banner
     $('.carousel').carousel({
         interval: 3000
     });
 
     // 删除
     $(".indexcl_tabs2 .tab-content a span").on("click", function(event){
         event.preventDefault();
         $(this).parent().remove();
     });
 
     $(".indexc_left .indexcl_tabs2 li a span").on("click", function(){
         var _parent = $(this).parent().parent(),
             parentIndex = _parent.index(),
             _class = _parent.attr("class"),
             llen = $(".indexc_left .indexcl_tabs2 li").length-1;
 
             if(llen >= 1){
                 if(typeof(_class) !== "undefined" && parentIndex !== 0 && _class !== ""){
                     _parent.prev().addClass("active");        
                     $(".indexcl_tabs2 .tab-content > div").eq(parentIndex-1).addClass("active");
     
                 }else if(typeof(_class) !== "undefined" && _class !== ""){
                     _parent.next().addClass("active");        
                     $(".indexcl_tabs2 .tab-content > div").eq(parentIndex+1).addClass("active");
                 }
             }
         _parent.remove();
         $(".indexcl_tabs2 .tab-content > div").eq(parentIndex).remove();
     });
 
     // 图片遮罩
     $(".indexcl_hotchemicals .index_pro > div .overplay_text").mousemove(function(){
         $(".indexcl_hotchemicals .overplay_text, .indexcl_hotchemicals .overplay_img").removeClass("show");
         $(this).addClass("show");
         $(this).siblings(".overplay_img").addClass("show");
     });
     $(".indexcl_hotchemicals .overplay_text").mouseout(function(){
         $(".indexcl_hotchemicals .overplay_text").removeClass("show");
         $(".indexcl_hotchemicals .overplay_img").removeClass("show");
     });
     
     // 分页
     var isActive = true;
     function hotChemicalsOrChemists(){
         if(isActive){
             $(".indexcl_hotchemicals > .row").eq(0).addClass("active").siblings().removeClass("active");
             var  pageIndex = null,            
                 _html = '<li class="active"><span>1</span></li>',
                 pagelen = $(".indexcl_hotchemicals > .row").length;        
             for(var i = 2; i <= pagelen; i++){
                 _html += '<li><span>'+ i +'</span></li>';
             }
             $(".paginationbox ul").html(_html);        
             $(document).on('click', '.paginationbox ul li', function(){
                 pageIndex = $(this).index();
                 $(this).addClass("active").siblings().removeClass("active");
                 $(".indexcl_hotchemicals > .row").eq(pageIndex).addClass("active").siblings().removeClass("active");
             })
         }else if(!isActive){
             $(".indexcl_chemists > .row").eq(0).addClass("active").siblings().removeClass("active");
             var  pageIndex = null,            
                 _html = '<li class="active"><span>1</span></li>',
                 pagelen = $(".indexcl_chemists > .row").length;        
             for(var i = 2; i <= pagelen; i++){
                 _html += '<li><span>'+ i +'</span></li>';
             }
             $(".paginationbox ul").html(_html);        
             $(document).on('click', '.paginationbox ul li', function(){
                 pageIndex = $(this).index();
                 $(this).addClass("active").siblings().removeClass("active");
                 $(".indexcl_chemists > .row").eq(pageIndex).addClass("active").siblings().removeClass("active");
             })
         }
     }
     hotChemicalsOrChemists();
     $(".indexc_left > .nav-tabs > li").eq(0).on("click", function(){
         isActive = true;
         hotChemicalsOrChemists();
     });
     $(".indexc_left > .nav-tabs > li").eq(1).on("click", function(){
         isActive = false;
         hotChemicalsOrChemists();
     });
 
  
    // 记住密码
    $(".loginm_registerbtn").on("click", function(){
        var _checked = $(".loginm_registerbtn input").prop("checked");
        if(_checked){
            $(".loginm_registerbtn span").addClass("active");
        }else{
            $(".loginm_registerbtn span").removeClass("active");
        }
    });

});
