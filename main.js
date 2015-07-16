
(function () {
	function generateDom(){
	    var parentElem = document.getElementById("parent");
	    parentElem.innerHTML = '';
	    for (var i = 0; i < 3; i++) {
	        var parElem = document.createElement("div");
	        var childElem = document.createElement("div");
	        parElem.className = "row clearfix";
	        //childElem.className = "col clearfix";
	        for (var j = 0; j < 3; j++) {
	            var inst = 0;
	            var newElem = document.createElement("div");
	            newElem.className = "inner-container";
	            //newElem.innerHTML = 'clik';
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
	                	var verticalArr = [];
	                	var arr = Array.prototype.slice.call(document.querySelectorAll('#parent .row'));
				    	Array.prototype.forEach.call(arr,function(dataArr){
				    		var horzCall = 0;
				    		//var vertCall = 0;
				    		var obj = [];
				    		var innerEl = dataArr.querySelectorAll('.inner-container');
				    		Array.prototype.forEach.call(innerEl,function(checkData){
				    			if(checkData.innerHTML){        				
				        			horzCall++;
				    			}
				    			obj.push(checkData.innerHTML)
				    			//vertCall++;
				    		})
				    		verticalArr.push(obj);
				    		if(horzCall == 3){
				    			checkResult();
				    		}
				    	})
				    	checkVertical(verticalArr);
	                }
	            
	            })(j))
	            
	        }
	        parElem.appendChild(childElem);
	        parentElem.appendChild(parElem);
	    }
	}

        
    function checkResult(){
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
    			//count++;
    		})
    		if(count == 3){
    			generateDom();
    			alert("won ! ")		
    		}
    	})
    }

    function checkVertical(vArr){
    	if( (vArr[0][0] == vArr[1][0]) && (vArr[2][0]) && vArr[0][0] && vArr[1][0] && vArr[2][0]){
    		generateDom();
    		alert("won ! ")	
    	}
    	else if( (vArr[0][1] == vArr[1][1]) && (vArr[2][1]== vArr[1][1]) && vArr[0][1] && vArr[1][1] && vArr[2][1]){
    		generateDom();
    		alert("won ! ")	
    	}
    	else if( (vArr[0][2] == vArr[1][2]) && (vArr[2][2] == vArr[1][2]) && vArr[0][2] && vArr[1][2] &&  vArr[2][2] ){
    		generateDom();
    		alert("won ! ")	
    	}
    }


    generateDom();
})();