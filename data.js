/* =====================================================================
   YOUR WEBSITE CONTENT — this is the ONLY file you need to edit.
   ---------------------------------------------------------------------
   • Text goes between quotes: "like this"
   • Each item in a list ends with a comma:  { ... },
   • Leave a link as "" (empty) and it is hidden on the site automatically.
   • Empty lists (publications, talks, awards) keep their section hidden
     until you add your first item.
   • After editing, upload this file to GitHub; the site updates in ~1 minute.
   ===================================================================== */

window.SITE = {

  heroArt: "ecg",   // "ecg" = heartbeat monitor animation, "network" = AI network animation

  /* ---------- 1. PROFILE ---------- */
  profile: {
    name: "Dr. Najmin Shultana",
    shortName: "Dr. Najmin Shultana",
    initials: "NS",
    title: "Medical Doctor (MBBS) · BMDC registered",
    affiliation: "",
    location: "Kampar, Perak, Malaysia",
    email: "drnajminmily@gmail.com",
    photo: "assets/img/profile.jpg",      // put your photo here with this exact name (square works best)
    cv: "assets/cv.pdf",                  // replace this file to update your CV
    tagline: "A medical doctor with clinical training across seven specialties, now seeking an MS or PhD in medical research, with a focus on Biomedical, Public health, maternal and child health.",
    about: [
      "I am a medical doctor (MBBS, 2024) from Chattogram Maa-O-Shishu Hospital Medical College, Bangladesh, and a registered member of the Bangladesh Medical & Dental Council (BMDC).",
      "During a one-year internship I rotated through Medicine, Surgery, Obstetrics & Gynaecology, Paediatrics, Orthopaedics, Emergency Medicine and Community Medicine. I then worked as a Medical Officer at Mother & Child Care Hospital, Halishahar, and Al Hayat Hospital, Chittagong.",
      "Caring for mothers, newborns and children every day showed me how much better outcomes depend on good evidence. I now want to build research skills through an MS or PhD, so I can study the clinical and public health questions I met on the wards."
    ],
    seeking: {
      show: true,
      text: "Open to MS and PhD opportunities in medical research"
    }
  },

  /* ---------- 2. ACADEMIC & SOCIAL PROFILES ----------
     Paste your full profile link inside the quotes. Empty ones stay hidden. */
  links: {
    orcid:           "",   // e.g. "https://orcid.org/0000-0000-0000-0000"
    googleScholar:   "",
    researchGate:    "",
    scopus:          "",
    webOfScience:    "",
    semanticScholar: "",
    dblp:            "",
    arxiv:           "",
    github:          "",
    kaggle:          "",
    linkedin:        "",   // e.g. "https://www.linkedin.com/in/your-name"
    twitter:         "",
    youtube:         "",
    medium:          ""
  },

  /* ---------- 3. QUICK FACTS ---------- */
  stats: [
    { value: "7",    label: "Clinical rotations completed" },
    { value: "12",   label: "Months of internship" },
    { value: "3",    label: "Hospital positions" },
    { value: "BMDC", label: "Registered medical practitioner" }
  ],

  /* ---------- Rename sections (optional) ---------- */
  labels: {
    projects: { nav: "Clinical", kicker: "Clinical", title: "Clinical experience" },
    skills:   { title: "Skills, training & membership" },
    contact:  { title: "Get in touch" },
    experience: { column: "Clinical positions" }
  },

  /* ---------- 4. RESEARCH INTERESTS ---------- */
  interests: [
    { area: "Maternal & Child Health", title: "Safer pregnancy and birth",
      text: "Antenatal care, safe delivery and postnatal outcomes, drawing on my work in obstetrics and at a mother and child hospital." },
    { area: "Paediatrics", title: "Healthy growth in early life",
      text: "Neonatal care, child growth and development, and vaccination programmes." },
    { area: "Public Health", title: "Community and preventive care",
      text: "Health services at the community level, informed by my placement at Anwara Upazila Health Complex." },
    { area: "Clinical Research", title: "Evidence for everyday practice",
      text: "Clinical audits, epidemiology and evidence-based medicine that improve care for common conditions." }
  ],

  /* ---------- 5. NEWS (newest first) ---------- */
  news: [
    { date: "Sep 2025", text: "Completed one-year internship at Chattogram Maa-O-Shishu Hospital Medical College." },
    { date: "2024", text: "Graduated MBBS from Chattogram Maa-O-Shishu Hospital Medical College." },
    { date: "2024", text: "Registered with the Bangladesh Medical & Dental Council (BMDC)." }
  ],

  /* ---------- 6. PUBLICATIONS (section appears once you add one) ----------
     type:   "journal" | "conference" | "preprint" | "chapter" | "poster" | "thesis"
     status: "published" | "accepted" | "review" | "prep"
     Put ** around your own name to make it bold, e.g. "**N. Shultana**, A. Author"

     COPY THIS BLOCK INSIDE THE [ ] TO ADD A PAPER, CASE REPORT OR POSTER:
     {
       title: "", authors: "**N. Shultana**, ", venue: "",
       year: 2026, type: "journal", status: "prep", selected: true,
       doi: "", pdf: "", code: "", slides: "", abstract: ""
     },
  */
  publications: [],

  /* ---------- 7. CLINICAL EXPERIENCE (shown as cards) ---------- */
  projects: [
    { title: "Obstetrics & Gynaecology", year: "Internship rotation", status: "completed", stamp: "Rotation", featured: true,
      summary: "Performed and observed normal vaginal deliveries, assisted in caesarean sections, provided antenatal and postnatal care, and managed common gynaecological conditions.",
      tags: ["Maternal Health"], image: "", code: "", demo: "", paper: "" },
    { title: "Paediatrics", year: "Internship rotation", status: "completed", stamp: "Rotation", featured: true,
      summary: "Assessed paediatric patients, monitored growth and development, assisted in neonatal care and vaccination programmes, and managed common childhood illnesses.",
      tags: ["Child Health"], image: "", code: "", demo: "", paper: "" },
    { title: "Community Medicine", year: "Internship rotation", status: "completed", stamp: "Rotation", featured: true,
      summary: "Took part in community health programmes at Anwara Upazila Health Complex, Chittagong.",
      tags: ["Public Health"], image: "", code: "", demo: "", paper: "" },
    { title: "Medicine", year: "Internship rotation", status: "completed", stamp: "Rotation",
      summary: "Managed patients with common medical conditions, took histories and performed examinations, joined ward rounds, and took part in diagnosis and initial management.",
      tags: ["Clinical"], image: "", code: "", demo: "", paper: "" },
    { title: "Surgery", year: "Internship rotation", status: "completed", stamp: "Rotation",
      summary: "Pre- and post-operative care, minor surgical procedures, wound management, suturing and assisting in the operating theatre.",
      tags: ["Clinical"], image: "", code: "", demo: "", paper: "" },
    { title: "Emergency Medicine", year: "Internship rotation", status: "completed", stamp: "Rotation",
      summary: "Initial assessment and stabilisation of emergency cases, and assisting in resuscitation.",
      tags: ["Clinical"], image: "", code: "", demo: "", paper: "" },
    { title: "Orthopaedics", year: "Internship rotation", status: "completed", stamp: "Rotation",
      summary: "Assisted in fracture management, plaster application, trauma care and post-operative rehabilitation.",
      tags: ["Clinical"], image: "", code: "", demo: "", paper: "" }
    /* Later, add research projects here too, e.g.
    ,{ title: "Clinical audit of antenatal visits", year: "2026", status: "ongoing", stamp: "Research",
       summary: "", tags: ["Research"], image: "", code: "", demo: "", paper: "" } */
  ],

  /* ---------- 8. EXPERIENCE ---------- */
  experience: [
    { when: "", title: "Medical Officer", place: "Mother & Child Care Hospital, Halishahar, Chittagong", text: "" },
    { when: "", title: "Medical Officer (Replacement)", place: "Al Hayat Hospital, Chittagong", text: "" },
    { when: "Sep 2024 – Sep 2025", title: "Intern Doctor", place: "Chattogram Maa-O-Shishu Hospital Medical College, Chittagong",
      text: "Rotations in Medicine, Surgery, Obstetrics & Gynaecology, Paediatrics, Orthopaedics, Emergency and Community Medicine." }
  ],

  /* ---------- 9. EDUCATION ---------- */
  education: [
    { when: "2024", title: "Bachelor of Medicine and Bachelor of Surgery (MBBS)", place: "Chattogram Maa-O-Shishu Hospital Medical College, Bangladesh", text: "" },
    { when: "2018", title: "Higher Secondary Certificate (HSC)", place: "Hazera Taju Degree College, Chittagong", text: "GPA 4.58 / 5.00" },
    { when: "2016", title: "Secondary School Certificate (SSC)", place: "Barumchara Shahid Basharuzzaman High School, Chittagong", text: "GPA 5.00 / 5.00" }
  ],
  coursework: [],

  /* ---------- 10. TALKS, AWARDS, REFERENCES ---------- */
  talks: [],
  awards: [],
  references: [
    { when: "", title: "Dr. Monira Jamal", place: "Assistant Professor, Dept. of Gynaecology & Obstetrics", text: "Chattogram Maa-O-Shishu Hospital Medical College" }
  ],

  /* ---------- 11. SKILLS ---------- */
  skills: {
    "Clinical skills": ["History taking & examination", "Diagnosis & initial management", "Basic Life Support", "Lab & imaging interpretation", "IV cannulation", "Catheterisation", "Suturing & minor procedures", "OT & emergency assistance"],
    "Research & digital": ["PubMed", "Medscape", "Electronic Medical Records", "MS Excel", "MS Word", "PowerPoint"],
    "Interpersonal": ["Communication", "Teamwork", "Patient-centred care", "Working under pressure", "Eager to learn"]
  },

  /* ---------- 12. CERTIFICATES & TRAINING ---------- */
  certificates: [
    { title: "Basic Life Support (BLS) / CPR Training", by: "", link: "" },
    { title: "Infection Prevention and Control Training", by: "", link: "" },
    { title: "Medical Ethics & Professionalism Workshop", by: "", link: "" }
  ],

  /* ---------- 13. MEMBERSHIP & SERVICE ---------- */
  activities: [
    "Registered member, Bangladesh Medical & Dental Council (BMDC), Reg. No. A-144987",
    "Community health programmes, Anwara Upazila Health Complex, Chittagong"
  ],

  /* ---------- 14. CONTACT FORM (optional, free at https://formspree.io) ---------- */
  contactForm: "",

  footerNote: "Last updated: October 2026"
};
