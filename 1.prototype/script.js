// Cara membuat Object pada javascript 

// 1. Object Literal 
// Problem : Akan susah jika banyak object yang dibuat 
// let mahasiswa = {
//     nama: 'Akmal Luthfi',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Selamat makan ${this.nama}`);
//     }
// }

// 2. Function Declaration
// Masalah awal : method akan dibuat berkali-kali saat object mahasiswa di instansiasi
// Solusi : memakai object tersendiri untuk mendukung object Mahasiswa 

// Masalah akhir : kita tetap membuat dua object, padahal yang dibutuhkan hanya object mahasiswa
// solusi: menggunakan object bawaan (prototype) 

// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat makan`);
//     },

//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat bermain`);
//     }
// }

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     // masalah : setiap kita membuat/menghapus object baru harus diedit lagi
//     // solusi : menggunakan object create 
//     // mahasiswa.makan = methodMahasiswa.makan;
//     // mahasiswa.main = methodMahasiswa.main;

//     return mahasiswa;
// }

// let akmal = Mahasiswa('akmal', 10);

// menggunakan prototype inheritance
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, Selamat makan`);
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, Selamat bermain`);
// }

// let akmal = new Mahasiswa('akmal', 10);


// menggunakan versi class
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return `Halo ${this.nama}, Selamat makan`;
    }

    main(jam) {
        this.energi -= jam;
        return `Halo ${this.nama}, Selamat bermain`;
    }
}

let akmal = new Mahasiswa('akmal', 20);


















// 3. Constructor Function
// function Mahasiswa(nama, energi) {

//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat makan`);
//     }

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat bermain`);
//     }
// }

// let akmal = new Mahasiswa('akmal', 10);



// 4. Object create 
