window.onload=function(){
	var list=document.getElementById('list');
	var next=document.getElementById('next');
	var prev=document.getElementById('prev');
   function animate1(offset){
    	console.log(list.offsetLeft);
    	 var newLeft = parseInt(list.offsetLeft) + offset;
         list.style.left = newLeft + 'px';
         if(newLeft<-1547){
         	list.style.left=-221+'px';
         }
         if(newLeft>-221){
         	list.style.left=-1547+'px';
         }
    }
    prev.onclick= function() {  
             
                animate1(221);
            }
    next.onclick=function(){  
    	   alert('点击了');
              animate1(-221);
            }

    var timer;
	function play() {
	    timer = setInterval(function () {
	        prev.onclick();
	    }, 1000)
	}
	play();
    var container = document.getElementById('partof-case-list');

    function stop() {
        clearInterval(timer);
    }
   container.onmouseover = stop;
   container.onmouseout = play;
}

		
 
 