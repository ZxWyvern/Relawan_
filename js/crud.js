const pengumuman = [
  {
    id: 50123,
    judul: "Bersih-Bersih Pantai Ancol",
    deskripsi:
      "Aksi kolektif membersihkan sampah di bibir pantai, pemilahan organik-anorganik, dan edukasi singkat tentang dampak plastik di laut. Peserta membawa botol minum pribadi; perlengkapan sarung tangan dan kantong disediakan panitia.",
    tanggal: new Date("2026-05-17"),
    jumlahDaftar: 24
  },
  {
    id: 50288,
    judul: "Donor Darah Sukarela — PMI Kota",
    deskripsi:
      "Kerja sama dengan PMI untuk donor darah. Syarat: usia 17–60 tahun, tidur cukup, dan belum minum obat tertentu. Daftar di lokasi atau lewat relawan pendamping; snack dan sertifikat untuk donor.",
    tanggal: new Date("2026-06-08"),
    jumlahDaftar: 41
  },
  {
    id: 50301,
    judul: "Mengajar Matematika Dasar — RPTRA",
    deskripsi:
      "Belajar bareng anak-anak sekitar RPTRA (2 jam per sesi): berhitung, permainan edukatif, dan cerita motivasi. Cocok untuk relawan yang sabar dan suka anak; materi modul dari koordinator.",
    tanggal: new Date("2026-04-26"),
    jumlahDaftar: 7
  }
];

function teksUntukInputTanggal(tanggal) {
  const tanggalAsDate = tanggal instanceof Date ? tanggal : new Date(tanggal);
  const tahun = tanggalAsDate.getFullYear();
  const bulanDuaDigit = String(tanggalAsDate.getMonth() + 1).padStart(2, "0");
  const hariDuaDigit = String(tanggalAsDate.getDate()).padStart(2, "0");
  return tahun + "-" + bulanDuaDigit + "-" + hariDuaDigit;
}


function tanggalDariNilaiInputDate(nilaiDariInput) {
  const bagianTanggal = nilaiDariInput.split("-");
  const tahun = parseInt(bagianTanggal[0], 10);
  const bulan = parseInt(bagianTanggal[1], 10) - 1;
  const hari = parseInt(bagianTanggal[2], 10);
  return new Date(tahun, bulan, hari);
}

function tambahAcara() {
  const judulDariForm = document.getElementById("inputJudul").value.trim();
  const deskripsiDariForm = document.getElementById("inputDeskripsi").value.trim();
  const nilaiTanggalDariForm = document.getElementById("inputTanggal").value;

  if (!judulDariForm || !deskripsiDariForm || !nilaiTanggalDariForm) {
    alert("Semua field wajib diisi!");
    return;
  }

  pengumuman.push({
    id: Math.floor(Math.random() * 90000 + 10000),
    judul: judulDariForm,
    deskripsi: deskripsiDariForm,
    tanggal: new Date(nilaiTanggalDariForm),
    jumlahDaftar: 0
  });

  tampilkanPengumuman();

  document.getElementById("inputJudul").value = "";
  document.getElementById("inputDeskripsi").value = "";
  document.getElementById("inputTanggal").value = "";
}

function tampilkanPengumuman() {
  const wadahDaftar = document.getElementById("daftarPengumuman");
  const templateKartu = document.getElementById("templateKartu");

  wadahDaftar.querySelectorAll(".kotak").forEach(function(satuElementKartu) {
    satuElementKartu.remove();
  });

  pengumuman.forEach(function(satuAcara) {
    const isiKartu = templateKartu.content.cloneNode(true);
    const akarKartu = isiKartu.firstElementChild;
    if (!akarKartu) {
      return;
    }

    const elementTeksJumlahPendaftar = akarKartu.querySelector(".jumlah-daftar");
    const elementTombolDaftar = akarKartu.querySelector(".btn-daftar");
    const elementTombolEdit = akarKartu.querySelector(".btn-edit");
    const elementTombolHapus = akarKartu.querySelector(".btn-hapus");
    const elementInputTanggalEdit = akarKartu.querySelector(".input-tanggal-edit");

    const elementJudulKartu = akarKartu.querySelector(".kartu-judul");
    const elementIdKartu = akarKartu.querySelector(".kartu-id");
    const elementDeskripsiKartu = akarKartu.querySelector(".kartu-deskripsi");
    const elementTanggalKartu = akarKartu.querySelector(".kartu-tanggal");

    elementTeksJumlahPendaftar.textContent = "Pendaftar: " + satuAcara.jumlahDaftar;
    elementJudulKartu.textContent = satuAcara.judul.toUpperCase();
    elementIdKartu.textContent = "ID: " + satuAcara.id;
    elementDeskripsiKartu.textContent = satuAcara.deskripsi;
    elementTanggalKartu.textContent =
      "Tanggal Acara: " +
      satuAcara.tanggal.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      });

    elementInputTanggalEdit.value = teksUntukInputTanggal(satuAcara.tanggal);

    elementTombolDaftar.addEventListener("click", function() {
      const namaLengkapRelawan = prompt("Nama lengkap:");
      if (!namaLengkapRelawan) return;
      const kotaDomisili = prompt("Kota domisili:");
      if (!kotaDomisili) return;
      const bidangMinat = prompt("Bidang minat (contoh: Lingkungan, Pendidikan, Kesehatan):");
      if (!bidangMinat) return;

      const nomorIdRelawanAcak = Math.floor(Math.random() * 90000 + 10000);
      const tanggalDaftarHariIni = new Date().toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      });

      satuAcara.jumlahDaftar++;
      elementTeksJumlahPendaftar.textContent = "Pendaftar: " + satuAcara.jumlahDaftar;

      alert(
        "Pendaftaran Berhasil!\n\n" +
          "Nama : " +
          namaLengkapRelawan.toUpperCase() +
          "\n" +
          "Kota : " +
          kotaDomisili.toUpperCase() +
          "\n" +
          "Minat : " +
          bidangMinat +
          "\n" +
          "ID Relawan : " +
          nomorIdRelawanAcak +
          "\n" +
          "Tanggal : " +
          tanggalDaftarHariIni +
          "\n" +
          "Kegiatan : " +
          satuAcara.judul.toUpperCase()
      );
    });

    elementTombolEdit.addEventListener("click", function() {
      const teksIdYangDiinputPengguna = prompt("ID acara (angka):", String(satuAcara.id));
      if (teksIdYangDiinputPengguna === null) return;

      const idAcaraAngkaBaru = parseInt(teksIdYangDiinputPengguna, 10);
      if (
        isNaN(idAcaraAngkaBaru) ||
        String(idAcaraAngkaBaru) !== teksIdYangDiinputPengguna.trim()
      ) {
        alert("ID harus berupa angka bulat yang valid.");
        return;
      }

      const apakahIdSudahDipakaiAcaraLain = pengumuman.some(function(acaraLain) {
        return acaraLain !== satuAcara && acaraLain.id === idAcaraAngkaBaru;
      });
      if (apakahIdSudahDipakaiAcaraLain) {
        alert("ID tersebut sudah dipakai acara lain. Pilih ID lain.");
        return;
      }

      const teksNamaAcaraDariPengguna = prompt("Nama acara:", satuAcara.judul);
      if (teksNamaAcaraDariPengguna === null) return;
      const namaAcaraSudahDibersihkan = teksNamaAcaraDariPengguna.trim();
      if (!namaAcaraSudahDibersihkan) {
        alert("Nama acara tidak boleh kosong.");
        return;
      }

      const teksDeskripsiDariPengguna = prompt("Deskripsi:", satuAcara.deskripsi);
      if (teksDeskripsiDariPengguna === null) return;
      const deskripsiSudahDibersihkan = teksDeskripsiDariPengguna.trim();
      if (!deskripsiSudahDibersihkan) {
        alert("Deskripsi tidak boleh kosong.");
        return;
      }

      const nilaiTanggalDariKolomEdit = elementInputTanggalEdit.value;
      if (!nilaiTanggalDariKolomEdit) {
        alert("Pilih tanggal acara di kolom Tanggal (sebelah tombol Edit).");
        return;
      }
      const tanggalAcaraYangBaru = tanggalDariNilaiInputDate(nilaiTanggalDariKolomEdit);

      satuAcara.id = idAcaraAngkaBaru;
      satuAcara.judul = namaAcaraSudahDibersihkan;
      satuAcara.deskripsi = deskripsiSudahDibersihkan;
      satuAcara.tanggal = tanggalAcaraYangBaru;
      tampilkanPengumuman();
    });

    elementTombolHapus.addEventListener("click", function() {
      const penggunaMemilihYa = confirm(
        "Yakin ingin menghapus acara:\n" + satuAcara.judul.toUpperCase() + "?"
      );
      if (!penggunaMemilihYa) return;

      const posisiAcaraDiArray = pengumuman.findIndex(function(satuItem) {
        return satuItem.id === satuAcara.id;
      });
      if (posisiAcaraDiArray !== -1) {
        pengumuman.splice(posisiAcaraDiArray, 1);
        tampilkanPengumuman();
      }
    });

    wadahDaftar.appendChild(isiKartu);
  });
}

tampilkanPengumuman();
