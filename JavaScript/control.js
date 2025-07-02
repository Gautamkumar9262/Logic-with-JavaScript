var x=-5;
if(x>0){
    document.writeln("Gautam Kumar");
}

if(x<=0){
    document.writeln("Hello")
}

//if else
var b=10;
if(b>0){
    document.writeln("<br>I am If")
}
else{
    document.writeln("<br>i am else")
}

//if else if
var x=8;
if(x>0){
    document.writeln("<br>Positives")
}
else if(x<0){
    document.writeln("<br>Negatives")
}
else{
    document.writeln("<br> Zero")
}

//Conditional operator | Ternary operator ? :
var x=-5;
x>0? document.writeln("<br>Positives"):document.writeln("<br>Negatives");

//switch case
var d1=new Date();
document.writeln("<br>"+d1.getDate());

switch(d1.getDate()){
    case 1:
        document.writeln("Monday");
        break;

    case 2:
        document.writeln("Tuesday");
        break;

    case 3:
        document.writeln("Wednesday");
        break;

    case 17:
        document.writeln("Friday");
        break;
    
    case 5: document.writeln("Friday");
    break;

    case 6: document.writeln("Saturday");
    break;

    default: document.writeln("This is invalid date for switch statement.");

}

//Loop - while loop

var i=1;
while(i<=5){
    document.writeln("<br> i="+i);
    i++;
}

//Loop - do while loop
var i=1;
do{
    document.writeln("<br> j="+i);
    i++;
}
while(i<=5);

//Loop for
for(var i=0; i<5; i++){
    document.writeln("<br>Hello, world!");
}

//Loop - for in
const student={rollno:35,name:"Gautam Kumar",Age:20};
let text="";
for(let e in student){
    text+=student[e];
    text+=" - ";
}
document.write(text);

//first using in
const num=[10,20,30,40,50];
var s=0;
for( let i in num){
    s=s+num[i];  
}
document.writeln("<br> Sum is:"+s);

//second using of
const n=[10,20,30,40,50];
var s=0;
for( let i of num){
    s=s+i;  
}
document.writeln("<br> Sum is:"+s);
