function hitungGajiMingguan (dataKerja) {
    let gaji = 0;
    for (let i = 0; i < dataKerja.length; i++) {
        if (dataKerja[i].jam >= 40) {
            gaji += dataKerja[i].jam * 75000;
            status = "Lembur";
        } else if (dataKerja[i].jam < 40) {
            gaji += dataKerja[i].jam * 50000;
            status = "Tidak lembur";
        }
    }
    console.log(`Total gaji minggu ini: Rp.${gaji}`);
}
let daftarJamKerja = [
    { hari: "Senin", jam: 10 },
    { hari: "Selasa", jam: 7 },
    { hari: "Rabu", jam: 8 },
    { hari: "Kamis", jam: 10 },
    { hari: "Jumat", jam: 9 }
];
hitungGajiMingguan(daftarJamKerja);