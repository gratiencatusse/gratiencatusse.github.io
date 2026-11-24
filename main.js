// =====================================================
// 1. TES DONNÉES (FR / EN) : modifie uniquement cette partie
//    Une section vide est masquée.
// =====================================================
const DATA = {
  name: "Gratien Catusse",
  linkedin: "", // <<< colle ici ton lien LinkedIn (ex: https://www.linkedin.com/in/ton-profil)
  email: "gratien.catusse@gmail.com",
  github: "https://github.com/gratiencatusse",

  tagline: {
    fr: "Étudiant ingénieur en informatique à l'ENSEEIHT, passionné par les réseaux et la cybersécurité.",
    en: "Computer science engineering student at ENSEEIHT, passionate about networks and cybersecurity." },
  chips: { fr: ["ENSEEIHT (N7), Toulouse", "Parcours ASR : Architecture Système et Réseau", "Promo 2028"],
           en: ["ENSEEIHT (N7), Toulouse", "ASR track: System & Network Architecture", "Class of 2028"] },

  // >>> CV : mets ici les liens (PDF dans assets/ ou lien externe) <<<
  cv: [
    { label: { fr: "CV en français", en: "CV in French" }, url: "assets/CV_Gratien_Catusse_FR.pdf" },
    { label: { fr: "CV en anglais", en: "CV in English" }, url: "assets/CV_Gratien_Catusse_EN.pdf" }
  ],

  skills: [
    { title: { fr: "Langages", en: "Languages" }, items: [{ n: "Python", i: "python" }, { n: "C", i: "c" }, { n: "Java", i: "java" }, { n: "Matlab", i: "matlab" }] },
    { title: { fr: "Systèmes & réseaux", en: "Systems & networks" }, items: [{ n: "Linux", i: "linux" }, { n: "Windows", i: "windows8" }, { n: "iptables" }, { n: "Wireshark" }, { n: "RIP" }] },
    { title: "Soft skills", items: [{ n: { fr: "Esprit critique", en: "Critical thinking" } }, { n: { fr: "Résolution de problèmes", en: "Problem-solving" } }, { n: { fr: "Collaboration", en: "Collaboration" } }] }
  ],
  tagLabels: { sys: { fr: "Systèmes", en: "Systems" }, net: { fr: "Réseaux & cyber", en: "Networks & cyber" }, sim: "Simulation" },
  projects: [
    { title: { fr: "Minishell : interpréteur Unix en C", en: "Minishell: Unix shell in C" }, badge: { fr: "Projet académique · 2026", en: "Academic project · 2026" }, tags: ["sys"], image: "",
      desc: { fr: "Interpréteur de commandes en C reproduisant les fonctions clés de bash : processus (fork, execvp, waitpid), signaux (SIGINT, SIGTSTP, SIGCHLD), redirections et pipes. Résultat : un outil fonctionnel, sans fuite mémoire, avec tâches de fond robustes.",
              en: "Shell interpreter in C reproducing core bash features: processes (fork, execvp, waitpid), signals (SIGINT, SIGTSTP, SIGCHLD), redirections and pipes. Result: a functional, leak-free tool with robust background tasks." },
      stack: ["C", "POSIX", "Linux"], links: [] },
    { title: { fr: "Architecture et sécurité d'un FAI simulé", en: "Simulated ISP architecture & security" }, badge: { fr: "Projet académique · 2026", en: "Academic project · 2026" }, tags: ["net"], image: "",
      desc: { fr: "Conception et sécurisation d'une infrastructure de FAI : DMZ, filtrage stateful avec iptables, protection des services Web et DNS, analyse du trafic avec Wireshark, routage dynamique RIP. Résultat : une architecture multi-zones résiliente avec isolation des clients.",
              en: "Design and securing of an ISP infrastructure: DMZ, stateful filtering with iptables, Web and DNS protection, traffic analysis with Wireshark, RIP dynamic routing. Result: a resilient multi-zone architecture with client isolation." },
      stack: ["iptables", "Wireshark", "RIP", "Linux"], links: [] },
    { title: { fr: "Simulation du flux de fabrication de wafers", en: "Wafer fabrication workflow simulation" }, badge: { fr: "Stage AIXTRON · 2025", en: "AIXTRON internship · 2025" }, tags: ["sim"], image: "",
      desc: { fr: "Diagramme de Gantt en Python pour visualiser les dépendances, puis simulation à événements discrets (SimPy) de flux parallèles, optimisée pour réduire le temps d'exécution. Résultat : meilleur ordonnancement et cadre réutilisable.",
              en: "Python-based Gantt chart to visualise dependencies, then a SimPy discrete-event simulation of parallel workflows, optimised to cut runtime. Result: better scheduling and a reusable framework." },
      stack: ["Python", "SimPy"], links: [] }
  ],

  experiences: [
    { date: { fr: "Juin – juil. 2026", en: "Jun – Jul 2026" }, title: { fr: "Stagiaire cybersécurité & réseaux", en: "Cybersecurity & network intern" }, place: "ABERIA, Toulouse", domain: "aberia.fr",
      points: { fr: ["Audit, sécurisation et optimisation d'infrastructures réseau managées et d'architectures télécoms", "Analyse des menaces sur la commutation et le routage LAN", "Règles de pare-feu et segmentation réseau"],
                en: ["Audit, securing and optimisation of managed network infrastructures and telecom architectures", "Threat analysis on LAN switching and routing", "Firewall rules and network segmentation"] } },
    { date: { fr: "Mai – juil. 2025", en: "May – Jul 2025" }, title: { fr: "Stagiaire ingénieur systèmes", en: "System engineer intern" }, place: { fr: "AIXTRON SE, Allemagne", en: "AIXTRON SE, Germany" }, domain: "aixtron.com",
      points: { fr: ["Modélisation et optimisation du flux de fabrication de wafers", "Simulation à événements discrets (SimPy)"], en: ["Modelling and optimisation of the wafer fabrication workflow", "Discrete-event simulation (SimPy)"] } },
    { date: "2025 – 2028", title: { fr: "Diplôme d'ingénieur en science du numérique", en: "Engineering degree in digital science" }, place: "ENSEEIHT (N7), Toulouse", domain: "enseeiht.fr",
      points: { fr: ["Programme sélectif en maths et informatique", "Parcours ASR (Architecture Système et Réseau)"], en: ["Selective programme in maths and computer science", "ASR track (System & Network Architecture)"] } },
    { date: "2023 – 2025", title: { fr: "Classe préparatoire T²", en: "Preparatory classes (prépa T²)" }, place: "", domain: "",
      points: { fr: ["Transition Écologique et Sociale pendant deux ans"], en: ["Two years of Ecological & Social Transition studies"] } }
  ],

  mobility: {
    languages: [{ n: { fr: "Anglais", en: "English" }, l: "C1" }, { n: { fr: "Allemand", en: "German" }, l: "B1" }, { n: { fr: "Français", en: "French" }, l: { fr: "Langue maternelle", en: "Native" } }],
    wishes: [
      { u: "FHNW, School of Engineering", c: { fr: "Suisse", en: "Switzerland" }, p: "MSE Information & Cyber Security",
        t: { fr: "Mon premier choix : innovation, sécurité des systèmes d'information et prolongement direct de mon parcours ASR. Modules visés : Advanced Network Security, Cyber Security, Cyber Security Operations, Security of Industrial OT, Cryptography and Coding Theory.",
             en: "My first choice: innovation, information-system security and a direct continuation of my ASR track. Target modules: Advanced Network Security, Cyber Security, Cyber Security Operations, Security of Industrial OT, Cryptography and Coding Theory." } },
      { u: "Universität Konstanz", c: { fr: "Allemagne", en: "Germany" }, p: "Computer and Information Science",
        t: { fr: "Cryptographie avancée et vérification formelle de logiciels, dans un environnement germanophone tout près de la frontière suisse.",
             en: "Advanced cryptography and formal verification of software, in a German-speaking environment right next to the Swiss border." } },
      { u: "Alpen-Adria-Universität Klagenfurt", c: { fr: "Autriche", en: "Austria" }, p: "Artificial Intelligence and Cybersecurity",
        t: { fr: "Un pays germanophone que je ne connais pas encore, avec un master mêlant IA et cybersécurité, 100 % en anglais.",
             en: "A German-speaking country I don't know yet, with a master's combining AI and cybersecurity, taught 100% in English." } }
    ],
    project: { fr: "Je veux me spécialiser en cybersécurité (ingénieur cyber, architecte sécurité réseau, consultant), puis viser à terme un poste de RSSI ou de chef de projet cyber. Je souhaite faire mon PFE et débuter ma carrière dans la région de Zurich : une mobilité germanophone me permettra de perfectionner mon allemand et de m'insérer dans le tissu local.",
               en: "I want to specialise in cybersecurity (security engineer, network security architect, consultant), and eventually become a CISO or cyber project lead. I plan to do my final-year internship and start my career in the Zurich area: a German-speaking exchange will let me improve my German and build local connections." }
  },

  engagement: [
    { title: { fr: "La Fresque du Climat & Objectif 2 Tonnes", en: "La Fresque du Climat & Objectif 2 Tonnes" },
      text: { fr: "J'ai participé à ces ateliers, qui m'ont permis de mieux comprendre les enjeux environnementaux et les objectifs de durabilité.",
              en: "I took part in these workshops, which helped me better understand environmental challenges and sustainability goals." } },
    { title: { fr: "Prépa T² : Transition Écologique et Sociale", en: "Prépa T²: Ecological & Social Transition" },
      text: { fr: "Deux ans d'études en Transition Écologique et Sociale, d'où un vif intérêt pour le développement durable et ses applications concrètes.",
              en: "Two years studying Ecological and Social Transition, which gave me a strong interest in sustainable development and its practical applications." } }
  ],

  sports: [
    { title: { fr: "Sport automobile", en: "Motorsport" }, text: { fr: "Karting régulier et Formule Renault en 2024. F1 et automobile sont mes grandes passions.", en: "Regular kart racing and Formula Renault in 2024. F1 and cars are big passions." } },
    { title: { fr: "Escalade & alpinisme", en: "Climbing & mountaineering" }, text: { fr: "Un défi physique et mental dans des environnements naturels.", en: "A physical and mental challenge in natural environments." } },
    { title: { fr: "Échecs", en: "Chess" }, text: { fr: "Pour la stratégie, la concentration et l'esprit d'analyse.", en: "For strategy, focus and analytical thinking." } },
    { title: { fr: "Cyber & algorithmique", en: "Cyber & algorithms" }, text: { fr: "Programmation compétitive sur CodinGame, parcours TryHackMe.", en: "Competitive programming on CodinGame, TryHackMe learning paths." } }
  ]
};

// Textes de l'interface
const UI = {
  fr: { home: "Accueil", projects: "Projets", cv: "CV", mobility: "Mobilité", engagement: "Environnement", sports: "Sports & loisirs", contact: "Contact",
        all: "Tous", skills: "Compétences", exp: "Parcours & expériences", langs: "Langues", pro: "Projet professionnel", wishes: "Mes vœux",
        see: "Voir mes projets", write: "Me contacter", cvText: "Téléchargez mon CV :", contactText: "Une question, un stage, un projet ? Écrivez-moi." },
  en: { home: "Home", projects: "Projects", cv: "CV", mobility: "Mobility", engagement: "Environment", sports: "Sports & hobbies", contact: "Contact",
        all: "All", skills: "Skills", exp: "Background & experience", langs: "Languages", pro: "Career plan", wishes: "My choices",
        see: "See my projects", write: "Get in touch", cvText: "Download my CV:", contactText: "A question, an internship, a project? Write to me." }
};

// =====================================================
// 2. CODE (pas besoin de modifier)
// =====================================================
const $ = s => document.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
let lang = "fr", tag = "all";
try { lang = localStorage.getItem("lang") || ((navigator.language || "fr").slice(0, 2) === "en" ? "en" : "fr"); } catch (e) {}
const t = v => (v && typeof v === "object" && "fr" in v) ? (v[lang] ?? v.fr) : v;
const chips = a => (t(a) || []).map(x => `<span class="chip">${esc(t(x))}</span>`).join("");
const card = (inner, cls = "") => `<div class="card reveal ${cls}">${inner}</div>`;

function render() {
  const u = UI[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll(".lang button").forEach(b => b.classList.toggle("on", b.dataset.l === lang));
  const li = $("#linkedin"); if (DATA.linkedin) { li.href = DATA.linkedin; li.hidden = false; }

  const tagIds = [...new Set(DATA.projects.flatMap(p => p.tags))];
  const sections = {
    home: `<section id="home" class="hero"><div><h1>${esc(DATA.name)}</h1><p>${esc(t(DATA.tagline))}</p><p class="chips">${chips(DATA.chips)}</p>
      <a class="btn" href="#projects">${u.see}</a><a class="btn ghost" href="#contact">${u.write}</a></div>
      <img alt="${esc(DATA.name)}" src="assets/photo.jpg" onerror="this.style.display='none'"></section>`,

    projects: `<section id="projects"><h2>${u.projects}</h2>
      <h3>${u.skills}</h3><div class="grid">${DATA.skills.map(g => card(`<h4>${esc(t(g.title))}</h4><ul class="skills-list">${g.items.map(i => `<li class="skill">${i.i
        ? `<img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${i.i}/${i.i}-original.svg" onerror="this.remove()">` : ""}${esc(t(i.n))}</li>`).join("")}</ul>`)).join("")}</div>
      <div class="filters" style="margin-top:2rem">${["all", ...tagIds].map(k => `<button data-tag="${k}" class="${k === tag ? "on" : ""}">${k === "all" ? u.all : esc(t(DATA.tagLabels[k]))}</button>`).join("")}</div>
      <div class="grid">${DATA.projects.filter(p => tag === "all" || p.tags.includes(tag)).map(p => card(
        `${p.image ? `<img class="thumb" alt="" src="${esc(p.image)}" onerror="this.remove()">` : ""}<span class="badge">${esc(t(p.badge))}</span><h4>${esc(t(p.title))}</h4><p>${esc(t(p.desc))}</p>
         <div class="chips">${chips(p.stack)}</div><p>${p.links.map(l => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(t(l.label))}</a>`).join("")}</p>`)).join("")}</div></section>`,

    cv: `<section id="cv"><h2>${u.cv}</h2><p>${u.cvText}</p><div>${DATA.cv.map((c, i) => `<a class="btn ${i ? "ghost" : ""}" href="${esc(c.url)}" target="_blank" rel="noopener">${esc(t(c.label))}</a>`).join("")}</div>
      <h3>${u.exp}</h3><div class="timeline">${DATA.experiences.map(x => card(`<span class="date">${esc(t(x.date))}</span><div class="company">${x.domain
        ? `<img alt="" src="https://www.google.com/s2/favicons?domain=${x.domain}&sz=64" onerror="this.remove()">` : ""}<h4>${esc(t(x.title))}</h4></div><p>${esc(t(x.place))}</p><ul>${t(x.points).map(p => `<li>${esc(p)}</li>`).join("")}</ul>`)).join("")}</div></section>`,

    mobility: `<section id="mobility"><h2>${u.mobility}</h2>
      <h3>${u.langs}</h3><div class="grid">${DATA.mobility.languages.map(l => card(`<h4>${esc(t(l.n))}</h4><p>${esc(t(l.l))}</p>`)).join("")}</div>
      <h3>${u.wishes}</h3><div class="grid">${DATA.mobility.wishes.map((w, i) => card(`<span class="rank">#${i + 1} · ${esc(t(w.c))}</span><h4>${esc(w.u)}</h4><p><b>${esc(w.p)}</b></p><p>${esc(t(w.t))}</p>`)).join("")}</div>
      <h3>${u.pro}</h3>${card(`<p class="pro">${esc(t(DATA.mobility.project))}</p>`, "wide")}</section>`,

    engagement: `<section id="engagement"><h2>${u.engagement}</h2><div class="grid">${DATA.engagement.map(e => card(`<h4>${esc(t(e.title))}</h4><p>${esc(t(e.text))}</p>`)).join("")}</div></section>`,
    sports: `<section id="sports"><h2>${u.sports}</h2><div class="grid">${DATA.sports.map(e => card(`<h4>${esc(t(e.title))}</h4><p>${esc(t(e.text))}</p>`)).join("")}</div></section>`,
    contact: `<section id="contact"><h2>${u.contact}</h2><p>${u.contactText}</p><div class="chips">
      <a class="btn" href="mailto:${DATA.email}">${esc(DATA.email)}</a>${DATA.github ? `<a class="btn ghost" href="${DATA.github}" target="_blank" rel="noopener">GitHub</a>` : ""}${DATA.linkedin ? `<a class="btn ghost" href="${DATA.linkedin}" target="_blank" rel="noopener">LinkedIn</a>` : ""}</div></section>`
  };
  const empty = { engagement: !DATA.engagement.length, sports: !DATA.sports.length };
  const ids = Object.keys(sections).filter(k => !empty[k]);
  $("#app").innerHTML = ids.map(k => sections[k]).join("");
  $("#menu").innerHTML = ids.map(k => `<a href="#${k}">${u[k]}</a>`).join("");
  $("#footer").textContent = `© ${new Date().getFullYear()} ${DATA.name}`;

  document.querySelectorAll(".filters button").forEach(b => b.onclick = () => { tag = b.dataset.tag; const y = scrollY; render(); scrollTo(0, y); });
  const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add("in")), { threshold: .1 });
  document.querySelectorAll(".reveal").forEach(e => io.observe(e));
  const spy = new IntersectionObserver(es => es.forEach(e => e.isIntersecting &&
    document.querySelectorAll("#menu a").forEach(a => a.classList.toggle("active", a.hash === "#" + e.target.id))), { rootMargin: "-50% 0px -50% 0px" });
  ids.forEach(k => spy.observe(document.getElementById(k)));
}

document.querySelectorAll(".lang button").forEach(b => b.onclick = () => { lang = b.dataset.l; try { localStorage.setItem("lang", lang); } catch (e) {} render(); });
$("#menu-btn").onclick = () => $("#menu").classList.toggle("open");
$("#menu").onclick = () => $("#menu").classList.remove("open");
try { const th = localStorage.getItem("theme"); if (th) document.documentElement.dataset.theme = th; } catch (e) {}
$("#theme-btn").onclick = () => {
  const th = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = th;
  try { localStorage.setItem("theme", th); } catch (e) {}
};
render();
