function filterParkiranGanjil(daftarKendaraan, Tanggal) {
    let platGanjil = [];
    for (let i = 0; i < daftarPlat.length; i++) {
        let plat = daftarPlat[i];
        let nomorPlat = parseInt(plat.split(' ')[1]);
        if (nomorPlat % 2 !== 0) {
            platGanjil.push(plat);
        }
    }
    return platGanjil;
}

const daftarPlat = ["B 1234 ABC", "D 5678 XYZ", "F 9012 DEF", "G 3456 HIJ"];
const hasilFilter = filterParkiranGanjil(daftarPlat);

console.log("Plat nomor ganjil yang diperbolehkan parkir: ", hasilFilter);