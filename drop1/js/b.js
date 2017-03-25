define(function(require,exports,module){
    require("jq")
  var module_c=require("c.js")
  var black=$("#black"),x,y;
    function b(){
      black.mousedown(Downfn);
    }
    //区分普通与jq的写法区别
    function Downfn(e){
      x=e.clientX-black.offset().left;
      y=e.clientY-black.offset().top;
      $(document).mousemove(Movefn);
      $(document).mouseup(Upfn);
    }
    //案例二  判断
    
    //C的方法
    //问题 
    //模块封装
    //三种方法(俩个案例)
    //宽放大
    //投票方法 
    function Movefn(e){
      var l=e.clientX-x;
      var t=e.clientY-y;
      var maxw=document.documentElement.clientWidth-black.width();
      var maxh=document.documentElement.clientHeight-black.height();
      le=module_c.c(l,maxw,0)
      to=module_c.c(t,maxh,0)
      black.css({'left':le,'top':to}) 
    }
    function Upfn(){
      $(document).off('mousemove')
      $(document).off('mouseup')
    }
  exports.b=b  
})



