// Spread Operator
// Memecah iterables menjadi single element

// const mhs = ['Akmal', 'Nando', 'Zuhril'];
// console.log(...mhs[0]);
// console.log(...mhs);
// const siswa = ['Sandhika', 'Doddy', 'Erik'];

// const orang = [...mhs, ...siswa];
// const orang = mhs.concat(siswa);

// Mengcopy array
// const mhs = ['Akmal', 'Nando', 'Zuhril'];

// const mhs1 = mhs; bukan copy array tapi membuat reference
// const mhs1 = [...mhs];
// mhs1[0] = 'Sandhika';

// console.log(mhs);
// console.log(mhs1);

// const list = document.querySelectorAll('li');

// const item = [];
// Manual
// for (let i = 0; i < list.length; i++) {
//   item.push(list[i].textContent);
// }

// Higher Order Function
// const item = [...list].map(list => list.textContent);

// console.log(item);

const nama = document.querySelector('.nama');

const char = [...nama.textContent].map(c => `<span>${c}</span>`).join('');
// console.log(char); 
nama.innerHTML = char;








