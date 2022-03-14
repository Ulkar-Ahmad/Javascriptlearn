// Operatorlar

let val;
const a=10;
const b=5;
const c=5;
let d=3;

//  1- Arithmetich operators  --- arifmetik o.

val = a+b;
val = a-b;
val = a*b;
val = a/b;
val = a%b;
val = d++;
val = ++d;
val = --d;
val = d--; 

//  2-Assingment operators --- teyin o.
 val = a;
 val +=a;    //val = val + a;
 val -=a;    //val = val -a;
 val *=a;    //val = val * a;
 val /=a;    //val = val / a;
 val %=a;   //val = val % a;


//  3-Comparison operators --- muqayise 0.
 val = a==b;   
 val = b==c; 
 val = b===c;
 val = 5 === '5';
 val = a!=b;
 val = a!==b;
 val = a > b;
 val = b < a;
 val = a >= b;
 val = 5 >= 5;
  val = a <= b;


//  4-Logical operators --- mentiqi o.

// && (And)
// true && true => true
// true &&  false => false
// false && false => false

val = (a>b) && (a>c);
val = (a>b) || (a<c);
val = !(a>b);

// || (Or)
// true && true => true
// true &&  false => true
// false && false => false

// ! (Not)

// !true = false
// !false = true


console.log(val);
console.log(typeof val);