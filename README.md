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
Contoh data:

{
  "id": 12,
  "nama": "Cuci Sepatu Kulit",
  "jenis": "Sepatu kulit",
  "status": "proses",
  "tanggalmasuk": "2025-10-22T10:00:00Z",
  "harga": 30000,
  "catatan": "Gunakan cairan khusus kulit"
}

4. Contoh Request dan Response
GET /items

Menampilkan semua data sepatu.
Response:

[
  {
    "id": 1,
    "nama": "Sepatu Putih Nike",
    "jenis": "Sneakers",
    "status": "selesai",
    "tanggalmasuk": "2025-10-20T08:30:00Z",
    "harga": 25000,
    "catatan": "Sudah dibersihkan dengan cairan khusus"
  },
  {
    "id": 2,
    "nama": "Sepatu Kulit Hitam",
    "jenis": "Kulit",
    "status": "proses",
    "tanggalmasuk": "2025-10-21T09:00:00Z",
    "harga": 30000,
    "catatan": null
  }
]

GET /items/:id

Menampilkan data berdasarkan ID tertentu.
Response:

{
  "id": 2,
  "nama": "Sepatu Kulit Hitam",
  "jenis": "Kulit",
  "status": "proses",
  "tanggalmasuk": "2025-10-21T09:00:00Z",
  "harga": 30000
}

POST /items

Menambahkan data cucian baru.
Request Body:

{
  "nama": "Sepatu Anak",
  "jenis": "Kanvas",
  "status": "menunggu",
  "tanggalmasuk": "2025-10-23T07:45:00Z",
  "harga": 15000
}


Response:

{
  "message": "Data sepatu berhasil ditambahkan ke daftar.",
  "note": "Item baru berhasil dicatat! Pastikan data sudah sesuai."
}

PUT 

Memperbarui data cucian sepatu berdasarkan ID.
Request Body:

{
  "status": "selesai",
  "catatan": "Sudah dikeringkan dan siap diambil"
}


Response:

{
  "message": "Data sepatu berhasil diperbarui.",
  "note": "Perubahan tersimpan! Cek kembali status dan tanggalnya."
}

🟩 DELETE /items/:id

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
