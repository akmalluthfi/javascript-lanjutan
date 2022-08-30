// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=7e7bc6a7&s=avengers",
//   success: function (response) {
//     console.log(response);
//   },
//   error: function (e) {
//     console.log(e.responseText);
//   }
// });

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       console.log(JSON.parse(xhr.response));
//     } else {
//       console.log('error');
//     }
//   }
// }
// xhr.open('get', 'http://www.omdbapi.com/?apikey=7e7bc6a7&s=avengers');
// xhr.send();

// fetch('http://www.omdbapi.com/?apikey=7e7bc6a7&s=avengers')
//   .then(response => response.json())
//   .then(response => console.log(response))

// Promise
// object yang mempresentasikan  keberhasilan/kegagalan sebuah event yang asynchronous di masa yang akan datang
// didunia nyata, janji (terpenuhi/diingkari)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve('Janji telah ditepati');
//   } else {
//     reject('Janji diingkari');
//   }
// });

// janji1
//   .then(response => console.log('OK : ' + response))
//   .catch(response => console.log('NOT OK : ' + response));

// contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve('Ditepati setelah beberapa waktu');
//     }, 2000)
//   } else {
//     setTimeout(() => {
//       resolve('Diingkari setelah beberapa waktu');
//     }, 2000);
//   }
// });

// console.log('mulai');
// // console.log(janji2.then((response) => console.log(response)));
// janji2
//   // finally dijalankan sebelum aksi
//   .finally(() => console.log('selesai menuggu'))
//   .then(response => console.log(response))
//   .catch(response => console.log(response))
// console.log('selesai');

// Promise.all()
// Menjalankan semua promise secara langsung
const film = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      judul: 'Avengers',
      sutradara: 'Akmal',
      pemeran: 'Nando, Zuhril'
    }])
  }, 1000);
})

const cuaca = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      kota: 'Surabaya',
      temperature: 26,
      kondisi: 'Cerah Berawan'
    }])
  }, 500);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film, cuaca])
  // .then(response => console.log(response))
  .then(response => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  })
