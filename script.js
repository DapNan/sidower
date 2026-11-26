const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const backTop = document.getElementById('backTop');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Tutup navigasi' : 'Buka navigasi');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

window.addEventListener('scroll', () => {
  backTop.classList.toggle('show', window.scrollY > 500);
});

backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(item => revealObserver.observe(item));


// DATA ENSIKLOPEDIA DESA
// Tambahkan desa dengan menyalin satu objek di bawah ini, lalu ganti nama, foto,
// kategori, ringkasan, pengantar, dan isi bacaan sesuai informasi yang sudah diverifikasi.
const villageData = [
  {
    name: 'Desa Talun',
    category: 'KULINER & CERITA LOKAL',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed74a9d?auto=format&fit=crop&w=900&q=85',
    summary: 'Kenali salah satu cerita kuliner yang disebut masyarakat, yaitu serebeh.',
    intro: 'Desa Talun memiliki cerita lokal yang menarik untuk dikenali. Salah satu hal yang dapat diperkenalkan dalam ensiklopedia ini adalah serebeh.',
    sections: [
      { title: 'Serebeh dari Desa Talun', text: 'Serebeh dapat diperkenalkan sebagai salah satu cerita kuliner yang dikenal di Desa Talun. Tambahkan penjelasan tentang bahan, cara pembuatan, waktu penyajian, serta makna atau cerita di balik makanan ini berdasarkan keterangan warga setempat.' },
      { title: 'Cerita masyarakat', text: 'Bagian ini dapat diisi dengan asal-usul serebeh, siapa yang biasa membuatnya, apakah hadir dalam acara tertentu, dan bagaimana pengetahuan tersebut diwariskan antargenerasi.' },
      { title: 'Kenali lebih dekat', text: 'Tambahkan foto serebeh, kutipan narasumber, dan informasi pendukung agar pembaca dapat mengenal kekhasan Desa Talun secara lebih lengkap.' }
    ]
  },
  { name: 'Desa [Nama Desa]', category: 'TAMBAHKAN KATEGORI', image: '', summary: 'Tambahkan foto dan ringkasan keunikan desa ini.', intro: 'Tuliskan pengantar singkat tentang desa ini.', sections: [{title:'Cerita lokal',text:'Tambahkan cerita, tradisi, kuliner, sejarah, atau potensi khas desa berdasarkan informasi yang sudah dikumpulkan.'}] },
  { name: 'Desa [Nama Desa]', category: 'TAMBAHKAN KATEGORI', image: '', summary: 'Tambahkan foto dan ringkasan keunikan desa ini.', intro: 'Tuliskan pengantar singkat tentang desa ini.', sections: [{title:'Cerita lokal',text:'Tambahkan cerita, tradisi, kuliner, sejarah, atau potensi khas desa berdasarkan informasi yang sudah dikumpulkan.'}] },
  { name: 'Desa [Nama Desa]', category: 'TAMBAHKAN KATEGORI', image: '', summary: 'Tambahkan foto dan ringkasan keunikan desa ini.', intro: 'Tuliskan pengantar singkat tentang desa ini.', sections: [{title:'Cerita lokal',text:'Tambahkan cerita, tradisi, kuliner, sejarah, atau potensi khas desa berdasarkan informasi yang sudah dikumpulkan.'}] },
  { name: 'Desa [Nama Desa]', category: 'TAMBAHKAN KATEGORI', image: '', summary: 'Tambahkan foto dan ringkasan keunikan desa ini.', intro: 'Tuliskan pengantar singkat tentang desa ini.', sections: [{title:'Cerita lokal',text:'Tambahkan cerita, tradisi, kuliner, sejarah, atau potensi khas desa berdasarkan informasi yang sudah dikumpulkan.'}] },
  { name: 'Desa [Nama Desa]', category: 'TAMBAHKAN KATEGORI', image: '', summary: 'Tambahkan foto dan ringkasan keunikan desa ini.', intro: 'Tuliskan pengantar singkat tentang desa ini.', sections: [{title:'Cerita lokal',text:'Tambahkan cerita, tradisi, kuliner, sejarah, atau potensi khas desa berdasarkan informasi yang sudah dikumpulkan.'}] }
];

const villageGrid = document.getElementById('villageGrid');
const villageSearch = document.getElementById('villageSearch');
const villageCount = document.getElementById('villageCount');
const emptySearch = document.getElementById('emptySearch');
const villageModal = document.getElementById('villageModal');
const modalImage = document.getElementById('modalImage');
const modalCategory = document.getElementById('modalCategory');
const modalTitle = document.getElementById('modalTitle');
const modalIntro = document.getElementById('modalIntro');
const modalBody = document.getElementById('modalBody');

function renderVillages(query = '') {
  const normalized = query.trim().toLocaleLowerCase('id');
  const filtered = villageData
    .map((village, index) => ({ ...village, originalIndex: index }))
    .filter(village => [village.name, village.category, village.summary, village.intro]
      .join(' ').toLocaleLowerCase('id').includes(normalized));

  villageGrid.innerHTML = filtered.map(village => {
    const fallback = `<div class="village-placeholder"><span>🌿</span><b>Foto ${village.name.replaceAll('<','&lt;')}</b><small>Tambahkan foto desa di script.js</small></div>`;
    const image = village.image
      ? `<img src="${village.image}" alt="Foto ${village.name.replaceAll('"','&quot;')}" loading="lazy">`
      : fallback;
    return `<button class="village-card" type="button" data-village-index="${village.originalIndex}" aria-label="Baca ensiklopedia ${village.name.replaceAll('"','&quot;')}">
      <div class="village-card-image">${image}<span class="village-number">${String(village.originalIndex + 1).padStart(2,'0')} · DESA</span></div>
      <div class="village-card-body"><span class="village-category">${village.category}</span><h3>${village.name}</h3><p>${village.summary}</p><span class="village-read">Baca selengkapnya <span>→</span></span></div>
    </button>`;
  }).join('');

  villageCount.textContent = villageData.length;
  emptySearch.hidden = filtered.length !== 0;
}

function openVillage(index) {
  const village = villageData[index];
  if (!village) return;
  modalTitle.textContent = village.name;
  modalCategory.textContent = village.category;
  modalIntro.textContent = village.intro;
  if (village.image) {
    modalImage.src = village.image;
    modalImage.alt = `Foto ${village.name}`;
    modalImage.style.display = 'block';
  } else {
    modalImage.removeAttribute('src');
    modalImage.alt = '';
    modalImage.style.display = 'none';
  }
  modalBody.innerHTML = village.sections.map(section =>
    `<h3>${section.title}</h3><p>${section.text}</p>`
  ).join('');
  villageModal.classList.add('open');
  villageModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  document.getElementById('modalClose').focus();
}

function closeVillage() {
  villageModal.classList.remove('open');
  villageModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

if (villageGrid) {
  renderVillages();
  villageGrid.addEventListener('click', event => {
    const card = event.target.closest('[data-village-index]');
    if (card) openVillage(Number(card.dataset.villageIndex));
  });
  villageSearch.addEventListener('input', event => renderVillages(event.target.value));
  document.getElementById('modalClose').addEventListener('click', closeVillage);
  document.getElementById('modalDone').addEventListener('click', closeVillage);
  villageModal.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeVillage));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && villageModal.classList.contains('open')) closeVillage();
  });
}
