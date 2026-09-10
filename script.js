const CATEGORIES = [
  { id: "all", label: "All picks" },
  { id: "electronics", label: "Electronics" },
  { id: "home", label: "Home" },
  { id: "fashion", label: "Fashion" },
  { id: "gadgets", label: "Gadgets" }
];

let activeCategory = "all";
let searchTerm = "";

const grid = document.getElementById("productGrid");
const emptyState = document.getElementById("emptyState");
const resultsCount = document.getElementById("resultsCount");
const categoryRow = document.getElementById("categoryRow");
const toast = document.getElementById("toast");

function renderCategories() {
  categoryRow.innerHTML = "";
  CATEGORIES.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "chip" + (cat.id === activeCategory ? " active" : "");
    btn.textContent = cat.label;
    btn.addEventListener("click", () => {
      activeCategory = cat.id;
      renderCategories();
      renderProducts();
    });
    categoryRow.appendChild(btn);
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

function shareProduct(product) {
  const shareData = {
    title: product.title,
    text: `Check this out: ${product.title}`,
    url: product.link
  };
  if (navigator.share) {
    navigator.share(shareData).catch(() => {});
  } else {
    navigator.clipboard.writeText(product.link).then(() => showToast("Link copied"));
  }
}

function renderProducts() {
  const filtered = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === "all" || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  resultsCount.textContent = `${filtered.length} product${filtered.length === 1 ? "" : "s"}`;
  grid.innerHTML = "";
  emptyState.hidden = filtered.length !== 0;

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-image"><img src="${product.image}" alt="${product.title}" loading="lazy"></div>
      <div class="card-body">
        <span class="card-tag">Via ${product.source}</span>
        <p class="card-title">${product.title}</p>
        <div class="card-price">${product.price}${product.wasPrice ? `<span class="was">${product.wasPrice}</span>` : ""}</div>
        <div class="card-actions">
          <button class="btn-deal">Get this deal</button>
          <button class="btn-share" aria-label="Share this product">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.6" y1="10.6" x2="15.4" y2="6.4"/><line x1="8.6" y1="13.4" x2="15.4" y2="17.6"/></svg>
          </button>
        </div>
      </div>
    `;
    card.querySelector(".btn-deal").addEventListener("click", () => {
      window.open(product.link, "_blank", "noopener");
    });
    card.querySelector(".btn-share").addEventListener("click", () => shareProduct(product));
    grid.appendChild(card);
  });
}

document.getElementById("searchInput").addEventListener("input", (e) => {
  searchTerm = e.target.value;
  renderProducts();
});

document.getElementById("searchBtn").addEventListener("click", () => {
  renderProducts();
});

const themeToggle = document.getElementById("themeToggle");
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("dhz-theme", theme);
}
themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(current);
});
applyTheme(localStorage.getItem("dhz-theme") || "light");

renderCategories();
renderProducts();

