function Num(val){
    document.getElementById("result").value+=val;
}
function equal(){

    var Input=document.getElementById("result").value;
    var Output=eval(Input);
    document.getElementById("result").value=Output
}
function clr(){
    document.getElementById("result").value="";
}