
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
	                	//var call = 0;
	                	var arr = Array.prototype.slice.call(document.querySelectorAll('#parent .row'));
				    	Array.prototype.forEach.call(arr,function(dataArr){
				    		var call = 0;
				    		var innerEl = dataArr.querySelectorAll('.inner-container');
				    		Array.prototype.forEach.call(innerEl,function(checkData){
				    			if(checkData.innerHTML){        				
				        			call++;
				    			}

				    			//count++;
				    		})
				    		if(call == 3){
				    			checkResult();
				    		}
				    	})
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
    			console.log('asas');    		}
    	})
    }


    generateDom();
})();