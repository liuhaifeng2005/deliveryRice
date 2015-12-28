/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-12-22 11:44:07
 * @version $Id$
 */

jQuery(function () {
	//首页banner
	if(jQuery("#jsBannerWrap").length > 0){
		(function(){
			jQuery("#jsBannerWrap").css({
				'height': jQuery(window).height(),
				'width': jQuery(window).width()
			});
			jQuery(window).resize(function() {
				jQuery("#jsBannerWrap").css({
					'height': jQuery(window).height(),
					'width': jQuery(window).width()
				});
			});
		})()			
	}
	//banner arrow定位
	jQuery(".tips .arrow-icon").on("click",function() {
		deliveryRice.pageSlide("pageNum2", 0, 400);
	});

	//联系我们选中效果
	jQuery(".form-info .label-box input").focus(function(){
		jQuery(this).parents("label").addClass("bdwhite");
	});
	jQuery(".form-info .label-box input").blur(function(){
		jQuery(this).parents("label").removeClass("bdwhite");
	});
	//联系我们单选框
	jQuery(".form-info .check-input").click(function(){
		var obj = jQuery(this),
		checkbox = obj.parents(".check-box");
		checkbox.find(".check-input").removeClass("choice");
		obj.addClass("choice");
		checkbox.children("input[type=hidden]").val(checkbox.find(".check-input").index(obj));
	});
	//时间轴
	(function(){
		var dlWidth = jQuery("#jsTimeList").children().length*170+55;
		var screenWidth = jQuery(window).width();
		jQuery("#jsTimeList").css({"width":dlWidth});
		jQuery(".time-line").mousemove(function (e) {
			var delta = -(e.pageX / screenWidth * dlWidth - e.pageX);
			jQuery("#jsTimeList").css({"left":delta});
        });

	})();

	//导航
	(function () {
		//页面相关参数初始化
		deliveryRice.pageInit();
		var processor = {
	        timeoutId : null,
	        //实际处理方法
	        performProcessing : function(){
	            //定位
				deliveryRice.scrollFix();
	        },
	        //初始处理调用方法
	        process : function(){
	            clearTimeout(this.timeoutId);
	            var that  = this;
	            this.timeoutId = setTimeout(function(){
	                that.performProcessing();
	            }, 50)
	        }
	    }
		// 滚动检测
		jQuery(window).scroll(function(){
			processor.process();
			
		});
		//页面定位
		jQuery("#jsNavMenu li").on("click",function() {
			var pos = jQuery(this).attr("data-pos");
			deliveryRice.pageSlide(pos, 0, 800);
		});

		//移动端页面定位
		jQuery("#jsNavMenu-m dd").on("click",function() {
			var pos = jQuery(this).attr("data-pos");
			deliveryRice.pageSlide(pos, 0, 400);
		});
		jQuery("#jsNavMenu-m .m-menu").click(function(e){
			if(jQuery("#jsNavMenu-m dd").is(":visible")){
				jQuery("#jsNavMenu-m dd").hide();
			}else{
				jQuery("#jsNavMenu-m dd").show();
			}
			e.stopPropagation();
		});
		jQuery("#jsNavMenu-m dd").click(function(e){
			jQuery("#jsNavMenu-m dd").hide();
			e.stopPropagation();
		});


	})();

	//立即加入我们弹窗
	jQuery(".join-now").click(function(){
		deliveryRice.showDialog("js-joinUs");
	});

	jQuery(".s-btn").click(function(){
		jQuery("#js-joinUs").hide();
		deliveryRice.showDialog("js-subSuccess");
	});

});

