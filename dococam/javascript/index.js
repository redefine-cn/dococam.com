$(document).ready(function(){
	$(".down").bind("mouseover",function(){
		$(".qr").css("display","block");
	});
	$(".down").bind("mouseout",function(){
		$(".qr").css("display","none");
	});

});