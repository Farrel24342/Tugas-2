const daftarPemain = [
  { nama: "ProGamer99", skor: 850 },
  { nama: "ShadowNinja", skor: 950 },
  { nama: "CyberKing", skor: 650 },
  { nama: "AlphaHero", skor: 910 },
  { nama: "VortexRider", skor: 780 }
];

function prosesLeaderboard(pemain) {
  pemain.sort((a, b) => b.skor - a.skor);

  let laporan = [];
  for (let i = 0; i < pemain.length; i++) {
    let tier = "";
    const skor = pemain[i].skor;

    if (skor >= 900) {
      tier = "Gold Tier";
    } else if (skor >= 700) {
      tier = "Silver Tier";
    } else {
      tier = "Bronze Tier";
    }
    
    laporan.push({
      peringkat: i + 1,
      nama: pemain[i].nama,
      skor: skor,
      tier: tier
    });
  }
  return laporan;
}
let hasilLeaderboard = prosesLeaderboard(daftarPemain);

console.log("Laporan Leaderboard E-Sport:");
console.log(hasilLeaderboard);