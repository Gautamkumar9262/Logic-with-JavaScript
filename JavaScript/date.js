var d1=new Date();
document.writeln(d1);

var d2=new Date('2025-01-20');
document.writeln(d2);

var d3=new Date(2025,2);
document.writeln(d3);

var d4=new Date(2025,1,10);
document.writeln(d4);

var d5=new Date(2025,0,25,13,15);
document.writeln(d5);

var d6=new Date(2025,0,25,12,15,12);
document.writeln(d6);

var d7=new Date(1000);
document.writeln(d7);

document.writeln(d6.getDate()+"-"+d6.getFullYear()+"-"+d6.getMonth());

