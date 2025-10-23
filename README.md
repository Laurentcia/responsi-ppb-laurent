# responsi-ppb-laurent
Deskripsi 
API Cuci Sepatu adalah layanan berbasis Node.js dan Express yang digunakan untuk mengelola data sepatu yang sedang dicuci. Data disimpan di Supabase Database, dan API ini menyediakan endpoint untuk menambahkan, melihat, memperbarui, dan menghapus data sepatu.
Proyek ini juga sudah di-deploy menggunakan Vercel sehingga dapat diakses secara online

Tujuan dan Fitur Utama
Tujuan:

Memberikan REST API sederhana yang dapat digunakan oleh aplikasi front-end untuk menampilkan dan mengelola data layanan cuci sepatu.

Fitur Utama:

-Menampilkan daftar item layanan cuci sepatu
-Menampilkan detail item berdasarkan ID
-Menambah data item baru
-Mengubah data item
-Menghapus data item

Struktur Data 
Tambah Data (POST /items)

Request body:

{
  "nama": "Air Jordan 1",
  "jenis": "Sneakers",
  "status": "menunggu",
  "tanggalmasuk": "2025-10-23"
}


Response:

{
  "message": "Data sepatu berhasil ditambahkan ke daftar.",
  "note": "Item baru berhasil dicatat! Pastikan data sudah sesuai."
}

Lihat Semua Data (GET /items)

Response:

[
  {
    "id": 1,
    "nama": "Air Jordan 1",
    "jenis": "Sneakers",
    "status": "proses",
    "tanggalmasuk": "2025-10-22"
  },
  {
    "id": 2,
    "nama": "Vans Old Skool",
    "jenis": "Canvas",
    "status": "selesai",
    "tanggalmasuk": "2025-10-20"
  }
]

Lihat Berdasarkan ID (GET /items/:id)

Contoh:
GET /items/2

Response:

{
  "id": 2,
  "nama": "Vans Old Skool",
  "jenis": "Canvas",
  "status": "selesai",
  "tanggalmasuk": "2025-10-20"
}

Update Data (PUT /items/:id)

Request body:

{
  "status": "selesai"
}


Response:

{
  "message": "Data sepatu berhasil diperbarui.",
  "note": "Perubahan tersimpan! Cek kembali status dan tanggalnya."
}

 DELETE /items/:id

Menghapus data cucian sepatu dari database.
Response:

{
  "message": "Data sepatu berhasil dihapus dari daftar.",
  "note": "Item sudah dihapus secara permanen dari database."
}


Langkah Instalasi dan Cara Menjalankan API
Instalasi di Lokal:

Clone repositori:

git clone https://github.com/Laurentcia/responsi-ppb-laurent.git


Masuk ke folder proyek:

cd responsi-ppb-laurent


Install dependencies:

npm install


Buat file .env di root proyek:

PORT=3001


Jalankan server:

npm start


Link Deploy (Vercel)

API dapat diakses melalui link berikut: https://vercel.com/lllaurns-projects/responsi-ppb-laurent-m9ec
