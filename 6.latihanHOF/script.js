// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('ul li'));

// pilih hanya yang 'JAVASCRIPT LANJUTAN'
const jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

    // ambil durasi masing-masing video
    .map(video => video.dataset.duration)

    // ubah durasi menjadi int, ubah menit menjadi detik
    .map(d => {
        let minute = Number(d.split(':')[0]);
        let second = Number(d.split(':')[1]);

        return ((minute * 60) + second);
    });

// jumlahkan semua detik
const total = jsLanjut.reduce((prev, cur) => prev + cur);

// ubah formatnya menjadi jam, menit, detik
// console.log(total % 60);
const hour = Math.floor(total / (60 * 60));
const minute = Math.floor((total - (hour * 3600)) / 60);
const second = total - (hour * 3600) - (minute * 60);
// console.log(hour, minute, second);

// simpan di dom
document.querySelector('.total-durasi').textContent = `${hour} Jam, ${minute} Menit, ${second} detik`;
document.querySelector('.jumlah-video').textContent = jsLanjut.length + ' Video'; 