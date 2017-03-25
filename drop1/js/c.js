define(function(require,exports,module){
	function c(move,max,min){
	 	 if(move<min)move=min;
	 	 if(move>max)move=max;
	 	 return move;
	 }
	exports.c=c;
})
