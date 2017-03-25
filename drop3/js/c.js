define(function(){
	return function (move,max,min){
	 	 if(move<min)move=min;
	 	 if(move>max)move=max;
	 	 return move; 
	 }
  	
})
