define(['jquery','c'],function($,module_c){
 // var module_c=require("c.js")
  var black=$("#black"),x,y;
  return  function(){
      black.mousedown(Downfn);
    }
    function Downfn(e){
      x=e.clientX-black.offset().left;
      y=e.clientY-black.offset().top;
      $(document).mousemove(Movefn);
      $(document).mouseup(Upfn);
    }
    function Movefn(e){
      var l=e.clientX-x;
      var t=e.clientY-y;
      var maxw=document.documentElement.clientWidth-black.width();
      var maxh=document.documentElement.clientHeight-black.height();
      le=module_c(l,maxw,0)
      to=module_c(t,maxh,0)
      black.css({'left':le,'top':to}) 
    }
    function Upfn(){
      $(document).off('mousemove')
      $(document).off('mouseup')
    }
   
})



