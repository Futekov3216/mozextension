

var element = document.getElementsByClassName('nexxt')[0];
var title = document.getElementsByTagName('title')[0].innerHTML
var navig = document.getElementsByClassName('vjs-control-bar')[0]

var res = title.replace("Watch","")
document.getElementsByTagName('title')[0].innerHTML = res
// console.log("naig", playbtn)
document.onkeydown = function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key===90){ // "Z" key
      element.click();
    }
}

setTimeout(function(){
  var playbtn = document.getElementsByClassName('vjs-big-play-button')[0]

  console.log(playbtn)
}, 10000)
  var navig = document.getElementsByClassName('vjs-control-bar')[0]
playbtn.addEventListener('click', function(){
  console.log('asd')
})
console.log(playbtn, "playbtdjsj")
