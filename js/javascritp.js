var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
var btn0 = document.getElementById("btn0");
var clear = document.getElementById("clear");
var eql = document.getElementById("eql");
var point = document.getElementById("point");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var times = document.getElementById("times");
var divide = document.getElementById("divide");
var power = document.getElementById("power");
btn1.addEventListener("click", function(){textboxInput(btn1.value)}, false);
btn2.addEventListener("click", function(){textboxInput(btn2.value)}, false);
btn3.addEventListener("click", function(){textboxInput(btn3.value)}, false);
btn4.addEventListener("click", function(){textboxInput(btn4.value)}, false);
btn5.addEventListener("click", function(){textboxInput(btn5.value)}, false);
btn6.addEventListener("click", function(){textboxInput(btn6.value)}, false);
btn7.addEventListener("click", function(){textboxInput(btn7.value)}, false);
btn8.addEventListener("click", function(){textboxInput(btn8.value)}, false);
btn9.addEventListener("click", function(){textboxInput(btn9.value)}, false);
btn0.addEventListener("click", function(){textboxInput(btn0.value)}, false);
clear.addEventListener("click", function(){clearInput()}, false);
eql.addEventListener("click", function(){equals()}, false);
point.addEventListener("click", function(){textboxInput(point.value)}, false);
plus.addEventListener("click", function(){addOpp(plus.value)}, false);
minus.addEventListener("click", function(){addOpp(minus.value)}, false);
times.addEventListener("click", function(){addOpp(times.value)}, false);
divide.addEventListener("click", function(){addOpp(divide.value)}, false);
power.addEventListener("click", function(){textboxInput("**")}, false);
function textboxInput(x){
    var y = String(document.getElementById("in-out").value);
    if (document.getElementById("in-out").value === "0"){
        if (x === "."){
            var z = y + String(x);
        }else{
            var z = x;
        }
    }else{
        var z = y + String(x);
    }
    document.getElementById("in-out").value = z;
}
function clearInput(){
    document.getElementById("in-out").value = 0;
}
function addOpp(x){
    var y = String(document.getElementById("in-out").value);
    if (!(y.charAt(y.length-1) === "+" || y.charAt(y.length-1) === "-" || y.charAt(y.length-1) === "/" || y.charAt(y.length-1) === "*")){
        var z = y + String(x);
        document.getElementById("in-out").value = z;
    }
}
function equals(){
    var y = eval(document.getElementById("in-out").value);
    console.log(document.getElementById("in-out").value)
    document.getElementById("in-out").value = y;
}