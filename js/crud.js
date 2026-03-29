// Array data pengumuman (hardcoded dulu)
const pengumuman = [
  {
    id: 11001,
    judul: "Contoh Judul",
    deskripsi: "Contoh Deskripsi",
    tanggal: "Contoh Tanggal Di Buat 2026-03-22"
  }
];

function tampilkanPengumuman() {
  var container = document.getElementById("daftarPengumuman");
  container.innerHTML = "";

  for (var i = 0; i < pengumuman.length; i++) {
    var p = pengumuman[i];
    var div = document.createElement("div");
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
  var judul = document.getElementById("inputJudul").value;
  var deskripsi = document.getElementById("inputDeskripsi").value;
  var tanggal = document.getElementById("inputTanggal").value;

  pengumuman.push({
    id: Math.floor(Math.random() * 90000 + 10000),
    judul: judul,
    deskripsi: deskripsi,
    tanggal: tanggal
  });

  tampilkanPengumuman();
}


tampilkanPengumuman();
