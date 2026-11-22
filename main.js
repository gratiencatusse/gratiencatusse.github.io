// =====================================================
// 1. TES DONNÉES : modifie uniquement cette partie
//    Une section dont la liste est vide est masquée.
// =====================================================
const DATA = {
  name: "Gratien Catusse",
  tagline: "Étudiant ingénieur à l'ENSEEIHT, passionné de systèmes, de réseaux et de cybersécurité.",
  chips: ["ENSEEIHT (N7), Toulouse", "Informatique & Mathématiques appliquées", "Promo 2028"],

  // >>> CV : liens des boutons (PDF dans assets/ ou lien externe) <<<
  cv: [
    { label: "Télécharger mon CV (EN)", url: "assets/CV_Gratien_Catusse.pdf" }
    // { label: "Profil LinkedIn", url: "https://www.linkedin.com/in/TON-PROFIL" }
  ],

  engineeringIntro: "Projets et compétences issus de mon cursus d'ingénieur en informatique.",
  skills: [
    { title: "Langages", items: [{ name: "Python", icon: "python" }, { name: "C", icon: "c" }, { name: "Java", icon: "java" }, { name: "Matlab", icon: "matlab" }] },
    { title: "Systèmes & réseaux", items: [{ name: "Linux", icon: "linux" }, { name: "Windows", icon: "windows8" }, { name: "iptables" }, { name: "Wireshark" }, { name: "Routage dynamique (RIP)" }] },
    { title: "Soft skills", items: [{ name: "Esprit critique" }, { name: "Résolution de problèmes" }, { name: "Collaboration" }] }
  ],
  projects: [
    { title: "Minishell : interpréteur Unix en C", badge: "Projet académique · 2026", tags: ["Systèmes"], image: "",
      desc: "Conception d'un interpréteur de commandes en C reproduisant les fonctions clés de bash : exécution de processus (fork, execvp, waitpid), gestion des signaux (SIGINT, SIGTSTP, SIGCHLD), redirections (<, >) et pipes. Résultat : un outil en ligne de commande fonctionnel, sans fuite mémoire, avec tâches de fond robustes.",
      stack: ["C", "API POSIX", "Linux"], links: [] },
    { title: "Architecture et sécurité d'un FAI simulé", badge: "Projet académique · 2026", tags: ["Réseaux", "Cybersécurité"], image: "",
      desc: "Conception et sécurisation d'une infrastructure de fournisseur d'accès : DMZ, filtrage stateful avec iptables, protection des services Web et DNS, analyse du trafic avec Wireshark et routage dynamique RIP. Résultat : une architecture multi-zones résiliente, avec filtrage entrée/sortie et isolation des clients.",
      stack: ["iptables", "Wireshark", "RIP", "Linux"], links: [] },
    { title: "Simulation du flux de fabrication de wafers", badge: "Stage AIXTRON · 2025", tags: ["Simulation", "Python"], image: "",
      desc: "Simulation à événements discrets avec SimPy pour modéliser des workflows parallèles sur plusieurs machines, avec optimisation du temps d'exécution. Résultat : plus de transparence sur les processus, un meilleur ordonnancement et un cadre réutilisable pour de futures études.",
      stack: ["Python", "SimPy"], links: [] }
  ],

  careerIntro: "Documents professionnels, formation et stages.",
  experiences: [
    { date: "Juin – juil. 2026", title: "Stagiaire cybersécurité & réseaux", place: "ABERIA, Toulouse (France)", domain: "aberia.fr",
      points: ["Audit, sécurisation et optimisation d'infrastructures réseau managées et d'architectures télécoms pour des entreprises clientes",
               "Analyse des menaces sur la commutation LAN et les protocoles de routage ; détection de failles et de mauvaises configurations",
               "Configuration de règles de pare-feu et de la segmentation réseau"] },
    { date: "Mai – juil. 2025", title: "Stagiaire ingénieur systèmes", place: "AIXTRON SE, Aix-la-Chapelle (Allemagne)", domain: "aixtron.com",
      points: ["Modélisation et optimisation du flux de fabrication de wafers",
               "Simulation à événements discrets en Python (SimPy)",
               "Framework évolutif et réutilisable pour l'optimisation des procédés"] },
    { date: "2023 – 2028", title: "Diplôme d'ingénieur en informatique", place: "ENSEEIHT (N7), Toulouse", domain: "enseeiht.fr",
      points: ["Cursus sélectif en 5 ans, mathématiques et informatique avancées"] }
  ],

  mobility: {
    languages: [{ name: "Anglais", level: "C1" }, { name: "Allemand", level: "B1" }, { name: "Français", level: "Langue maternelle" }],
    text: "J'ai déjà effectué un stage en Allemagne, à Aix-la-Chapelle, et je suis ouvert à de nouvelles expériences à l'international. (À personnaliser : destinations visées, durée, domaine.)"
  },
  engagement: [], // ex. { title: "Association X", text: "Mon rôle…" }
  activities: [
    { title: "Formule 1", text: "Passionné de F1 et de sport automobile." },
    { title: "Programmation compétitive", text: "Entraînement régulier sur CodinGame." },
    { title: "Cybersécurité", text: "Parcours de formation sur TryHackMe." }
  ],

  contact: {
    text: "Une question, un stage, un projet ? Écrivez-moi.",
    links: [
      { label: "Gratien.catusse@gmail.com", url: "mailto:Gratien.catusse@gmail.com" },
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
