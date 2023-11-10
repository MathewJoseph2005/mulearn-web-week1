let button = document.querySelector("#add");
button.addEventListener('click', function (){
    let numberOne = document.getElementById("input1").value;
    let numberTwo = document.getElementById("input2").value;
    let sum = Number(numberOne) + Number(numberTwo);
    document.querySelector(".sum").classList.remove("hidden")
    document.querySelector(".sum").innerHTML =  `SUM: ${sum}`;

})