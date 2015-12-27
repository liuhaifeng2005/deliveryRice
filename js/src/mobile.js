/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-12-22 11:44:07
 * @version $Id$
 */
/*
*
*
*zepto 库
*
*
*/
$(function(){
	//zepto
	//图片焦点图
	if (document.getElementById("slideFocus")) {
      	$('#slideFocus').swipeSlide({
	        continuousScroll:true,
	        speed : 5000,
	        transitionType : 'cubic-bezier(0.22, 0.69, 0.72, 0.88)',
	        callback : function(i){
	            $('.dot').children().eq(i).addClass('cur').siblings().removeClass('cur');
	        }
    	});
  	}

  	//表格拖动
  	(function(){
  		var myScroll = new IScroll('#jsFeeTable', { eventPassthrough: true, scrollX: true, scrollY: false, preventDefault: false });
  	})();


  	
})