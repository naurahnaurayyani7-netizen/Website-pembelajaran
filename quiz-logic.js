// Data Soal dan Jawaban Kuis
const soalQuiz = [
  {
    id: 1,
    question:
      "Jika seorang videografer hanya menggunakan autofocus saat mencoba membuat efek Rack Focus, apa risiko yang paling besar?",
    answerKey: "A",
    answerExplanation:
      "Rack Focus idealnya dilakukan manual, agar perpindahan fokus halus dan sesuai ritme cerita. Autofocus sering berpindah mendadak dan tidak akurat dalam storytelling.",
    options: [
      {
        text: "A. Fokus akan berpindah terlalu cepat dan tidak terkontrol",
        value: "A",
      },
      {
        text: "B. Kamera akan menjadi terlalu berat saat digunakan",
        value: "B",
      },
      {
        text: "C. Gambar akan terlalu terang karena perubahan lensa",
        value: "C",
      },
      {
        text: "D. Kamera akan kehilangan sudut pengambilan gambar",
        value: "D",
      },
    ],
  },
  {
    id: 2,
    question:
      "Dalam sebuah film dokumenter sosial berjudul Di Balik Gang Kecil, kamera merekam suasana pasar tradisional di sore hari. Kamera digerakkan perlahan dari kiri ke kanan, memperlihatkan kehidupan masyarakat mulai dari pedagang sayur, anak-anak bermain, hingga pengamen jalanan. Sutradara menyatakan ingin membuat penonton merasa ikut berjalan di dalam pasar tanpa harus berpindah-pindah lokasi. Mengapa teknik panning menjadi pilihan yang paling tepat dalam konteks narasi dan visual tersebut?",
    answerKey: "C",
    answerExplanation:
      "Panning memungkinkan penonton seolah-olah ikut berjalan di tempat tersebut, menyerap suasana secara menyeluruh tanpa potongan shot, sesuai dengan tujuan sutradara: menghadirkan pengalaman imersif dan organik.",
    options: [
      {
        text: "A. Karena panning mempercepat pengambilan gambar pada area luas",
        value: "A",
      },
      {
        text: "B. Karena pergerakan horizontalnya mudah diedit dalam pascaproduksi",
        value: "B",
      },
      {
        text: "C. Karena panning dapat menghadirkan pengalaman spasial yang utuh dan berkesinambungan bagi penonton",
        value: "C",
      },
      {
        text: "D. Karena panning membantu memperjelas warna dan pencahayaan pasar",
        value: "D",
      },
    ],
  },
  {
    id: 3,
    question:
      "Kamu sedang menyutradarai sebuah film drama keluarga. Ada adegan di mana tokoh ibu menunggu anaknya yang sudah lama pergi.Saat akhirnya anak itu muncul di ujung jalan, kamu ingin menangkap perjalanan emosional sang ibu dari kejauhan hingga anak mendekat, tanpa memotong shot. Kamu ingin penonton ikut merasakan perubahan ekspresi si ibu secara perlahan. Sebagai sutradara, teknik movement kamera apa yang paling sesuai kamu gunakan untuk mendukung nuansa tersebut?",
    answerKey: "D",
    answerExplanation:
      "Panning secara horizontal bisa mengikuti pergerakan subjek (anak) sambil mempertahankan emosi karakter tetap dalam frame, memperkuat suasana dramatis tanpa memecah perhatian penonton.",
    options: [
      {
        text: "A. Bird Eye Shot",
        value: "A",
      },
      {
        text: "B. Tilting",
        value: "B",
      },
      {
        text: "C. Handheld Shot",
        value: "C",
      },
      {
        text: "D. Panning",
        value: "D",
      },
    ],
  },
  {
    id: 4,
    question:
      "Dalam film pendek psikologis, tokoh utama duduk sendirian di lapangan sekolah yang luas. Kamu ingin menunjukkan betapa kecil dan terisolasinya dia di tengah ruang yang besar, seolah dunia mengabaikannya. Sudut pengambilan gambar yang paling tepat untuk menyampaikan pesan visual ini adalah...",
    answerKey: "B",
    answerExplanation:
      "Bird Eye Shot memberi kesan karakter kecil dan tak terlihat dalam lingkungan luas, memperkuat simbolisme keterasingan sosial.",
    options: [
      {
        text: "A. Over The Shoulder",
        value: "A",
      },
      {
        text: "B. Bird Eye Shot",
        value: "B",
      },
      {
        text: "C. Handheld Shot",
        value: "C",
      },
      {
        text: "D. Medium Shot",
        value: "D",
      },
    ],
  },
  {
    id: 5,
    question:
      "Seorang siswa menggunakan Dutch Tilt dalam adegan film pendeknya saat tokohnya merasa dunia seperti berputar karena panik. Ia tidak punya alat mahal, hanya handphone dan tripod miring. Apa yang bisa kita simpulkan dari teknik yang digunakan siswa tersebut?",
    answerKey: "B",
    answerExplanation:
      "Esensi sinematografi adalah storytelling. Dutch Tilt bisa dilakukan dengan alat sederhana asalkan tujuannya jelas dan mendukung cerita.",
    options: [
      {
        text: "A. Dutch Tilt hanya bisa dilakukan dengan kamera profesional",
        value: "A",
      },
      {
        text: "B. Kreativitas dan niat lebih penting daripada alat",
        value: "B",
      },
      {
        text: "C. Teknik itu salah karena terlalu sederhana",
        value: "C",
      },
      {
        text: "D. Hasilnya pasti jelek karena tidak pakai alat mahal",
        value: "D",
      },
    ],
  },
  {
    id: 6,
    question:
      "Dalam iklan minuman energi, kamera merekam seorang atlet parkour yang sedang berlari dan melompat dari satu gedung ke gedung lain. Kamera bergerak mengikuti dari belakang, memperlihatkan kecepatan dan intensitas aksi secara nyata dan berkelanjutan. Mengapa teknik follow shot menjadi paling efektif digunakan dalam adegan tersebut?",
    answerKey: "D",
    answerExplanation:
      "Follow shot efektif untuk adegan aksi karena menjaga kesinambungan gerakan tokoh utama, membuat penonton merasa mengikuti langsung dari belakang, memperkuat rasa kecepatan, energi, dan urgensi.",
    options: [
      {
        text: "A. Karena follow shot dapat memperlihatkan semua latar dengan lebih luas",
        value: "A",
      },
      {
        text: "B. Karena follow shot menciptakan efek dokumenter yang kaku dan tegang",
        value: "B",
      },
      {
        text: "C. Karena follow shot memungkinkan efek slow motion lebih mudah diterapkan",
        value: "C",
      },
      {
        text: "D. Karena follow shot menjaga koneksi visual dan ritme gerak si atlet secara real time",
        value: "D",
      },
    ],
  },
  {
    id: 7,
    question:
      "Dalam video dokumenter sejarah, kamera secara perlahan naik dari lantai hingga ke wajah sebuah patung pahlawan nasional. Gerakan vertikal ini dimaksudkan untuk memberi kesan penghormatan dan keagungan. Apa alasan teknik pedestal lebih sesuai dibandingkan tilting untuk pengambilan gambar ini?",
    answerKey: "B",
    answerExplanation:
      "Pedestal shot melibatkan pergerakan kamera secara vertikal ke atas atau bawah tanpa mengubah arah lensa, membuatnya ideal untuk menjaga framing proporsional dan menciptakan kesan penghormatan atau dramatisasi skala secara elegan.",
    options: [
      {
        text: "A. Karena pedestal menghasilkan gambar yang lebih berwarna",
        value: "A",
      },
      {
        text: "B. Karena pedestal mempertahankan komposisi subjek tanpa perubahan sudut pandang",
        value: "B",
      },
      {
        text: "C. Karena pedestal membutuhkan alat yang lebih sederhana daripada tilting",
        value: "C",
      },
      {
        text: "D. Karena pedestal membuat gambar terlihat seperti efek CGI",
        value: "D",
      },
    ],
  },
  {
    id: 8,
    question:
      "Seorang videografer sedang merekam adegan pembukaan untuk video profil seorang arsitek muda di tengah kota. Ia ingin menampilkan kesan profesional, dramatis, dan penuh makna visual dengan menyorot arsitek tersebut yang berdiri diam di depan gedung tinggi yang ia rancang. Videografer berdiri cukup dekat, menggunakan kamera handheld agar lebih fleksibel, dan ingin memulai dari bagian kaki arsitek lalu perlahan naik ke wajah, hingga gedung terlihat megah di latar belakang, tanpa berpindah posisi dan tanpa merubah arah pandang kamera. Dalam kondisi cahaya pagi dan durasi singkat hanya 4 detik, teknik kamera apa yang paling tepat digunakan agar tujuan visual tersebut tercapai tanpa mengorbankan kestabilan gambar? ",
    answerKey: "C",
    answerExplanation:
      "Tilting adalah gerakan kamera yang digerakkan ke atas atau ke bawah. Gerakan ini sesuai dengan deskripsi soal.",
    options: [
      {
        text: "A. Zoom out secara cepat untuk memperlihatkan keseluruhan objek",
        value: "A",
      },
      {
        text: "B. Panning dari bawah ke atas agar objek dan latar terlihat seiring",
        value: "B",
      },
      {
        text: "C. Tilting ke atas secara halus dengan kendali stabil dari handheld",
        value: "C",
      },
      {
        text: "D. Crabbing ke samping agar gedung dan arsitek bisa muncul bersamaan",
        value: "D",
      },
    ],
  },
  {
    id: 9,
    question:
      "Seorang videografer sedang merekam adegan karakter utama yang perlahan berdiri dari duduk setelah mengalami momen emosional berat. Untuk memprkuat kesan bahwa karakter tersebut sedang bangkit, ia ingin menggunakan teknik yang bisa menyorot perubahan level secara vertikal tanpa mengubah sudut pandang kamera. Teknik apa yang paling tepat digunakan?",
    answerKey: "C",
    answerExplanation:
      "Pedestal adalah teknik pergerakan kamera di mana seluruh unit kamera (beserta tripod/penyangga) dinaikkan atau diturunkan secara vertikal.",
    options: [
      {
        text: "A. Tilting",
        value: "A",
      },
      {
        text: "B. Panning",
        value: "B",
      },
      {
        text: "C. Pedestal",
        value: "C",
      },
      {
        text: "D. Dolly In",
        value: "D",
      },
    ],
  },
  {
    id: 10,
    question:
      "Seorang videografer merekam dua desainer fashion yang sedang berjalan berdampingan di trotoar bergrafiti warna-warni. Ia ingin menjaga posisi mereka tetap di tengah frame sambil menunjukkan dinamika latar belakang secara menyeluruh. Teknik apa yang paling tepat digunakan?",
    answerKey: "D",
    answerExplanation:
      "Crabbing memungkinkan kamera bergerak menyamping sejajar dengan subjek, sehingga subjek tetap berada di tengah frame sepanjang waktu. Ini sangat efektif untuk menangkap subjek yang bergerak secara horizontal sambil tetap mengekspos latar di belakang mereka.",
    options: [
      {
        text: "A. Zoom in untuk memperjelas ekspresi saat berjalan",
        value: "A",
      },
      {
        text: "B. Panning agar latar bergeser mengikuti arah pandang",
        value: "B",
      },
      {
        text: "C. Tilting ke bawah untuk menangkap langkah kaki mereka",
        value: "C",
      },
      {
        text: "D. Crabbing ke samping agar gerak mereka dan latar tetap terekam sejajar",
        value: "D",
      },
    ],
  },
];

// Fungsi untuk membuat elemen-elemen soal kuis
function renderQuiz() {
  const quizContainer = document.querySelector(
    "#evaluasi-quiz-page .soal-list"
  );
  if (!quizContainer) return;

  quizContainer.innerHTML = "";
  soalQuiz.forEach((soal) => {
    const soalItem = document.createElement("div");
    soalItem.classList.add("soal-item");
    soalItem.dataset.soalId = soal.id;
    soalItem.innerHTML = `
      <p>${soal.id}. ${soal.question}</p>
      <div class="opsi-list">
        ${soal.options
          .map(
            (opsi) => `
          <button class="opsi-btn" data-jawaban="${opsi.value}">${opsi.text}</button>
        `
          )
          .join("")}
      </div>
      <div class="feedback"></div>
    `;
    quizContainer.appendChild(soalItem);
  });
  attachQuizEventListeners();
}

// Fungsi untuk mendengarkan klik pada tombol jawaban
// Fungsi untuk mendengarkan klik pada tombol jawaban
function attachQuizEventListeners() {
  document.querySelectorAll(".opsi-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      const soalItem = e.target.closest(".soal-item");
      if (!soalItem) return;

      const soalId = parseInt(soalItem.dataset.soalId);
      const jawabanUser = button.dataset.jawaban;
      const soal = soalQuiz.find((s) => s.id === soalId);
      const feedbackEl = soalItem.querySelector(".feedback");
      const allButtons = soalItem.querySelectorAll(".opsi-btn");

      // Nonaktifkan semua tombol setelah satu jawaban dipilih
      allButtons.forEach((btn) => (btn.disabled = true));

      // MENGUBAH: Menggunakan properti 'answerKey'
      const jawabanBenar = soal.answerKey;

      if (jawabanUser === jawabanBenar) {
        // Jawaban Benar
        button.classList.add("correct");
        feedbackEl.textContent = "Jawaban Anda Benar! 🎉";
        feedbackEl.style.color = "green";
      } else {
        // Jawaban Salah
        button.classList.add("wrong");
        feedbackEl.style.color = "red";

        // Ambil teks opsi jawaban yang benar
        const jawabanBenarOption = soal.options.find(
          (opt) => opt.value === jawabanBenar
        );

        // MENGUBAH: Menampilkan jawaban yang benar dan penjelasannya dari properti yang sudah dipisahkan
        feedbackEl.innerHTML = `
          Jawaban Anda salah. Jawaban yang benar adalah ${jawabanBenarOption.text}.
          <br>
          <span style="font-weight: bold;">Penjelasan:</span> ${soal.answerExplanation}.
        `;

        // Tambahkan kelas 'correct' pada tombol jawaban yang benar
        const tombolJawabanBenar = soalItem.querySelector(
          `[data-jawaban="${jawabanBenar}"]`
        );
        if (tombolJawabanBenar) {
          tombolJawabanBenar.classList.add("correct-answer-on-wrong-choice");
        }
      }
    });
  });
}
document.addEventListener("showQuiz", () => {
  // Tampilkan halaman kuis
  document.getElementById("evaluasi-quiz-page").classList.remove("hidden");

  // Memulai proses pembuatan soal kuis saat event diterima
  renderQuiz();
});

const quizNotificationBtn = document.querySelector(
  "#quiz-notification-container .notification-btn"
);
const quizPage = document.getElementById("evaluasi-quiz-page");

if (quizNotificationBtn) {
  quizNotificationBtn.addEventListener("click", () => {
    quizPage.classList.remove("hidden");
  });
}

// Fungsi untuk menyembunyikan semua halaman
function hideAllPages() {
  document
    .querySelectorAll(
      "section, div.about-section, div.credit-section, div.evaluasi-section"
    )
    .forEach((page) => {
      if (page.id) {
        page.classList.add("hidden");
      }
    });
}

function showPage(pageId) {
  hideAllPages();
  const page = document.getElementById(pageId);
  if (page) {
    page.classList.remove("hidden");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".btnBack, .btn-back").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const parentSection = e.target.closest("section, div");
      if (!parentSection) return;

      const currentId = parentSection.id;

      if (currentId === "evaluasi-quiz-page") {
        showPage("evaluasi-section");
      } else if (currentId === "evaluasi-section") {
        showPage("main-page"); // Ganti 'main-page' dengan ID halaman utama Anda
      } else if (currentId === "auditorial-section") {
        showPage("mulai-section");
      } else if (currentId === "auditorial-videos") {
        showPage("auditorial-section");
      } else if (currentId === "video-detail-page") {
        showPage("auditorial-videos");
      } else if (currentId === "tujuan-section") {
        showPage("main-page");
      } else if (currentId === "about-section") {
        showPage("main-page");
      } else if (currentId === "credit-section") {
        showPage("main-page");
      } else if (currentId === "mulai-section") {
        showPage("main-page");
      }
    });
  });
});
