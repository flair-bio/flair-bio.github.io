const ninjaKeys = document.querySelector("ninja-keys");

if (ninjaKeys && typeof determineComputedTheme === "function") {
  if (determineComputedTheme() === "dark") {
    ninjaKeys.classList.add("dark");
  } else {
    ninjaKeys.classList.remove("dark");
  }
}

window.openSearchModal = () => {
  const modal = document.querySelector("ninja-keys");
  if (!modal) return;
  const navbarNav = document.getElementById("navbarNav");
  if (navbarNav && navbarNav.classList.contains("show") && window.jQuery) {
    window.jQuery(navbarNav).collapse("hide");
  }
  modal.open();
};

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("search-toggle");
  if (btn) btn.addEventListener("click", window.openSearchModal);
});
