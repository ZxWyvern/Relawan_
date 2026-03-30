const pengumuman = [
  {
    id: 11001,
    judul: "Contoh Judul",
    deskripsi: "Contoh Deskripsi",
    tanggal: "Contoh Tanggal Di Buat 2026-03-22"
  }
];

function tampilkanPengumuman() {
  let container = document.getElementById("daftarPengumuman");
  container.innerHTML = "";

  for (let i = 0; i < pengumuman.length; i++) {
    let p = pengumuman[i];
    let div = document.createElement("div");
    div.className = "kotak";
    div.innerHTML =
      "<h3>" + p.judul + "</h3>" +
      "<p>ID: " + p.id + "</p>" +
      "<p>" + p.deskripsi + "</p>" +
      "<p>Tanggal: " + p.tanggal + "</p>";
    container.appendChild(div);
  }
}


function tambahAcara() {
  let judul = document.getElementById("inputJudul").value;
  let deskripsi = document.getElementById("inputDeskripsi").value;
  let tanggal = document.getElementById("inputTanggal").value;

  pengumuman.push({
    id: Math.floor(Math.random() * 90000 + 10000),
    judul: judul,
    deskripsi: deskripsi,
    tanggal: tanggal
  });

  tampilkanPengumuman();
}


tampilkanPengumuman();
