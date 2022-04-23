let a //вводящаяся строчка ответов
let coef //обработанные коэффициенты
let eq //массив из слогаемых
let equation // пользовательский вид уравнения
let answer = 0 //ответ уравнение
let bool = true


function coefing(s){ 
  s += " "
  let result = []
  let c = ""
  for (var i of s ){
    //if(typeof i == "number" || i == " "){
      if(i == " "){
        if(c != ""){
          result.push(c)
        }
        //console.log(c)
        c = ""
      }
      else{
        c += i
      }
    //}
    
  }
  return result
} //преобразование коэффициентов в массив


function eqing(arr){ 
  let len = arr.length
  let counter = len - 1
  let word = ''
  let result = []
  for(var i of arr){
    if(counter > 1){
      result.push(String(i) + "x<sup>" + counter + "</sup>")
      counter -= 1
    }
    else{
      if(counter == 1){
        result.push(String(i) + "x")
        counter -= 1
      }
      else{
        result.push(String(i))
      }
    }
  }
  return result
} //преобразование в слогаемые


function equationing(arr){ 
  let result = ""
  let first = false
  for(var i of arr){
    if(first){
      result += " + "
    }
    else{
      first = true
    }
    result += i
  }
  result += " = 0"
  return result
} //преобразование в пользовательский вид


function answering(arr){
  let result = "результат"

  return result
} //решение уравнения


function checking(arr){
  if(arr.length <= 1){
    return false
  }
  for(var i of arr){
    for(var j of i){
      if(j < "0" || j > "9"){
        return false
      }
    }
  }
  
  return true
} //проверка вводимого


//дальше DOM


function zoro(){ //обработка на страницу проверки
  a = document.getElementById('form').value
  document.getElementById('my_form').hidden = true
  document.getElementById('check').hidden = false
  coef = coefing(a)
  if(!checking(coef)){
    no()
  }
  else{
    bool = false
  }
  eq = eqing(coef)
  equation = equationing(eq)
  document.getElementById('checking').innerHTML = equation
}


function no(){ //отказ от уравнения
  document.getElementById('my_form').hidden = false
  document.getElementById('check').hidden = true
}


function nami(){ //принятие уравнения и вывод ответа
  document.getElementById('check').hidden = true
  document.getElementById('result').hidden = false
  document.getElementById('equation').innerHTML = equation
  answer = answering(coef)
  document.getElementById('answer').innerHTML = answer
  
}

//дальше события js

function brook(event){
  //console.log(event.code)
  if(event.code == "Enter"){
    if(bool){
      zoro()
    }
    else{
      nami()
    }
  }
}

window.addEventListener('keyup', brook)
