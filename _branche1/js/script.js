function addition(){
    nb1=document.getElementById("nb1").value;
    nb2=document.getElementById("nb2").value;

    var calcul = parseInt(nb1) + parseInt(nb2);
    
    document.getElementById("result").value = calcul;
}

function minus(){
    nb1=document.getElementById("nb1").value;
    nb2=document.getElementById("nb2").value;

    var calcul = parseInt(nb1) - parseInt(nb2);
    
    document.getElementById("result").value = calcul;
}

function times(){
    nb1=document.getElementById("nb1").value;
    nb2=document.getElementById("nb2").value;

    var calcul = parseInt(nb1) * parseInt(nb2);
    
    document.getElementById("result").value = calcul;
}

function divide(){
    nb1=document.getElementById("nb1").value;
    nb2=document.getElementById("nb2").value;

    var calcul = parseInt(nb1) / parseInt(nb2);
    
    document.getElementById("result").value = calcul;
}





