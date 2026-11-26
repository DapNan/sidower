
const BIG_URL =
  "https://geoservices.big.go.id/rbi/rest/services/" +
  "BATASWILAYAH/BATAS_DESAKEL_AR/MapServer/0/query";

const map = L.map("map", {
  zoomControl: false
}).setView([-7.35, 112.45], 11);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; OpenStreetMap"
}).addTo(map);

L.control.zoom({
  position: "topright"
}).addTo(map);

let villageLayer = null;
let selectedLayer = null;
let villageFeatures = [];

const mapLoading = document.getElementById("mapLoading");
const villageName = document.getElementById("villageName");
const villageDescription = document.getElementById("villageDescription");
const villageList = document.getElementById("villageList");

function normalizeName(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]/g, "");
}

function defaultStyle() {
  return {
    color: "#527b57",
    weight: 1.5,
    fillColor: "#a8cba5",
    fillOpacity: 0.65
  };
}

function selectedStyle() {
  return {
    color: "#245b3b",
    weight: 3,
    fillColor: "#f2c94c",
    fillOpacity: 0.9
  };
}
// DATA BACAAN SINGKAT SETIAP DESA

// DATA BACAAN SINGKAT 18 DESA DAWARBLANDONG
const villageDescriptions = {
  "Bangeran": `
    Desa Bangeran merupakan salah satu desa di Kecamatan
    Dawarblandong dengan wilayah seluas sekitar 3,82 km².
    Kehidupan masyarakatnya menjadi bagian dari aktivitas
    sosial dan perekonomian pedesaan, termasuk kegiatan
    pertanian yang berkembang di wilayah Dawarblandong.
  `,

  "Banyulegi": `
    Desa Banyulegi memiliki wilayah sekitar 3,13 km² dan
    terbagi menjadi empat dusun. Desa ini menjadi bagian
    dari kekayaan wilayah Dawarblandong dengan kehidupan
    masyarakat, lingkungan, dan aktivitas pedesaan yang
    terus berkembang.
  `,

  "Brayublandong": `
    Desa Brayublandong merupakan desa dengan wilayah terluas
    di Kecamatan Dawarblandong, yaitu sekitar 5,06 km².
    Selain kegiatan pertanian, desa ini juga memiliki
    potensi peternakan kambing yang tercatat dalam data
    kecamatan.
  `,

  "Cendoro": `
    Desa Cendoro memiliki luas wilayah sekitar 2,71 km²
    dan terdiri dari empat dusun. Sebagai bagian dari
    Kecamatan Dawarblandong, desa ini memiliki kehidupan
    masyarakat pedesaan yang turut mendukung perkembangan
    wilayah sekitarnya.
  `,

  "Cinandang": `
    Desa Cinandang memiliki luas sekitar 3,22 km² dengan
    lima dusun. Aktivitas masyarakatnya menjadi bagian
    dari kehidupan sosial dan pembangunan desa di
    Kecamatan Dawarblandong.
  `,

  "Dawarblandong": `
    Desa Dawarblandong merupakan salah satu desa yang
    berada di wilayah kecamatan dengan nama yang sama.
    Desa ini memiliki luas sekitar 3,37 km². Salah satu
    potensi peternakan yang tercatat di desa ini adalah
    peternakan domba.
  `,

  "Gunungan": `
    Desa Gunungan memiliki luas wilayah sekitar 2,26 km²
    dan terdiri dari empat dusun. Desa ini menjadi salah
    satu bagian dari wilayah pedesaan Dawarblandong yang
    memiliki potensi untuk terus dikembangkan melalui
    kegiatan masyarakat dan pembangunan lokal.
  `,

  "Gunungsari": `
    Desa Gunungsari memiliki luas sekitar 4,36 km² dan
    merupakan salah satu desa terluas di Kecamatan
    Dawarblandong. Desa ini juga tercatat memiliki
    potensi peternakan sapi potong dan ayam kampung.
  `,

  "Jatirowo": `
    Desa Jatirowo memiliki luas sekitar 2,97 km² dan
    terdiri dari dua dusun. Kehidupan masyarakat desa
    menjadi bagian dari keberagaman sosial dan aktivitas
    ekonomi di Kecamatan Dawarblandong.
  `,

  "Madureso": `
    Desa Madureso memiliki luas wilayah sekitar 3,81 km²
    dan terdiri dari tiga dusun. Desa ini termasuk wilayah
    yang cukup jauh dari pusat Kecamatan Dawarblandong,
    sehingga memiliki karakter wilayah pedesaan tersendiri.
  `,

  "Pucuk": `
    Desa Pucuk memiliki luas sekitar 4,28 km² dan menjadi
    salah satu desa dengan wilayah terluas di kecamatan.
    Desa ini memiliki lima dusun dan 29 RT berdasarkan
    data pemerintahan desa tahun 2023.
  `,

  "Pulorejo": `
    Desa Pulorejo memiliki luas sekitar 3,34 km² dan
    terdiri dari lima dusun. Desa ini tercatat memiliki
    fasilitas pendidikan dasar terbanyak di Kecamatan
    Dawarblandong pada tahun 2023, sehingga menjadi salah
    satu wilayah penting dalam kegiatan pendidikan
    masyarakat.
  `,

  "Randegan": `
    Desa Randegan memiliki luas sekitar 1,68 km².
    Desa ini juga dikenal dengan keberadaan Pasar Randegan
    yang menjadi salah satu pusat aktivitas perdagangan
    dan interaksi masyarakat di wilayah Dawarblandong.
  `,

  "Simongagrok": `
    Desa Simongagrok memiliki luas sekitar 3,41 km² dan
    terdiri dari tujuh dusun, jumlah dusun terbanyak di
    Kecamatan Dawarblandong. Desa ini juga tercatat
    memiliki kelompok tani terbanyak, yaitu tujuh
    kelompok, yang menunjukkan pentingnya aktivitas
    pertanian bagi masyarakatnya.
  `,

  "Sumberwuluh": `
    Desa Sumberwuluh memiliki luas sekitar 2,98 km² dan
    terdiri dari empat dusun. Desa ini merupakan bagian
    dari wilayah Dawarblandong yang memiliki aktivitas
    sosial dan pertanian sebagai bagian dari kehidupan
    masyarakat pedesaan.
  `,

  "Suru": `
    Desa Suru memiliki luas sekitar 2,91 km². Wilayah ini
    memiliki ketinggian rata-rata sekitar 87 meter di atas
    permukaan laut, tertinggi di antara desa-desa di
    Kecamatan Dawarblandong. Desa Suru juga tercatat
    memiliki potensi peternakan ayam pedaging.
  `,

  "Talunblandong": `
    Desa Talunblandong memiliki luas wilayah sekitar
    2,14 km² dan terdiri dari empat dusun. Desa ini
    merupakan salah satu bagian dari kekayaan wilayah
    Dawarblandong. Cerita mengenai kuliner lokal seperti
    Serebeh dapat menjadi salah satu hal menarik untuk
    diperkenalkan melalui ensiklopedia desa.
  `,

  "Temuireng": `
    Desa Temuireng memiliki luas sekitar 4 km² dan
    terdiri dari empat dusun. Desa ini menjadi bagian
    dari wilayah Dawarblandong dengan kehidupan
    masyarakat dan potensi lokal yang dapat terus
    diperkenalkan kepada generasi berikutnya.
  `
};

// Menampilkan informasi desa
// Menampilkan informasi desa
function showVillageInfo(name) {
  villageName.textContent = name;

  villageDescription.textContent =
    villageDescriptions[name] ||
    "Informasi mengenai Desa " + name +
    " akan segera ditambahkan.";

  document.querySelectorAll(".village-item").forEach(button => {
    button.classList.toggle(
      "active",
      normalizeName(button.dataset.name) === normalizeName(name)
    );
  });
}

// Memilih satu polygon desa
function selectVillage(layer, name) {
  if (!layer) return;

  // Kembalikan warna polygon sebelumnya
  if (selectedLayer && villageLayer) {
    villageLayer.resetStyle(selectedLayer);
  }

  // Simpan polygon yang baru dipilih
  selectedLayer = layer;

  // Hanya polygon ini yang berubah kuning
  layer.setStyle(selectedStyle());
  layer.bringToFront();

  // Update panel informasi
  showVillageInfo(name);

  // Zoom tepat ke wilayah desa
  const bounds = layer.getBounds();

  if (bounds.isValid()) {
    map.flyToBounds(bounds, {
      padding: [40, 40],
      maxZoom: 15,
      duration: 1.2
    });
  }
}

// Membuat daftar desa dari polygon
function createVillageList() {
  villageList.innerHTML = "";

  const villages = villageFeatures
    .map(item => ({
      name: item.name,
      layer: item.layer
    }))
    .sort((a, b) => a.name.localeCompare(b.name, "id"));

  villages.forEach(village => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "village-item";
    button.dataset.name = village.name;

    button.innerHTML = `
      <span>${village.name}</span>
      <span>›</span>
    `;

    button.addEventListener("click", () => {
      selectVillage(village.layer, village.name);
    });

    villageList.appendChild(button);
  });

  console.log("Daftar desa:", villages.map(v => v.name));
}

// Memuat polygon desa dari BIG
async function loadVillageMap() {
  try {
    const params = new URLSearchParams({
      where:
        "WADMKC='Dawarblandong' AND WADMKK LIKE '%Mojokerto%'",
      outFields: "*",
      returnGeometry: "true",
      outSR: "4326",
      f: "geojson"
    });

    const response = await fetch(
      BIG_URL + "?" + params.toString()
    );

    if (!response.ok) {
      throw new Error("Gagal menghubungi layanan BIG.");
    }

    const geojson = await response.json();

    if (geojson.error) {
      throw new Error(
        geojson.error.message || "Terjadi kesalahan query BIG."
      );
    }

    if (!geojson.features || geojson.features.length === 0) {
      throw new Error("Polygon desa Dawarblandong tidak ditemukan.");
    }

    villageFeatures = [];

    // Filter berdasarkan kecamatan dan kabupaten
    const features = geojson.features.filter(feature => {
      const p = feature.properties || {};

      return (
        normalizeName(p.WADMKC) === "dawarblandong" &&
        normalizeName(p.WADMKK).includes("mojokerto")
      );
    });

    if (features.length === 0) {
      throw new Error("Tidak ada polygon desa yang cocok.");
    }

    // Buat layer dari polygon masing-masing desa
    villageLayer = L.geoJSON(
      {
        type: "FeatureCollection",
        features: features
      },
      {
        style: defaultStyle,

        onEachFeature: (feature, layer) => {
          const name = feature.properties?.WADMKD;

          if (!name) return;

          // Simpan satu desa beserta polygon miliknya
          villageFeatures.push({
            name: name,
            feature: feature,
            layer: layer
          });

          layer.bindTooltip(name, {
            sticky: true,
            direction: "top"
          });

          layer.on({
            mouseover: () => {
              if (selectedLayer !== layer) {
                layer.setStyle({
                  color: "#245b3b",
                  weight: 2.5,
                  fillColor: "#f2c94c",
                  fillOpacity: 0.85
                });
              }
            },

            mouseout: () => {
              if (selectedLayer !== layer) {
                villageLayer.resetStyle(layer);
              }
            },

            click: () => {
              selectVillage(layer, name);
            }
          });
        }
      }
    ).addTo(map);

    if (villageFeatures.length === 0) {
      throw new Error("Polygon tidak memiliki nama desa.");
    }

    // Tampilkan daftar desa
    createVillageList();

    // Tampilkan seluruh kecamatan saat awal dibuka
    map.fitBounds(villageLayer.getBounds(), {
      padding: [30, 30]
    });

    mapLoading.classList.add("hidden");

    console.log("Jumlah desa:", villageFeatures.length);

  } catch (error) {
    console.error("Peta gagal dimuat:", error);

    mapLoading.innerHTML = `
      <p>Peta desa belum dapat dimuat.</p>
      <p style="font-size:11px;font-weight:400">
        Periksa koneksi internet atau layanan BIG.
      </p>
    `;

    villageList.innerHTML = `
      <p class="loading-text">
        Gagal mengambil daftar desa. Silakan periksa Console browser.
      </p>
    `;
  }
}

loadVillageMap();
