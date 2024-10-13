let num1 = 0
let num2 = 0
let num1el = document.getElementById("num1-el")
let num2el = document.getElementById("num2-el")
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add() {
    if (num1el.textContent == "" ) 
        num1el.textContent = 0
    num1el.textContent = parseInt (num1el.textContent )+ 1
}

function add2() {
    if (num1el.textContent == "" ) 
        num1el.textContent = 0
    num1el.textContent = parseInt (num1el.textContent )+ 2
}

function add3() {
    if (num1el.textContent == "" ) 
        num1el.textContent = 0
    num1el.textContent = parseInt (num1el.textContent )+ 3
}

function addg() {
     if (num2el.textContent == "" ) 
        num2el.textContent = 0
    num2el.textContent = parseInt (num2el.textContent )+ 1
}

function addg2() {
    if (num2el.textContent == "" ) 
        num2el.textContent = 0
    num2el.textContent = parseInt (num2el.textContent )+ 2
}

function addg3() {
         if (num2el.textContent == "" ) 
        num2el.textContent = 0
    num2el.textContent = parseInt (num2el.textContent )+ 3
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}