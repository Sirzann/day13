//get the textarea element for displying output
const output = document.querySelector("textarea")

//get all the calculator keys
const keys = document.querySelectorAll(".key");

//function for evaluting arithimetic expression
function calculate(expression){
    try{
        return eval(expression)
    }catch (error) {
        return "error";
    }
}


//function for updating the output
function displayOutput(value){
    output.value = value;
}
//eventlistner for each keys
keys.forEach((key)=>{
    //click event listener
    key.addEventListener("click",()=>
    {
        const keycontent = key.textContent; 
        const currentExpression = output.value;

        if (keycontent === "=")
        {
            const result = calculate(currentExpression);
            displayOutput(result);
    }
    else if(keycontent === "c"){
        displayOutput(" ")
    }
    else{
        displayOutput(currentExpression + keycontent);
    }
})
})

