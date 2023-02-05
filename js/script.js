'use strict';
const displayResult = document.querySelector('.display__result')
const keySeven = document.querySelector('.main__key-7')
const keyEight = document.querySelector('.main__key-8')
const keyNine = document.querySelector('.main__key-9')
const keyDel = document.querySelector('.main__key-del')
const keyFour = document.querySelector('.main__key-4')
const keyFive = document.querySelector('.main__key-5')
const keySix = document.querySelector('.main__key-6')
const keyAdd = document.querySelector('.main__key-add')
const keyOne = document.querySelector('.main__key-1')
const keyTwo = document.querySelector('.main__key-2')
const keyThree = document.querySelector('.main__key-3')
const keySub = document.querySelector('.main__key-sub')
const keyDot = document.querySelector('.main__key-dot')
const keyZero = document.querySelector('.main__key-0')
const keyDivide = document.querySelector('.main__key-divide')
const keyMulti = document.querySelector('.main__key-multi')
const keyReset = document.querySelector('.main__key-reset')
const keyEqual = document.querySelector('.main__key-equal')
const body = document.querySelector('body')
const calc = document.querySelector('.header__calc')
const theme = document.querySelector('.box__theme')
const numFirst = document.querySelector('.box__num-1')
const numSecond = document.querySelector('.box__num-2')
const numThird = document.querySelector('.box__num-3')
const boxSpan = document.querySelector('.box__span')
const boxSpanChild = document.querySelector('.box__span-child')
const boxSpanChild1 = document.querySelector('.box__span-child--1')
const boxSpanChild2 = document.querySelector('.box__span-child--2')
const boxSpanChild3 = document.querySelector('.box__span-child--3')
const active = document.querySelectorAll('.active')
const display = document.querySelector('.display__result')
const main = document.querySelector('.main')
const keyDelete = document.querySelector('.main__key-del')
const keyRes = document.querySelector('.main__key-reset')
const keyEql = document.querySelector('.main__key-equal')





let currentNum = ''
let prevNum=''
let resultNum 
let operator = ''

const operators = function(sign){
    if(prevNum){

        if(operator === '+'){
            prevNum = Number(prevNum)+Number(currentNum) 

        }
        
        if(operator === '-'){
            prevNum = Number(prevNum) - Number(currentNum) 
        }
        if(operator === '*'){
            prevNum =  Number(prevNum) * Number(currentNum) 
        }
        
        if(operator === '/'){
            prevNum =  Number(prevNum) / Number(currentNum) 
        }
    }else{
        prevNum = Number(currentNum)
    }
    operator = sign
    displayResult.textContent = prevNum
    
    currentNum = ''
    
    
}
/*
currentNum = 15;
operator = +
prevNum = prevNum ${operator} currentNum : currentNum
currentNum = 13
prevNum = 28
operator = -
currentNum = 10

*/

//Implements keys

keySeven.addEventListener('click', function(){
    currentNum += keySeven.textContent
    displayResult.textContent = currentNum
})

keyEight.addEventListener('click', function(){
    currentNum += keyEight.textContent
    displayResult.textContent = currentNum

})

keyNine.addEventListener('click', function(){
    currentNum += keyNine.textContent
    displayResult.textContent = currentNum

})

keyFour.addEventListener('click', function(){
    currentNum += keyFour.textContent
    displayResult.textContent = currentNum

})


keyFive.addEventListener('click', function(){
    currentNum += keyFive.textContent
    displayResult.textContent = currentNum

})

keySix.addEventListener('click', function(){
    currentNum += keySix.textContent
    displayResult.textContent = currentNum

})

keyOne.addEventListener('click', function(){
    currentNum += keyOne.textContent
    displayResult.textContent = currentNum

})

keyTwo.addEventListener('click', function(){
    currentNum += keyTwo.textContent
    displayResult.textContent = currentNum

})

keyThree.addEventListener('click', function(){
    currentNum += keyThree.textContent
    displayResult.textContent = currentNum

})

keyZero.addEventListener('click', function(){
    currentNum += keyZero.textContent
    displayResult.textContent = currentNum

})

keyDot.addEventListener('click', function(){
    if(currentNum.includes('.')) return
    currentNum +=keyDot.textContent
    displayResult.textContent = currentNum
})

//Implement operators

keyAdd.addEventListener('click', function(){
    operators('+')

})

keySub.addEventListener('click', function(){
    operators('-')
   
    
})

keyDivide.addEventListener('click', function(){
    operators('/')
    
})

keyMulti.addEventListener('click', function(){
    operators('*')
   
})

keyEqual.addEventListener('click', function(){
    if ( operator === '+'){
        resultNum = +prevNum + +currentNum
        displayResult.textContent = resultNum
    }else if (operator === '-'){
        resultNum = +prevNum - +currentNum
        displayResult.textContent = resultNum
    }else if (operator === '*'){
        resultNum = +prevNum * +currentNum
        displayResult.textContent = resultNum
    }else if (operator === '/'){
        resultNum = +prevNum / +currentNum
        displayResult.textContent = resultNum
    }

})

keyDel.addEventListener('click', function(){
    let arr = [...currentNum].slice(0, -1)
    currentNum = arr.map(Number).join('')
    displayResult.textContent = +currentNum
  
})

keyReset.addEventListener('click', function(){
    currentNum = 0
    displayResult.textContent = currentNum
    currentNum = ''
})

numFirst.addEventListener('click', function(){
    body.style.backgroundColor = '#637097'
    calc.style.color = '#fff'
    theme.style.color = '#fff'
    numFirst.style.color = '#fff'
    numSecond.style.color = '#fff'
    numThird.style.color = '#fff'
    boxSpan.style.backgroundColor = '#181F33'
    display.style.backgroundColor = '#181F33'
    display.style.color = '#fff'
    main.style.backgroundColor = '#242D44'
    for (const child of main.children){
        child.style.backgroundColor = '#eae3dc'
        child.style.boxShadow = '0 0.5rem 0.2rem #b4a597'
        child.style.color = '#434A59'
    }

    keyDelete.style.backgroundColor = '#404e72'
    keyDelete.style.boxShadow = '0 0.5rem 0.2rem #182034'
    keyDelete.style.color = '#fff'
    keyRes.style.backgroundColor = '#404e72'
    keyRes.style.boxShadow = '0 0.5rem 0.2rem #182034'
    keyRes.style.color = '#fff'
    keyEql.style.backgroundColor = '#d03f2f'
    keyEql.style.boxShadow = '0 0.5rem 0.2rem #93261a'
    keyEql.style.color = '#fff'
    boxSpanChild2.style.backgroundColor = '#d03f2f'
    boxSpanChild1.style.display = 'block'
    boxSpanChild2.style.display = 'none'
    boxSpanChild3.style.display = 'none'

})



numSecond.addEventListener('click',function(){
    body.style.backgroundColor = '#e6e6e6'
    calc.style.color = '#36362C'
    theme.style.color = '#36362C'
    numFirst.style.color = '#36362C'
    numSecond.style.color = '#36362C'
    numThird.style.color = '#36362C'
    boxSpan.style.backgroundColor = '#d1cccc'
    display.style.backgroundColor = '#ededed'
    display.style.color = '#36362C'
    main.style.backgroundColor = '#d1cccc'

    for (const child of main.children){
        child.style.backgroundColor = '#e5e4e1'
        child.style.boxShadow = '0 0.5rem 0.2rem #a69d91'
        child.style.color = '#35352c'
    }

    keyDelete.style.backgroundColor = '#377f86'
    keyDelete.style.boxShadow = '0 0.5rem 0.2rem #1b5f65'
    keyDelete.style.color = '#fff'
    keyRes.style.backgroundColor = '#377f86'
    keyRes.style.boxShadow = '0 0.5rem 0.2rem #1b5f65'
    keyRes.style.color = '#fff'
    keyEql.style.backgroundColor = '#ca5502'
    keyEql.style.boxShadow = '0 0.5rem 0.2rem #893901'
    keyEql.style.color = '#fff'
    boxSpanChild2.style.backgroundColor = '#ca5502'
    boxSpanChild1.style.display = 'none'
    boxSpanChild2.style.display = 'block'
    boxSpanChild3.style.display = 'none'

    



})


numThird.addEventListener('click', function(){
    body.style.backgroundColor = '#160628'
    calc.style.color = '#ffe53d'
    theme.style.color = '#ffe53d'
    numFirst.style.color = '#ffe53d'
    numSecond.style.color = '#ffe53d'
    numThird.style.color = '#ffe53d'
    boxSpan.style.backgroundColor = '#1E0936'
    display.style.backgroundColor = '#1E0936'
    display.style.color = '#ffe53d'
    main.style.backgroundColor = '#1E0936'
    boxSpanChild1.style.display = 'none'
    boxSpanChild2.style.display = 'none'
    boxSpanChild3.style.display = 'block'
    boxSpanChild3.style.backgroundColor = '#00DED0'


    for (const child of main.children){
        child.style.backgroundColor = '#331C4D'
        child.style.boxShadow = '0 0.5rem 0.2rem hsl(290, 70%, 36%)'
        child.style.color = '#ffe53d'
    }
    keyDelete.style.backgroundColor = '#56077C'
    keyDelete.style.boxShadow = '0 0.5rem 0.2rem #bc15f4'
    keyDelete.style.color = '#fff'
    keyRes.style.backgroundColor = '#56077C'
    keyRes.style.boxShadow = '0 0.5rem 0.2rem #bc15f4'
    keyRes.style.color = '#fff'
    keyEql.style.backgroundColor = '#00DED0'
    keyEql.style.boxShadow = '0 0.5rem 0.2rem #6cf9f2'
    keyEql.style.color = '#1A2327'


})






