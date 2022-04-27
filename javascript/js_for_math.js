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








function zoro(){ //обработка на страницу проверки
  a = document.getElementById('form').value
  coef = coefing(a)
  coef = coef.join(".")
  console.log("alert")
  window.location.href = "https://mydjango.matv864.repl.co/" + coef + "/";
  
}

