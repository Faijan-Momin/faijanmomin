var i = 0;
var msgone = 'Hi,';
var msgtwo = 'I am ';
var myname = 'Faijan';
var msgthree = 'Full-Stack Developer.';
var speed = 100;
window.onload = brandingMessage();

function brandingMessage() {
  if (i < msgthree.length) {
    document.getElementById("mesg-1").innerHTML += msgone.charAt(i);
    document.getElementById("i-am").innerHTML += msgtwo.charAt(i);
    document.getElementById("my-name").innerHTML += myname.charAt(i);
    document.getElementById("mesg-3").innerHTML += msgthree.charAt(i);
    i++;
    setTimeout(brandingMessage, speed);
  }
}


function ShowNavMenu(){
  // web-desktop-nav-menu-show
  var navID = document.getElementsByClassName('web-desktop-nav-menu')[0].id;
  var socialMedia = document.getElementsByClassName('web-desktop-social-media')[0].id;
  if(navID == "web-desktop-nav-menu"){
    document.getElementById('web-desktop-nav-menu').id = "web-desktop-nav-menu-show";
    document.getElementById('web-desktop-social-media').id = "web-desktop-social-media-show";
  }
  if(navID == "web-desktop-nav-menu-show"){
    document.getElementById('web-desktop-nav-menu-show').id = "web-desktop-nav-menu";
    document.getElementById('web-desktop-social-media-show').id = "web-desktop-social-media";
  }
}