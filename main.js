// ====== 1. TES DONNÉES : modifie uniquement cette partie ======
const DATA = {
  name: "Gratien Catusse",
  tagline: "Étudiant ingénieur — décris ici ta spécialité en une phrase.",
  chips: ["Ingenieur en informatique a Enseeiht", "Toulouse"],
  contact: {
    text: "Une question, un stage, un projet ? Écris-moi.",
    links: [
      { label: "Email", url: "mailto:ton.email@exemple.fr" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/ton-profil" },
      { label: "GitHub", url: "https://github.com/gratiencatusse" }
    ]
  },
  skills: [
    { title: "Langages", items: ["Python", "C / C++", "JavaScript"] },
    { title: "Outils", items: ["Git", "Linux", "VS Code"] },
    { title: "Soft skills", items: ["Travail en équipe", "Gestion de projet"] }
  ],
  projects: [
    { title: "Projet exemple 1", tags: ["Web"], desc: "Décris le projet, ton rôle et le résultat.", stack: ["JavaScript", "HTML", "CSS"], links: [{ label: "GitHub", url: "https://github.com/gratiencatusse" }] },
    { title: "Projet exemple 2", tags: ["Embarqué"], desc: "Décris le projet, ton rôle et le résultat.", stack: ["C", "Arduino"], links: [] },
    { title: "Projet exemple 3", tags: ["Data", "Web"], desc: "Décris le projet, ton rôle et le résultat.", stack: ["Python", "Pandas"], links: [] }
  ],
  career: [
    { date: "2026", title: "Stage / Expérience", place: "Entreprise, Ville", points: ["Mission principale", "Résultat obtenu"] },
    { date: "2024 – 2027", title: "Formation d'ingénieur", place: "École, Ville", points: ["Spécialité", "Projets marquants"] }
  ]
};

// ====== 2. CODE (pas besoin de modifier) ======
const $ = s => document.querySelector(s);
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html) e.innerHTML = html; return e; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const chips = arr => arr.map(t => `<span class="chip">${esc(t)}</span>`).join("");

$("#hero-name").textContent = DATA.name;
$("#hero-tagline").textContent = DATA.tagline;
$("#hero-chips").innerHTML = chips(DATA.chips);
$("#contact-text").textContent = DATA.contact.text;
$("#contact-links").innerHTML = DATA.contact.links.map(l => `<a class="btn" href="${esc(l.url)}">${esc(l.label)}</a>`).join("");
$("#year").textContent = "© " + new Date().getFullYear();

// Menu
const sections = [["welcome", "Accueil"], ["competences", "Compétences"], ["projets", "Projets"], ["parcours", "Parcours"], ["contact", "Contact"]];
$("#menu").innerHTML = sections.map(([id, l]) => `<a href="#${id}">${l}</a>`).join("");
$("#menu-btn").onclick = () => $("#menu").classList.toggle("open");
$("#menu").onclick = () => $("#menu").classList.remove("open");

// Compétences
DATA.skills.forEach(g => $("#skills").append(el("div", "card reveal", `<h3>${esc(g.title)}</h3><div class="chips">${chips(g.items)}</div>`)));

// Projets + filtres
const allTags = ["Tous", ...new Set(DATA.projects.flatMap(p => p.tags))];
function renderProjects(tag) {
  $("#projects").innerHTML = "";
  DATA.projects.filter(p => tag === "Tous" || p.tags.includes(tag)).forEach(p => {
    $("#projects").append(el("article", "card reveal in",
      `<h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p><div class="chips">${chips(p.stack)}</div><p>${p.links.map(l => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")}</p>`));
  });
}
$("#filters").innerHTML = "";
allTags.forEach((t, i) => {
  const b = el("button", i === 0 ? "on" : "", esc(t));
  b.onclick = () => { document.querySelectorAll("#filters button").forEach(x => x.classList.remove("on")); b.classList.add("on"); renderProjects(t); };
  $("#filters").append(b);
});
renderProjects("Tous");

// Parcours
DATA.career.forEach(c => $("#career").append(el("div", "card reveal",
  `<span class="date">${esc(c.date)}</span><h4>${esc(c.title)}</h4><p>${esc(c.place)}</p><ul>${c.points.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`)));

// Animation à l'apparition + lien actif du menu
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add("in")), { threshold: .15 });
document.querySelectorAll(".reveal").forEach(e => io.observe(e));
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) document.querySelectorAll("#menu a").forEach(a => a.classList.toggle("active", a.hash === "#" + e.target.id));
}), { rootMargin: "-50% 0px -50% 0px" });
sections.forEach(([id]) => spy.observe(document.getElementById(id)));

// Thème clair/sombre mémorisé
try { const t = localStorage.getItem("theme"); if (t) document.documentElement.dataset.theme = t; } catch (e) {}
$("#theme-btn").onclick = () => {
  const t = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = t;
  try { localStorage.setItem("theme", t); } catch (e) {}
};
