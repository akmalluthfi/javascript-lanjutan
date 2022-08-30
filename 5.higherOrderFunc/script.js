const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// console.log(angka);
// filter array >= 3
// Manual
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

// menggunakan filter
// const newAngka = angka.filter((a) => a >= 3);
// console.log(newAngka);

// map
// kalikan angka dengan 2
// const newAngka = angka.map((a) => a * 2);
// console.log(newAngka);

// reduce
// tambahkan semua angka
// const newAngka = angka.reduce((prevVal, curVal) => prevVal + curVal);
// console.log(newAngka);

// method chaining
// filter angka > 5
// kalikan dengan 2
// jumlahkan

const total = angka.filter((a) => a > 5)
    .map(a => a * 2)
    .reduce((acc, cur) => acc + cur);

console.log(total);