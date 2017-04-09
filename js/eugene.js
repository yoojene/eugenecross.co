
function hoverIn() {
  document.getElementById("profilecircle").className = "img-circle profileIn"
}

function hoverOut() {
  document.getElementById("profilecircle").className = "img-circle profileOut"

}

var myVideo=document.getElementById("thevideo"); 

function Pause() { 
  document.getElementById("profilecircle").style.display="";
  document.getElementById("thevideo").style.display="none";
  myVideo.pause(); 
}

function Play() {
  document.getElementById("profilecircle").style.display="none";
  document.getElementById("thevideo").style.display="";
  if (myVideo.paused){
    myVideo.play();   
  } 

}   
