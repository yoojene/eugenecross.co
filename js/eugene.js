
function hoverIn() {
  document.getElementById("profilecircle").className = "img-circle profileIn"
}

function hoverOut() {
  document.getElementById("profilecircle").className = "img-circle profileOut"

}

var myVideo = document.getElementById("thevideo"); 


console.log(myVideo);

var baller = document.getElementById("baller");

baller.addEventListener("mouseover", function() {
  document.getElementById("profilecircle").style.display = "none";
  document.getElementById("thevideo").style.display = "";
  myVideo.play();
} );

myVideo.addEventListener("mouseleave", function()  {
  document.getElementById("profilecircle").style.display = "";
  document.getElementById("thevideo").style.display = "none";
  myVideo.pause(); 
})

$("vid").mouseover(function(){
  console.log('jquery over')
  document.getElementById("profilecircle").style.display = "none";
  document.getElementById("thevideo").style.display = "";
  if (myVideo.paused) {
    myVideo.play();
  } 

})
