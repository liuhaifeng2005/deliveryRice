/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-12-22 11:43:14
 * @version $Id$
 */
 $.noConflict();
var deliveryRice = window.deliveryRice || {};
// 页面数组
deliveryRice.pageArray = [];

// 返回页面卷起高度
deliveryRice.getScrollTop = function () {
	return (document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop) || 0; 
};
// 获取客户端可视范围
deliveryRice.getClientSize = function() {
	if(window.innerHeight) {
		return {
			width: window.innerWidth,
			height: window.innerHeight
		}
	} else {
		if(document.documentElement && document.documentElement.clientHeight) {
			return {
				width: document.documentElement.clientWidth,
				height: document.documentElement.clientHeight
			}
		} else {
			return {
				width: document.body.clientWidth,
				height: document.body.clientHeight
			}
		}
	}
}
// 平滑滚动
deliveryRice.pageSlide = function(obj, gap, time) {
	var h = jQuery("#" + obj).offset().top - gap;
	jQuery("body, html").stop(true, true).animate({"scrollTop": h}, time);
}
//tab切换
deliveryRice.tabContent = function(obj){

	var tabTit = obj.children(".tab_tit").children("li");
	var tabcont=obj.children(".tabcont");
	tabTit.click(function(){
		var index = tabTit.index(this);
		TabSelect(index);
	});
	function TabSelect(index){
		tabTit.removeClass("current");
		tabcont.removeClass("show");
		tabTit.eq(index).addClass("current");
		tabcont.eq(index).addClass("show");
	}
	var init = function(){
		tabTit.eq(0).addClass("current");
		tabcont.eq(0).addClass("show");
	}
	init();
}
// 初始化函数
deliveryRice.pageInit = function() {
	// 记录每一个page-num模块高度
	var pageNumLength = jQuery(".page-num").length;
	for(var i = 0; i < pageNumLength; i++) {
		deliveryRice.pageArray.push(jQuery(".page-num").eq(i).offset().top);
	}	
}
// 页面滚动
deliveryRice.scrollFix = function() {
	//pageArray
	for(var i = 0; i < deliveryRice.pageArray.length; i++) {
		if(deliveryRice.pageArray[i] <= deliveryRice.getScrollTop()) {
			jQuery("#jsNavMenu li").removeClass("curt").eq(i).addClass("curt");
		}
	}
	if(deliveryRice.getScrollTop()<=50){
		$(".nav-m").removeClass("min-hide");
	}else{
		$(".nav-m").addClass("min-hide");
	}
}


//输入框清空
deliveryRice.clearInputvalue = function(){
	var val= "";
	jQuery(".clear_input").focus(function(){
		val = jQuery(this).val();
		jQuery(this).val("");
	});
	jQuery(".clear_input").blur(function(){
		if(jQuery(this).val()==""){
			jQuery(this).val(val);
		}
	});
}

//对话框中央位置
/*deliveryRice.showDialog = function(objC){
	var objW = jQuery(window); 
	var brsW = objW.width();
	var brsH = objW.height();
	var sclL = objW.scrollLeft();
	var sclT = objW.scrollTop();
	var curW = objC.width();
	var curH = objC.height();
	var left = sclL + (brsW - curW) / 2;
	var top = sclT + (brsH - curH) / 2;
	objC.css({ "left": left, "top": top });
	objC.show();
}*/

deliveryRice.showDialog=function(elem){
	var obj = jQuery("#"+elem);
	console.log(jQuery(window).width()+"---"+obj.width())
    obj.css({ 
        top: (jQuery(window).height() - obj.height())/2,
        left: (jQuery(window).width() - obj.width())/2
    });
    obj.show();
    jQuery(".mask").show();
}


// 对话框相对元素位置 偏移l=left t= top 
deliveryRice.showPlace = function(l,t,obj,elem){
	var wzs=document.getElementById(elem);
    var lt=0, tp=0;
    lt+=obj.offset().left;
	tp += obj.offset().top;
	wzs.style.display="block";	
	wzs.style.left=lt-l+"px";
	wzs.style.top=tp+t+"px";		
}
// 对话框相对元素位置 偏移l=left t= top 
deliveryRice.close_place = function(obj){
	if(obj.hasClass("hc")){
		obj.removeClass("hc");
	}else{
		obj.hide();
	}		
}
jQuery(function(){
	
	jQuery(".close-btn").click(function(){
		jQuery(".mask").hide();
		jQuery(".float-box").hide();
	});
	jQuery(".mask").click(function(){
		jQuery(".mask").hide();
		jQuery(".float-box").hide();
	});
});
jQuery(document).on("click",function(e){
	var target  = jQuery(e.target);
	if(target.closest("#citysDialog").length == 0){
		jQuery("#citysDialog").hide();
	};

	jQuery("#choiceStayNum").hide();
	jQuery("#timeDialog").hide();
	//jQuery("#citysDialog").hide();
	jQuery("#supportDialog").hide();

	if(target.closest(".select-box").length == 0){
		jQuery(".select-box").removeClass("show");
	};
	
	if(target.closest("#setUserFloat").length == 0){
		jQuery("#setUserFloat").hide();
	};

	e.stopPropagation();
});







