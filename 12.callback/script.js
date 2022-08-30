const url = 'https://jsonplaceholder.typicode.com/comments';

// Callback
// Synchronous callback
// function halo(nama) {
//   console.log(`Halo ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = 'Akmal Luthfi';
//   callback(nama);
// }

// tampilkanPesan(nama => console.log(nama));


// Asynchronous Callback
// Vanilla Javascript
// function getData(url, success, error) {
//   const xhr = new XMLHttpRequest;

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else {
//         error();
//       }
//     }
//   }

//   xhr.open('get', url);
//   xhr.send();
// }

// console.log('mulai');
// getData('data/posts.json', response => {
//   console.log(JSON.parse(response));
// }, () => {
//   console.log('error');
// });
// console.log('selesai');

// Jquery
$.ajax({
  url: 'data/posts.json',
  success: function (response) {
    console.log(response);
  },
  error: function (error) {
    console.log(error);
  }
});
