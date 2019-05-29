
$(document).ready(function(){
  
    var mousePos = {};
  
   function getRandomInt(min, max) {
     return Math.round(Math.random() * (max - min + 1)) + min;
   }
    
    $(window).mousemove(function(e) {
      mousePos.x = e.pageX;
      mousePos.y = e.pageY;
    });
    
    $(window).mouseleave(function(e) {
      mousePos.x = -1;
      mousePos.y = -1;
    });
    
    var draw = setInterval(function(){
      if(mousePos.x > 0 && mousePos.y > 0){
        
        var range = 150;
        
        var color = "background: rgb("+getRandomInt(139,255)+","+getRandomInt(0,150)+","+getRandomInt(0,255)+");";
        
        var sizeInt = getRandomInt(50, 70);
        size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";
        
        var left = "left: " + getRandomInt(mousePos.x-range-sizeInt, mousePos.x+range) + "px;";
        
        var top = "top: " + getRandomInt(mousePos.y-range-sizeInt, mousePos.y+range) + "px;"; 
  
        var style = left+top+color+size;
        $("<div class='ball' style='" + style + "'></div>").appendTo('#wrap').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){$(this).remove();}); 
      }
    }, 1);
  });

let aboutButton = document.getElementsByTagName('a')[0]
let bio = document.getElementById('bio')
let bioText = bio.innerHTML

let greenhouseButton = document.getElementsByTagName('a')[1]
let greenhouse = document.getElementById("greenhouse")
let greenhouseText = greenhouse.innerHTML
// greenhouse.style.visibility = "hidden"
greenhouse.style.display = "none"

let profPic = document.getElementById('pic')

let tunecastButton = document.getElementsByTagName('a')[2]
let tunecast = document.getElementById("tunecast")
let tunecastText = tunecast.innerHTML
// tunecast.style.visibility = "hidden"
tunecast.style.display = "none"

let linguaButton = document.getElementsByTagName('a')[3]
let lingua = document.getElementById("lingua")
let linguaText = lingua.innerHTML
// lingua.style.visibility = "hidden"
lingua.style.display = "none"

aboutButton.addEventListener('click', e => {
    // greenhouse.style.visibility = "hidden"
    greenhouse.style.display = "none"
    // tunecast.style.visibility = "hidden"
    tunecast.style.display = "none"
    // lingua.style.visibility = "hidden"
    lingua.style.display = "none"
    // bio.style.visibility = "visible"
    bio.style.display = "block"
    bio.innerHTML = bioText
    // profPic.style.visibility = "visible"
    profPic.style.display = "block"

})


greenhouseButton.addEventListener('click', e => {
    // bio.style.visibility = "hidden"
    bio.style.display = "none"
    // tunecast.style.visibility = "hidden"
    tunecast.style.display = "none"
    // lingua.style.visibility = "hidden"
    lingua.style.display = "none"
    // greenhouse.style.visibility = "visible"
    greenhouse.style.display = "block"
    //on click, i want to hide previous text and display greenhouse text 
    greenhouse.innerHTML = greenhouseText
    // profPic.style.visibility = "hidden"
    profPic.style.display = "none"
})

tunecastButton.addEventListener('click', e => {
    // bio.style.visibility = "hidden"
    bio.style.display = "none"
    // greenhouse.style.visibility = "hidden"
    greenhouse.style.display = "none"
    // lingua.style.visibility = "hidden"
    lingua.style.display = "none"
    // tunecast.style.visibility = "visible"
    tunecast.style.display = "block"
    tunecast.innerHTML = tunecastText
    // profPic.style.visibility = "hidden"
    profPic.style.display = "none"
})

linguaButton.addEventListener('click', e => {
    // bio.style.visibility = "hidden"
    bio.style.display = "none"
    // greenhouse.style.visibility = "hidden"
    greenhouse.style.display = "none"
    // tunecast.style.visibility = "hidden"
    tunecast.style.display = "none"
    // lingua.style.visibility = "visible"
    lingua.style.display = "block"
    lingua.innerHTML = linguaText
    // profPic.style.visibility = "hidden"
    profPic.style.display = "none"
})


// let bio = document.querySelector('.bio')
// bio.innerHTML ='test'