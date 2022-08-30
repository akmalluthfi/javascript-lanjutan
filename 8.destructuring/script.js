// Destructuring Variable/ Assignment

// Destructuring Array
// const perkenalan = ['Halo', 'nama saya', 'Akmal Luthfi'];

// const [salam, penghubung, nama] = perkenalan;
// console.log(salam);

// Swap Items
// let a = 1;
// let b = 2;
// console.log(a, b);
// [a, b] = [b, a];
// console.log(a, b);


// return value pada function
// function coba() {
//   return [1, 2];
// }
// const [a, b] = coba();
// console.log(a);

// rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(a);
// console.log(values);


// Destructuring Object
// const mhs = {
//   nama: 'Akmal Luthfi',
//   umur: 17,
// }

// const { nama, umur } = mhs;

// console.log(nama);

// Assignment tanpa deklarasi variable
// ({ nama, umur } = {
//   nama: 'Akmal Luthfi', umur: 17
// });

// console.log(nama);

// Assignment ke variable baru
// const mhs = {
//   nama: 'Akmal Luthfi',
//   umur: 17,
// }

// const { nama: n, umur } = mhs;
// console.log(n);

// Memberikan default value
// const mhs = {
//   nama: 'Akmal Luthfi',
//   umur: 17,
//   email: 'akmalluthfi19@gmail.com'
// }

// const { nama: n, umur, email = 'blabla@gmail.com' } = mhs;
// console.log(email);

// Rest parameter
// const mhs = {
//   nama: 'Akmal Luthfi',
//   umur: 17,
//   email: 'akmalluthfi19@gmail.com'
// }

// const { nama, ...value } = mhs;
// console.log(value);


// Mengambil field pada object setelah dikirim sebagai prameter pada function
// const mhs = {
//   id: 191204,
//   nama: 'Akmal Luthfi',
//   umur: 17,
//   email: 'akmalluthfi19@gmail.com'
// }

// function getId({ id, ...val }) {
//   return id;
// }

// console.log(getId(mhs));


// Desctructuring function arguments
const mhs1 = {
  nama: 'Akmal Luthfi',
  umur: 17,
  email: 'akmalluthfi19@gmail.com',
  nilai: {
    tugas: 85,
    uts: 80,
    uas: 75,
  }
}

function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai tugas saya adalah ${tugas}`
}

console.log(cetakMhs(mhs1));
