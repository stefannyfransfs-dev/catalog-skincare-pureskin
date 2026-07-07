const products = [
  { name: "Pure Skin Clear Dew Lip Oil", category: "lip", skins: ["normal", "dry"], price: 45000, rating: "4.9", image: "clear dew lip oil.jpeg", ingredients: "Jojoba Oil, Vitamin E, Squalane, Clear Gloss Complex", benefits: "Melembapkan bibir kering, memberi kilau natural, dan membuat bibir terasa lebih halus.", description: "Lip oil clear untuk tampilan natural. Cocok untuk bibir normal atau kering." },
  { name: "Pure Skin Rose Clay Tint Lip Oil", category: "lip", skins: ["normal", "dry", "brightening"], price: 49000, rating: "4.8", image: "rose clay tint lip oil.jpeg", ingredients: "Rosehip Oil, Vitamin E, Shea Butter, Soft Pink Pigment", benefits: "Memberi warna rose pink lembut, menjaga kelembapan bibir, dan membuat tampilan lebih segar.", description: "Lip oil rose pink soft yang memberi warna segar dan natural." },
  { name: "Pure Skin Terracotta Glow Lip Oil", category: "lip", skins: ["normal", "dry"], price: 49000, rating: "4.8", image: "terracotta glow lip oil.jpeg", ingredients: "Argan Oil, Vitamin E, Squalane, Warm Tint Pigment", benefits: "Melembapkan bibir, memberi warna hangat, dan menghasilkan efek glow natural.", description: "Lip oil warna coklat bata dengan efek glow yang hangat." },
  { name: "Pure Skin Mocha Nude Lip Oil", category: "lip", skins: ["normal", "dry"], price: 49000, rating: "4.9", image: "mocha nude lip oil.jpeg", ingredients: "Jojoba Oil, Coconut Oil, Vitamin E, Nude Tint Pigment", benefits: "Membuat bibir lembap, terlihat lembut, dan cocok untuk tampilan natural sehari-hari.", description: "Lip oil warna mocha nude untuk tampilan lembut dan elegan." },

  { name: "Pure Skin Ceramide Daily Moisturizer", category: "moisturizer", skins: ["normal", "dry"], price: 85000, rating: "4.7", image: "ceramide daily moisturizer.jpeg", ingredients: "Ceramide, Hyaluronic Acid, Glycerin, Panthenol", benefits: "Menjaga skin barrier, melembapkan kulit, dan membantu kulit terasa lebih lembut.", description: "Moisturizer dengan ceramide untuk menjaga skin barrier kulit normal dan kering." },
  { name: "Pure Skin Centella Calm Moisturizer", category: "moisturizer", skins: ["acne"], price: 95000, rating: "4.8", image: "centella calm moisturizer.jpeg", ingredients: "Centella Asiatica, Cica, Panthenol, Green Tea", benefits: "Menenangkan kulit berjerawat, mengurangi rasa tidak nyaman, dan menjaga kelembapan.", description: "Moisturizer centella dan cica untuk membantu menenangkan kulit berjerawat." },
  { name: "Pure Skin Niacinamide Glow Moisturizer", category: "moisturizer", skins: ["brightening"], price: 110000, rating: "4.9", image: "niacinamide glow moisturizer.jpeg", ingredients: "Niacinamide, Licorice Extract, Hyaluronic Acid, Vitamin B5", benefits: "Membantu kulit tampak lebih cerah, lembap, dan terlihat lebih sehat.", description: "Moisturizer untuk membantu kulit tampak lebih cerah dan lembap." },
  { name: "Pure Skin Retinol Repair Moisturizer", category: "moisturizer", skins: ["anti-aging"], price: 175000, rating: "4.8", image: "retinol repair moisturizer.jpeg", ingredients: "Retinol, Peptide, Ceramide, Hyaluronic Acid", benefits: "Membantu menyamarkan garis halus, menjaga elastisitas, dan merawat tekstur kulit.", description: "Moisturizer retinol ringan untuk menyamarkan garis halus." },

  { name: "Pure Skin Acne Care Toner", category: "toner", skins: ["acne"], price: 62000, rating: "4.7", image: "acne care toner.jpeg", ingredients: "Salicylic Acid, Tea Tree, Centella Asiatica, Witch Hazel", benefits: "Membantu merawat kulit acne-prone, menyegarkan, dan menjaga kulit terasa seimbang.", description: "Toner ringan untuk kulit acne-prone agar terasa lebih segar dan seimbang." },
  { name: "Pure Skin Hydra Balance Toner", category: "toner", skins: ["normal", "dry"], price: 55000, rating: "4.7", image: "hydra balance toner.jpeg", ingredients: "Hyaluronic Acid, Aloe Vera, Glycerin, Panthenol", benefits: "Memberi hidrasi ringan setelah mencuci wajah dan membantu kulit terasa lebih nyaman.", description: "Toner hydrating untuk menjaga kelembapan setelah mencuci wajah." },
  { name: "Pure Skin Bright Glow Toner", category: "toner", skins: ["brightening"], price: 68000, rating: "4.8", image: "bright glow toner.jpeg", ingredients: "Niacinamide, Vitamin C Derivative, Licorice Extract, Aloe Vera", benefits: "Membantu kulit kusam terlihat lebih segar, cerah, dan lembap.", description: "Toner untuk membantu kulit kusam terlihat lebih segar dan cerah." },
  { name: "Pure Skin Firming Renewal Toner", category: "toner", skins: ["anti-aging"], price: 88000, rating: "4.8", image: "firming renewal toner.jpeg", ingredients: "Peptide, Adenosine, Hyaluronic Acid, Green Tea", benefits: "Membantu kulit terasa lebih kenyal, halus, dan terhidrasi.", description: "Toner anti-aging untuk membantu kulit terasa lebih halus dan kenyal." },

  { name: "Pure Skin Cica Recovery Serum", category: "serum", skins: ["acne"], price: 125000, rating: "4.9", image: "cica recovery serum.jpeg", ingredients: "Centella Asiatica, Madecassoside, Panthenol, Zinc PCA", benefits: "Menenangkan kulit berjerawat, membantu merawat kemerahan, dan menjaga skin barrier.", description: "Serum Centella Asiatica untuk membantu menenangkan kulit berjerawat." },
  { name: "Pure Skin Daily Hydration Serum", category: "serum", skins: ["normal", "dry"], price: 115000, rating: "4.8", image: "daily hydration serum.jpeg", ingredients: "Hyaluronic Acid, Glycerin, Aloe Vera, Betaine", benefits: "Memberikan hidrasi ringan, membuat kulit terasa lembap, dan nyaman dipakai harian.", description: "Serum hidrasi ringan untuk kulit normal dan kering." },
  { name: "Pure Skin Radiance Serum", category: "serum", skins: ["brightening"], price: 135000, rating: "4.8", image: "radiance serum.jpeg", ingredients: "Niacinamide, Alpha Arbutin, Vitamin C Derivative, Licorice Extract", benefits: "Membantu mencerahkan kulit kusam dan meratakan tampilan warna kulit.", description: "Serum untuk membantu mencerahkan kulit kusam dan meratakan warna kulit." },
  { name: "Pure Skin Youth Repair Serum", category: "serum", skins: ["anti-aging"], price: 165000, rating: "4.8", image: "youth repair serum.jpeg", ingredients: "Peptide, Retinol, Ceramide, Hyaluronic Acid", benefits: "Membantu menjaga elastisitas kulit dan merawat tanda penuaan dini.", description: "Serum anti-aging untuk membantu menjaga elastisitas kulit." },

  { name: "Pure Skin Daily Fresh Sunscreen", category: "sunscreen", skins: ["normal", "dry"], price: 72000, rating: "4.8", image: "daily fresh sunscreen.jpeg", ingredients: "UV Filter, Hyaluronic Acid, Aloe Vera, Vitamin E", benefits: "Melindungi kulit dari sinar UV dan tetap terasa ringan untuk pemakaian harian.", description: "Sunscreen ringan untuk pemakaian harian pada kulit normal dan kering." },
  { name: "Pure Skin Acne Guard Sunscreen", category: "sunscreen", skins: ["acne"], price: 65000, rating: "4.7", image: "acne guard sunscreen.jpeg", ingredients: "UV Filter, Tea Tree, Centella Asiatica, Zinc PCA", benefits: "Memberi perlindungan UV ringan dan nyaman untuk kulit acne-prone.", description: "Proteksi UV ringan untuk kulit acne-prone." },
  { name: "Pure Skin Glow Shield Sunscreen", category: "sunscreen", skins: ["brightening"], price: 70000, rating: "4.8", image: "glow shield sunscreen.jpeg", ingredients: "UV Filter, Niacinamide, Vitamin E, Aloe Vera", benefits: "Melindungi dari sinar UV sekaligus memberi efek cerah alami.", description: "Sunscreen dengan efek cerah alami untuk pemakaian harian." },
  { name: "Pure Skin Age Defense Sunscreen", category: "sunscreen", skins: ["anti-aging"], price: 92000, rating: "4.8", image: "age defense sunscreen.jpeg", ingredients: "UV Filter, Peptide, Vitamin E, Hyaluronic Acid", benefits: "Membantu melindungi kulit dari paparan UV dan mendukung perawatan anti-aging.", description: "Sunscreen anti-aging untuk membantu melindungi kulit dari paparan UV." }
];

const defaultReviews = [
  { name: "Maya", skin: "dry", category: "lip", rating: "5", comment: "Clear Dew nyaman untuk bibir kering dan hasilnya natural." },
  { name: "Nadya", skin: "acne", category: "toner", rating: "4", comment: "Toner acne terasa ringan dan tidak membuat kulit makin kering." }
];

const reviewStorageKey = "pureSkinReviews";
let reviews = loadSavedReviews();

const filterState = {
  category: "all",
  skin: "all",
  price: "all"
};

function loadSavedReviews() {
  const savedReviews = localStorage.getItem(reviewStorageKey);

  if (!savedReviews) {
    return defaultReviews.slice();
  }

  try {
    const parsedReviews = JSON.parse(savedReviews);
    return Array.isArray(parsedReviews) ? parsedReviews : defaultReviews.slice();
  } catch (error) {
    return defaultReviews.slice();
  }
}

function saveReviewsToStorage() {
  localStorage.setItem(reviewStorageKey, JSON.stringify(reviews));
}

function formatRupiah(value) {
  return "Rp" + Number(value).toLocaleString("id-ID");
}

function formatLabel(value) {
  const labels = {
    moisturizer: "Moisturizer",
    sunscreen: "Sunscreen",
    serum: "Serum",
    toner: "Toner",
    lip: "Lip Care",
    acne: "Acne",
    normal: "Normal",
    dry: "Dry",
    brightening: "Brightening",
    "anti-aging": "Anti-aging",
    all: "Semua"
  };

  return labels[value] || value;
}

function safeText(value) {
  return String(value).replace(/[&<>"]/g, function (char) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    }[char];
  });
}

function getProductSkins(product) {
  return Array.isArray(product.skins) ? product.skins : [product.skin || "all"];
}

function getProductId() {
  return Number(new URLSearchParams(window.location.search).get("id"));
}

function initCatalogPage() {
  const searchInput = document.getElementById("searchInput");
  const sortSelect = document.getElementById("sortSelect");
  const resetFilter = document.getElementById("resetFilter");
  const resultCount = document.getElementById("resultCount");
  const productGrid = document.getElementById("productGrid");

  if (!productGrid) return;

  renderFilterButtons("categoryFilters", "category", [
    { label: "Semua", value: "all" },
    { label: "Moisturizer", value: "moisturizer" },
    { label: "Sunscreen", value: "sunscreen" },
    { label: "Serum", value: "serum" },
    { label: "Toner", value: "toner" },
    { label: "Lip Care", value: "lip" }
  ]);

  renderFilterButtons("skinFilters", "skin", [
    { label: "Semua", value: "all" },
    { label: "Acne", value: "acne" },
    { label: "Normal", value: "normal" },
    { label: "Dry", value: "dry" },
    { label: "Brightening", value: "brightening" },
    { label: "Anti-aging", value: "anti-aging" }
  ]);

  renderFilterButtons("priceFilters", "price", [
    { label: "Semua", value: "all" },
    { label: "< 50K", value: "under-50000" },
    { label: "50K - 100K", value: "50000-100000" },
    { label: "100K - 200K", value: "100000-200000" },
    { label: "> 200K", value: "over-200000" }
  ]);

  function getFilteredProducts() {
    const keyword = searchInput.value.toLowerCase().trim();

    let filteredProducts = products.filter(function (product) {
      const productSkins = getProductSkins(product);
      const skinText = productSkins.map(formatLabel).join(" ").toLowerCase();

      const searchMatch =
        product.name.toLowerCase().includes(keyword) ||
        product.description.toLowerCase().includes(keyword) ||
        formatLabel(product.category).toLowerCase().includes(keyword) ||
        skinText.includes(keyword);

      const categoryMatch =
        filterState.category === "all" ||
        product.category === filterState.category;

      const skinMatch =
        filterState.skin === "all" ||
        productSkins.includes(filterState.skin);

      let priceMatch = true;

      if (filterState.price === "under-50000") {
        priceMatch = product.price < 50000;
      }

      if (filterState.price === "50000-100000") {
        priceMatch = product.price >= 50000 && product.price <= 100000;
      }

      if (filterState.price === "100000-200000") {
        priceMatch = product.price > 100000 && product.price <= 200000;
      }

      if (filterState.price === "over-200000") {
        priceMatch = product.price > 200000;
      }

      return searchMatch && categoryMatch && skinMatch && priceMatch;
    });

    if (sortSelect.value === "az") {
      filteredProducts.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
    }

    if (sortSelect.value === "za") {
      filteredProducts.sort(function (a, b) {
        return b.name.localeCompare(a.name);
      });
    }

    if (sortSelect.value === "low") {
      filteredProducts.sort(function (a, b) {
        return a.price - b.price;
      });
    }

    if (sortSelect.value === "high") {
      filteredProducts.sort(function (a, b) {
        return b.price - a.price;
      });
    }

    return filteredProducts;
  }

  function renderCatalog() {
    const filteredProducts = getFilteredProducts();
    resultCount.textContent = filteredProducts.length;

    if (filteredProducts.length === 0) {
      productGrid.innerHTML =
        '<p class="col-span-full rounded-2xl border border-[#dfd2c7] bg-white/70 p-8 text-center text-taupe">Produk tidak ditemukan. Coba kata kunci atau filter lain.</p>';
      return;
    }

    productGrid.innerHTML = filteredProducts.map(function (product) {
      const productIndex = products.indexOf(product);

      const tags = getProductSkins(product)
        .map(function (skin) {
          return '<span class="rounded-full bg-blush px-3 py-1 text-sm font-bold text-espresso">' +
            formatLabel(skin) +
            '</span>';
        })
        .join("");

      return '<article class="flex h-full flex-col overflow-hidden rounded-3xl border border-[#dfd2c7] bg-white/75 shadow-xl shadow-[#563a2b]/10">' +
        '<img src="' + safeText(product.image) + '" alt="' + safeText(product.name) + '" class="h-64 w-full object-cover">' +

        '<div class="flex h-full flex-col p-5">' +
          '<p class="text-xs font-bold uppercase tracking-[.18em] text-terracotta">' +
            formatLabel(product.category) +
          '</p>' +

          '<h3 class="mt-2 min-h-[56px] text-xl font-bold">' +
            safeText(product.name) +
          '</h3>' +

          '<p class="mt-3 min-h-[84px] leading-7 text-taupe">' +
            safeText(product.description) +
          '</p>' +

          '<p class="mt-4 text-lg font-bold text-espresso">' +
            formatRupiah(product.price) +
          '</p>' +

          '<p class="mt-1 font-bold text-terracotta">Rating ' +
            product.rating +
            '/5</p>' +

          '<div class="mt-4 min-h-[44px] flex flex-wrap items-center gap-2">' +
          tags +
          '</div>' +

          '<a href="detail.html?id=' + productIndex + '" class="mt-6 inline-flex w-full justify-center rounded-full bg-terracotta px-5 py-3 font-bold text-white transition hover:bg-espresso">Klik Detail</a>' +
        '</div>' +
      '</article>';
    }).join("");
  }

  searchInput.addEventListener("input", renderCatalog);

  sortSelect.addEventListener("change", renderCatalog);

  resetFilter.addEventListener("click", function () {
    searchInput.value = "";
    sortSelect.value = "default";

    filterState.category = "all";
    filterState.skin = "all";
    filterState.price = "all";

    updateActiveButtons();
    renderCatalog();
  });

  renderCatalog();
}

function renderFilterButtons(targetId, group, options) {
  const wrapper = document.getElementById(targetId);

  if (!wrapper) return;

  wrapper.innerHTML = options.map(function (option) {
    return '<button type="button" class="filter-btn rounded-full border border-[#dfd2c7] px-4 py-2 font-bold transition" data-filter-group="' +
      group +
      '" data-filter-value="' +
      option.value +
      '">' +
      option.label +
      '</button>';
  }).join("");

  wrapper.querySelectorAll(".filter-btn").forEach(function (button) {
    button.addEventListener("click", function () {
      filterState[group] = button.dataset.filterValue;

      updateActiveButtons();

      const searchInput = document.getElementById("searchInput");

      if (searchInput) {
        searchInput.dispatchEvent(new Event("input"));
      }
    });
  });

  updateActiveButtons();
}

function updateActiveButtons() {
  document.querySelectorAll(".filter-btn").forEach(function (button) {
    const active =
      filterState[button.dataset.filterGroup] ===
      button.dataset.filterValue;

    button.className = active
      ? "filter-btn rounded-full border border-terracotta bg-terracotta px-4 py-2 font-bold text-white transition"
      : "filter-btn rounded-full border border-[#dfd2c7] bg-white px-4 py-2 font-bold text-taupe transition hover:border-terracotta hover:text-terracotta";
  });
}

function initDetailPage() {
  const detailContent = document.getElementById("detailContent");
  if (!detailContent) return;

  const product = products[getProductId()];

  if (!product) {
    detailContent.innerHTML =
      '<div class="rounded-3xl border border-[#dfd2c7] bg-white/75 p-8 text-center">' +
        '<h2 class="font-serif text-4xl">Produk tidak ditemukan.</h2>' +
        '<a href="catalog.html" class="mt-6 inline-flex rounded-full bg-terracotta px-5 py-3 font-bold text-white">' +
          'Kembali ke Katalog' +
        '</a>' +
      '</div>';
    return;
  }

  detailContent.innerHTML =
    '<div class="grid gap-8 lg:grid-cols-[.95fr_1.05fr] lg:items-start">' +

      '<div class="overflow-hidden rounded-3xl border border-[#dfd2c7] bg-white/75 shadow-xl shadow-[#563a2b]/10">' +
        '<img src="' + safeText(product.image) + '" alt="' + safeText(product.name) + '" class="max-h-[620px] w-full object-cover">' +
      '</div>' +

      '<div class="rounded-3xl border border-[#dfd2c7] bg-white/75 p-6 shadow-xl shadow-[#563a2b]/10">' +

        '<p class="text-xs font-bold uppercase tracking-[.22em] text-terracotta">' +
          'Detail Produk' +
        '</p>' +

        '<h2 class="mt-3 font-serif text-5xl leading-tight text-cocoa">' +
          safeText(product.name) +
        '</h2>' +

        '<p class="mt-4 leading-8 text-taupe">' +
          safeText(product.description) +
        '</p>' +

        '<div class="mt-6 grid gap-3 sm:grid-cols-2">' +

          '<div class="rounded-2xl bg-cream p-4">' +
            '<p class="text-sm font-bold text-taupe">Harga</p>' +
            '<p class="text-2xl font-bold text-espresso">' +
              formatRupiah(product.price) +
            '</p>' +
          '</div>' +

          '<div class="rounded-2xl bg-cream p-4">' +
            '<p class="text-sm font-bold text-taupe">Rating</p>' +
            '<p class="text-2xl font-bold text-terracotta">' +
              product.rating + '/5' +
            '</p>' +
          '</div>' +

        '</div>' +

        '<div class="mt-7 border-t border-[#dfd2c7] pt-6">' +

          '<h3 class="font-poppins text-2xl font-semibold text-cocoa">' +
            'Ingredients' +
          '</h3>' +

          '<p class="mt-3 font-sans leading-7 text-taupe">' +
            safeText(product.ingredients) +
          '</p>' +

          '<h3 class="mt-6 font-poppins text-2xl font-semibold text-cocoa">' +
            'Manfaat' +
          '</h3>' +

          '<p class="mt-3 font-sans leading-7 text-taupe">' +
            safeText(product.benefits) +
          '</p>' +

        '</div>' +

        '<a href="catalog.html" class="mt-8 flex w-full justify-center rounded-full bg-terracotta px-6 py-4 font-bold text-white transition hover:bg-espresso">' +
          'Kembali ke Katalog' +
        '</a>' +

      '</div>' +

    '</div>';
}

initCatalogPage();
initDetailPage();
initReviewPage();
