// Buat function untuk me-return tahun kabisat dari range tahun yang diberikan
// misalanya 2015-2020 ada 2 tahun kabisat yaitu 2016 dan 2020

function showKabisat(start, end) {
  // kalian bisa lihat defenisi tahun kabisat di wikipedia.
  // serta algoritma untuk menentukan tahun kabisatya.
  for (let i = start; i <= end; i++) {
  if (i % 4 === 0) {
    console.log("tahun kabisat");
  } else if (i % 400 === 0) {
    console.log("tahun kabisat");
  } else {
    console.log("bukan tahun kabisat");

  }
}
}

showKabisat(2015, 2020);



