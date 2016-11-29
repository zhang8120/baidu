$(function(){
	var cliH=$(window).height();
	var num=0;
	var flag=true;
	touch.on("body","swipeup",".fullpage",function(){
		if(!flag){
			return;
		}
		num++;
		if(num>=$("section").length){
			num=$("section").length-1;
			//document.title=num;
			return;
		}
		flag=false;
		
		$(".fullpage").css("marginTop",-num*cliH);
	})
	touch.on("body","swipedown",".fullpage",function(){
		if(!flag){
			return;
		}
		num--;
		if(num==-1){
			num=0;
			//document.title=num;
			return;
		}
		flag=false;
		$(".fullpage").css("marginTop",-num*cliH);
	})

	$(".fullpage")[0].addEventListener("webkitTransitionEnd",function(){
		flag=true;
	})
	//$(".fullpage")[0].addEventListener("mozTransitionEnd",function(){
	//	flag=true;
	//})


})