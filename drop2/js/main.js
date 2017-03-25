require.config({
	 paths:{
	 	"jquery":["jquery-1.11.1.min"]
	 }
})

require(['a','b'],function(obj,obj1){
   obj.a()
   obj1.b()
})