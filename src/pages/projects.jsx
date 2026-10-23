import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from '../components/Icon'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: 'easeOut' },
  }),
}

const tabs = [
  { id: 'pharmaportal', label: 'PharmaPortal', img: '/images/pharmaportal.png' },
  { id: 'network', label: 'Network Analyzer', icon: 'terminal' },
  { id: 'team', label: 'CoPal   Team Software', icon: 'users' },
]

function PharmaPortal() {
  const [open, setOpen] = useState(null)

  const roles = [
    { role: 'Client', desc: 'Browse and search without an account; reserve available products and track reservations with pickup codes.' },
    { role: 'Owner', desc: 'Full product catalogue control, stock and availability; manages seller accounts and views all reservations and sales across the pharmacy.' },
    { role: 'Seller', desc: 'Works the point-of-sale grid for walk-in sales, validates pickup codes at the counter, and sees only their own sales   with no access to pricing or other pharmacies.' },
    { role: 'Admin', desc: 'Registers pharmacies on the platform, maintains pharmacy records and manages owner accounts.' },
  ]

  const features = [
    { title: 'Stock and expiry tracking', icon: 'timer', desc: 'Quantity, minimum threshold and expiry date per product. The app derives Active, Low Stock, Expiring Soon or Expired automatically, and each state is a clickable filter.' },
    { title: 'Public or private listings', icon: 'eye', desc: 'Decide per product whether clients can see it. Private products stay fully tracked for your staff and never appear in search.' },
    { title: 'Search with ranking and suggestions', icon: 'search', desc: 'Clients search by product name, description, category, laboratory or pharmacy name. Results are scored so exact and partial name matches rank highest, with type-ahead suggestions as you type   an application-level scoring service over MongoDB.' },
    { title: 'Distance-aware pharmacy search', icon: 'map-pin', desc: 'With location granted, pharmacies are listed nearest first using real great-circle distance (Haversine), each with address, commune, wilaya, opening hours, phone and a maps link.' },
    { title: '24-hour reservations', icon: 'package', desc: 'A client reserves a product and the stock is held immediately for 24 hours. If it is not collected, the hold expires automatically and the stock goes back on the shelf.' },
    { title: '6-digit pickup codes', icon: 'lock', desc: 'Every reservation gets a code. The client shows it at the counter, your staff validate it, and the reservation is marked complete and recorded as a sale.' },
    { title: 'Staff accounts for your counter', icon: 'users', desc: 'Owners create seller logins for their team. Each seller sees only their pharmacy, works the point-of-sale grid and processes reservations.' },
    { title: 'Sales you can actually trace', icon: 'chart-column', desc: 'Counter sales and reservation sales are logged with product, quantity, price, client, seller and timestamp. Owners see the pharmacy-wide view, sellers see their own.' },
  ]

  const techStack = [
    'laravel', 'php', 'mongodb', 'tailwindcss', 'vite', 'javascript', 'html5', 'css3', 'git',
  ]

  const challenges = [
    { problem: 'Double-reservation race condition', solution: 'Stock is checked and decremented atomically at reservation creation, then restored by a scheduled Artisan command when reservations expire   keeping inventory consistent across concurrent clients.' },
    { problem: 'Multi-role auth separation', solution: 'Multiple Laravel guards keep the administrator path separate from client/owner/seller auth, with custom role middleware and pharmacy-scoped authorization.' },
    { problem: 'Pharmacy data isolation', solution: 'Authorization is scoped per pharmacy so owners and sellers only ever operate within their own pharmacy\'s data.' },
    { problem: 'Relevance search on MongoDB', solution: 'An application-level scoring service across multiple fields replaces relying on a single generic text index for ranked, autocomplete-enabled results.' },
    { problem: 'Realistic demo data', solution: 'Artisan seeding commands populate pharmacies with realistic pharmaceutical inventory while avoiding duplicate products.' },
  ]

  return (
    <div>
      <motion.div className="project-hero" initial="hidden" animate="visible" variants={fadeUp}>
        <p className="meta">Final-year project &middot; Laravel 13.8 · PHP 8.3+ · MongoDB · Blade · Tailwind CSS 4 · Vite</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 6 }}>
          <img
            src="/images/pharmaportal.png"
            alt="PharmaPortal logo"
            style={{ width: 40, height: 40, objectFit: 'contain', borderRadius: 10, background: '#fff', border: '1px solid var(--border)', padding: 5 }}
          />
          <h2 style={{ marginBottom: 0 }}>PharmaPortal</h2>
        </div>
        <p className="tagline">Pharmacy Software &amp; Medication Search</p>
        <p className="desc">
          PharmaPortal is a web platform for the Algerian market that connects pharmacies to their
          local clients. Pharmacies manage their catalogue, stock, availability and staff; clients
          search those products, find the closest pharmacy that has one, and hold it for pickup.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22, flexWrap: 'wrap' }}>
          <a className="btn btn-primary" href="/pharmaportal/index.html">
            Visit PharmaPortal website
            <Icon name="external-link" size={16} />
          </a>
          <a
            className="btn"
            href="https://github.com/Pengu727/pharmaportal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="github" size={16} />
            GitHub repo
          </a>
        </div>
        <div className="tag-list">
          {techStack.map((t) => (
            <span key={t} className="tag tag-accent">
              <Icon name={t} size={14} />
            </span>
          ))}
        </div>
      </motion.div>

      {/* Roles */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} variants={fadeUp}>
        <h3 className="section-sub">
          <Icon name="users" size={19} />
          User roles
        </h3>
        <div className="role-grid">
          {roles.map((r) => (
            <div key={r.role} className="card role-card card-hover">
              <h4>{r.role}</h4>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Features */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} variants={fadeUp}>
        <h3 className="section-sub">
          <Icon name="braces" size={19} />
          Key features
        </h3>
        <div className="feature-grid">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="feature-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              custom={i * 0.07}
            >
              <span className="f-icon">
                <Icon name={f.icon} size={19} />
              </span>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Challenges */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} variants={fadeUp}>
        <h3 className="section-sub">
          <Icon name="code" size={19} />
          Challenges &amp; engineering decisions
        </h3>
        <div className="acc">
          {challenges.map((c, i) => (
            <div key={c.problem} className={`acc-item${open === i ? ' open' : ''}`}>
              <button
                type="button"
                className="acc-head"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>
                  <span className="lbl">Challenge</span>
                  <span className="q">{c.problem}</span>
                </span>
                <Icon name="chevron-down" size={18} />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="acc-body"
                  >
                    <p>{c.solution}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Database */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} variants={fadeUp}>
        <div className="card">
          <h3 className="section-sub" style={{ marginBottom: '12px' }}>
            <Icon name="database" size={19} />
            Database &amp; data
          </h3>
          <p className="body" style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.75' }}>
            MongoDB is the primary database via{' '}
            <code style={{ fontFamily: 'var(--mono)', fontSize: '13px', color: 'var(--accent-strong)', background: 'var(--accent-dim)', padding: '2px 6px', borderRadius: '6px' }}>
              mongodb/laravel-mongodb
            </code>
            , with collections for users (per role), pharmacies (including geolocation), products
            (stock, expiry, visibility), reservations (codes, expiration), sales (walk-in +
            reservation-based) and verification data (OTP with expiration). Artisan seeders
            populate realistic pharmaceutical inventory without duplicates.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

function NetworkAnalyzer() {
  return (
    <motion.div className="project-hero" initial="hidden" animate="visible" variants={fadeUp}>
      <p className="meta">In development &middot; Python &middot; exploring Go</p>
      <h2>Network Analyzer</h2>
      <p className="tagline">Cybersecurity &amp; network analysis tool</p>
      <p className="desc">
        A network analysis tool being built in Python to deepen hands-on understanding of
        networking and cybersecurity   practical packet-level programming that complements the
        CompTIA Security+ theory.
      </p>
      <div className="tag-list">
        <span className="tag tag-accent" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <Icon name="python" size={14} /> Python
        </span>
        <span className="tag" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <Icon name="go" size={14} /> Go (exploring)
        </span>
        <span className="tag" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <Icon name="compass" size={14} /> Networking
        </span>
        <span className="tag" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <Icon name="shield" size={14} /> Cybersecurity
        </span>
      </div>
      <div className="card" style={{ marginTop: '24px' }}>
        <h4 style={{ fontSize: '15px', marginBottom: '8px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <Icon name="arrow-right" size={15} style={{ color: 'var(--accent)' }} /> Exploring Go
          </span>
        </h4>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          Go is being explored as a possible reimplementation of performance-sensitive parts of the
          tool   motivated by its typing, concurrency model and efficiency in systems/network
          programming. The current implementation remains in Python.
        </p>
      </div>
    </motion.div>
  )
}

function TeamProjects() {
  const areas = [
    { name: 'CRM', desc: 'Customer relationship management   leads, clients and interactions.' },
    { name: 'Stock / Inventory', desc: 'Inventory tracking, stock control and product management.' },
    { name: 'ERP', desc: 'Enterprise resource planning adapted to local business needs.' },
    { name: 'HR / Resources', desc: 'Human resources and workforce management for local organizations.' },
  ]

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
      <div className="project-hero">
        <p className="meta">Ongoing &middot; CoPal · team collaboration</p>
        <h2>Business software for the Algerian market</h2>
        <p className="tagline">Co-founder &amp; developer   CoPal (ICOM Agency startup)</p>
        <p className="desc">
          With CoPal's development team, I contribute to backend and web development on projects
          aimed at solving real needs in the Algerian market   from CRM and inventory to ERP and
          HR systems.
        </p>
        <div className="tag-list">
          {['laravel', 'php', 'mongodb', 'tailwindcss', 'vite'].map((t) => (
            <span key={t} className="tag tag-accent" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Icon name={t} size={14} />
            </span>
          ))}
        </div>
      </div>

      <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
        {areas.map((a, i) => (
          <motion.div
            key={a.name}
            className="card card-hover"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeUp}
            custom={i * 0.08}
          >
            <h4 style={{ fontSize: '15px', color: 'var(--accent-strong)', marginBottom: '8px' }}>{a.name}</h4>
            <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>{a.desc}</p>
          </motion.div>
        ))}
      </div>
      <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '22px', fontStyle: 'italic' }}>
        Client names and deployment details are not disclosed.
      </p>
    </motion.div>
  )
}

export default function Projects() {
  const [active, setActive] = useState(tabs[0].id)

  return (
    <>
      <section className="section" style={{ paddingBottom: '30px', paddingTop: '64px' }}>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
          <p className="kicker">Work</p>
          <h1 className="section-title">Projects</h1>
          <p className="section-desc">
            Practical software built around real requirements   from pharmacy inventory to network
            analysis and business tools.
          </p>
        </motion.div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="tabs" role="tablist" aria-label="Projects">
          {tabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={active === t.id}
              className={`tab${active === t.id ? ' active' : ''}`}
              onClick={() => setActive(t.id)}
            >
              {t.img ? (
                <img src={t.img} alt="" style={{ height: 16, width: 16, borderRadius: 4, objectFit: 'contain', background: '#fff' }} />
              ) : (
                <Icon name={t.icon} size={15} />
              )}
              {t.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {active === 'pharmaportal' && <PharmaPortal />}
            {active === 'network' && <NetworkAnalyzer />}
            {active === 'team' && <TeamProjects />}
          </motion.div>
        </AnimatePresence>
      </section>
    </>
  )
}