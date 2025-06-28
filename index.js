// 1. Memanggil library express yang sudah kita install
const express = require('express');

// 2. Membuat sebuah aplikasi dari express
const app = express();

// 3. Menentukan di port berapa aplikasi kita akan berjalan
const port = 8080;

// 4. Data diri Anda (WAJIB GANTI DENGAN DATA ANDA)
const NIM = "2406153";         // <-- GANTI DENGAN NIM ANDA
const NAMA = "Ihsan Muhammad Dahlan";      // <-- GANTI DENGAN NAMA ANDA

// 5. Membuat sebuah "rute". Ini artinya:
// "Jika ada yang mengakses halaman utama ('/'), maka jalankan fungsi ini"
app.get('/', (req, res) => {
  // Fungsi ini akan mengirimkan sebuah teks sebagai respons
  res.send(`Hello! Ini adalah aplikasi UAS PKPL milik ${NAMA} dengan NIM ${NIM}.`);
});

// 6. Memberitahu aplikasi untuk "mendengarkan" permintaan yang masuk di port yang telah ditentukan
app.listen(port, () => {
  // Tampilkan pesan ini di terminal saat server berhasil berjalan
  console.log(`Aplikasi berjalan di http://localhost:${port}`);
});