const pengumuman = [];


// daftar
function tambahAcara() {
  const judul = document.getElementById("inputJudul").value.trim();
  const deskripsi = document.getElementById("inputDeskripsi").value.trim();
  const tanggalInput = document.getElementById("inputTanggal").value;

  if (!judul || !deskripsi || !tanggalInput) {
    alert("Semua field wajib diisi!");
  }

  pengumuman.push({
    id: Math.floor(Math.random() * 90000 + 10000),
    judul: judul,
    deskripsi: deskripsi,
    tanggal: new Date(tanggalInput),
    jumlahDaftar: 0
  });

  tampilkanPengumuman();

  document.getElementById("inputJudul").value = "";
  document.getElementById("inputDeskripsi").value = "";
  document.getElementById("inputTanggal").value = "";
}


// menampilkan semuanya di halaman dan nambahin event listener untuk tombol daftar dan hapus
function tampilkanPengumuman() {
  const container = document.getElementById("daftarPengumuman");
  const template = document.getElementById("templateKartu");

  const kartulama = container.querySelectorAll(".kotak");
  kartulama.forEach(function(el) { el.remove(); });

  for (let i = 0; i < pengumuman.length; i++) {
    const p = pengumuman[i];
    const kartu = template.content.cloneNode(true);

    kartu.querySelector(".jumlah-daftar").textContent = "Pendaftar: " + p.jumlahDaftar;
    kartu.querySelector(".kartu-judul").textContent = p.judul.toUpperCase();
    kartu.querySelector(".kartu-id").textContent = "ID: " + p.id;
    kartu.querySelector(".kartu-deskripsi").textContent = p.deskripsi;
    kartu.querySelector(".kartu-tanggal").textContent = "Tanggal Acara: " + p.tanggal.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    });

    kartu.querySelector(".btn-daftar").addEventListener("click", function() {
      const nama = prompt("Nama lengkap:");
      if (!nama) return;
      const kota = prompt("Kota domisili:");
      if (!kota) return;
      const minat = prompt("Bidang minat (contoh: Lingkungan, Pendidikan, Kesehatan):");
      if (!minat) return;

      const idRelawan = Math.floor(Math.random() * 90000 + 10000);
      const tanggalDaftar = new Date().toLocaleDateString("id-ID", {
        day: "2-digit", month: "long", year: "numeric"
      });

      p.jumlahDaftar++;
      this.closest(".kotak").querySelector(".jumlah-daftar").textContent = "Pendaftar: " + p.jumlahDaftar;

      alert(
        "Pendaftaran Berhasil!\n\n" +
        "Nama : " + nama.toUpperCase() + "\n" +
        "Kota : " + kota.toUpperCase() + "\n" +
        "Minat : " + minat + "\n" +
        "ID Relawan : " + idRelawan + "\n" +
        "Tanggal : " + tanggalDaftar + "\n" +
        "Kegiatan : " + p.judul.toUpperCase()
      );
    });

    // Tombol hapus
    kartu.querySelector(".btn-hapus").addEventListener("click", function() {
      const konfirmasi = confirm("Yakin ingin menghapus acara:\n" + p.judul.toUpperCase() + "?");
      if (konfirmasi === true) {
        pengumuman.splice(i, 1);
        tampilkanPengumuman();
      }
    });

    container.appendChild(kartu);
  }
}