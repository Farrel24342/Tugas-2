function hitungTotalBuku(daftarBuku) {
    let total = 0;
    for (let i = 0; i < daftarBuku.length; i++) {
        total += daftarBuku[i];
    }
    if (total > 150000) {
        let diskon = total * 0.15;
        total -= diskon;
    }
    return total;
}
const keranjangBarang = [50000, 100000, 75000];
const totalBayar = hitungTotalBuku(keranjangBarang);

console.log("Total yang harus dibayar: Rp " + totalBayar);