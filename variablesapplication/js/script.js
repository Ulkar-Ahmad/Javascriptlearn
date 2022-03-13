// ** Bir müşterinin aşağidaki bilgileri için değişken oluşturunuz.

// ** Müştəri adı
// ** Müştəri soyadı
// ** Müştəri tc kimlik
// ** Müştəri sifariş toplamı
// ** Müştəri cinsiyyət
// ** Müştəri adres bilgisi
// ** Müştəri hobbiler

var customerName = 'Ulkar';
var customerLastName = 'Ahmad';

var fullName = 'Ulkar Ahmad';
var custumerID = '12345678901';

var total = 205.6;
var gender = false;  // kişi true, qadın false 

// object
var address = {
    city : 'Baku',
    district : 'Nizami',
    body : 'Qarayev'

}

// array
var hobbies = ['Sinema','Kitap','Spor'];




// ** Aşağıdaki sifarişlerin toplamını hesablayın.

let order1= Number('100') ;
let order2= Number('150') ;
let totalorder = order1 + order2;

console.log(totalorder);


// ** Aşağıdaki sifarişlerin toplamını hesablayın.

var order3= Number('100.2');
var order4= Number('150.5');

var totalorder2 = order3 + order4 ;
console.log(totalorder2);

// ** Aşağıdaki sifarişlərin toplamını tam say olaraq hesablayın.

var order4=parseInt('100.2');
var order5=parseInt('150.5');

var totalorder3 = order4+order5 ;
console.log(totalorder3);

// ** Aşağıda verilen doğum ilinə görə yaşı hesablayın.

const yearOfBirth = 1986;

console.log(new Date().getFullYear()-yearOfBirth);

// ** Aşağıdaki string ifadənin xarakter sayını tapın.
 
let course = 'Modern Javascript kursu';

console.log(course.length);

