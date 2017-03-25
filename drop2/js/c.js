define(function(){
	function c(move,max,min){
	 	 if(move<min)move=min;
	 	 if(move>max)move=max;
	 	 return move;
	 }
	return {
		c:c
	}
})
