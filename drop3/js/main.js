require.config({
	 paths:{
	 	"jquery":["jquery-1.11.1.min"]
	 }
})

require(['b','a'],function(obj,obj1){
 // obj1.a()
   //obj1.b()
   obj()
  obj1()
   console.log(obj1)
})