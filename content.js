/* =====================================================================
   content.js: EVERYTHING on the site comes from this file.
   To add something new, copy an existing block, paste it at the top of
   its list and change the words. Save, refresh. That's it.
   Threads: "health", "energy", "climate" (sets the colour)
   ===================================================================== */

window.SITE = {
  name: "Thrisha Rajkumar",
  linkedin: "https://www.linkedin.com/in/thrisha-rajkumar/",
  github: "https://github.com/thrisharajkumar",
  recommendations: "https://www.linkedin.com/in/thrisha-rajkumar/details/recommendations/",
  photo: "assets/profile.jpg",
  intro: "I build AI that helps people recover, power electronics run cleaner and surplus food find its way to people who need it.",
  now: [
    { label: "Working", text: "Senior Data Scientist, Data & AI at Strolll, building AR rehabilitation for people living with Parkinson's, stroke and MS." },
    { label: "Presenting", text: "FEED at the Tackling Climate Change with ML workshop, NeurIPS 2026 in Sydney, on 11 December." },
    { label: "Writing", text: "A Springer CCIS chapter on personalised stroke rehabilitation, out December 2026." }
  ]
};

/* ---------- THREADS: the three big themes of the work ---------- */
window.THREADS = [
  {
    id: "health", emoji: "🫀", title: "Health",
    line: "AI that clinicians can question and patients can trust.",
    story: "With the NIHR i4i programme I co-designed an AI tablet app that personalises stroke rehabilitation exercises. I ran workshops with 7 people living with stroke and 12 clinicians, and the work became a lead-author HEALTHINF 2026 paper.",
    skills: ["Explainable AI", "Clinical data", "Flutter", "Co-design", "Time series"],
    bridge: "Explaining a model to a physiotherapist taught me that a model has to respect the real world. Power electronics needed exactly that."
  },
  {
    id: "energy", emoji: "⚡", title: "Energy",
    line: "Physics-informed models for cleaner electric vehicles.",
    story: "My Bristol MSc research predicted 13 electromagnetic-interference characteristics in EV power converters, reaching R² 0.956 on seen devices. It led to a lead-author paper at IPEC-ECCE Asia 2026 in Nagasaki (IEEE).",
    skills: ["Physics-informed ML", "TensorFlow", "Optuna", "Multi-output models", "SHAP"],
    bridge: "Making machines waste less energy made me ask a bigger question: what about the food we waste?"
  },
  {
    id: "climate", emoji: "🌱", title: "Climate",
    line: "Sending surplus food to its highest-value home.",
    story: "FEED is a constraint-aware ML system that decides where surplus food should go (people, animals, compost or biogas) to cut methane emissions. I'm the sole author, and it was accepted at the NeurIPS 2026 climate workshop.",
    skills: ["Decision support", "Constraint-aware ML", "Climate impact", "Product thinking"],
    bridge: "Three different fields, one habit: build AI that's useful, explainable and kind."
  }
];

/* ---------- PAPERS (newest first) ---------- */
window.PAPERS = [
  { year: 2026, thread: "climate", venue: "NeurIPS 2026 Workshop: Tackling Climate Change with ML (Sydney)", role: "Sole author",
    title: "FEED: Constraint-Aware Machine Learning for Climate-Impact-Aware Surplus Food Diversion and Methane Mitigation", link: "" },
  { year: 2026, thread: "health", venue: "Springer CCIS (extended version, expected Dec 2026)", role: "Co-author",
    title: "Personalised Stroke Rehabilitation: extended journal version", link: "" },
  { year: 2026, thread: "health", venue: "HEALTHINF 2026 (Marbella, Spain)", role: "Lead author",
    title: "Personalised Stroke Rehabilitation: An AI Pipeline for Exercise Programmes Using a Co-Designed Decision Support Tablet Application", link: "" },
  { year: 2026, thread: "energy", venue: "IPEC-ECCE Asia 2026 (Nagasaki, IEEE)", role: "Lead author",
    title: "Comparison of Machine Learning Techniques for Analysing Wide Bandgap Switching Behaviour and EMI in Half-Bridge Structures", link: "" }
];

/* ---------- MOMENTS: photo wall (newest first) ----------
   photo: put the image in assets/photos/ and write its name here.
   embed: OR paste a LinkedIn post embed link (on LinkedIn: ••• > Embed this post > copy the src="..." link).
   If a photo is missing, a colourful card is shown instead. */
window.MOMENTS = [
  { date: "2026-10", thread: "health", title: "First week at Strolll", text: "Started as Senior Data Scientist, Data & AI.", photo: "assets/photos/strolll.jpg", link: "", embed: "" },
  { date: "2026-09", thread: "climate", title: "FEED accepted at NeurIPS", text: "Sole-author paper at the climate workshop.", photo: "assets/photos/feed-neurips.jpg", link: "", embed: "" },
  { date: "2025-09", thread: "health", title: "NIHR i4i Showcase, London", text: "Co-presented AI for personalised stroke rehab.", photo: "assets/photos/nihr-showcase.jpg", link: "", embed: "" },
  { date: "2025-09", thread: "energy", title: "MSc Data Science, Distinction", text: "University of Bristol.", photo: "assets/photos/graduation.jpg", link: "", embed: "" }
];

/* ---------- JOURNEY (oldest first) ---------- */
window.JOURNEY = [
  { when: "2020–2024", title: "B.Tech Computer Science (Data Science & Analytics)", where: "DIT University", note: "First-Class Honours. Internships in web, Flutter, Salesforce and AI along the way." },
  { when: "2024", title: "Data Science & Analytics Intern", where: "Unilever", note: "15+ initiatives, 40% faster changeovers, 25% lower forecast error." },
  { when: "2024–2025", title: "MSc Data Science, Distinction", where: "University of Bristol", note: "Postgraduate representative, Bristol Data Science Society." },
  { when: "2025", title: "AI/ML Research Support", where: "NIHR i4i, University of Bristol", note: "AI for personalised stroke rehabilitation, across Bristol, Cardiff, Plymouth and UWE." },
  { when: "2026", title: "Three papers, three fields", where: "HEALTHINF, IPEC-ECCE Asia, NeurIPS", note: "Health, energy and climate." },
  { when: "2026", title: "Senior Data Scientist, Data & AI", where: "Strolll", note: "AR rehabilitation for neurological conditions." }
];

/* ---------- AWARDS ---------- */
window.AWARDS = [
  { title: "Bristol PLUS Award", note: "Employability and leadership, 2025" },
  { title: "BILT Highly Commendable", note: "Student Research Festival, 2025" },
  { title: "McKinsey Forward Program", note: "2025" },
  { title: "AWS Academy Graduate", note: "Cloud Foundations" }
];

/* ---------- KIND WORDS ---------- */
window.QUOTES = [
  { who: "James Pope", role: "Senior Lecturer in Data Science, University of Bristol",
    text: "She combined strong technical ability with the communication skills needed for collaboration. Her work on the minimum viable app and ML pipelines has significantly advanced the project's aims." },
  { who: "Dr Praveen Kumar", role: "Associate Professor, University of the West of England",
    text: "At the NIHR Showcase in London, she presented confidently, demonstrating strong technical insight and communication skills." },
  { who: "Telmo de Menezes e Silva Filho", role: "Senior Lecturer, University of Bristol",
    text: "She stood out for her initiative, curiosity, and consistent follow-through, always coming prepared with thoughtful questions and eagerness to take on more research." },
  { who: "Reena Singh", role: "Head VLPC Procurement & Private Label, ex-Unilever",
    text: "She contributed significantly to digitisation projects including automation and process optimisation, bringing innovative ideas to the table." },
  { who: "Namita Dudeja", role: "Supply Chain, Unilever",
    text: "She consistently delivered high-quality work, taking full ownership of her projects." }
];

/* ---------- TOOLKIT ---------- */
window.TOOLKIT = ["Python", "SQL", "R", "PyTorch", "TensorFlow", "scikit-learn", "SHAP / LIME", "Bayesian methods", "AWS", "Docker", "Power BI", "Tableau", "Flutter", "Git"];
