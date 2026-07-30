let plat = [1231, 999, 57, 2027,]
let tanggal = 29;

function filterParkirGanjilGenap (plat, tanggal){
    let kendaraanDiizinkan = [];
    for (let i = 0; i < plat.length; i++){
        let digitTerakhir = (plat[i] % 10)

        if (digitTerakhir %2 === tanggal %2){
            kendaraanDiizinkan.push(plat[i])
        } 
        return kendaraanDiizinkan
    }
}
let hasil = filterParkirGanjilGenap(plat, tanggal)
console.log(`Tanggal: ${tanggal}`)

if (tanggal %2 === 0){
    console.log('Hari ini tanggal genap')
} else {
    console.log('Hari ini tanggal ganjil')
}
console.log(`kendaraan yang boleh masuk: ${hasil}`)