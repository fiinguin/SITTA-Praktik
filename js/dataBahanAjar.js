// var app = new Vue({
//   el: '#app',
//   data: {
//     upbjjList: ["Jakarta", "Surabaya", "Malang", "Jember", "Denpasar"],
//     kategoriList: ["MK Wajib", "MK Pilihan", "Praktikum", "Problem-Based"],
//     pengirimanList: [
//       { kode: "REG", nama: "Reguler (3-5 hari)" },
//       { kode: "EXP", nama: "Ekspres (1-2 hari)" }
//     ],
//     paket: [
//       { kode: "PAKET-UT-001", nama: "PAKET Ekonomi", isi: ["EKMA4213", "ADPU4334"], harga: 125000 },
//       { kode: "PAKET-UT-002", nama: "PAKET Sistem Informasi", isi: ["SKOM4101", "BIOL4223"], harga: 135000 }
//     ],
//     stok: [
//       {
//      sampul: "images/kepemimpinan.jpg",
//      kode: "ADPU4334",
//      judul: "Kepemimpinan",
//      kategori: "MK Wajib",
//      upbjj: "Jakarta",
//      harga: 50000,
//      qty: 50,
//      safety: 20,
//      catatanHTML: "Edisi 2"
//       },
//    {
//      sampul: "images/manajemen_keuangan.jpg",
//      kode: "EKMA4213",
//      judul: "Manajemen Keuangan",
//      kategori: "Praktikum",
//      upbjj: "Surabaya",
//      harga: 75000,
//      qty: 60,
//      safety: 10,
//      catatanHTML: "Edisi 3"
//    },
//    {
//      sampul: "images/mikrobiologi.jpg",
//      kode: "BIOL4223",
//      judul: "Mikrobiologi",
//      kategori: "MK Wajib",
//      upbjj: "Denpasar",
//      harga: 55000,
//      qty: 100,
//      safety: 8,
//      catatanHTML: "Edisi 3"
//    },
//    {
//      sampul: "images/paud_perkembangan.jpeg",
//      kode: "PAUD4306",
//      judul: "Perkembangan dan Konsep Dasar Pengembangan Anak Usia Dini",
//      kategori: "MK Pilihan",
//      upbjj: "Surabaya",
//      harga: 75000,
//      qty: 100,
//      safety: 8,
//    catatanHTML: "Edisi 2"
//    },
//    {
//      sampul: "images/pengantar_komunikasi.jpg",
//      kode: "SKOM4101",
//      judul: "Pengantar Ilmu Komunikasi",
//      kategori: "MK Pilihan",
//      upbjj: "Surabaya",
//      harga: 80000,
//      qty: 5,
//      safety: 8,
//      catatanHTML: "Edisi 3"
//    },
//     ],
//     // Simulasi status DO (opsional fitur Tracking DO)
//     tracking: {
//       "DO2025-0001": {
//         nim: "123456789",
//         nama: "Rina Wulandari",
//         status: "Dalam Perjalanan",
//         ekspedisi: "JNE",
//         tanggalKirim: "2025-08-25",
//         paket: "PAKET-UT-001",
//         total: 120000,
//         perjalanan: [
//           { waktu: "2025-08-25 10:12:20", keterangan: "Penerimaan di Loket: TANGSEL" },
//           { waktu: "2025-08-25 14:07:56", keterangan: "Tiba di Hub: JAKSEL" },
//           { waktu: "2025-08-26 08:44:01", keterangan: "Diteruskan ke Kantor Tujuan" }
//         ]
//       }
//     }
//   }
// });

var dataBahanAjar = {
  upbjjList: [
    "Jakarta",
    "Surabaya",
    "Malang",
    "Jember",
    "Denpasar"
  ],
  kategoriList: [
    "MK Wajib",
    "MK Pilihan",
    "Praktikum",
    "Problem-Based"
  ],
  pengirimanList: [
    { kode: "REG", nama: "Reguler (3-5 hari)" },
    { kode: "EXP", nama: "Ekspres (1-2 hari)" }
  ],
  paket: [
    { kode: "PAKET-UT-001", nama: "PAKET Ekonomi", isi: ["EKMA4116", "EKMA4115"], harga: 120000 },
    { kode: "PAKET-UT-002", nama: "PAKET Sistem Informasi", isi: ["BIOL4201", "FISIP4001"], harga: 140000 }
  ],
  "stok": [
    {
      sampul: "images/kepemimpinan.jpg",
      kode: "ADPU4334",
      judul: "Kepemimpinan",
      kategori: "MK Wajib",
      upbjj: "Jakarta",
      harga: 50000,
      qty: 50,
      safety: 20,
      catatanHTML: "Edisi 2"
    },
    {
      sampul: "images/manajemen_keuangan.jpg",
      kode: "EKMA4213",
      judul: "Manajemen Keuangan",
      kategori: "Praktikum",
      upbjj: "Surabaya",
      harga: 75000,
      qty: 60,
      safety: 10,
      catatanHTML: "Edisi 3"
    },
    {
      sampul: "images/mikrobiologi.jpg",
      kode: "BIOL4223",
      judul: "Mikrobiologi",
      kategori: "MK Wajib",
      upbjj: "Denpasar",
      harga: 55000,
      qty: 100,
      safety: 8,
      catatanHTML: "Edisi 3"
    },
        {
      sampul: "images/paud_perkembangan.jpeg",
      kode: "PAUD4306",
      judul: "Perkembangan dan Konsep Dasar Pengembangan Anak Usia Dini",
      kategori: "MK Pilihan",
      upbjj: "Surabaya",
      harga: 75000,
      qty: 100,
      safety: 8,
      catatanHTML: "Edisi 2"
    },
        {
      sampul: "images/pengantar_komunikasi.jpg",
      kode: "SKOM4101",
      judul: "Pengantar Ilmu Komunikasi",
      kategori: "MK Pilihan",
      upbjj: "Surabaya",
      harga: 80000,
      qty: 5,
      safety: 8,
      catatanHTML: "Edisi 3"
    },
  ],
  tracking: {
    "DO2025-0001": {
      nim: "123456789",
      nama: "Rina Wulandari",
      status: "Dalam Perjalanan",
      ekspedisi: "JNE",
      tanggalKirim: "2025-08-25",
      paket: "PAKET-UT-001",
      total: 120000,
      perjalanan: [
        { waktu: "2025-08-25 10:12:20", keterangan: "Penerimaan di Loket: TANGSEL" },
        { waktu: "2025-08-25 14:07:56", keterangan: "Tiba di Hub: JAKSEL" },
        { waktu: "2025-08-26 08:44:01", keterangan: "Diteruskan ke Kantor Tujuan" }
      ]
    }
  }
};