// JavaScript Document
$(function(){
	$("input[type=button]").click(function(){
      var txt=$("input[type=text]").val();
      if($.trim(txt)!=""){
		  var Objs = $("p,h3").filter(":contains('"+txt+"')");
		  alert($(Objs[0]).text());
		  $(Objs).show().css("background","red");
      }else{
		  $("p,h3").css("background","#fff").show();
      }
    })
//	轮换板 start
	var timer = setInterval(lunhuan,3000);//设置自动切换定时器
	var cur = 0;//定义全局变量，用来存需要展示的图片的序号
	
	function lunhuan(){
		cur++;
		if(cur>=$('#flash img').length){
			cur=0;
		}
		flashShow();
	}
	function flashShow(){
		$('#flash img:eq('+cur+')').fadeIn('slow').attr('class','cur');//淡入点击的目标对象
		$('#flash img').not($('#flash img:eq('+cur+')')).css({'display':'none'}).removeAttr('class');//隐藏其他img
		$('#flash ul li:eq('+cur+')').css('background','#E4393C').attr('class','cur');//突出点击的目标序号
		$('#flash ul li').not($('#flash ul li:eq('+cur+')')).css('background','#999999').removeAttr('class');//隐藏其他的li
	}
	$('#flash img').mouseover(function(){
		clearInterval(timer);//清除定时器
		cur = $(this).index();
		flashShow();
	})
	$('#flash img').mouseout(function(){
		timer = setInterval(lunhuan,3000);//设置自动切换定时器
	})
	$('#flash ul li').mouseover(function(){
		clearInterval(timer);//清除定时器
		cur = $(this).index();
		flashShow();
	})
	$('#flash ul li').mouseout(function(){
		timer = setInterval(lunhuan,3000);//设置自动切换定时器
	})
//	轮换板 over
//	jquery tab切换页 start
	$('.tab ul li').mouseover(function(){
		var index = $(this).index();//获得移入的li序号
		var left = index*212+20;//计算小滑块的left值
		$('.tab .huakuai').stop();
		$('.tab .huakuai').animate({left:left+'px'},500);//给小滑块赋值
		$('.tab .con').hide().eq(index).show();
	})
//	jquery tab切换页 over
//	固定位置 start
	function guding(){
		// 已经滚动上去的页面高度+可视区域高度-广告区域的高度
		var top = document.documentElement.scrollTop ;
		$('.guding').css('top',top+'px');
	}
	guding();
	window.onscroll = function(){
		guding();
	}
//	固定位置 over
//	#side li 侧边动画 start
	$("#side li").mouseover(function(){
		var index = $(this).index();//获得移入的li序号
		$("#side li:eq("+index+") a").css("text-decoration","underline");
	});
	$("#side li").mouseout(function(){
		$("#side li a").css("text-decoration","none");
	})
	$("#side li").mousedown(function(){
		var index = $(this).index();//获得移入的li序号
		$("#side li:eq("+index+") div").slideToggle("slow");//自动开关点击的目标对象
		$("#side li div").not($("#side li:eq("+index+") div")).slideUp("slow");//隐藏其他li里的div
	});
//	#side li 侧边动画 over
//	contentBox 内容框架 img居中 start
	function imgCenter(){
		let boxW = Number($('.contentBox').css('width').slice(0,-2));//盒子框架宽度
		let imgW = Number($('.contentBox img').css('width').slice(0,-2));//img宽度
		$('.contentBox img').css('left',(boxW-imgW)/2+'px');
	}
	imgCenter();
//	contentBox 内容框架 img居中 over
})