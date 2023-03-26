// // pengulangan while
// let jumlahAngkot = 15;
// let noAngkot = 2;
// while (noAngkot <= jumlahAngkot) {
//   console.log("angkot no " + noAngkot + " berjalan dengan baik");
//   noAngkot++;
// }

// // pengulangan for

// for (let noAngkot = 1; noAngkot <= 10; noAngkot++) {
//   console.log("angkot no " + noAngkot + " berjalan dengan sangatbaik");
// }

// latihan
let noAngkot = 1;
let jmlAngkot = 10;
let angkotBeroperasi = 6;
// while (noAngkot <= angkotBeroperasi) {
//   console.log("angkot no." + noAngkot + " berjalan dengan sangat baik");
//   noAngkot++;
// }

// for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
//   console.log("angkot no." + noAngkot + " sedang tidak beroperasi");
// }

// // If else
for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot === 5 || noAngkot === 8 || noAngkot === 10) {
    console.log("angkot no." + noAngkot + " sedang lembur");
  }
  else if (noAngkot <= angkotBeroperasi) {
    console.log("angkot no." + noAngkot + " berjalan dengan sangat baik");
  } else  else {
    console.log("angkot no." + noAngkot + " sedang tidak beroperasi");
  }
}
