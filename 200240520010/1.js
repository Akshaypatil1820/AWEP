function submit(){
    let a = document.querySelector("#id1").value;
    let b = document.querySelector("#id2").value;
    let c = document.querySelector("#id3").value;

    if(a==""){
        document.querySelector("#display1").innerHTML='invalid';
    }
    else{
        document.querySelector("#display1").innerHTML=a;
        document.querySelector("#id1").value='';
    }

    
    if(b==""){
        document.querySelector("#display2").innerHTML='invalid';
    
    }
    else{
        document.querySelector("#display2").innerHTML=b;
        document.querySelector("#id2").value='';
    }

    
    if(c==""){
        document.querySelector("#display3").innerHTML='invalid';
    }
    else{
        document.querySelector("#display3").innerHTML=c;
        document.querySelector("#id3").value='';
    }
}
