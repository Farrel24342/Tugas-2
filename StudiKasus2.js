const seleksiSiswa = [
   { nama: "lappox", IPK: 3.8, pendapatan: 4500000 },
   { nama: "maxim", IPK: 3.4, pendapatan: 3000000 },
   { nama: "firman", IPK: 4.0, pendapatan: 3500000 },
   { nama: "jamule", IPK: 3.2, pendapatan: 6000000 },
   { nama: "fandi", IPK: 3.5, pendapatan: 4000000 }
]

function cekBeasiswa (dataMahasiswa) {
    for (let i = 0; i < dataMahasiswa.length; i++) {

        if (dataMahasiswa[i].IPK >= 3.5 && dataMahasiswa[i].pendapatan <= 5000000) {
            console.log(dataMahasiswa[i].nama + " : Lolos");
        } else {
            console.log(dataMahasiswa[i].nama + " : Tidak Lolos");
            }
        }
    }

cekBeasiswa(seleksiSiswa);