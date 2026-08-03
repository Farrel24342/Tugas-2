function targetHarian(kalori){
    for (let i = 0; i <kalori.length; i++) {
       let evaluasi = "";
       let status = "";
       if (kalori[i] >= 1700 ){
        evaluasi = "Berarti Anda kelebihan asupan kalori";
        status ="melebihi target harian";
       } else if (kalori[i] >= 1500) {
        evaluasi ="asupan kalori Anda pas dan ideal"
        status = "pas dari target harian";
       } else {
        evaluasi = "Berarti Anda kekurangan asupan kalori";
        status = "kurang dari target";
       }
       console.log(`komsumsi kalori = ${kalori[i]} / ${status} (${evaluasi})`);
    }
}

targetHarian([1300, 1500, 1700]);