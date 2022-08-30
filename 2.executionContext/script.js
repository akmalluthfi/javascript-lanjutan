// 2.1 Execution Context, Hoisting & Scope 

// Execution Context pada javascript ada 2 
// 1. Creation phase 
// 2. Execution phase 

// console.log(nama);
// var nama = 'Akmal'; 

// 1. Creation phase pada global context 
// semua var = undefined
// semua function = fn() (function itu sendiri)
// proses diatas dinamakan hoisting 

// pada saat, dijalankan otomatis membuat object
// window = global object 
// this = window

// 2. Execution phase

// var nama = 'Akmal';
// var umur = 17;

// console.log(sayHello());

// function sayHello() {
//     return `Hello ${nama}`
// }

// function membuat Local execution Context 
// yang didalamnya terdapat creation dan execution phase 
// membuat object 
// window
// arguments
// hoisting 


// var nama = 'Akmal Luthfi';
// var username = 'akmalluthfi';

// function cetakUrl(username) {
//     // console.log(arguments);

//     var instagramUrl = 'http://instagram.com/';
//     return instagramUrl + username;
// }

// console.log(cetakUrl(username));


function satu() {
    var nama = 'Akmal';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'Nando';
satu();
dua('Zuhril');
console.log(nama);








// function a() {
//     console.log('ini a');

//     function b() {
//         console.log('ini b');

//         function c() {
//             console.log('ini c');
//         }

//         c();
//     }

//     b();
// }

// a();