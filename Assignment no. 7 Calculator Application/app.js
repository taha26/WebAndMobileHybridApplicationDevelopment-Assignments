function showNumber(num){
    var inp = document.getElementById("inp");

    inp.value += num

}

function clearNumber(){
    var inp = document.getElementById("inp");

    inp.value = ""

}

function delNumber(){
    var inp = document.getElementById("inp");

    inp.value = inp.value.slice(0,-1)
}

function eqNumber(){
    var inp = document.getElementById("inp");

    inp.value = eval(inp.value)
}