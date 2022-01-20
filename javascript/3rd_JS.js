var counterVal = 0;
function counter() {
    counterVal=counterVal+1
}
function element_click(){
    if(counterVal%2==0){
        let element1 = document.querySelector(".mouse_click");
        element1.style.background="red"
        console.log(2)
    }
    else{
        let element1 = document.querySelector(".mouse_click");
        element1.style.background="aqua"
        console.log(3)
    }
}
let element = document.querySelector(".form_check");
element.addEventListener('click', function(event) {
    let style_bg = getComputedStyle(element).backgroundColor
    if(style_bg=="rgb(0, 255, 255)"){
        element.style.background="rgb(124,252,0)" 
    }
    else{
        element.style.background="rgb(0, 255, 255)"
    }
})
b_click.onclick = function() {
    let element2 = document.querySelector(".button_click1");
    let element3 = document.querySelector(".zoro");
    element2.parentNode.removeChild(element2)
    element3.parentNode.removeChild(element3)
}
var input = document.getElementById("input");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    alert(3);
  }
})

const canvas = document.querySelector("canvas")
const cnv = canvas.getContext("2d")
cnv.beginPath()
cnv.moveTo(0, 0)
cnv.lineTo(600, 0)
cnv.strokeStyle = 'white'
cnv.lineWidth = 200
//cnv.setLineDash([5, 1])
cnv.stroke()
cnv.closePath()
cnv.beginPath()
cnv.moveTo(0, 300)
cnv.lineTo(600, 300)
cnv.strokeStyle = 'red'
cnv.lineWidth = 200
//cnv.setLineDash([5, 1])
cnv.stroke()
cnv.closePath()
