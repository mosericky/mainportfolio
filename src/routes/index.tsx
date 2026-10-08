import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ChevronDown,
  Download,
  Facebook,
  GraduationCap,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import {
  siAndroidstudio,
  siCss,
  siCursor,
  siDjango,
  siDocker,
  siExpress,
  siGit,
  siGithub,
  siGo,
  siHtml5,
  siJavascript,
  siKotlin,
  siMongodb,
  siMysql,
  siNodedotjs,
  siNpm,
  siPhp,
  siPostgresql,
  siPostman,
  siPython,
  siReact,
  siSpringboot,
  siSqlite,
  siTypescript,
  siVite,
  type SimpleIcon,
} from "simple-icons";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ContactForm } from "@/components/ContactForm";

import "./portfolio.css";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ateka Moses Ombati — Tech Portfolio" },
      {
        name: "description",
        content:
          "Tech portfolio for Ateka Moses Ombati, an Information Science student and software developer in Nairobi, Kenya.",
      },
      { property: "og:title", content: "Ateka Moses Ombati — Tech Portfolio" },
      {
        property: "og:description",
        content:
          "Explore Ateka Moses Ombati's software projects, technical skills, IT experience, and information systems background.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Skill = {
  name: string;
  icon: SimpleIcon;
};

// Custom glyphs for skills not covered by the icon library.
const mpesaIcon = {
  title: "M-Pesa",
  slug: "mpesa",
  path: "M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 3v12h10V5H7zm5 13.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",
} as SimpleIcon;
const emailjsIcon = {
  title: "EmailJS",
  slug: "emailjs",
  path: "M2 5h20v14H2V5zm2 2v.5l8 5 8-5V7H4zm16 2.8-8 5-8-5V17h16V9.8z",
} as SimpleIcon;

const firstSkillRow: Skill[] = [
  { name: "React", icon: siReact },
  { name: "JavaScript", icon: siJavascript },
  { name: "TypeScript", icon: siTypescript },
  { name: "Python", icon: siPython },
  { name: "PHP", icon: siPhp },
  { name: "Kotlin", icon: siKotlin },
  { name: "HTML5", icon: siHtml5 },
  { name: "CSS3", icon: siCss },
  { name: "Go", icon: siGo },
  { name: "Node.js", icon: siNodedotjs },
];

const secondSkillRow: Skill[] = [
  { name: "Express", icon: siExpress },
  { name: "Django", icon: siDjango },
  { name: "Spring Boot", icon: siSpringboot },
  { name: "PostgreSQL", icon: siPostgresql },
  { name: "MySQL", icon: siMysql },
  { name: "MongoDB", icon: siMongodb },
  { name: "SQLite", icon: siSqlite },
  { name: "Android Studio", icon: siAndroidstudio },
  { name: "Git", icon: siGit },
  { name: "GitHub", icon: siGithub },
  { name: "Docker", icon: siDocker },
  { name: "Vite", icon: siVite },
  { name: "npm", icon: siNpm },
  { name: "Postman", icon: siPostman },
  { name: "Cursor", icon: siCursor },
  { name: "M-Pesa (Lipana.dev)", icon: mpesaIcon },
  { name: "EmailJS", icon: emailjsIcon },
];

const projects = [
  {
    title: "Full-Stack Information Management Systems",
    description:
      "Database-driven applications with authentication, REST APIs, CRUD workflows, responsive interfaces, and administrative dashboards.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Drizzle ORM"],
  },
  {
    title: "Notes & Information Management App",
    description:
      "A web application for creating, organizing, and retrieving personal information with JWT authorization and frontend-backend integration.",
    tags: ["Django", "React", "SQLite", "SimpleJWT"],
    href: "https://notes-app.vercel.app/"
  },
  {
    title: "Movie Application",
    description:
      "A responsive React project using component-based architecture, API-driven content, and dynamic user interfaces.",
    tags: ["React", "JavaScript", "APIs"],
    href: "https://movie-app-psi.vercel.app/",
  },
  {
    title: "School Management System",
    description:
      "A system concept for school information management, access and refresh token authentication, and role-based workflows.",
    tags: ["React", "Backend APIs", "JWT"],
  },
  {
    title: "Business & Management Systems",
    description:
      "Concepts and prototypes for rental, barbershop, photographer booking, coffee menu, clothing e-commerce, and company management systems.",
    tags: ["Systems Design", "Operations", "Data Management"],
    href: "https://atekas-homes-hub.vercel.app/"
  },
  {
    title: "Digital Records & IT Support",
    description:
      "Applied information systems knowledge to digital records, data management, IT troubleshooting, and information organization.",
    tags: ["Information Systems", "IT Support", "Records"],
  },
  {
    title: "Ateka's World Portfolio",
    description: "A personal portfolio showcasing projects, skills, and professional experience.",
    tags: ["Portfolio", "Web Design"],
    href: "https://atekasworldportfolio.vercel.app/",
  },
  {
    title: "Urban Cuts POS System",
    description: "A point-of-sale system for the Urban Cuts barbershop.",
    tags: ["Point of Sale", "Web Application", "Business Management", "React", "Node.js", "PostgreSQL", "M-Pesa integration"],
    href: "https://urban-cuts.vercel.app/",
  },
  {
    title: "Simple Websites",
    description: "A collection of simple, responsive website projects.",
    tags: ["Web Design", "Responsive", "HTML", "CSS", "JavaScript"],
    href: "https://6928328da9bb3427146aa94e--musical-torrone-a35988.netlify.app/",
  },
];

const competencies = [
  "Software Development",
  "Information Systems",
  "Database Management",
  "IT Support",
  "Digital Records",
  "Data Analysis",
  "AI Workflows",
  "Mobile Development",
  "Web Development",
  "Information Management",
  "System Design",
  "Project Management",
  "Team Collaboration",
  "Problem Solving",
  "Communication Skills",
  "Technical Documentation",
  "User Experience",
  "Cloud Services",
  "Version Control",
  "Continuous Integration",
];

const WHATSAPP = "https://wa.me/254797558913";

function IconGlyph({ icon }: { icon: SimpleIcon }) {
  return (
    <svg role="img" viewBox="0 0 24 24" aria-label={icon.title}>
      <path fill="currentColor" d={icon.path} />
    </svg>
  );
}

function SocialLinks() {
  const links = [
    { label: "WhatsApp", href: WHATSAPP, Icon: MessageCircle },
    { label: "Instagram", href: "https://www.instagram.com/rickypmm/", Icon: Instagram },
    { label: "Facebook", href: "https://www.facebook.com/derick.mose.90", Icon: Facebook },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/moses-ateka-915390248",
      Icon: Linkedin,
    },
    { label: "GitHub", href: "https://github.com/mosericky", Icon: Github },
  ];
  return (
    <div className="social-links">
      {links.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          title={label}
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}

function SkillRow({ skills, reverse = false }: { skills: Skill[]; reverse?: boolean }) {
  const repeatedSkills = [...skills, ...skills];

  return (
    <div className={`skill-row ${reverse ? "reverse" : "forward"}`} aria-hidden="true">
      {repeatedSkills.map((skill, index) => (
        <span className={`skill-chip skill-${skill.icon.slug}`} key={`${skill.name}-${index}`}>
          <IconGlyph icon={skill.icon} />
          {skill.name}
        </span>
      ))}
    </div>
  );
}

function Index() {
  return (
    <main className="portfolio-page">
      <header className="portfolio-shell portfolio-header">
        <a className="brand-mark" href="/" aria-label="Ateka Moses Ombati home">
          <span className="brand-orb">AM</span>
          <span>Ateka Moses Ombati</span>
        </a>
        <nav className="portfolio-nav" aria-label="Portfolio sections">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="portfolio-shell hero-section">
        <div className="profile-stage" aria-label="Profile photo">
          <img
            className="profile-photo"
            src="/ateka-profile.png"
            alt="Ateka's World logo used as Ateka Moses Ombati's profile image"
          />
          <span className="online-badge" role="img" aria-label="Online" title="Online" />
        </div>
        <div>
          <span className="hero-kicker">
            <Sparkles size={16} /> Information Science · Software Development
          </span>
          <h1 className="hero-title">Ateka Moses Ombati</h1>
          <p className="hero-subtitle">
            I build practical web, software, database, and information management solutions with a
            strong foundation in IT systems, records management, and emerging AI workflows.
          </p>
          <div className="hero-actions">
            <Button asChild size="lg">
              <a href="mailto:atekasworld@gmail.com">
                Contact me <Mail />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/atekas-cv.pdf" target="_blank" rel="noopener noreferrer">
                Download my CV <Download />
              </a>
            </Button>
          </div>
          <div className="hero-meta" aria-label="Profile quick facts">
            <span>
              <MapPin size={15} /> Nairobi, Kenya
            </span>
            <span>
              <GraduationCap size={15} /> University of Nairobi
            </span>
          </div>
        </div>
      </section>

      <section className="portfolio-shell section" id="about">
        <div className="about-layout">
          <div>
            <span className="section-kicker">About</span>
            <div className="section-heading">
              <h2>Information systems mindset with hands-on software delivery.</h2>
              <p>
                I am an Information Science student at the University of Nairobi(graduating december 11 2026) focused on
                Information Technology, Information Systems, digital information management,
                software development, and AI-assisted productivity.
              </p>
            </div>
            <p className="about-copy">
              My work connects modern application development with structured information handling:
              authentication, databases, REST APIs, records, retrieval, responsive interfaces, and
              practical IT support for real users.
            </p>
          </div>
          <div>
            <div className="skill-marquee" aria-label="Technical skills">
              <SkillRow skills={firstSkillRow} />
              <SkillRow skills={secondSkillRow} reverse />
            </div>
            <div className="stats-grid">
              <div className="stat">
                <strong>20+</strong>
                <span>Technologies across frontend, backend, data, and mobile.</span>
              </div>
              <div className="stat">
                <strong>2026</strong>
                <span>Expected Bachelor of Information Science graduation.</span>
              </div>
              <div className="stat">
                <strong>2</strong>
                <span>Professional placements in ICT and customer-facing roles.</span>
              </div>
              <div className="stat">
                <strong>AI</strong>
                <span>Experience with assisted development and productivity tools.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-shell section" id="projects">
        <div className="section-heading">
          <span className="section-kicker">Projects</span>
          <h2>Selected software and systems work.</h2>
          <p>
            A practical mix of full-stack applications, information management tools, responsive
            interfaces, API-based products, and management system concepts.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div>
                <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
                <strong>{project.title}</strong>
                <p>{project.description}</p>
              </div>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="pill" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              {"href" in project && (
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                  View project <ArrowUpRight size={16} />
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-shell section" id="experience">
        <div className="section-heading">
          <span className="section-kicker">Experience</span>
          <h2>ICT, software, support, and communication experience.</h2>
        </div>
        <div className="experience-list">
          <article className="experience-item">
            <div className="experience-header">
              <div>
                <strong>Information Science & Technology Attachment Student</strong>
                <span>State Department for Broadcasting, ICT and Telecommunications</span>
              </div>
              <span className="pill">June 2025 — September 2025</span>
            </div>
            <p>
              Supported ICT activities, troubleshooting, user support, digital information
              organization, and technology-related tasks within a government institution.
            </p>
          </article>
          <article className="experience-item">
            <div className="experience-header">
              <div>
                <strong>Financial Advisor — Sales Intern</strong>
                <span>Jubilee Insurance, Thika</span>
              </div>
              <span className="pill">February 2026 — July 2026</span>
            </div>
            <p>
              Built customer communication, organization, target-driven execution, teamwork, and
              professionalism in a client-facing environment.
            </p>
          </article>
        </div>
      </section>

      <section className="portfolio-shell section">
        <div className="section-heading">
          <span className="section-kicker">Competencies</span>
          <h2>Core strengths.</h2>
        </div>
        <div className="project-tags">
          {competencies.map((item) => (
            <span className="pill" key={item}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="portfolio-shell section" id="contact">
        <div className="contact-panel">
          <div>
            <span className="section-kicker">Contact</span>
            <div className="section-heading">
              <h2>Let’s build practical systems.</h2>
              <p>
                Available for software development, IT systems, information management, and digital
                transformation opportunities.
              </p>
            </div>
          </div>
          <div className="contact-links">
            <a className="contact-email" href="mailto:atekasworld@gmail.com">
              <Mail size={18} /> atekasworld@gmail.com <ArrowUpRight size={16} />
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="contact-phone">
                  <Phone /> 0797558913 <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <a href="tel:+254797558913">
                    <Phone /> Phone call
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href={WHATSAPP} target="_blank" rel="noreferrer">
                    <MessageCircle /> WhatsApp
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <SocialLinks />
          </div>
        </div>
      </section>

      <section className="portfolio-shell section" id="message">
        <div className="section-heading">
          <span className="section-kicker">Message</span>
          <h2>Send me a message.</h2>
          <p>Send me a message and it will arrive straight in my inbox.</p>
        </div>
        <ContactForm />
      </section>
      <footer className="portfolio-shell portfolio-footer">
        <span>© {new Date().getUTCFullYear()} Ateka Moses Ombati</span>
        <span>Nairobi, Kenya</span>
        <a href="https://github.com/mosericky" target="_blank" rel="noreferrer">
          GitHub <ArrowUpRight size={14} />
        </a>
      </footer>
    </main>
  );
}
