var display = document.getElementById("screen")
var numbers = document.querySelectorAll(".btn")
var resetButton = document.getElementById("reset")
var evalButton = document.getElementById("eval")
var delButton = document.getElementById("del")

numbers.forEach(button => {
    button.addEventListener("click", function(){
     var num = button.textContent
     if (display.value === '0' || display.value ==='error')
        {
            display.value = num
        }
        else{
            display.value+=num
        }
    })
})

resetButton.addEventListener("click", function(){

    display.value = '0';

})


evalButton.addEventListener("click", function(){

    try{
        var result = eval(display.value)
    
        display.value = result
        console.log(result)
    }catch(e){
        display.value="error"
       
    }
})

delButton.addEventListener("click", function(){
    
        display.value = display.value.slice(0, -1);
        
    });

var multiplication = document.getElementById("multiply")
multiplication.addEventListener("click", function(){
    display.value += '*'
})