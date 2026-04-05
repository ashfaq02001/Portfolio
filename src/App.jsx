import { useState, useEffect } from "react";
import './index.css';

const data = {
  nav: ["About", "Experience", "Projects", "Skills", "Education", "Contact"],
  skills: {
    left: {
      Languages: ["JavaScript", "TypeScript", "PHP", "Java", "C#"],
      Frontend: ["React", "Next.js", "HTML & CSS", "Tailwind CSS", "Bootstrap"],
      "Backend & DB": ["Firebase", "MySQL", "PostgreSQL", "Node.js"],
      Tools: ["Microsoft Office", "Vercel", "VS Code"],
    },
    right: {
      Practices: ["OOP", "Agile / Scrum", "SDLC"],
      "Version Control": ["Git", "GitHub"],
      "Soft Skills": ["Problem Solving", "Communication", "Teamwork", "Time Management"],
    },
  },
  stats: [
    { num: "1+",  label: "Years of development experience" },
    { num: "2",   label: "Projects completed" },
    { num: "3",   label: "Languages spoken" },
    { num: "BSc", label: "Software Engineering (Reading)" },
  ],
  experience: [
    {
      date: "Sep 2024 – Dec 2025",
      role: "Full-Stack Web Developer Intern",
      company: "Buldosoft Academy · Kandy",
      bullets: [
        "Assisted in developing and maintaining web applications",
        "Participated in SaaS-based application development",
        "Collaborated with team members in an Agile environment",
        "Supported testing, debugging, and feature enhancements",
      ],
    },
    {
      date: "Jan 2024 – Present",
      role: "ICT Tutor (Physical & Online)",
      company: "Self-employed",
      bullets: [
        "Conduct ICT classes for O/L and A/L students",
        "Simplify programming concepts and system workflows",
        "Prepare structured lesson plans and assessments",
        "Strengthen communication and presentation skills",
      ],
    },
  ],
  projects: [
    {
      icon: "📋",
      title: "Attendance Management System",
      desc: "A role-based web application with tracking dashboards, reporting, and responsive UI. Designed database and integrated frontend with backend using Agile practices.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase", "Vercel"],
      link: "https://attendance-management-system-eta-wine.vercel.app/",
      linkLabel: "Live Demo →",
    },
    {
      icon: "🛒",
      title: "Techbeat.lk — E-Commerce Platform",
      desc: "Full-stack e-commerce site with CRUD operations, payment features, and thorough testing & debugging. Designed the complete database schema from scratch.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      link: null,
    },
  ],
  education: [
    { degree: "BSc (Hons) in Software Engineering", school: "Cardiff Metropolitan University · UK", year: "2025–2026" },
    { degree: "Higher National Diploma in Information Technology", school: "Advanced Technological Institute · Kegalle", year: "2022–2024" },
    { degree: "GCE Advanced Level", school: "Baduriya College · Mawanella", year: "2020" },
    { degree: "GCE Ordinary Level", school: "Baduriya College · Mawanella", year: "2017" },
    { degree: "Diploma in English & Certificate in IT", school: "BCAS Kandy Campus", year: "2018" },
  ],
  contact: [
    { icon: "✉",  label: "mohammedashfaq798@gmail.com", href: "mailto:mohammedashfaq798@gmail.com" },
    { icon: "✆",  label: "+94 76 7760113",              href: "tel:+94767760113" },
    { icon: "in", label: "Mohammedh Ashfaq",            href: "https://www.linkedin.com/in/mohammedh-ashfaq-1b16a1227" },
    { icon: "📍", label: "Mawanella, Sri Lanka",         href: null },
  ],
};

function useFadeIn() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const els = document.querySelectorAll(".fade-in:not(.visible)");
      const obs = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
        { threshold: 0.1 }
      );
      els.forEach((el) => obs.observe(el));
      return () => obs.disconnect();
    }, 100);
    return () => clearTimeout(timer);
  }, []);
}

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (!e.target.closest(".mobile-menu") && !e.target.closest(".nav-hamburger")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  useFadeIn();

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* ── NAV ─────────────────────────────────── */}
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <a className="nav-logo" href="#">Portfolio</a>
          <div className="nav-links">
            {data.nav.map((n) => (
              <button key={n} className="nav-link-btn" onClick={() => scrollTo(n)}>
                {n}
              </button>
            ))}
          </div>
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── MOBILE MENU ─────────────────────────── */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        {data.nav.map((n) => (
          <button key={n} className="mobile-link-btn" onClick={() => scrollTo(n)}>
            {n}
          </button>
        ))}
      </div>

      {/* ── HERO ────────────────────────────────── */}
      <div className="container">
        <section className="hero">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-eyebrow">Software Engineer · Sri Lanka</div>
              <h1>Mohammedh<br /><em>Ashfaq</em></h1>
              <p className="hero-sub">
                Full-stack web developer building real-world applications with a strong
                foundation in Java, OOP, and modern web technologies.
              </p>
              <div className="hero-tags">
                {["React", "Next.js", "TypeScript", "PHP", "MySQL", "Firebase", "Agile"].map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
              <div className="hero-cta">
                <button className="btn-primary" onClick={() => scrollTo("Projects")}>View Projects</button>
                <button className="btn-ghost"   onClick={() => scrollTo("Contact")}>Get in Touch</button>
              </div>
            </div>
            <div className="hero-image-wrap">
              <img
                src="/Portfolio/ashfaq.png"
                alt="Mohammedh Ashfaq — Software Engineer"
                className="hero-image"
                loading="eager"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="divider" />

      {/* ── ABOUT ───────────────────────────────── */}
      <div className="container" id="about">
        <section>
          <div className="section-label">About</div>
          <div className="about-grid fade-in">
            <div className="about-text">
              <h2>Building things<br />that matter</h2>
              <p style={{ marginTop: 16 }}>
                Motivated Software Engineering undergraduate at Cardiff Metropolitan University,
                with hands-on experience across full-stack web development and a passion for
                crafting clean, scalable solutions.
              </p>
              <p>
                Experienced in teaching ICT concepts to O/L and A/L students — which sharpened
                my ability to break down complex ideas clearly. I thrive in Agile teams and love
                turning ideas into working software.
              </p>
              <div className="langs" style={{ marginTop: 20 }}>
                {["English", "Tamil", "Sinhala"].map((l) => (
                  <span className="lang-badge" key={l}>{l}</span>
                ))}
              </div>
            </div>
            <div className="stats-grid">
              {data.stats.map((s, i) => (
                <div className="stat-card" key={i}>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="divider" />

      {/* ── EXPERIENCE ──────────────────────────── */}
      <div className="container" id="experience">
        <section>
          <div className="section-label">Experience</div>
          <div className="exp-list">
            {data.experience.map((e) => (
              <div className="exp-item fade-in" key={e.role}>
                <div className="exp-date">{e.date}</div>
                <div>
                  <div className="exp-role">{e.role}</div>
                  <div className="exp-company">{e.company}</div>
                  <ul className="exp-bullets">
                    {e.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="divider" />

      {/* ── PROJECTS ────────────────────────────── */}
      <div className="container" id="projects">
        <section>
          <div className="section-label">Projects</div>
          <h2>Things I've built</h2>
          <div className="projects-grid">
            {data.projects.map((p) => (
              <div className="project-card fade-in" key={p.title}>
                <div className="project-icon" aria-hidden="true">{p.icon}</div>
                <div className="project-title">{p.title}</div>
                <div className="project-desc">{p.desc}</div>
                <div className="project-tech">
                  {p.tech.map((t) => <span className="tech-chip" key={t}>{t}</span>)}
                </div>
                {p.link && (
                  <a
                    className="project-link"
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {p.linkLabel}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="divider" />

      {/* ── SKILLS ──────────────────────────────── */}
      <div className="container" id="skills">
        <section>
          <div className="section-label">Skills</div>
          <div className="skills-inner fade-in">
            <div className="skills-col">
              {Object.entries(data.skills.left).map(([group, items]) => (
                <div className="skill-group" key={group}>
                  <div className="skill-group-label">{group}</div>
                  <div className="skill-chips">
                    {items.map((s) => <span className="skill-chip" key={s}>{s}</span>)}
                  </div>
                </div>
              ))}
            </div>
            <div className="skills-col">
              {Object.entries(data.skills.right).map(([group, items]) => (
                <div className="skill-group" key={group}>
                  <div className="skill-group-label">{group}</div>
                  <div className="skill-chips">
                    {items.map((s) => <span className="skill-chip" key={s}>{s}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="divider" />

      {/* ── EDUCATION ───────────────────────────── */}
      <div className="container" id="education">
        <section>
          <div className="section-label">Education</div>
          <div className="edu-list">
            {data.education.map((e) => (
              <div className="edu-item fade-in" key={e.degree}>
                <div>
                  <div className="edu-degree">{e.degree}</div>
                  <div className="edu-school">{e.school}</div>
                </div>
                <div className="edu-year">{e.year}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="divider" />

      {/* ── CONTACT ─────────────────────────────── */}
      <div className="container" id="contact">
        <section>
          <div className="section-label">Contact</div>
          <div className="contact-inner fade-in">
            <div className="contact-text">
              <h2>Let's work<br />together</h2>
              <p style={{ marginTop: 16 }}>
                I'm currently open to internships, freelance projects, and full-time
                opportunities. Feel free to reach out — I'd love to connect and discuss
                how I can contribute.
              </p>
              <a
                className="btn-primary"
                href="/Portfolio/Mohammedh-Ashfaq-CV.pdf"
                download
                style={{ marginTop: 24, display: "inline-block" }}
              >
                Download CV
              </a>
            </div>
            <div className="contact-links">
              {data.contact.map((c) =>
                c.href ? (
                  <a
                    className="contact-link"
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    key={c.label}
                  >
                    <div className="contact-link-icon" aria-hidden="true">{c.icon}</div>
                    <span>{c.label}</span>
                  </a>
                ) : (
                  <div className="contact-link no-link" key={c.label}>
                    <div className="contact-link-icon" aria-hidden="true">{c.icon}</div>
                    <span>{c.label}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </div>

      {/* ── FOOTER ──────────────────────────────── */}
      <footer>
        <p>Mohammedh Ashfaq · © All Rights Reserved · {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}