// Function declaration
// function tampilNama(nama) {
//     return `Hello ${nama}`
// }
// console.log(tampilNama('Akmal'));

// Function Expression
// const tampilNama = function (nama) {
//     return `Hello ${nama}`
// }
// console.log(tampilNama('Akmal'));

// Arrow Function

// const tampilNama = (nama) => {
//     return `Hello ${nama}`
// }

// jika parameternya 1, maka tidak membutuhkan kurung,
// jika hanya satu baris bisa tanpa kurung
// jika hanya return, return tidak perlu dituliskan, disebut implisit return

// const tampilNama = nama => `Hello ${nama}`;
// console.log(tampilNama('Akmal'));

// let mahasiswa = ['Akmal Luthfi', 'Nando Septian', 'Acmad Zuhril'];

// let jumlahHuruf = mahasiswa.map((nama => nama.length))
// console.log(jumlahHuruf);

// jika ingin return object, harus dibungkus dengan (),
// jika ingin menuliskan nama variable yang sama dengan isinya, bisa dengan ditulis nama saja

// let jumlahHuruf = mahasiswa.map((nama => ({
//     nama, jmlHuruf: nama.length
// })))
// console.log(jumlahHuruf);

// Konsep this pada arrow function

// Constructor function
// const Mahasiswa = function () {
//     this.nama = 'Akmal';
//     this.umur = 17;

//     this.sayHello = function () {
//         console.log(`Hallo nama saya ${this.nama}, dan saya umur ${this.umur}`);
//     }
// }

// const akmal = new Mahasiswa();

// Arrow function
// didalam arrow function tidak terdapat keyword this

// const Mahasiswa = function () {
//     this.nama = 'Akmal';
//     this.umur = 17;

//     this.sayHello = () => {
//         console.log(`Hallo nama saya ${this.nama}, dan saya umur ${this.umur}`);
//     }
// }

// const akmal = new Mahasiswa();

// Object Literal
// const mhs1 = {
//     nama: 'Akmal',
//     umur: 17,
//     sayHello: () => {
//         console.log(`Hallo nama saya ${this.nama}, dan saya umur ${this.umur}`);
//         // this akan mengambil object window
//     }
// }

// const Mahasiswa = function () {
//     this.nama = 'Akmal';
//     this.umur = 17;

//     this.sayHello = function () {
//         console.log(`Hallo nama saya ${this.nama}, dan saya umur ${this.umur}`);
//     }

//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500);
// }

// const akmal = new Mahasiswa();


const box = document.querySelector('.box');

box.addEventListener('click', function (event) {
    let satu = 'size';
    let dua = 'caption';

    // Tuker isinya 
    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);

    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
})

