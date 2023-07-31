let os = document.getElementById("output-screen");

function display(num){
    os.value += num;
}

function Calculate(){
    try{
        os.value = eval(os.value);
    }
    catch(err)
    {
        alert("Invalid");
    }
}

function Clear(){
    os.value = "";
}

function del(){
    os.value = os.value.slice(0,-1);
}

function log(){
    os.value = Math.log(os.value);
}

function pow(){
    os.value = Math.pow(os.value,2);
}

function pi(){
    os.value = 3.14;
}

function sin(){
    os.value = Math.sin(os.value);
}

function cos(){
    os.value = Math.cos(os.value);
}

function tan(){
    os.value = Math.tan(os.value);
}

function sqrt(){
    os.value = Math.sqrt(os.value);
}

function e(){
    os.value = 2.718;
}

function factorial(){
    let i, num, fact=1;
    num = os.value;
    for(i=1;i<=num;i++){
        fact = fact * i;
    }
    i = i - 1;
    os.value = fact;
}
