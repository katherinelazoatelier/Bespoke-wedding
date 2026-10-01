/* Katherine Lazo — Atelier: shared site behaviour */

// ---- Site settings: edit these two values ---------------------------------
// FORM_ENDPOINT: create a free form at https://formspree.io and paste its URL.
// While it still says YOUR_FORM_ID, the booking form opens the visitor's
// email app instead, addressed to CONTACT_EMAIL.
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
const CONTACT_EMAIL = "hello@katherinelazo.com";
// ---------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu
  const menuBtn = document.querySelector(".menu-btn");
  const links = document.querySelector(".nav__links");
  if (menuBtn && links) {
    menuBtn.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.textContent = open ? "Close" : "Menu";
    });
  }

  // Footer year
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Contact email anywhere it is shown
  document.querySelectorAll("[data-email]").forEach((el) => {
    el.textContent = CONTACT_EMAIL;
    if (el.tagName === "A") el.href = "mailto:" + CONTACT_EMAIL;
  });

  // Booking form
  const form = document.querySelector("#booking-form");
  if (!form) return;
  document.body.classList.add("on-book-page");

  // Preselect the service from links like book.html?service=weddings
  const wanted = new URLSearchParams(location.search).get("service");
  if (wanted) {
    const box = form.querySelector(`input[name="service"][value="${CSS.escape(wanted)}"]`);
    if (box) box.checked = true;
  }

  const status = form.querySelector(".form__status");
  const show = (cls, msg) => {
    status.className = "form__status " + cls;
    status.textContent = msg;
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!form.querySelector('input[name="service"]:checked')) {
      show("err", "Please choose at least one service you're interested in.");
      return;
    }

    const data = new FormData(form);
    const services = data.getAll("service").join(", ");

    if (FORM_ENDPOINT.includes("YOUR_FORM_ID")) {
      const lines = [];
      for (const [k, v] of data.entries()) if (k !== "service" && v) lines.push(`${k}: ${v}`);
      const body = `Services: ${services}\n` + lines.join("\n");
      location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Booking inquiry — " + services)}&body=${encodeURIComponent(body)}`;
      show("ok", "Your email app should open with your inquiry filled in. Just press send!");
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = "Sending…";
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(res.statusText);
      form.reset();
      show("ok", "Thank you! Your inquiry is in. Katherine will reply within 48 hours with availability and next steps.");
    } catch {
      show("err", `Something went wrong sending the form. Please email ${CONTACT_EMAIL} directly.`);
    } finally {
      btn.disabled = false;
      btn.textContent = "Send my inquiry";
    }
  });
});
