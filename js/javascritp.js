var btn1 = document.getElementById("1");
if(btn1.addEventListener){
    btn1.addEventListener("click", function(){alert("hello");}, false);
}else if (btn1.attachEvent){
    btn1.attachEvent("onclick", function(){alert("hi");});
}
function textboxInput(x){
    alert("in the function");
    var y = document.getElementById("in-out").value;
    alert(y);
    document.getElementById("in-out").value = z;
}
