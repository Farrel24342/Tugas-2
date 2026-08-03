function cekRestok (threshold, stock) {
    let product = ["Indomie", "Beras", "Gula", "Minyak Goreng", "Telur", "Susu"];
    let wajibrestok = [];
for (let i = 0; i < stock.length; i++){
    if (stock[i] <= threshold) {
        console.log(` produk ${product[i]} dengan stock ${stock[i]}  segera restock!`);
        wajibrestok.push(product[i]);
    } else {
        console.log(` produk ${product[i]} dengan stock ${stock[i]} masih tersedia`);
    }
}
return wajibrestok;
}
let hasil = cekRestok(20, [50, 47, 10, 19, 30, 15]);
console.log(`
    Daftar produk yg harus segera direstok
:(${hasil})`);