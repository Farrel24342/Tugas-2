const daftarPasien = [
  { nama: "Budi", usia: 45 },
  { nama: "Siti", usia: 65 },
  { nama: "Ahmad", usia: 70 },
  { nama: "Dewi", usia: 25 }
];

function kelompokkanAntreanPasien(pasien) {
  let hasilAntrean = [];
  for (let i = 0; i < pasien.length; i++) {
    let kategori = "";
    if (pasien[i].usia >= 60) {
      kategori = "Prioritas Lansia";
    } else {
      kategori = "Antrean Reguler";
    }
    hasilAntrean.push({
      nama: pasien[i].nama,
      kategori: kategori
    });
  }
  return hasilAntrean;
}
let daftarHasil = kelompokkanAntreanPasien(daftarPasien);

console.log("Daftar Antrean Pasien:");
console.log(daftarHasil);