function filterParkirGanjilGenap(daftarPlat, tanggal) {
  // 1. Mengecek jenis tanggal (Ganjil atau Genap)
  const isTanggalGenap = tanggal % 2 === 0;

  const kendaraanDiizinkan = [];

  // 2. Memeriksa digit terakhir plat nomor setiap kendaraan dengan perulangan
  for (let i = 0; i < daftarPlat.length; i++) {
    const plat = daftarPlat[i];

    // Mengambil angka-angka yang ada di dalam string plat nomor
    const angkaDiPlat = plat.match(/\d+/g);

    if (angkaDiPlat) {
      // Menggabungkan semua kelompok angka dan mengambil karakter digit terakhir
      const gabunganAngka = angkaDiPlat.join('');
      const digitTerakhir = parseInt(gabunganAngka.slice(-1));

      // Menentukan apakah digit terakhir plat bernilai genap
      const isPlatGenap = digitTerakhir % 2 === 0;

      // 3. Jika status genap/ganjil plat cocok dengan tanggal, masukkan ke array izin
      if (isPlatGenap === isTanggalGenap) {
        kendaraanDiizinkan.push(plat);
      }
    }
  }

  return kendaraanDiizinkan;
}

// ==========================================
// Contoh Penggunaan:
// ==========================================

const kendaraan = [
  "B 1234 CD",
  "B 9999 XYZ",
  "D 8888 EF",
  "B 1010 GHI",
  "D 4321 A"
];

// Pengujian pada tanggal 18 (Genap)
console.log("Diizinkan masuk tanggal 18 (Genap):");
console.log(filterParkirGanjilGenap(kendaraan, 18));
// Output: [ 'B 1234 CD', 'D 8888 EF', 'B 1010 GHI' ]

// Pengujian pada tanggal 21 (Ganjil)
console.log("\nDiizinkan masuk tanggal 21 (Ganjil):");
console.log(filterParkirGanjilGenap(kendaraan, 21));
// Output: [ 'B 9999 XYZ', 'D 4321 A' ]