// function init() {
//     var nama = 'Akmal';

//     function tampilNama() {
//         console.log(nama);
//     }

//     tampilNama();
// }

// let panggilNama = init();
// panggilNama('Akmal');


// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}`);
//     }
// }

// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('siang');
// let selamatMalam = ucapkanSalam('malam');

// console.dir(selamatMalam('Akmal'));



let add = (function () {
    let counter = 1;

    return function () {
        return counter++;
    }
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());