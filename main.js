// =====================================================
// 1. TES DONNÉES : modifie uniquement cette partie
//    Une section dont la liste est vide est masquée.
// =====================================================
const DATA = {
  name: "Gratien Catusse",
  tagline: "Étudiant ingénieur — décris ici ta spécialité en une phrase.",
  chips: ["Ta formation", "Ta ville"],

  // >>> CV : mets ici les liens (fichier PDF dans assets/ ou lien externe) <<<
  cv: [
    { label: "Télécharger mon CV (FR)", url: "assets/CV_Gratien_Catusse_FR.pdf" },
    { label: "Télécharger mon CV (EN)", url: "assets/CV_Gratien_Catusse_EN.pdf" },
    { label: "Profil LinkedIn", url: "https://www.linkedin.com/in/ton-profil" }
  ],

  engineeringIntro: "Projets et compétences issus de mon cursus.",
  // icon = nom de l'icône sur devicon.dev (facultatif)
  skills: [
    { title: "Langages", items: [{ name: "Python", icon: "python" }, { name: "C / C++", icon: "cplusplus" }, { name: "JavaScript", icon: "javascript" }] },
    { title: "Outils & systèmes", items: [{ name: "Git", icon: "git" }, { name: "Linux", icon: "linux" }, { name: "VS Code", icon: "vscode" }] },
    { title: "Soft skills", items: [{ name: "Travail en équipe" }, { name: "Gestion de projet" }, { name: "Adaptabilité" }] }
  ],
  projects: [
    { title: "Projet exemple 1", badge: "En cours", tags: ["Web"], image: "assets/projet1.jpg",
      desc: "Décris le projet, ton rôle et le résultat obtenu.", stack: ["JavaScript", "HTML", "CSS"],
      links: [{ label: "Voir sur GitHub", url: "https://github.com/gratiencatusse" }] },
    { title: "Projet exemple 2", tags: ["Embarqué"], image: "",
      desc: "Décris le projet, ton rôle et le résultat obtenu.", stack: ["C", "Arduino"], links: [] },
    { title: "Projet exemple 3", tags: ["Data", "Web"], image: "",
      desc: "Décris le projet, ton rôle et le résultat obtenu.", stack: ["Python", "Pandas"], links: [] }
  ],

  careerIntro: "Documents professionnels et expériences passées.",
  experiences: [
    // domain = site de l'entreprise, pour afficher son logo (facultatif)
    { date: "Été 2026", title: "Stage ingénieur", place: "Entreprise, Ville", domain: "exemple.com", points: ["Mission principale", "Résultat obtenu"] },
    { date: "2024 – 2027", title: "Formation d'ingénieur", place: "École, Ville", points: ["Spécialité", "Projets marquants"] }
  ],

  mobility: {
    languages: [{ name: "Anglais", level: "Niveau à renseigner" }, { name: "Allemand", level: "Niveau à renseigner" }],
    text: "Décris ici ton projet de mobilité internationale (semestre, année de césure, destinations visées)."
  },
  engagement: [
    { title: "Association / Engagement 1", text: "Décris ton rôle et ce que cela t'a apporté." },
    { title: "Association / Engagement 2", text: "Décris ton rôle et ce que cela t'a apporté." }
  ],
  activities: [
    { title: "Passion 1", text: "Musique, sport, photo… décris-la en quelques lignes." },
    { title: "Passion 2", text: "Décris-la en quelques lignes." }
  ],

  contact: {
    text: "Une question, un stage, un projet ? Écris-moi.",
    links: [
      { label: "Email", url: "mailto:ton.email@exemple.fr" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/ton-profil" },
      { label: "GitHub", url: "https://github.com/gratiencatusse" }
    ]
  }
};

// =====================================================
// 2. CODE (pas besoin de modifier)
// =====================================================
const $ = s => document.querySelector(s);
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html) e.innerHTML = html; return e; };
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const chips = a => a.map(t => `<span class="chip">${esc(t)}</span>`).join("");
const hide = id => { document.getElementById(id).style.display = "none"; };
const add = (parent, node) => { node.classList.add("reveal"); $(parent).append(node); };

// Accueil
$("#hero-name").textContent = DATA.name;
$("#hero-tagline").textContent = DATA.tagline;
$("#hero-chips").innerHTML = chips(DATA.chips);

// Ingénierie : compétences
$("#eng-sub").textContent = DATA.engineeringIntro;
DATA.skills.forEach(g => add("#skills", el("div", "card",
  `<h4>${esc(g.title)}</h4><ul class="skills-list">${g.items.map(i => `<li class="skill">${i.icon
    ? `<img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${esc(i.icon)}/${esc(i.icon)}-original.svg" onerror="this.remove()">` : ""}${esc(i.name)}</li>`).join("")}</ul>`)));

// Ingénierie : projets + filtres
function renderProjects(tag) {
  $("#projects").innerHTML = "";
  DATA.projects.filter(p => tag === "Tous" || p.tags.includes(tag)).forEach(p => add("#projects", Object.assign(el("article", "card in",
    `${p.image ? `<img class="thumb" alt="${esc(p.title)}" src="${esc(p.image)}" onerror="this.remove()">` : ""}
     ${p.badge ? `<span class="badge">${esc(p.badge)}</span>` : ""}
     <h4>${esc(p.title)}</h4><p>${esc(p.desc)}</p><div class="chips">${chips(p.stack)}</div>
     <p>${p.links.map(l => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")}</p>`))));
}
const tags = ["Tous", ...new Set(DATA.projects.flatMap(p => p.tags))];
tags.forEach((t, i) => {
  const b = el("button", i === 0 ? "on" : "", esc(t));
  b.onclick = () => { document.querySelectorAll("#filters button").forEach(x => x.classList.remove("on")); b.classList.add("on"); renderProjects(t); };
  $("#filters").append(b);
});
renderProjects("Tous");

// Parcours
$("#career-sub").textContent = DATA.careerIntro;
$("#cv-buttons").innerHTML = DATA.cv.map((c, i) => `<a class="btn ${i ? "ghost" : ""}" href="${esc(c.url)}" target="_blank" rel="noopener">${esc(c.label)}</a>`).join("");
DATA.experiences.forEach(x => add("#experiences", el("div", "card",
  `<span class="date">${esc(x.date)}</span>
   <div class="company">${x.domain ? `<img alt="" src="https://www.google.com/s2/favicons?domain=${esc(x.domain)}&sz=64" onerror="this.remove()">` : ""}<h4>${esc(x.title)}</h4></div>
   <p>${esc(x.place)}</p><ul>${x.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul>`)));

// Mobilité
const m = DATA.mobility;
if (m) $("#mobility-body").innerHTML = `<div class="grid">${m.languages.map(l => `<div class="card reveal"><h4>${esc(l.name)}</h4><p>${esc(l.level)}</p></div>`).join("")}</div><p>${esc(m.text)}</p>`;
else hide("mobility");

// Engagement & activités
const fill = (list, target, id) => list.length
  ? list.forEach(i => add(target, el("div", "card", `<h4>${esc(i.title)}</h4><p>${esc(i.text)}</p>`))) : hide(id);
fill(DATA.engagement, "#engagement-body", "engagement");
fill(DATA.activities, "#activities-body", "activities");

// Contact + pied de page
$("#contact-text").textContent = DATA.contact.text;
$("#contact-links").innerHTML = DATA.contact.links.map(l => `<a class="btn" href="${esc(l.url)}">${esc(l.label)}</a>`).join("");
$("#footer").textContent = `© ${new Date().getFullYear()} ${DATA.name}`;

// Menu (uniquement les sections visibles)
const labels = { welcome: "Accueil", engineering: "Ingénierie", career: "Parcours", mobility: "Mobilité", engagement: "Engagement", activities: "Activités", contact: "Contact" };
const ids = Object.keys(labels).filter(id => document.getElementById(id).style.display !== "none");
$("#menu").innerHTML = ids.map(id => `<a href="#${id}">${labels[id]}</a>`).join("");
$("#menu-btn").onclick = () => $("#menu").classList.toggle("open");
$("#menu").onclick = () => $("#menu").classList.remove("open");

// Animations + lien actif
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add("in")), { threshold: .15 });
document.querySelectorAll(".reveal").forEach(e => io.observe(e));
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) document.querySelectorAll("#menu a").forEach(a => a.classList.toggle("active", a.hash === "#" + e.target.id));
}), { rootMargin: "-50% 0px -50% 0px" });
ids.forEach(id => spy.observe(document.getElementById(id)));

// Thème clair/sombre
try { const t = localStorage.getItem("theme"); if (t) document.documentElement.dataset.theme = t; } catch (e) {}
$("#theme-btn").onclick = () => {
  const t = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = t;
  try { localStorage.setItem("theme", t); } catch (e) {}
};
