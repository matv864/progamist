let text = document.getElementById('example')
text.innerHTML = "<p>вроде текст</p>" //теги воспринимаются
//text.innerText = "<p>вроде текст</p>" теги не воспринимаются
//
let block1 = document.createElement('main')

block1.style.backgroundColor = 'red'
block1.style.width = '1000px'
block1.style.height = '400px'

document.querySelector('body').append(block1)
//
let block2 = document.createElement('header')

block2.style.backgroundColor = 'white'
block2.style.width = '1000px'
block2.style.height = '200px'

document.querySelector('body').insertBefore(block2, block1)
//
let block3 = document.createElement('header')

block3.style.backgroundColor = 'blue'
block3.style.alignContent
block3.style.width = '1000px'
block3.style.height = '200px'

document.querySelector('main').append(block3)
//
let block4 = document.createElement('header')

block4.style.backgroundColor = 'yellow'
block4.innerHTML = "<img src='../images/pexels-erik-mclean-5558236.jpg' widht=100px height=100px>"
block4.style.alignContent
block4.style.width = '1000px'
block4.style.height = '100px'
//block4.innerText = "Вот что могу"

document.querySelector('body').append(block4)
//
let text1 = document.getElementById('example1')
