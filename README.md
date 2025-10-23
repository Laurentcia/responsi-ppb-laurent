# REST API Daftar Barang Cuci Sepatu

## Deskripsi Umum
API Cuci Sepatu adalah layanan berbasis Node.js dan Express yang digunakan untuk mengelola data sepatu yang sedang dicuci. Data disimpan di Supabase Database, dan API ini menyediakan endpoint untuk menambahkan, melihat, memperbarui, dan menghapus data sepatu.
Proyek ini juga sudah di-deploy menggunakan Vercel sehingga dapat diakses secara online.


## Tujuan

Menyediakan layanan API untuk mencatat, memantau, dan mengelola daftar sepatu yang sedang dicuci pada sebuah jasa laundry.

## Fitur Utama:

1) Menampilkan semua data cucian sepatu (GET /items)

2) Menampilkan data berdasarkan ID (GET /items/:id)

3) Menambahkan data baru (POST /items)

4) Memperbarui data cucian (PUT /items/:id)

5) Menghapus data cucian (DELETE /items/:id)


## Struktur Data

Contoh data 
```
{
  "id": 12,
  "nama": "Cuci Sepatu Kulit",
  "jenis": "Sepatu kulit",
  "status": "proses",
  "tanggalmasuk": "2025-10-22T10:00:00Z",
  "harga": 30000,
  "catatan": "Gunakan cairan khusus kulit"
}
```

## GET /items

Menampilkan semua data sepatu.
Respons
```
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

```
## GET /items/:id

Menampilkan data berdasarkan ID tertentu.
Response:
```
{
  "id": 2,
  "nama": "Sepatu Kulit Hitam",
  "jenis": "Kulit",
  "status": "proses",
  "tanggalmasuk": "2025-10-21T09:00:00Z",
  "harga": 30000
}
```
## POST /items

Menambahkan data cucian baru.
Request Body:
```
{
  "nama": "Sepatu Anak",
  "jenis": "Kanvas",
  "status": "menunggu",
  "tanggalmasuk": "2025-10-23T07:45:00Z",
  "harga": 15000
}

```

Response:
```
{
  "message": "Data sepatu berhasil ditambahkan ke daftar.",
  "note": "Item baru berhasil dicatat! Pastikan data sudah sesuai."
}
```

## PUT /items/:id

Memperbarui data cucian sepatu berdasarkan ID.
Request Body:
```
{
  "message": "Data sepatu berhasil diperbarui.",
  "note": "Perubahan tersimpan! Cek kembali status dan tanggalnya."
}
```

## DELETE /items/:id

Menghapus data cucian sepatu dari database.
Response:
```
{
  "message": "Data sepatu berhasil dihapus dari daftar.",
  "note": "Item sudah dihapus secara permanen dari database."
}
```

## Langkah Instalasi dan Cara Menjalankan API


Masuk ke folder proyek:
```
cd responsi-ppb-laurent
```

Install dependencies:
```
npm install
```

Buat file .env dan tambahkan variabel Supabase:
```
SUPABASE_URL=<your_supabase_url>
SUPABASE_KEY=<your_supabase_key>
```

Jalankan server lokal:
```
npm start
```

Akses di browser atau Postman:
```
http://localhost:3001
```

## Link Deploy (Vercel)
https://vercel.com/lllaurns-projects/responsi-ppb-laurent-m9ec/14ejQpxL6MK6M2BJFyT5GgmkQ5cc
