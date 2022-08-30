// const coba = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('Selesai');
//   }, 2000)
// });

// coba.then(result => console.log(result));

function cobaPromise() {
  return new Promise((resolve, reject) => {

    const waktu = 5000;

    if (waktu < 5000) {
      setTimeout(() => {
        resolve('Selesai');
      }, waktu)
    } else {
      reject('kelamaan');
    }

  });
}

// const coba = cobaPromise();
// coba
//   .then(result => console.log(result))
//   .catch(result => console.log(result));

async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (error) {
    console.log(error);
  }
}

cobaAsync();