// Rest Parameter

// function myFunc(...myArgs) {
//   // return `a=${a}, b=${b}, myArgs=${myArgs}`;
//   return myArgs;
// }

// console.log(myFunc(1, 2, 3, 4, 5));

// function sum(...angka) {
// manual
// let total = 0;
// for (const a of angka) {
//   total += a;
// }

// return total;

// Higher order function
// return angka.reduce((total, a) => total + a);
// }

// console.log(sum(1, 2, 3, 4, 5));


// Array Destructuring
// const kelompok1 = ['Akmal', 'Nando', 'Zuhril', 'Sandhika', 'Doody', 'Erik'];

// const [ketua, wakil, ...anggota] = kelompok1;

// console.log(ketua);
// console.log(wakil);
// console.log(anggota);

// Object Destructuring
// const teams = {
//   pm: 'Akmal',
//   frontEnd: 'Nando',
//   frontEnd: 'Zuhril',
//   backEnd: 'Sandhika',
//   ux: 'Hendra',
//   devOps: 'Ferry'
// }

// const { pm, ...team } = teams
// console.log(team);

// Filtering 
function filterBy(type, ...items) {
  return items.filter(item => typeof item === type);
}

console.log(filterBy('string', 1, 2, 'Akmal', true, 'Luthfi', false, 3, 4));









