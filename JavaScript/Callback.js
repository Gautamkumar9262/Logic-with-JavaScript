/****************callback function**********/

function showResult(){
    let d1=document.getElementById("d1");
    d1.innerHTML=result;
}

function sum(a,b,f1){
    let s=a+b;
    f1(s);
}

sum(3,4,showResult);

/**************Asynchronous************** */
