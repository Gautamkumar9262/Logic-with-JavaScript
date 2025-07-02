// let num=[10,20,30,40,50]
// /****************for*********************/
// for(var i=0; i<num.length; i++){
//     document.writeln(num[i]);
// }
// document.writeln(typeof(num))

// /**********************of***************/
// for(var number of num){
//     document.writeln(number)
// }

// /********************of**********************/
// mark=[100,200,300,400,500]
// for(result of mark){
//     document.writeln(result)
// }

// /*******************set********************/
// let token=new Set([1,2,3,4,5])
// for(res of token){
//     document.writeln(res)
// }
// document.writeln(typeof(token))

/**********************map********************/
// let stock=new Map([
//     ["LT",100],
//     ["GT",200],
//     ["PT",300]
// ]);
// stock.set("MT",100);

// for(result of stock){
//     document.writeln(result)
// }

/*******************Math******************** */
// console.log(Math.floor(3.1));
// console.log(Math.ceil(3.1));
// console.log(Math.pow(3,2));
// console.log(Math.sqrt(3));
// console.log(Math.sin(Math.PI/6));

// console.log(Math.round(Math.random()*10));

/******************Classes******************/
class gautam{
    constructor() {

    }
}

class person{
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    get pname(){
        return this.name;
    }

    set pname(n){
        this.name=n;
    }
    Result(){
        console.log(this.name);
        console.log(this.age);
    }
}
const p1=new person('Gautam',21);
const p2=new person('Raistar',22);

console.log(p1);
console.log(p2);