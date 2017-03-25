define(['jquery','c'],function($,module_c){
     //接受
	return   function (){
		
		$("#btn").click(drop)
	
	var x,y,w,h,big,small;
	 function drop(){
	 	small=$(".small").show();
	 	big=$(".big").show();
	 	small.mousedown(Downfn) 
	 }
 
	 var Downfn=function(e){
         x=e.clientX;
         y=e.clientY;
         w=big.outerWidth(true);
         h=big.height();
        document.onmousemove=Movefn;
        document.onmouseup=Upfn;
	 }
	 var Movefn=function(e){
        var disx=e.clientX-x;
        var disy=e.clientY-y;
        var bw=w+disx;
        var bh=h+disy;
        bwidth=module_c(bw,600,100)
        bheight=module_c(bh,600,100)
        $(".big").width(bwidth);
        $(".big").height(bheight)
	 }
	 var Upfn=function(){
	 	document.onmousemove=null;
        document.onmouseup=null;
	 }
	}
})


