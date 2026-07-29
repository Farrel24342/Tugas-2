let ipk = [3.8, 3.0, 4.0, 3.5];
let pend = [5000000, 3000000, 7000000, 4000000];

function seleksiBeasiswa(nilaiIPK, pendapatan) {
    for (let i = 0; i < nilaiIPK.length; i++) {
        if (nilaiIPK[i] >= 3.5 && pendapatan[i] <= 5000000) {
            console.log(`Mahasiswa ke-${i + 1} diterima untuk beasiswa.`);
        } else {
            console.log(`Mahasiswa ke-${i + 1} tidak diterima untuk beasiswa.`);
        }
    }
}

seleksiBeasiswa(ipk, pend);