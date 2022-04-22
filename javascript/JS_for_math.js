function zoro(){
  a1 = document.myform.first.value
  a2 = document.myform.second.value
  a3 = document.myform.third.value
  a4 = document.myform.fourth.value
  a5 = document.myform.fifth.value
  a6 = document.myform.sixth.value
  a7 = document.myform.seventh.value
  equation = a1 + "<h3>x<sup>5</sup></h3>" + "+" +
    a2 + "<h3>x<sup>4</sup></h3>" + "+" +
    a3 + "<h3>x<sup>3</sup></h3>" + "+" +
    a4 + "<h3>x<sup>2</sup></h3>" + "+" +
    a5 + "<h3>x</h3>" + "+" +
    a6 + "=" + a7 + "<h1></h1>"

  document.getElementById('result').innerHTML = ''
  document.getElementById('myform').hidden = true
  document.getElementById('button').hidden = true

  document.getElementById('question').hidden = false
  document.getElementById('equation').innerHTML=equation
  document.getElementById('but').hidden = false
}

function nami(){
  document.getElementById('question').hidden = true
  //document.getElementById('equation').innerHTML=""
  document.getElementById('but').hidden = true

  document.getElementById('result').hidden = false
  document.getElementById('result_equation').innerHTML= "твоё решение"
}
