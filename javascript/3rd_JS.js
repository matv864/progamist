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