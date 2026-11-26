
// ==========================================
// DATA ENSIKLOPEDIA SI DOWER
// ==========================================

// Kamu cukup mengisi data desa pada bagian ini.
// Foto menggunakan alamat file di folder assets/images.

const daftarDesa = [

  // DESA 01 - BANGERAN
  {
    nama: "Desa Bangeran",
    foto: "imagesidower/desabangeran.webp",
    kategori: "POTENSI & EKONOMI LOKAL",
    deskripsi: "Mengenal potensi BUMDes Bangjozz Sport Center.",
    pengantar: "Desa Bangeran memiliki potensi pengembangan ekonomi melalui Badan Usaha Milik Desa (BUMDes). Salah satu fasilitas yang dikenal adalah Bangjozz Sport Center.",
    artikel: [
      {
        judul: "BUMDes Bangjozz Sport Center",
        isi: "Bangjozz Sport Center merupakan salah satu potensi usaha desa yang dikelola melalui BUMDes. Kehadirannya menjadi bagian dari upaya desa dalam mengembangkan kegiatan ekonomi dan menyediakan fasilitas olahraga bagi masyarakat.",
        foto: ""
      }
    ]
  },

  // DESA 02 - BANYULEGI
  {
    nama: "Desa Banyulegi",
    foto: "imagesidower/desabanyulegi.png",
    kategori: "PERTANIAN & LINGKUNGAN",
    deskripsi: "Dikenal dengan pertanian tembakau dan wilayah yang dilalui aliran Sungai Lamong.",
    pengantar: "Desa Banyulegi memiliki kehidupan masyarakat yang berkaitan erat dengan sektor pertanian. Salah satu komoditas yang dibudidayakan adalah tembakau. Wilayah permukiman di sekitar aliran Sungai Lamong juga memiliki tantangan lingkungan berupa potensi genangan saat debit air meningkat.",
    artikel: [
      {
        judul: "Pertanian Tembakau",
        isi: "Pertanian menjadi salah satu kegiatan ekonomi masyarakat Desa Banyulegi. Tembakau merupakan salah satu komoditas yang ditanam oleh petani setempat dan menjadi bagian dari aktivitas pertanian desa.",
        foto: ""
      },
      {
        judul: "Empat Dusun dan Kondisi Lingkungan",
        isi: "Desa Banyulegi terdiri dari empat dusun, yaitu Banyulegi, Ngarus, Balong, dan Glagah. Permukiman di sekitar aliran Sungai Lamong, seperti Dusun Balong, beberapa kali mengalami kerawanan genangan ketika debit air sungai meningkat.",
        foto: ""
      }
    ]
  },

  // DESA 03 - BRAYUBLANDONG
  {
    nama: "Desa Brayublandong",
    foto: "imagesidower/desabrayublandong.png",
    kategori: "SEJARAH & BUDAYA",
    deskripsi: "Memiliki cerita lokal tentang Mbah Tulak, penyebaran Islam, dan tradisi Alung-Alung.",
    pengantar: "Desa Brayublandong menyimpan cerita tutur dan tradisi yang menjadi bagian dari identitas masyarakat. Beberapa cerita lokal yang dikenal berkaitan dengan Mbah Tulak, penyebaran agama Islam, dan tradisi Alung-Alung.",
    artikel: [
      {
        judul: "Mbah Tulak dan Penyebaran Agama Islam",
        isi: "Dalam cerita lokal masyarakat, Mbah Tulak dikenal sebagai tokoh yang dikaitkan dengan penyebaran agama Islam di wilayah Brayublandong. Kisah tersebut menjadi salah satu bagian dari cerita sejarah dan perkembangan kehidupan keagamaan masyarakat setempat.",
        foto: ""
      },
      {
        judul: "Tradisi Alung-Alung",
        isi: "Alung-Alung merupakan salah satu tradisi lokal yang dikenal di Desa Brayublandong. Tradisi ini menjadi bagian dari kekayaan budaya yang perlu terus dikenalkan kepada generasi muda.",
        foto: ""
      },
      {
        judul: "Asal-Usul Nama Brayublandong",
        isi: "Menurut cerita yang berkembang, nama Brayublandong dikaitkan dengan istilah 'sumber rahayu' yang bermakna sumber ketenteraman dan 'blandong' yang merujuk pada tempat pemandian kuno dari batang pohon yang dilubangi bagian tengahnya untuk menampung air. Terdapat pula cerita tentang sumber air yang dipercaya dapat membuat wanita menjadi lebih cantik dan ayu.",
        foto: ""
      }
    ]
  },

  // DESA 04 - CENDORO
  {
    nama: "Desa Cendoro",
    foto: "imagesidower/desacendoro.png",
    kategori: "PROFIL DESA",
    deskripsi: "Mengenal empat dusun yang menjadi bagian dari wilayah Desa Cendoro.",
    pengantar: "Desa Cendoro merupakan salah satu desa di Kecamatan Dawarblandong yang terdiri dari beberapa dusun. Pembagian wilayah dusun menjadi bagian dari kehidupan sosial dan administrasi masyarakat desa.",
    artikel: [
      {
        judul: "Empat Dusun di Desa Cendoro",
        isi: "Desa Cendoro terdiri dari empat dusun, yaitu Dusun Cendoro, Dusun Bakung, Dusun Pelem atau Palem, dan Dusun Sidomengku. Setiap dusun menjadi bagian dari lingkungan permukiman dan kehidupan masyarakat Desa Cendoro.",
        foto: ""
      }
    ]
  },

  // DESA 05 - CINANDANG
  {
    nama: "Desa Cinandang",
    foto: "imagesidower/desacinandang.png",
    kategori: "LINGKUNGAN & WISATA",
    deskripsi: "Memiliki program pengelolaan sampah, Waduk Windu, dan Karnaval Budaya.",
    pengantar: "Desa Cinandang memiliki sejumlah potensi di bidang lingkungan, wisata, dan kebudayaan. Berbagai kegiatan masyarakat menunjukkan upaya desa dalam menjaga lingkungan sekaligus mengembangkan daya tarik lokal.",
    artikel: [
      {
        judul: "Pengelolaan Lingkungan dan TPS3R",
        isi: "Desa Cinandang memiliki fasilitas pengolahan sampah TPS3R yang melayani sekitar 400–500 rumah tangga. Berdasarkan informasi yang diberikan, layanan pengangkutan sampah dikenakan biaya Rp10.000 per bulan untuk delapan kali pengangkutan. Fasilitas ini juga mengelola limbah organik dari dapur layanan gizi setempat. Desa Cinandang disebut menjadi kandidat Proklim tingkat nasional tahun 2026 dan meraih predikat Desa Berseri tingkat Madya Jawa Timur pada Desember 2025.",
        foto: ""
      },
      {
        judul: "Waduk Windu Cinandang",
        isi: "Waduk Windu Cinandang memiliki luas sekitar satu hektare dengan kedalaman kurang lebih tiga meter. Awalnya waduk dibangun untuk kebutuhan irigasi, kemudian dikelola oleh BUMDesa sebagai salah satu objek wisata desa. Beberapa wahana dan titik swafoto yang pernah tersedia dilaporkan oleh warga sudah tidak semuanya aktif.",
        foto: ""
      },
      {
        judul: "Karnaval Budaya Cinandang",
        isi: "Karnaval Budaya Cinandang merupakan parade budaya yang menampilkan busana khas Nusantara, pertunjukan teater cerita rakyat, serta tata cahaya dan suara. Salah satu edisi yang disebutkan berlangsung pada September 2026 dengan mengangkat tema 'Legenda'.",
        foto: ""
      }
    ]
  },

  // DESA 06 - DAWARBLANDONG
  {
    nama: "Desa Dawarblandong",
    foto: "imagesidower/desadawarblandong.png",
    kategori: "PROFIL DESA",
    deskripsi: "Mengenal dusun-dusun yang menjadi bagian dari Desa Dawarblandong.",
    pengantar: "Desa Dawarblandong merupakan salah satu desa di wilayah Kecamatan Dawarblandong. Desa ini memiliki beberapa dusun yang menjadi bagian dari kehidupan dan lingkungan masyarakat setempat.",
    artikel: [
      {
        judul: "Dusun di Desa Dawarblandong",
        isi: "Desa Dawarblandong terdiri dari beberapa dusun, yaitu Dusun Dawarblandong, Gumbik, Sekiping, dan Wotgalih. Keempat dusun tersebut menjadi bagian dari wilayah permukiman masyarakat Desa Dawarblandong.",
        foto: ""
      }
    ]
  },

  // DESA 07 - GUNUNGAN
  {
    nama: "Desa Gunungan",
    foto: "imagesidower/desagunungan.png",
    kategori: "PERTANIAN & KERAJINAN",
    deskripsi: "Dikenal sebagai sentra tembakau serta memiliki produk nasi jagung dan anyaman bambu.",
    pengantar: "Desa Gunungan memiliki potensi lokal yang kuat di bidang pertanian. Sebagian besar masyarakat bekerja sebagai petani dengan memanfaatkan lahan sawah maupun lahan kering. Selain pertanian, desa ini juga memiliki produk makanan dan kerajinan lokal.",
    artikel: [
      {
        judul: "Pertanian dan Tembakau",
        isi: "Masyarakat Desa Gunungan membudidayakan berbagai tanaman, seperti padi, jagung, cabai, kangkung, tebu, dan tembakau. Desa Gunungan juga pernah disorot sebagai salah satu sentra penghasil tembakau di Kabupaten Mojokerto.",
        foto: ""
      },
      {
        judul: "Nasi Jagung dan Anyaman Bambu",
        isi: "Selain hasil pertanian, Desa Gunungan memiliki produk lokal berupa nasi jagung dan kerajinan anyaman bambu. Kedua potensi tersebut menjadi bagian dari kekayaan produk dan keterampilan masyarakat setempat.",
        foto: ""
      }
    ]
  },

  // DESA 08 - GUNUNGSARI
  {
    nama: "Desa Gunungsari",
    foto: "imagesidower/desagunungsari.png",
    kategori: "PERTANIAN & KETAHANAN PANGAN",
    deskripsi: "Memiliki potensi pertanian, peternakan, dan program kemandirian pangan lokal.",
    pengantar: "Desa Gunungsari memiliki potensi besar di bidang pertanian dan peternakan. Kegiatan ekonomi masyarakat didukung oleh pemanfaatan lahan pertanian serta berbagai inisiatif untuk memperkuat ketahanan pangan desa.",
    artikel: [
      {
        judul: "Pertanian dan Kemandirian Pangan",
        isi: "Pertanian dan peternakan menjadi salah satu tulang punggung ekonomi masyarakat Desa Gunungsari. Kegiatan panen berlangsung sepanjang tahun dengan lahan sekitar 352 hektare, termasuk lahan pertanian non-tebu dan lahan yang dikelola Perhutani. Pada Juli 2026, desa ini menerima penghargaan 'Pelopor Kedaulatan Pangan Berbasis Kemandirian Lokal' dalam ajang Jawa Pos Radar Mojokerto Award.",
        foto: ""
      },
      {
        judul: "Dapur SPPG dan Kelompok Peternak",
        isi: "Desa Gunungsari menjalankan program dapur pemenuhan gizi atau Dapur SPPG yang memanfaatkan bahan baku dari petani dan UMKM setempat. Kegiatan peternakan juga didukung kelompok lokal, seperti Kelompok Ternak Lembu Makmur. Selain itu, terdapat inisiatif kesehatan desa melalui Tim Desa Siaga Tuberkulosis.",
        foto: ""
      }
    ]
  },

  // DESA 09 - JATIROWO
  {
    nama: "Desa Jatirowo",
    foto: "imagesidower/desajatirowo.webp",
    kategori: "BUDAYA & EKONOMI LOKAL",
    deskripsi: "Memiliki tradisi Ruah Deso dan kegiatan ekonomi melalui BUMDes Jelita.",
    pengantar: "Desa Jatirowo memiliki potensi di bidang ekonomi dan budaya. Kehidupan masyarakatnya didukung oleh kegiatan usaha desa serta tradisi yang menjadi sarana mempererat kebersamaan warga.",
    artikel: [
      {
        judul: "BUMDes Jelita dan Program Masyarakat",
        isi: "Kegiatan ekonomi desa salah satunya dijalankan melalui Badan Usaha Milik Desa (BUMDes) Jelita. Desa Jatirowo juga memiliki inisiatif kesehatan keluarga, seperti Gelora Cinta dan Pusyangatra, yang bekerja sama dengan Pemerintah Kabupaten Mojokerto.",
        foto: ""
      },
      {
        judul: "Tradisi Ruah Deso",
        isi: "Ruah Deso merupakan tradisi yang dikenal masyarakat Jatirowo. Kegiatan ini mencakup persembahan hasil panen, doa bersama, pertunjukan seni, serta kegiatan yang mempererat kerukunan antarumat beragama.",
        foto: ""
      }
    ]
  },

  // DESA 10 - MADURESO
  {
    nama: "Desa Madureso",
    foto: "imagesidower/desamadureso.webp",
    kategori: "PERTANIAN & WISATA LOKAL",
    deskripsi: "Dikenal sebagai sentra penghasil cabai dan memiliki Waduk Guyangan.",
    pengantar: "Desa Madureso memiliki potensi pertanian yang menjadi bagian penting dari kegiatan ekonomi masyarakat. Selain hasil pertanian, desa ini juga memiliki sejumlah tempat yang dikenal oleh masyarakat setempat.",
    artikel: [
      {
        judul: "Tiga Dusun di Desa Madureso",
        isi: "Desa Madureso terdiri dari tiga dusun, yaitu Dusun Madureso, Guyangan, dan Gogor. Ketiganya menjadi bagian dari wilayah permukiman masyarakat desa.",
        foto: ""
      },
      {
        judul: "Pertanian Cabai",
        isi: "Pertanian menjadi salah satu kegiatan utama masyarakat Desa Madureso. Desa ini dikenal sebagai salah satu sentra penghasil cabai yang didukung oleh akses jalan usaha tani untuk membantu kegiatan pertanian masyarakat.",
        foto: ""
      },
      {
        judul: "Masjid Ainul Yaqin dan Waduk Guyangan",
        isi: "Beberapa tempat yang dikenal di wilayah Madureso antara lain Masjid Ainul Yaqin dan waduk lokal yang dikenal sebagai Waduk Guyangan. Tempat-tempat tersebut menjadi bagian dari lingkungan dan aktivitas masyarakat setempat.",
        foto: ""
      }
    ]
  },

  // DESA 11 - PUCUK
  {
    nama: "Desa Pucuk",
    foto: "imagesidower/desapucuk.webp",
    kategori: "PERTANIAN & UMKM",
    deskripsi: "Memiliki hasil pertanian cabai, produk UMKM, serta sumur dan gua lokal.",
    pengantar: "Desa Pucuk memiliki potensi di bidang pertanian dan usaha mikro, kecil, dan menengah (UMKM). Berbagai hasil olahan pangan dan produk lokal menjadi bagian dari kekayaan ekonomi masyarakat desa.",
    artikel: [
      {
        judul: "Pertanian Cabai",
        isi: "Masyarakat Desa Pucuk banyak bergerak di sektor pertanian. Desa ini dikenal sebagai salah satu wilayah penghasil cabai di Kabupaten Mojokerto, sehingga pertanian menjadi bagian penting dari kegiatan ekonomi masyarakat.",
        foto: ""
      },
      {
        judul: "Produk UMKM Desa Pucuk",
        isi: "Produk UMKM yang dihasilkan masyarakat antara lain stik daun kelor, stik lele, bubuk jahe kemasan, keripik pisang, keripik talas, serta minuman herbal tradisional seperti beras kencur dan kunyit asam. Beragam produk tersebut menunjukkan kreativitas masyarakat dalam mengolah bahan pangan lokal.",
        foto: ""
      },
      {
        judul: "Sumur dan Gua di Desa Pucuk",
        isi: "Desa Pucuk juga memiliki potensi berupa sumur dan gua yang menjadi bagian dari kekayaan lokal wilayah desa. Informasi lebih lanjut mengenai nama, sejarah, dan cerita masyarakat terkait lokasi tersebut dapat ditambahkan melalui dokumentasi dan wawancara warga.",
        foto: ""
      }
    ]
  },

  // DESA 12 - PULOREJO
  {
    nama: "Desa Pulorejo",
    foto: "imagesidower/desapulorejo.webp",
    kategori: "PENDIDIKAN & KEGIATAN EKONOMI",
    deskripsi: "Memiliki beberapa dusun serta kegiatan layanan gizi dan pasar di wilayah Dawarblandong.",
    pengantar: "Desa Pulorejo memiliki beberapa dusun yang menjadi bagian dari wilayah permukiman masyarakat. Berbagai kegiatan pelayanan masyarakat dan aktivitas ekonomi turut mewarnai kehidupan desa.",
    artikel: [
      {
        judul: "Dusun di Desa Pulorejo",
        isi: "Beberapa dusun yang terdapat di Desa Pulorejo antara lain Dusun Klanting, Dusun Sidobecik, dan Dusun Beru.",
        foto: ""
      },
      {
        judul: "SPPG Pulorejo dan Pasar Dawarblandong",
        isi: "SPPG Pulorejo menjadi salah satu informasi penting terkait kegiatan layanan pemenuhan gizi di wilayah desa. Selain itu, Pasar Dawarblandong menjadi salah satu tempat aktivitas ekonomi masyarakat di kawasan Dawarblandong.",
        foto: ""
      }
    ]
  },

  // DESA 13 - RANDEGAN
  {
    nama: "Desa Randegan",
    foto: "imagesidower/desarandegan.webp",
    kategori: "EKONOMI & PASAR TRADISIONAL",
    deskripsi: "Dikenal dengan keberadaan Pasar Randegan sebagai pusat aktivitas ekonomi masyarakat.",
    pengantar: "Desa Randegan memiliki potensi ekonomi yang dikenal melalui keberadaan Pasar Randegan. Pasar menjadi tempat berlangsungnya aktivitas jual beli dan interaksi masyarakat.",
    artikel: [
      {
        judul: "Pasar Randegan",
        isi: "Pasar Randegan merupakan salah satu tempat aktivitas ekonomi masyarakat di wilayah Dawarblandong. Pasar menjadi ruang bertemunya penjual dan pembeli untuk melakukan kegiatan perdagangan berbagai kebutuhan sehari-hari.",
        foto: ""
      }
    ]
  },

  // DESA 14 - SIMONGAGROK
  {
    nama: "Desa Simongagrok",
    foto: "imagesidower/desasimongagrok.webp",
    kategori: "PROFIL & PERTANIAN",
    deskripsi: "Terdiri dari tujuh dusun dengan wilayah dan jumlah penduduk yang beragam.",
    pengantar: "Desa Simongagrok memiliki wilayah yang terdiri dari tujuh dusun. Kehidupan masyarakatnya didukung oleh kegiatan sosial dan ekonomi, termasuk sektor pertanian.",
    artikel: [
      {
        judul: "Tujuh Dusun di Simongagrok",
        isi: "Desa Simongagrok terdiri dari tujuh dusun, yaitu Simokerto, Simorukun, Jublangsari, Ngagrok, Tempuran, Genceng, dan Mlati.",
        foto: ""
      },
      {
        judul: "Wilayah dan Jumlah Penduduk",
        isi: "Desa Simongagrok memiliki luas wilayah sekitar 354,333 hektare. Berdasarkan data desa yang diberikan, jumlah penduduk tercatat sebanyak 1.696 laki-laki dan 1.719 perempuan.",
        foto: ""
      }
    ]
  },

  // DESA 15 - SUMBERWULUH
  {
    nama: "Desa Sumberwuluh",
    foto: "imagesidower/desasumberwuluh.webp",
    kategori: "PERTANIAN, UMKM & BUDAYA",
    deskripsi: "Memiliki kegiatan pertanian, usaha BUMDes, dan tradisi sedekah desa.",
    pengantar: "Desa Sumberwuluh memiliki potensi dalam bidang pertanian, usaha masyarakat, dan budaya. Berbagai kegiatan ekonomi dan tradisi tahunan menjadi bagian dari kehidupan masyarakat setempat.",
    artikel: [
      {
        judul: "Empat Dusun di Sumberwuluh",
        isi: "Desa Sumberwuluh terbagi menjadi empat dusun, yaitu Dusun Jombang, Silodoko, Geneng, dan Sumberwuluh.",
        foto: ""
      },
      {
        judul: "Pertanian dan Inovasi BUMDes",
        isi: "Sektor pertanian menjadi salah satu kegiatan ekonomi masyarakat. Desa Sumberwuluh juga memiliki inisiatif usaha melalui BUMDes, seperti usaha ritel buah-buahan dan kegiatan manufaktur skala kecil atau kreatif, salah satunya pembuatan mesin sangrai kopi.",
        foto: ""
      },
      {
        judul: "Tradisi Sedekah Desa atau Ruah Deso",
        isi: "Masyarakat Sumberwuluh menyelenggarakan tradisi tahunan sedekah desa atau ruah deso. Kegiatan ini mencakup berkumpul bersama warga, tumpengan, kunjungan ke situs punden setempat, serta pertunjukan seni tradisional seperti wayang kulit dan ludruk.",
        foto: ""
      }
    ]
  },

  // DESA 16 - SURU
  {
    nama: "Desa Suru",
    foto: "imagesidower/desasuru.webp",
    kategori: "KULINER & BUDAYA LOKAL",
    deskripsi: "Dikenal dengan kuliner belalang goreng atau belgor yang disajikan bersama nasi jagung.",
    pengantar: "Desa Suru memiliki kekayaan kuliner lokal yang menarik untuk dikenal, salah satunya belalang goreng atau belgor. Kuliner ini menjadi salah satu ciri khas yang dikenal masyarakat dan dapat ditemukan di warung-warung setempat.",
    artikel: [
      {
        judul: "Lima Dusun di Desa Suru",
        isi: "Desa Suru meliputi lima dusun, yaitu Dusun Suru, Suru Kidul, Semanding, Bulakwangon, dan Tretes.",
        foto: ""
      },
      {
        judul: "Belalang Goreng atau Belgor",
        isi: "Belalang goreng atau belgor merupakan kuliner lokal yang dikenal di Desa Suru. Hidangan ini biasanya disajikan bersama nasi jagung dengan bumbu pedas atau kemangi. Salah satu warung yang pernah mendapat liputan lokal adalah Warung Fatmawati di Jalan Dusun Suru Lor. Informasi harga yang diberikan menyebutkan kisaran sekitar Rp30.000 hingga Rp60.000, bergantung pada ukuran porsi dan lauk pendamping.",
        foto: ""
      }
    ]
  },

  // DESA 17 - TALUN
  {
    nama: "Desa Talun",
    foto: "imagesidower/desatalun.webp",
    kategori: "KULINER & BUDAYA",
    deskripsi: "Memiliki kuliner lokal Serebeh dan tahu tek serta dua dusun.",
    pengantar: "Desa Talun memiliki kekayaan lokal yang dapat dikenalkan melalui pembagian wilayah dusun dan kuliner khas masyarakat. Serebeh dan tahu tek menjadi dua kuliner yang disebutkan sebagai bagian dari kekayaan kuliner lokal desa.",
    artikel: [
      {
        judul: "Dusun Talun dan Dusun Brak",
        isi: "Wilayah Desa Talun mencakup dua dusun, yaitu Dusun Talun dan Dusun Brak. Kedua dusun tersebut menjadi bagian dari kehidupan masyarakat desa.",
        foto: ""
      },
      {
        judul: "Serebeh dan Tahu Tek",
        isi: "Serebeh dan tahu tek merupakan kuliner yang dikenal dalam informasi kekayaan lokal Desa Talun. Keduanya dapat diperkenalkan sebagai bagian dari ragam makanan yang berkembang di lingkungan masyarakat.",
        foto: "assets/images/serebeh.jpg"
      }
    ]
  },

  // DESA 18 - TEMUIRENG
  {
    nama: "Desa Temuireng",
    foto: "imagesidower/desatemuireng.webp",
    kategori: "SEJARAH & WISATA RELIGI",
    deskripsi: "Memiliki cerita asal-usul nama desa serta situs ziarah Raden Supanji.",
    pengantar: "Desa Temuireng memiliki cerita asal-usul nama dan kisah tutur masyarakat yang menjadi bagian dari sejarah lokal. Wilayah ini juga memiliki tempat ziarah yang dikenal oleh masyarakat setempat.",
    artikel: [
      {
        judul: "Asal-Usul Nama Temuireng",
        isi: "Nama Temuireng dikaitkan dengan dua kata, yaitu 'temu' yang berarti bertemu dan 'ireng' yang berarti hitam. Nama tersebut juga dikaitkan dengan tanaman rimpang atau jamu temu hitam.",
        foto: ""
      },
      {
        judul: "Nyai Denok dan Cerita Pembukaan Desa",
        isi: "Dalam cerita tutur warga setempat, pembukaan wilayah Desa Temuireng dikaitkan dengan figur Nyai Denok pada masa lalu. Kisah ini menjadi bagian dari cerita sejarah lokal yang diwariskan melalui penuturan masyarakat.",
        foto: ""
      },
      {
        judul: "Makam Raden Supanji (Mbah Haji)",
        isi: "Di wilayah Temuireng terdapat situs ziarah makam Raden Supanji yang juga dikenal dengan sebutan Mbah Haji. Lokasi makam tersebut berada di area Gunung Sengkalan dan menjadi salah satu tempat yang berkaitan dengan cerita serta tradisi ziarah masyarakat.",
        foto: ""
      }
    ]
  }

];


// ==========================================
// MENAMPILKAN KARTU DESA
// ==========================================

const desaGrid = document.getElementById("desaGrid");
const searchDesa = document.getElementById("searchDesa");
const totalDesa = document.getElementById("totalDesa");
const emptyMessage = document.getElementById("emptyMessage");

function renderDesa(keyword = "") {

  const hasil = daftarDesa
    .map((desa, index) => ({ ...desa, index }))
    .filter(desa => {

      const teks = [
        desa.nama,
        desa.kategori,
        desa.deskripsi
      ].join(" ").toLowerCase();

      return teks.includes(keyword.toLowerCase());
    });

  desaGrid.innerHTML = hasil.map(desa => `

    <div class="desa-card"
         onclick="bukaDesa(${desa.index})">

      <div class="desa-image">

        ${
          desa.foto
          ? `<img src="${desa.foto}"
                  alt="${desa.nama}"
                  onerror="this.style.display='none'">`
          : ""
        }

        <span class="desa-number">
          ${String(desa.index + 1).padStart(2, "0")} · DESA
        </span>

      </div>

      <div class="desa-body">

        <span class="desa-category">
          ${desa.kategori}
        </span>

        <h3>${desa.nama}</h3>

        <p>${desa.deskripsi}</p>

        <span class="read-more">
          Baca selengkapnya <span>→</span>
        </span>

      </div>

    </div>

  `).join("");

  totalDesa.textContent = hasil.length;

  emptyMessage.hidden = hasil.length > 0;
}


// ==========================================
// MEMBUKA DETAIL DESA
// ==========================================

const modal = document.getElementById("desaModal");
const detailImage = document.getElementById("detailImage");
const detailName = document.getElementById("detailName");
const detailCategory = document.getElementById("detailCategory");
const detailIntro = document.getElementById("detailIntro");
const articleList = document.getElementById("articleList");

function bukaDesa(index) {

  const desa = daftarDesa[index];

  detailName.textContent = desa.nama;
  detailCategory.textContent = desa.kategori;
  detailIntro.textContent = desa.pengantar;

  if (desa.foto) {
    detailImage.src = desa.foto;
    detailImage.alt = desa.nama;
    detailImage.style.display = "block";
  } else {
    detailImage.removeAttribute("src");
    detailImage.style.display = "none";
  }

  articleList.innerHTML = desa.artikel.map(artikel => `

    <div class="article-item">

      <h4>${artikel.judul}</h4>

      <p>${artikel.isi}</p>

      ${
        artikel.foto
        ? `<img src="${artikel.foto}"
                alt="${artikel.judul}"
                onerror="this.style.display='none'">`
        : ""
      }

    </div>

  `).join("");

  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}


// ==========================================
// MENUTUP DETAIL DESA
// ==========================================

function tutupDesa() {

  modal.classList.remove("show");
  document.body.style.overflow = "";

}

document.getElementById("modalClose")
  .addEventListener("click", tutupDesa);

document.getElementById("closeDetail")
  .addEventListener("click", tutupDesa);

document.getElementById("modalOverlay")
  .addEventListener("click", tutupDesa);

document.addEventListener("keydown", function(event) {

  if (event.key === "Escape") {
    tutupDesa();
  }

});


// ==========================================
// PENCARIAN DESA
// ==========================================

searchDesa.addEventListener("input", function() {

  renderDesa(this.value);

});


// ==========================================
// TOMBOL KEMBALI KE ATAS
// ==========================================

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", function() {

  backTop.classList.toggle("show", window.scrollY > 400);

});

backTop.addEventListener("click", function() {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


// ==========================================
// TAHUN FOOTER
// ==========================================

document.getElementById("year").textContent =
  new Date().getFullYear();


// ==========================================
// JALANKAN HALAMAN
// ==========================================

renderDesa();
