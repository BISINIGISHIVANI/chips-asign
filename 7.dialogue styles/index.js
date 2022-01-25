var inputOne=document.querySelector("#btn")
function myFunction(){
    var userInput=document.querySelector("#toggle1");
    if(userInput.style.display === "none"){
        userInput.style.display="block";
    }else{
        userInput.style.display="none";
    }
}
inputOne.addEventListener("click",myFunction)
var 