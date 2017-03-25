var module=(function(){
   //倍数关系
   var x,y,count;
   var blow=function(){
   	   blindEvent()
   }
   function blindEvent(){
   	   $('#left')
   	   .hover(Enter,Leave)
   	   .on('mousemove',Movefn)
   }
   function Enter(){
   	  $("#right").show();
   	  $('#mark').show();
   }

   function Leave(){
   	  $("#right").hide();
   	  $('#mark').hide()
   }
   function Movefn(e){
   	//主要的事件就是在大图上移动，放大镜跟着鼠标移动
   	//第二就是大图移动到相应的位置
      x=e.clientX-$(this).offset().left-$("#mark").width()/2;
      y=e.clientY-$(this).offset().top-$("#mark").height()/2;
      var he=$(this).height()-$('#mark').height(),
          wh=$(this).width()-$('#mark').width(),
          count=$("#right").find('img').width()/$("#left").find('img').width();
      if(x<0)x=0;
      if(y<0)y=0;
      if(x>wh)x=wh;
      if(y>he)y=he;
      $("#mark").css({'left':x,'top':y})
      $("#right").find('img').css({'left':-x*count,'top':-y*count});
          console.log(-x*count)
          //大图移动的是负值
   }

	return {
		blow:blow
	}
}())