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
