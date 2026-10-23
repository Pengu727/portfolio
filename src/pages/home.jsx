import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import Icon from '../components/Icon'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.09, duration: 0.55, ease: 'easeOut' },
  }),
}

const stack = [
  { name: 'PHP', icon: 'php' },
  { name: 'Laravel', icon: 'laravel' },
  { name: 'Python', icon: 'python' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'SQL', icon: 'mysql' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'HTML / CSS', icon: 'html5' },
  { name: 'Tailwind CSS', icon: 'tailwindcss' },
  { name: 'Vite', icon: 'vite' },
  { name: 'Go', icon: 'go' },
  { name: 'Git', icon: 'git' },
  { name: 'Linux', icon: 'linux' },
]

const featured = [
  {
    title: 'PharmaPortal',
    tagline: 'Final-year project',
    logo: '/images/pharmaportal.png',
    website: '/pharmaportal/index.html',
    desc: 'Web platform connecting pharmacies to their local clients   stock & availability publishing, relevance-scored medication search, distance-aware pharmacy discovery, and 24-hour reservations with pickup codes.',
    tags: ['laravel', 'mongodb', 'php', 'tailwindcss', 'vite'],
    to: '/projects',
  },
  {
    title: 'Network Analyzer',
    tagline: 'In development',
    desc: 'Network analysis tool in Python to deepen networking and cybersecurity fundamentals; exploring Go for performance-sensitive parts.',
    tags: ['python', 'go'],
    to: '/projects',
  },
  {
    title: 'CoPal   Business Software',
    tagline: 'Co-founder & developer',
    desc: 'Building business-oriented software for the Algerian market with a development team   CRM, stock/inventory, ERP, and HR/resource management.',
    tags: ['laravel', 'php', 'mongodb'],
    to: '/projects',
  },
]

const heroTags = [
  { name: 'mail', href: 'mailto:3abouazza@gmail.com', label: '3abouazza@gmail.com' },
  { name: 'map-pin', href: 'https://maps.google.com/?q=Algiers', label: 'Algiers, Algeria' },
  { name: 'github', href: 'https://github.com/Pengu727', label: 'Pengu727' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-grid">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="hero-role">
              <span className="dot" />
              Software Developer   Backend &amp; Web
            </span>
            <h1 className="hero-name">
              Bouazza Ahmed<br />Amine Aissa<span className="hl">.</span>
            </h1>
            <p className="hero-lede">
              Computer Science graduate focused on backend and web development. I built{' '}
              <strong style={{ color: 'var(--text-heading)' }}>PharmaPortal</strong> with Laravel
              &amp; MongoDB, contribute to business software as co-founder at CoPal, and keep
              exploring cybersecurity and networking.
            </p>
            <div className="hero-actions">
              <NavLink to="/projects" className="btn btn-primary">
                View Projects
                <Icon name="arrow-right" size={16} />
              </NavLink>
              <NavLink to="/contact" className="btn">
                Contact
              </NavLink>
            </div>
            <div className="hero-contact">
              {heroTags.map((t, i) => (
                <span key={t.label} style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                  {i > 0 && <span className="sep">·</span>}
                  <a href={t.href} target={t.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                    <Icon name={t.name} size={14} />
                    {t.label}
                  </a>
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
          >
            <div className="photo-frame">
              <img className="photo" src="/portfolio/images/pfp.webp" alt="Portrait of Bouazza Ahmed Amine Aissa" />
              <span className="photo-chip">
                <Icon name="terminal" size={14} />
                backenddev /system admin
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stack */}
      <section className="section">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
        >
          <p className="kicker">Core stack</p>
          <h2 className="section-title">Technologies I work with</h2>
        </motion.div>
        <div className="stack-list">
          {stack.map((s, i) => (
            <motion.span
              key={s.name}
              className="chip"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={i * 0.04}
            >
              <Icon name={s.icon} size={17} />
              {s.name}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="section">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
        >
          <p className="kicker">Selected work</p>
          <h2 className="section-title">Featured projects</h2>
          <p className="section-desc">
            Practical software built around real requirements   from pharmacy inventory management
            to network analysis.
          </p>
        </motion.div>
        <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {featured.map((p, i) => (
            <motion.article
              key={p.title}
              className="card card-hover project-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={i * 0.12}
            >
              {p.logo && (
                <img
                  src={p.logo}
                  alt={`${p.title} logo`}
                  className="featured-logo"
                />
              )}
              <p className="project-tagline">{p.tagline}</p>
              <h3>{p.title}</h3>
              <p className="body">{p.desc}</p>
              <div className="card-foot">
                <div className="tag-list">
                  {p.tags.map((t) => (
                    <span key={t} className="tag tag-accent">
                      <Icon name={t} size={13} />
                    </span>
                  ))}
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                  {p.website && (
                    <a
                      href={p.website}
                      aria-label={`Visit ${p.title} website`}
                      style={{ color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: '12.5px', fontWeight: 600 }}
                    >
                      Website
                      <Icon name="external-link" size={14} />
                    </a>
                  )}
                  <NavLink to={p.to} aria-label={`Details on ${p.title}`} style={{ color: 'var(--text-muted)' }}>
                    <Icon name="arrow-up-right" size={18} />
                  </NavLink>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <motion.div
          className="cta"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
        >
          <Icon name="send" size={22} style={{ color: 'var(--accent)' }} />
          <h2>Let's build something</h2>
          <p>
            Open to freelance work, team collaborations, and backend development opportunities.
            Reach out and I'll get back to you.
          </p>
          <NavLink to="/contact" className="btn btn-primary">
            Get in touch
            <Icon name="arrow-up-right" size={16} />
          </NavLink>
        </motion.div>
      </section>
    </>
  )
}