// 1. Html Fragments 
const mhs = {
  nama: 'Akmal Luthfi',
  umur: 17,
  nis: '20041219',
  email: 'akmalluthfi19@gmail.com'
}

const el = `<div class="mhs">
              <h2>${mhs.nama}</h2>
              <span>${mhs.nis}</span>
            </div>`;

document.body.innerHTML = el;
