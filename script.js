// Toggle Class Active
feather.replace();

const soundBtn = document.getElementById("soundBtn");
const bgMusic = document.getElementById("bgMusic");

let currentVolume = 0.2;
bgMusic.volume = currentVolume;

soundBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // Memeriksa apakah musik sedang dalam kondisi diputar atau tidak
  if (!bgMusic.paused) {
    // Jika musik sedang diputar, hentikan (pause)
    bgMusic.pause();
    soundBtn.innerHTML = '<i data-feather="volume-x"></i>';
  } else {
    // Jika musik sedang berhenti, putar kembali (play)
    bgMusic.play();
    soundBtn.innerHTML = '<i data-feather="volume-2"></i>';
  }

  feather.replace();
});
// Data Video
const videoData = {
  1: {
    src: "Teknik Tilting Fix.mp4",
    discussion: "Video Teknik Tilting",
    vo: "introduce tilting.mp3",
  },
  2: {
    src: "Crabbing Vidio.mp4",
    discussion: "Video Teknik Crabbing",
    vo: "introduce crabbing.mp3",
  },
  3: {
    src: "Teknik Panning.mp4",
    discussion: "Video Teknik Panning",
    vo: "introduce panning.mp3",
  },
  4: {
    src: "Follow Shot New.mp4",
    discussion: "Video Teknik Follow Shot",
    vo: "introduce follow shot.mp3",
  },
  5: {
    src: "Teknik Orbit Final new.mp4",
    discussion: "Video Teknik Orbit Shot",
    vo: "introduce orbit shot.mp3",
  },
  6: {
    src: "Pedestal Vidio.mp4",
    discussion: "Video Teknik Pedestal Shot",
    vo: "pedestal introduce.mp3",
  },
  7: {
    src: "Handheld Fix.mp4",
    discussion: "Video Teknik Handheld Shot",
    vo: "intro handheld.mp3",
  },
  8: {
    src: "Dutch Tilt fix.mp4",
    discussion: "Video Teknik Dutch Tilt",
    vo: "intro dutch tilt.mp3",
  },
  9: {
    src: "Rack Focus final.mp4",
    discussion: "Video Teknik Rack Focus",
    vo: "intro rack focus.mp3",
  },
};

// Tambahkan data durasi voice over untuk setiap video
const videoDurations = {
  // ID video sesuai dengan kunci di videoData
  1: 21,
  2: 31,
  3: 29,
  4: 11,
  5: 23,
  6: 16,
  7: 35,
  8: 37,
  9: 92,
};

const mascotVideo = document.querySelector(".video-detail-mascot video");

function handleQuizNotification(videoId) {
  const quizNotification = document.getElementById(
    "quiz-notification-container"
  );
  if (quizNotification) {
    quizNotification.classList.remove("show");
    if (videoId === "9") {
      setTimeout(() => {
        quizNotification.classList.add("show");
      }, 7000); // Tampilkan setelah 7 detik
    }
  }
}

// Fungsi untuk menghentikan maskot setelah durasi tertentu
function stopMascotLoop(videoId) {
  const mascotVideo = document.querySelector(".video-detail-mascot video");
  const duration = videoDurations[videoId];

  if (mascotVideo && duration) {
    setTimeout(() => {
      mascotVideo.loop = false;
      console.log(`Maskot berhenti loop setelah ${duration} detik.`);
    }, duration * 1000); // Ubah detik menjadi milidetik
  }
}

// Elemen
document.addEventListener("DOMContentLoaded", () => {
  const soundBtn = document.getElementById("soundBtn");
  const navbar = document.querySelector(".navbar");
  const aboutSection = document.getElementById("about-section");
  const btnKredit = document.getElementById("btnKredit");
  const btnBackCredit = document.getElementById("btnBackCredit");
  const btnBackAbout = document.getElementById("btnBackAbout");
  const info = document.getElementById("info");
  const maskot = document.getElementById("maskot");
  const btnMulai = document.getElementById("btnMulai");
  const creditSection = document.getElementById("credit-section");

  attachNotificationListener();

  const quizNotificationBtn = document.querySelector(
    "#quiz-notification-container .notification-btn"
  );

  // Settingan Navbar
  window.addEventListener("DOMContentLoaded", () => {
    // Default tampil home
    navbar.style.display = "flex";
    maskot.style.display = "flex";
    info.style.display = "block";

    mulaiSection.style.display = "none";
    creditSection.style.display = "none";
    aboutSection.style.display = "none";
    menuShape.style.display = "none";
  });

  // About Section
  info.addEventListener("click", (e) => {
    e.preventDefault();
    navbar.style.display = "none";
    aboutSection.style.display = "block";
    info.style.display = "none";
    maskot.style.display = "none";
  });

  btnBackAbout.addEventListener("click", (e) => {
    e.preventDefault();
    aboutSection.style.display = "none";
    navbar.style.display = "flex";
    info.style.display = "block";
    maskot.style.display = "flex";
  });

  // Credit Section
  btnKredit.addEventListener("click", (e) => {
    e.preventDefault();
    navbar.style.display = "none";
    creditSection.style.display = "block";
    info.style.display = "none";
    maskot.style.display = "none";
  });

  btnBackCredit.addEventListener("click", (e) => {
    e.preventDefault();
    creditSection.style.display = "none";
    navbar.style.display = "flex";
    info.style.display = "block";
    maskot.style.display = "flex";
  });

  // Mulai Section
  const mulaiSection = document.getElementById("mulai-section");
  const menuShape = document.getElementById("menuShape");
  const btnBackMulai = document.getElementById("btnBackMulai");
  const typingText = document.getElementById("typing-text");
  const maskot1 = document.getElementById("maskot1");
  const audioMulai = document.getElementById("audioMulai");

  let i = 0;

  // Text Box Content
  const textBox = `Hai, aku Lulu. Aku di sini nemenin kamu selama perjalanan seru ini.
Aku bakal jadi partner kamu, lho, kadang ngingetin, kadang ngecoh dikit biar kamu makin jago.`;

  function typWriter() {
    if (i < textBox.length) {
      typingText.innerHTML += textBox.charAt(i);
      i++;
      setTimeout(typWriter, 100);
    }
  }

  const displayDelay = 2500; // 1.5 detik untuk maskot dan text box
  const audioDelay = 500; // 0.5 detik untuk audio

  // Klik tombol Mulai
  btnMulai.addEventListener("click", (e) => {
    e.preventDefault();

    // Sembunyikan home
    navbar.style.display = "none";
    maskot.style.display = "none";
    info.style.display = "none";
    creditSection.style.display = "none";
    aboutSection.style.display = "none";

    // Tampilkan Mulai Section & menuShape
    mulaiSection.style.display = "flex";
    menuShape.style.display = "block";
    soundBtn.style.display = "block";

    // Delay muncul maskot & text box (sesuai displayDelay)
    setTimeout(() => {
      // Tampilkan elemen
      maskot1.style.display = "flex";
      document.getElementById("text-box").style.display = "block";

      // Trigger fade-in
      setTimeout(() => {
        maskot1.style.opacity = 1;
        document.getElementById("text-box").style.opacity = 1;
      }, 50);

      // Reset dan mulai animasi mengetik
      typingText.innerHTML = "";
      i = 0;
      typWriter();
    }, displayDelay); // Menggunakan variabel displayDelay di sini

    // Delay audio (menggunakan audioDelay yang berbeda)
    setTimeout(() => {
      audioMulai.play().catch((error) => {
        console.error("Gagal memutar audio:", error);
      });
    }, audioDelay); // Menggunakan variabel audioDelay yang lebih kecil
  });
  // Tombol Back
  btnBackMulai.addEventListener("click", () => {
    mulaiSection.style.display = "none";
    menuShape.style.display = "none";
    maskot1.style.display = "none"; // sembunyikan maskot Mulai Section

    audioMulai.pause();

    // Tampilkan home
    navbar.style.display = "flex";
    maskot.style.display = "flex"; // tampilkan maskot home
    info.style.display = "block";
  });

  // Interaksi Maskot
  const maskot1ImgSrc = "Tak berjudul347_20250804092252.png";
  const maskot1VideoSrc = "jatuhhhhh.webm";
  const maskot1ImgAfterVideo = "Tak berjudul347_20250804092308.png";

  maskot1.addEventListener("click", () => {
    maskot1.innerHTML = "";

    const video = document.createElement("video");
    video.src = maskot1VideoSrc;
    video.autoplay = true;
    video.loop = false;
    video.muted = false;
    video.style.width = "400px";
    video.style.height = "auto";

    maskot1.appendChild(video);

    setTimeout(() => {
      maskot1.innerHTML = "";

      const newImg = document.createElement("img");
      newImg.src = maskot1ImgAfterVideo;
      newImg.alt = "maskot ngomong";
      newImg.id = "maskot1-img";
      maskot1.appendChild(newImg);
    }, 1000);
  });

  // Toggle sidebar di Mulai
  toggleMenu.addEventListener("click", () => {
    menuShape.classList.toggle("active");

    const icon = toggleMenu.querySelector("i");
    if (menuShape.classList.contains("active")) {
      icon.setAttribute("data-feather", "chevron-right");
    } else {
      icon.setAttribute("data-feather", "chevron-left");
    }
    feather.replace();
  });

  feather.replace();
});

// Toggle submenu Studymode
const studymodeBtn = document.getElementById("studymode-btn");
const submenu = studymodeBtn.nextElementSibling; // <ul class="submenu">

studymodeBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (submenu.style.maxHeight && submenu.style.maxHeight !== "0px") {
    // collapse
    submenu.style.maxHeight = "0";
    submenu.style.opacity = "0";
  } else {
    // expand
    submenu.style.maxHeight = submenu.scrollHeight + "px"; // otomatis sesuai tinggi konten
    submenu.style.opacity = "1";
  }
});

// Halaman Tujuan Pembelajaran
const mulaiSection = document.getElementById("mulai-section");
const textBox = document.getElementById("text-box");
const typingText = document.getElementById("typing-text");
const maskot1 = document.getElementById("maskot1");
const menuTujuan = document.getElementById("menuTujuan");
const tujuanSection = document.getElementById("tujuan-section");
const btnBackTujuan = document.getElementById("btnBackTujuan");
const menuShape = document.getElementById("menuShape");

// Klik menu Tujuan Pembelajaran
menuTujuan.addEventListener("click", (e) => {
  e.preventDefault();
  mulaiSection.style.display = "none";
  menuShape.style.display = "none";
  maskot1.style.display = "none;";
  textBox.style.display = "none";
  // Tampilkan Tujuan Section
  tujuanSection.style.display = "flex";
  tujuanSection.classList.add("show");

  audioMulai.pause();
  audioMulai.currentTime = 0;
});

// Tombol back Tujuan
btnBackTujuan.addEventListener("click", () => {
  tujuanSection.style.display = "none";
  tujuanSection.classList.remove("show");
  mulaiSection.style.display = "flex";
  menuShape.style.display = "block";
  maskot1.style.display = "flex";
  textBox.style.display = "block";

  typingText.innerHTML = typingText.innerHTML;
});

// Halaman Evaluasi
const halamanEval = document.getElementById("halamanEval");
const evaluasiSection = document.getElementById("evaluasi-section");
const btnBackEval = document.getElementById("btnBackEval");

halamanEval.addEventListener("click", (e) => {
  e.preventDefault();
  mulaiSection.style.display = "none";
  menuShape.style.display = "none";
  maskot1.style.display = "none";
  textBox.style.display = "none";
  evaluasiSection.style.display = "flex";
  evaluasiSection.classList.add("show");
  audioMulai.pause();
  audioMulai.currentTime = 0;

  btnBackEval.addEventListener("click", (e) => {
    evaluasiSection.style.display = "none";
    evaluasiSection.classList.remove("show");
    mulaiSection.style.display = "flex";
    menuShape.style.display = "block";
    maskot1.style.display = "flex";
    textBox.style.display = "block";

    typingText.innerHTML = typingText.innerHTML;
  });
});

// Halaman Auditorial
const halamanAuditorial = document.getElementById("halamanAuditorial");
const auditorialSection = document.getElementById("auditorial-section");
const btnBackAuditorial = document.getElementById("btnBackAuditorial");
const btnNextAuditorial = document.getElementById("btnNextAuditorial");
const typingTextAuditorial = document.getElementById("typing-text-auditorial");
const maskotAuditorial = document.getElementById("maskotAuditorial");
const audioAuditorial = document.getElementById("audioAuditorial");

const maskotAuditorialVideo = document.querySelector("#maskotAuditorial video");

let iAud = 0;
const textAuditorial = `Hai, sekarang kita ada di mode belajar Auditorial.
Di mode ini, kamu akan lebih banyak mendengar penjelasan. Siap untuk lanjut?`;

// typewriter khusus Auditorial
function typWriterAuditorial() {
  if (iAud < textAuditorial.length) {
    typingTextAuditorial.innerHTML += textAuditorial.charAt(iAud);
    iAud++;
    setTimeout(typWriterAuditorial, 100);
  } else {
  }
}

halamanAuditorial.addEventListener("click", (e) => {
  e.preventDefault();

  // Sembunyikan halaman lain
  mulaiSection.style.display = "none";
  tujuanSection.style.display = "none";
  evaluasiSection.style.display = "none";
  menuShape.style.display = "none";
  textBox.style.display = "none";
  maskot1.style.display = "none";

  // Tampilkan Auditorial
  auditorialSection.style.display = "flex";

  // Reset animasi
  typingTextAuditorial.innerHTML = "";
  iAud = 0;

  audioAuditorial.currentTime = 0;
  audioAuditorial.pause();
  audioAuditorial.play();

  // Pastikan video maskot dimulai dari awal dan ber-loop (TAMBAHAN)
  if (maskotAuditorialVideo) {
    maskotAuditorialVideo.currentTime = 0;
    maskotAuditorialVideo.loop = true;
    maskotAuditorialVideo.play();
  }
  // Delay sebelum muncul
  setTimeout(() => {
    maskotAuditorial.style.display = "flex";
    document.getElementById("text-box-auditorial").style.display = "block";

    setTimeout(() => {
      maskotAuditorial.style.opacity = 1;
      document.getElementById("text-box-auditorial").style.opacity = 1;
    }, 10);

    // Mulai animasi mengetik
    typWriterAuditorial();
  }, 0.05);
  audioAuditorial.play();

  audioMulai.pause();
  audioMulai.currentTime = 0;
});

// Tambahkan event listener untuk mendeteksi saat audio selesai
audioAuditorial.addEventListener("ended", function () {
  // Hentikan audio secara eksplisit dan atur ulang ke awal
  this.pause();
  this.currentTime = 0;
  console.log("Audio selesai diputar.");

  // Hentikan video maskot (TAMBAHAN)
  if (maskotAuditorialVideo) {
    maskotAuditorialVideo.pause();
    maskotAuditorialVideo.loop = false;
    console.log("Animasi maskot berhenti.");
  }
});

// Tombol Back
btnBackAuditorial.addEventListener("click", () => {
  audioAuditorial.pause();
  audioAuditorial.currentTime = 0;

  // Pastikan video maskot dihentikan dan di-reset (TAMBAHAN)
  if (maskotAuditorialVideo) {
    maskotAuditorialVideo.pause();
    maskotAuditorialVideo.currentTime = 0;
    maskotAuditorialVideo.loop = true;
  }

  auditorialSection.style.display = "none";
  mulaiSection.style.display = "flex";
  menuShape.style.display = "block";
  maskot1.style.display = "flex";
  textBox.style.display = "block";

  feather.replace();
});
// Auditorial Section & Videos
const sectionAuditorial = document.getElementById("auditorial-section");
const sectionVideos = document.getElementById("auditorial-videos");
const videoPlayer = document.getElementById("mainVideoPlayer");
const discussionText = document.getElementById("discussion-text");
const videoDetailPage = document.getElementById("video-detail-page");
const btnBackToAuditorial = document.getElementById("btnBackToAuditorial");

// Klik menu auditorial di sidebar
document.getElementById("halamanAuditorial").addEventListener("click", () => {
  sectionAuditorial.style.display = "flex"; // intro muncul
  sectionVideos.style.display = "none"; // video disembunyikan
  feather.replace(); // render ikon di intro
});

// Klik tombol Next di intro auditorial
document.getElementById("btnNextAuditorial").addEventListener("click", () => {
  sectionAuditorial.style.display = "none";
  sectionVideos.style.display = "block";
  menuShape.style.display = "none";
  feather.replace(); // render ikon di halaman video

  audioAuditorial.pause();
  audioAuditorial.currentTime = 0;

  console.log("Audio telah dihentikan, beralih ke halaman/teks berikutnya.");
});

// Klik tombol Back di halaman video auditorial
document
  .getElementById("btnBackVideoAuditorial")
  .addEventListener("click", () => {
    sectionVideos.style.display = "none";
    sectionAuditorial.style.display = "flex";
    feather.replace(); // render ikon lagi di intro
  });

const voiceOverPlayer = document.getElementById("voiceOverPlayer");

// Fungsi Menampilkan Halaman Detail Video
function showVideoDetail(videoId) {
  // Sembunyikan halaman lain
  document.getElementById("auditorial-videos").style.display = "none";
  document.getElementById("menuShape").style.display = "none";

  // Tampilkan halaman detail video
  videoDetailPage.style.display = "flex";

  const currentVideo = videoData[videoId];

  if (currentVideo) {
    // Atur video utama
    videoPlayer.src = currentVideo.src;
    discussionText.textContent = currentVideo.discussion;
    videoPlayer.muted = true;

    // Atur video maskot dan voice over
    if (currentVideo.vo && mascotVideo) {
      voiceOverPlayer.src = currentVideo.vo;
      voiceOverPlayer
        .play()
        .catch((error) => console.error("Autoplay audio diblokir:", error));

      // Mulai ulang video maskot setiap kali masuk ke halaman detail
      mascotVideo.src = "lulu jelasin 1.webm";
      mascotVideo.play();
      mascotVideo.loop = true; // Video maskot akan ber-loop secara default

      // Hentikan loop maskot setelah durasi VO
      const duration = videoDurations[videoId];
      if (duration) {
        console.log(
          `Durasi VO: ${duration} detik. Maskot akan berhenti setelah ini.`
        );

        setTimeout(() => {
          mascotVideo.loop = false;
          console.log(
            `Maskot berhasil berhenti loop untuk video ID: ${videoId}.`
          );
        }, duration * 1000);
      }
    }
  } else {
    discussionText.textContent = "Video tidak ditemukan.";
    videoPlayer.src = "";
  }
  feather.replace();
}

// Tombol Kembali dari Halaman Detail Video
btnBackToAuditorial.addEventListener("click", () => {
  videoDetailPage.style.display = "none";
  document.getElementById("auditorial-videos").style.display = "block";
  document.getElementById("menuShape").style.display = "none";

  // Hentikan video saat kembali
  videoPlayer.pause();
  videoPlayer.currentTime = 0;

  // Hentikan audio saat kembali
  voiceOverPlayer.pause();
  voiceOverPlayer.currentTime = 0;

  feather.replace();
});

// Video Carousel Logic
const track = document.querySelector(".video-track");
const items = document.querySelectorAll(".video-item");
const btnPrev = document.getElementById("btnPrevVideo");
const btnNext = document.getElementById("btnNextVideo");

let currentIndex = 0; // Index dari video yang akan menjadi tengah (active)
const totalItems = items.length;
const itemWidth = 250;
const itemGap = 15;
const containerWidth = 900; // Lebar container .video-carousel

function updateCarousel() {
  // Hitung offset agar video yang aktif selalu di tengah
  // Rumus baru ini memastikan video di kiri tidak terpotong
  const offset = -(currentIndex * (itemWidth + itemGap));

  // Hitung offset tambahan untuk pemusatan
  const centerOffset = containerWidth / 2 - (itemWidth + itemGap) / 2;

  // Gabungkan kedua offset
  const finalOffset = offset + centerOffset - itemGap;

  track.style.transform = `translateX(${finalOffset}px)`;

  // Hapus semua kelas dulu
  items.forEach((item) => item.classList.remove("active", "left", "right"));

  // Tambahkan kelas untuk 3 video yang terlihat
  if (items[currentIndex - 1]) {
    items[currentIndex - 1].classList.add("left");
  }
  if (items[currentIndex]) {
    items[currentIndex].classList.add("active");
  }
  if (items[currentIndex + 1]) {
    items[currentIndex + 1].classList.add("right");
  }

  // Sembunyikan/tampilkan tombol panah
  btnPrev.style.visibility = currentIndex > 0 ? "visible" : "hidden";
  btnNext.style.visibility =
    currentIndex < totalItems - 1 ? "visible" : "hidden";

  feather.replace();
}

// Event listener untuk tombol Next
btnNext.addEventListener("click", () => {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
    updateCarousel();
  }
});

// Event listener untuk tombol Previous
btnPrev.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

// Panggil saat halaman pertama kali dimuat
currentIndex = 1;
updateCarousel();

// Halaman Detail Video Auditorial
items.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      const videoId = index + 1;
      showVideoDetail(videoId);
    }
  });
});

// Halaman Visual
const halamanVisual = document.getElementById("halamanVisual");
const visualSection = document.getElementById("visual-section");
const btnBackVisual = document.getElementById("btnBackVisual");
const btnNextVisual = document.getElementById("btnNextVisual");
const typingTextVisual = document.getElementById("typing-text-visual");
const maskotVisual = document.getElementById("maskotVisual");
const audioVisual = document.getElementById("audioVisual");
const maskotVisualVideo = document.querySelector("#maskotVisual video");

// Data Video
const visualVideoData = {
  1: {
    src: "Teknik Tilting Fix.mp4",
    discussion: "Video Teknik Tilting",
  },
  2: {
    src: "Crabbing Vidio.mp4",
    discussion: "Video Teknik Crabbing",
  },
  3: {
    src: "Teknik Panning.mp4",
    discussion: "Video Teknik Panning",
  },
  4: {
    src: "Follow Shot New.mp4",
    discussion: "Video Teknik Follow Shot",
  },
  5: {
    src: "Teknik Orbit Final new.mp4",
    discussion: "Video Teknik Orbit Shot",
  },
  6: {
    src: "Pedestal Vidio.mp4",
    discussion: "Video Teknik Pedestal Shot",
  },
  7: {
    src: "Handheld Fix.mp4",
    discussion: "Video Teknik Handheld Shot",
  },
  8: {
    src: "Dutch Tilt fix.mp4",
    discussion: "Video Teknik Dutch Tilt",
  },
  9: {
    src: "Rack Focus final.mp4",
    discussion: "Video Teknik Rack Focus",
  },
};

// Data durasi voice over untuk setiap video
const visualVideoDurations = {
  1: 20,
  2: 30,
  3: 29,
  4: 11,
  5: 23,
  6: 16,
  7: 35,
  8: 37,
  9: 92,
};

let iVis = 0;
const textVisual = `Hai, sekarang kita ada di mode belajar Visual.
Di mode ini, kamu akan lebih banyak melihat penjelasan secara visual. Siap untuk lanjut?`;

// typewriter khusus Visual
function typWriterVisual() {
  if (iVis < textVisual.length) {
    typingTextVisual.innerHTML += textVisual.charAt(iVis);
    iVis++;
    setTimeout(typWriterVisual, 100);
  } else {
  }
}

halamanVisual.addEventListener("click", (e) => {
  e.preventDefault();

  // Sembunyikan semua halaman yang mungkin aktif
  if (typeof mulaiSection !== "undefined") {
    mulaiSection.style.display = "none";
  }
  if (typeof tujuanSection !== "undefined") {
    tujuanSection.style.display = "none";
  }
  if (typeof evaluasiSection !== "undefined") {
    evaluasiSection.style.display = "none";
  }
  if (typeof menuShape !== "undefined") {
    menuShape.style.display = "none";
  }
  if (typeof textBox !== "undefined") {
    textBox.style.display = "none";
  }
  if (typeof maskot1 !== "undefined") {
    maskot1.style.display = "none";
  }
  // Pastikan halaman auditorial juga disembunyikan
  if (typeof auditorialSection !== "undefined") {
    auditorialSection.style.display = "none";
  }

  // Tampilkan Visual
  visualSection.style.display = "flex";

  // Reset animasi
  typingTextVisual.innerHTML = "";
  iVis = 0;

  audioVisual.currentTime = 0;
  audioVisual.pause();
  audioVisual.play();

  // Pastikan video maskot dimulai dari awal dan ber-loop
  if (maskotVisualVideo) {
    maskotVisualVideo.currentTime = 0;
    maskotVisualVideo.loop = true;
    maskotVisualVideo.play();
  }

  // Delay sebelum muncul
  setTimeout(() => {
    maskotVisual.style.display = "flex";
    document.getElementById("text-box-visual").style.display = "block";

    setTimeout(() => {
      maskotVisual.style.opacity = 1;
      document.getElementById("text-box-visual").style.opacity = 1;
    }, 10);

    // Mulai animasi mengetik
    typWriterVisual();
  }, 50);

  // Hentikan audio mulai jika ada
  if (typeof audioMulai !== "undefined") {
    audioMulai.pause();
    audioMulai.currentTime = 0;
  }
});

// Tambahkan event listener untuk mendeteksi saat audio selesai
audioVisual.addEventListener("ended", function () {
  this.pause();
  this.currentTime = 0;
  console.log("Audio Visual selesai diputar.");

  if (maskotVisualVideo) {
    maskotVisualVideo.pause();
    maskotVisualVideo.loop = false;
    console.log("Animasi maskot Visual berhenti.");
  }
});

// Tombol Back Visual
btnBackVisual.addEventListener("click", () => {
  audioVisual.pause();
  audioVisual.currentTime = 0;

  if (maskotVisualVideo) {
    maskotVisualVideo.pause();
    maskotVisualVideo.currentTime = 0;
    maskotVisualVideo.loop = true;
  }

  visualSection.style.display = "none";
  mulaiSection.style.display = "flex";
  menuShape.style.display = "block";
  maskot1.style.display = "flex";
  textBox.style.display = "block";

  feather.replace();
});

// Visual Section & Videos
const sectionVisual = document.getElementById("visual-section");
const sectionVisualVideos = document.getElementById("visual-videos");
const visualVideoPlayer = document.getElementById("mainVisualVideoPlayer");
const visualDiscussionText = document.getElementById("visual-discussion-text");
const visualVideoDetailPage = document.getElementById(
  "visual-video-detail-page"
);
const visualMascotVideo = document.querySelector(
  ".video-detail-mascot-visual video"
);
const btnBackToVisual = document.getElementById("btnBackToVisual");

// Fungsi untuk menghentikan maskot setelah durasi tertentu
function stopMascotLoop(videoId) {
  const mascotVideoVisual = document.querySelector(
    ".video-detail-mascot-visual video"
  );
  const duration = videoDurations[videoId];

  if (mascotVideo && duration) {
    setTimeout(() => {
      mascotVideoVisual.loop = false;
      console.log(`Maskot berhenti loop setelah ${duration} detik.`);
    }, duration * 1000); // Ubah detik menjadi milidetik
  }
}

// Klik menu visual di sidebar
halamanVisual.addEventListener("click", () => {
  sectionVisual.style.display = "flex"; // intro muncul
  sectionVisualVideos.style.display = "none"; // video disembunyikan
  feather.replace(); // render ikon di intro
});

// Klik tombol Next di intro visual
document.getElementById("btnNextVisual").addEventListener("click", () => {
  sectionVisual.style.display = "none";
  sectionVisualVideos.style.display = "block";
  menuShape.style.display = "none";
  feather.replace();

  audioVisual.pause();
  audioVisual.currentTime = 0;

  console.log(
    "Audio Visual telah dihentikan, beralih ke halaman/teks berikutnya."
  );
});

// Klik tombol Back di halaman video visual
document.getElementById("btnBackVideoVisual").addEventListener("click", () => {
  sectionVisualVideos.style.display = "none";
  sectionVisual.style.display = "flex";
  feather.replace();
});

const voiceOverVisualPlayer = document.getElementById("voiceOverVisualPlayer");

// Fungsi Menampilkan Halaman Detail Video Visual
function showVisualVideoDetail(videoId) {
  document.getElementById("visual-videos").style.display = "none";
  document.getElementById("menuShape").style.display = "none";
  visualVideoDetailPage.style.display = "flex";

  const currentVideo = visualVideoData[videoId];

  if (currentVideo) {
    // Set video utama
    visualVideoPlayer.src = currentVideo.src;
    visualDiscussionText.textContent = currentVideo.discussion;
    visualVideoPlayer.muted = false;
    visualVideoPlayer.currentTime = 0;
    visualVideoPlayer
      .play()
      .catch((err) => console.log("Autoplay video utama diblokir", err));

    // Set maskot
    if (visualMascotVideo) {
      visualMascotVideo.src = "garuk 2.webm";
      visualMascotVideo.loop = true; // pastikan tidak loop
      visualMascotVideo.currentTime = 0;
      visualMascotVideo
        .play()
        .catch((err) => console.log("Autoplay maskot diblokir", err));
    }

    // Event listener: ketika video utama selesai
    visualVideoPlayer.onended = () => {
      if (visualMascotVideo) {
        visualMascotVideo.pause();
        visualMascotVideo.currentTime = 0;
        console.log("Maskot berhenti karena video utama selesai.");
      }
    };
  } else {
    visualDiscussionText.textContent = "Video tidak ditemukan.";
    visualVideoPlayer.src = "";
  }
  feather.replace();
}
// Tombol Kembali dari Halaman Detail Video Visual
btnBackToVisual.addEventListener("click", () => {
  visualVideoDetailPage.style.display = "none";
  document.getElementById("visual-videos").style.display = "block";
  document.getElementById("menuShape").style.display = "none";

  visualVideoPlayer.pause();
  visualVideoPlayer.currentTime = 0;

  voiceOverVisualPlayer.pause();
  voiceOverVisualPlayer.currentTime = 0;

  feather.replace();
});

// Video Carousel Logic Visual
const visualTrack = document.getElementById("visual-video-track");
const visualItems = document.querySelectorAll(".visual-video-item");
const btnNextVidio = document.getElementById("btnNextVidio");
const btnPrevVidio = document.getElementById("btnPrevVidio");

let currentVisualIndex = 0;
const totalVisualItems = visualItems.length;
const visualItemWidth = 250;
const visualItemGap = 15;
const visualContainerWidth = 900;

function updateVisualCarousel() {
  const offset = -(currentVisualIndex * (visualItemWidth + visualItemGap));
  const centerOffset =
    visualContainerWidth / 2 - (visualItemWidth + visualItemGap) / 2;
  const finalOffset = offset + centerOffset - visualItemGap;

  visualTrack.style.transform = `translateX(${finalOffset}px)`;

  // Reset kelas
  visualItems.forEach((item) =>
    item.classList.remove("active", "left", "right")
  );

  if (visualItems[currentVisualIndex - 1]) {
    visualItems[currentVisualIndex - 1].classList.add("left");
  }
  if (visualItems[currentVisualIndex]) {
    visualItems[currentVisualIndex].classList.add("active");
  }
  if (visualItems[currentVisualIndex + 1]) {
    visualItems[currentVisualIndex + 1].classList.add("right");
  }

  // Visibility tombol
  btnPrevVidio.style.visibility = currentVisualIndex > 0 ? "visible" : "hidden";
  btnNextVidio.style.visibility =
    currentVisualIndex < totalVisualItems - 1 ? "visible" : "hidden";

  feather.replace();
}

// Event listener
btnNextVidio.addEventListener("click", () => {
  console.log("Before Next:", currentVisualIndex);
  if (currentVisualIndex < totalVisualItems - 1) {
    currentVisualIndex++;
    updateVisualCarousel();
  }
  console.log("After Next:", currentVisualIndex);
});

btnPrevVidio.addEventListener("click", () => {
  console.log("Before Prev:", currentVisualIndex);
  if (currentVisualIndex > 0) {
    currentVisualIndex--;
    updateVisualCarousel();
  }
  console.log("After Prev:", currentVisualIndex);
});
// Inisialisasi
currentVisualIndex = 0;
updateVisualCarousel();

// Klik item (jika aktif)
visualItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      const videoId = index + 1;
      showVisualVideoDetail(videoId);
    }
  });
});

// --- KODE KHUSUS NOTIFIKASI KUIS ---

// Fungsi untuk menampilkan notifikasi kuis
function handleQuizNotification(videoId) {
  const quizNotification = document.getElementById(
    "quiz-notification-container"
  );
  if (quizNotification) {
    quizNotification.classList.remove("show");
    // Notifikasi akan muncul hanya untuk video ID '9'
    if (videoId === "9") {
      setTimeout(() => {
        quizNotification.classList.add("show");
      }, 80000);
    }
  }
}

// Event listener untuk tombol notifikasi kuis
function attachNotificationListener() {
  const quizNotificationBtn = document.querySelector(
    "#quiz-notification-container .notification-btn"
  );
  const quizNotification = document.getElementById(
    "quiz-notification-container"
  );

  if (quizNotificationBtn) {
    quizNotificationBtn.addEventListener("click", () => {
      // Sembunyikan notifikasi setelah diklik
      if (quizNotification) {
        quizNotification.classList.remove("show");
      }
      // Kirim sinyal khusus ke quiz-logic.js untuk memicu kuis
      const event = new CustomEvent("showQuiz");
      document.dispatchEvent(event);
    });
  }
}

// Event listener untuk klik item video
items.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      const videoId = String(index + 1);
      showVideoDetail(videoId);

      // Memicu notifikasi kuis setelah video terakhir (ID 9)
      handleQuizNotification(videoId);
    }
  });
});

// Quiz Visual
