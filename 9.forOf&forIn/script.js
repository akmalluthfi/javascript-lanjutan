// for..of 

// Array
// const mhs = ['Akmal Luthfi', 'Nando Septian', 'Ahmad Zuhril'];

// for (const m of mhs) {
//   console.log(m);
// }


// String 
// const nama = 'Akmal';

// for (const char of nama) {
//   console.log(char);
// }

// const mhs = ['Akmal Luthfi', 'Nando Septian', 'Ahmad Zuhril'];

// mhs.forEach((val, i) => {
//   console.log(`${val} adalah mahasiswa ke-${i + 1}`);
// })

// for (const [i, val] of mhs.entries()) {
//   console.log(`${val} adalah mahasiswa ke-${i + 1}`);
// }

// Node List
// const listItem = document.querySelectorAll('li');

// for (const item of listItem) {
//   console.log(item.textContent);
// }


// Arguments
// function sum() {
//   // return arguments.reduce((a, i) => a + i);
//   let jumlah = 0;

//   for (const args of arguments) {
//     jumlah += args;
//   }

//   return jumlah;
// }

// console.log(sum(1, 2, 3, 3, 4, 5, 6, 6));


// for..in

const mhs = {
  nama: 'Akmal',
  umur: 17,
  email: 'akmalluthfi19@gmail.com'
}

for (const item in mhs) {
  // console.log(item);
  console.log(mhs[item]);
}