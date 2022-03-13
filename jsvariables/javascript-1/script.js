// console.log("merhaba");
// console.log(1234);
// console.log(true);
// console.log([1,2,3]);
// console.error("bir hata olusdu");
// console.warn("bir uyari olusdu");

// //tek satirlik yorum satiri


// /* 
// yorum satirlari
// yorum satirlari
// yorum satirlari
// yorum satirlari
// yorum satirlari
// */
//  console.clear();
 


// Deyiskenler  Javascript Variables..

// var age;
// console.log(age);
// age=20;
// console.log(age);

// var fullname='Sadik Turan'
// console.log(fullname);


// fullname='Cinar Turan'
// console.log(fullname);

// // Degisken tanimlama kurallari  javascript variable definition rules

// // sayisal ifade ile ile baslayamaz

// var yas1;
// var _yas2;
// var $yas3;

// // komut isimleri ile tanimlama yapilamaz
// // birden fazla kelime

// var ad='sadik'
// var soyad='turan'
// var ad_soyad='sadik turan'
// var adsoyad='cinar turan'

// // case sensetive (buyuk kucuk duyarliligi)
 
// var firstName='sadik'
// var Firstname='cinar'

// console.log(firstName);
// console.log(Firstname);



// // var , let, const

// let city='Kocaeli';
// console.log(city);

// const email='abc@gmail.com';
// console.log(email);

// email='bcd@gmail.com';
// console.log(email);


// Ders 3: Variable Types degisken tipleri

// Primitive Types


 
//  // String
//  let firstName='Cinar';
  
// // Number
// let age = 20;
// let money = 100.5;


// // boolean
// let isActive = true;

// // null
// let job = null;

// // undefined

// let car;




// // Reference Types

//  //Array
 
//  let names=['Ali','Ahmet','Can']
 
 

// //  object 
// let address = {
//     city:'Kocaeli',
//     country:'Turkiye'
// }

// // function

//  var calculateAge = function(){
//      return 0;
//  };
// console.log(typeof calculateAge );

//  ders ; 4   Tur donusumu

let val;

// // number to string
 
val = String(10);

//bool to string

val = String(true);

//Date to String

val = String(new Date());

// array to string
  val = String([1,2,3,4]);

//  toString()

val = (10).toString();
val = (false).toString();

// String to Number

val = Number ('10');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('a');
val = Number([1,2,3,4]);

// parseInt
// parseFloat

val = parseInt('10');
val = parseInt('10.5');
val = parseFloat('10.5');

console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));




 

