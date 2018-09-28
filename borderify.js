
console.log("START")
// TITLE
var title = document.getElementsByTagName('title')[0].innerHTML
var res = title.replace("Watch","")
document.getElementsByTagName('title')[0].innerHTML = res



// USE Z KEY FOR NEXT EP
var element = document.getElementsByClassName('nexxt')[0];
document.onkeydown = function(e){
  e = e || window.event;
  var key = e.which || e.keyCode;
    if(key===90){ // "Z" key
    element.click();
  }
}
// new button in video controller
document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    var el = document.createElement('div');
    el.innerHTML = '<button class="nextM">HI</button>'
    console.log(el.firstChild)
    console.log("STATE", document.readyState)
    var playbtn = document.getElementsByClassName('vjs-big-play-button')[0]
    playbtn.addEventListener('click', function(){
      console.log("CLICKED--------------------")
      var control = document.getElementsByClassName('vjs-control-bar')[0]
      var nextClip = control.appendChild(el.firstChild)
      console.log(control)
      console.log(nextClip)
      nextClip.addEventListener('click', function(){
        element.click()
      })
    })

  }
}

