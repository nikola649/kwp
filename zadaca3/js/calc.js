
function insertNum(num)
{
    var operate= document.getElementById('sumad');
    operate.value+=num;
}
function clearScreen(){
    document.getElementById('sumad').value= "";
    
    document.getElementById('answer').value= "";
}


function back() {
    var value = document.getElementById("sumad").value;
    document.getElementById("sumad").value = value.substr(0, value.length - 1);
}
function getRes()
{
    var tempo= document.getElementById('sumad');
    ans = +eval(tempo.value);
    console.log(ans);
    document.getElementById("answer").value= "+" +ans;
}