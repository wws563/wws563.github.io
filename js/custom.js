document.addEventListener('mousemove',throttle(changeBg,30))

function throttle(func, delay) {            
    　　var prev = Date.now();            
    　　return function() {                
    　　　　var context = this;                
    　　　　var args = arguments;                
    　　　　var now = Date.now();                
    　　　　if (now - prev >= delay) {                    
    　　　　　　func.apply(context, args);                    
    　　　　　　prev = Date.now();                
    　　　　}            
    　　}        
    }     

function changeBg(e = e||window.event||event){
    var perX = e.clientX / document.body.clientWidth * 15 +'px'
    var perY = e.clientY / document.body.clientHeight * 15 +'px'
    document.getElementsByClassName('bg-container')[0].style.transform = 'translate(' + perX +', ' + perY + ')';
    // document.getElementsByTagName('body')[0].style.transform = 'translate(' + perX +', ' + perY + ')';
}