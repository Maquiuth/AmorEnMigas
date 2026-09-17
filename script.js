// Amor en Migas — interacciones básicas del sitio

document.addEventListener("DOMContentLoaded", () => {
  // Año dinámico en el footer
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Sombra sutil en el header al hacer scroll
  const header = document.querySelector(".site-header");
  if (header) {
    const toggleHeaderShadow = () => {
      if (window.scrollY > 8) {
        header.style.boxShadow = "0 6px 18px rgba(69, 42, 34, 0.08)";
      } else {
        header.style.boxShadow = "none";
      }
    };
    toggleHeaderShadow();
    window.addEventListener("scroll", toggleHeaderShadow, { passive: true });
  }
});
