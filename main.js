
(function () {

	function _ticTac(){
		var me;
		this.generateDom = function(){
			me = this;
		    var parentElem = document.getElementById("parent");
		    parentElem.innerHTML = '';
		    for (var i = 0; i < 3; i++) {
		        var parElem = document.createElement("div");
		        var childElem = document.createElement("div");
		        parElem.className = "row clearfix";
		        for (var j = 0; j < 3; j++) {
		            var inst = 0;
		            var newElem = document.createElement("div");
		            newElem.className = "inner-container";
		            parElem.appendChild(newElem);
		            newElem.addEventListener('click',(function(instCopy){
		            	var exec = false;
		                return function(){

		                    if(!exec){
		                    	this.innerHTML = '0';
		                    	exec = true;
		                    }
		                    else{
		                    	this.innerHTML = 'X';
		                    	exec = false;
		                    }
		                    setTimeout(function(){		                    	
			                	var verticalArr = [];
			                	var arr = Array.prototype.slice.call(document.querySelectorAll('#parent .row'));
						    	Array.prototype.forEach.call(arr,function(dataArr){
						    		var horzCall = 0;
						    		var obj = [];
						    		var innerEl = dataArr.querySelectorAll('.inner-container');
						    		Array.prototype.forEach.call(innerEl,function(checkData){
						    			if(checkData.innerHTML){        				
						        			horzCall++;
						    			}
						    			obj.push(checkData.innerHTML)
						    		})
						    		verticalArr.push(obj);
						    		if(horzCall == 3){
						    			me.checkResult();
						    		}
						    	})
						    	me.checkVertical(verticalArr);
		                    },3000)
		                }
		            
		            })(j))
		            
		        }
		        parElem.appendChild(childElem);
		        parentElem.appendChild(parElem);
		    }

		},
		this.checkResult = function(){
			var arr = Array.prototype.slice.call(document.querySelectorAll('#parent .row'));
	    	Array.prototype.forEach.call(arr,function(dataArr){
	    		var count = 0;
	    		var innerEl = dataArr.querySelectorAll('.inner-container');
	    		var prevVal;

	    		Array.prototype.forEach.call(innerEl,function(checkData){
	    			if(checkData.innerHTML){        				
	        			var currval = checkData.innerHTML;
	        			if(count == 0){
	        				prevVal = currval;
	        			}
	        			if(currval == prevVal){
	        				count++;
	        			}
	        			prevVal = checkData.innerHTML;
	    			}
	    		})
	    		if(count == 3){
	    			me.generateDom();
	    			alert("won ! ")		
	    		}
	    	})
		},
		this.checkVertical = function(vArr){

	    	var gameFinished = true;
	    	vArr.forEach(function(data){
	    		data.forEach(function(inData){
	    			if(!inData){
	    				gameFinished = false;
	    			}
	    				
	    		});
	    	});
	    	if(!gameFinished){    		
		    	if( (vArr[0][0] == vArr[1][0]) && (vArr[2][0] == vArr[1][0]) && me.checkNull( vArr[0][0] , vArr[1][0] , vArr[2][0] ) ){
		    		me.generateDom();
		    		alert("won ! ")	
		    	}
		    	else if( (vArr[0][1] == vArr[1][1]) && (vArr[2][1]== vArr[1][1]) && me.checkNull( vArr[0][1] , vArr[1][1] , vArr[2][1] ) ){
		    		me.generateDom();
		    		alert("won ! ")	
		    	}
		    	else if( (vArr[0][2] == vArr[1][2]) && (vArr[2][2] == vArr[1][2]) && me.checkNull( vArr[0][2] , vArr[1][2] ,  vArr[2][2] ) ){
		    		me.generateDom();
		    		alert("won ! ")	
		    	}
		    	else if( (vArr[0][0] == vArr[1][1]) && (vArr[1][1] == vArr[2][2]) && me.checkNull( vArr[0][0] , vArr[1][1] ,  vArr[2][2] ) ){
		    		me.generateDom();
		    		alert("won ! ")	
		    	}
		    	else if( (vArr[0][2] == vArr[1][2]) && (vArr[2][0] == vArr[1][2]) && me.checkNull( vArr[0][2] , vArr[1][2] ,  vArr[2][0] ) ){
		    		me.generateDom();
		    		alert("won ! ")	
		    	}
	    	}
	    	else{
	    		me.generateDom();
		    	alert("Regenerating Game ! ")	
	    	}
		},
		this.checkNull = function(a,b,c){
			if(a&&b&&c)
	    		return true;
	    	else
	    		return false;
		}
	}

	var game = new _ticTac();
    game.generateDom();
})();