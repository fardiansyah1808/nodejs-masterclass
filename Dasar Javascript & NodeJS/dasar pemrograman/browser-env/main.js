console.log('Hello World!');

// const h2 = document.querySelector('h2');
// h2.textContent = 'Hello World!';

// document.getElementById('sub-judul').innerHTML =
//   'Belajar Membuat Program Sederhana dengan Javascript';

// document.getElementById('sub-judul').innerHTML =
//   new Date().toLocaleDateString();

// localStorage.setItem('nama', 'Fardiansyah');
// localStorage.setItem('umur', 20);

// let nama = localStorage.getItem('nama');
// let umur = localStorage.getItem('umur');

// document.getElementById('nama').innerHTML = 'Nama: ' + nama;
// document.getElementById('umur').innerHTML = 'Umur: ' + umur;

// console.log(localStorage.getItem('nama'));

// localStorage.clear();

// navigator.getBattery().then((battery) => {
//   window.alert('Battery Status: ' + battery.level);
// });

// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(
//     (position) => {
//       const latitude = position.coords.latitude;
//       const longitude = position.coords.longitude;
//       window.alert('Latitude: ' + latitude + ', Longitude: ' + longitude);
//     },
//     (error) => {
//       console.error('Error mendapatkan lokasi: ', error);
//     }
//   );
// } else {
//   console.error('Geolocation tidak didukung oleh browser ini.');
// }

// if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//   navigator.mediaDevices
//     .getUserMedia({ video: true })
//     .then((stream) => {
//       const videoElement = document.querySelector('video');
//       if (videoElement) {
//         videoElement.srcObject = stream;
//         videoElement.play();
//       }
//     })
//     .catch((error) => {
//       console.error('Error membuka kamera: ', error);
//     });
// } else {
//   console.error('getUserMedia tidak didukung oleh browser ini.');
// }
