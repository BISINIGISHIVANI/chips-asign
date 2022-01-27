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
var btnAlert=document.querySelector("#btn-alert");
var alertAct=()=>{
    var alertOut=document.querySelector(".dialog-act");
    if(alertOut.style.display==="none"){
        alertOut.style.display="block";
    }else{
        alertOut.style.display="none"
    }
}

btnAlert.addEventListener("click",alertAct)