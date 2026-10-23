import { motion } from 'framer-motion'
import Icon from '../components/Icon'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: 'easeOut' },
  }),
}

const experience = [
  {
    date: 'Present',
    title: 'Co-Founder & Developer',
    org: 'CoPal   ICOM Agency startup',
    points: [
      'Co-founded CoPal, an ICOM Agency startup focused on marketing and development.',
      'Work in the development team building business-oriented software for the Algerian market   CRM, stock/inventory, ERP, and HR/resource management.',
      'Contribute to backend and web development tasks based on real business requirements.',
    ],
  },
  {
    date: 'Jul 2025   Sep 2025',
    title: 'Backend Developer Intern',
    org: 'Icon Software',
    points: [
      'Contributed to backend development in PHP on real-world software projects.',
      'Worked within professional team workflows and project deadlines.',
    ],
  },
]

const skillCategories = [
  { cat: 'Languages', items: ['PHP', 'Python', 'JavaScript', 'SQL', 'HTML/CSS', 'Go (learning)'] },
  { cat: 'Backend', items: ['Laravel', 'REST APIs', 'MVC', 'Role-based auth & authorization', 'Artisan scheduler', 'Laravel Mail'] },
  { cat: 'Frontend', items: ['Blade', 'Tailwind CSS 4', 'Vite'] },
  { cat: 'Databases', items: ['MongoDB', 'Relational database concepts'] },
  { cat: 'Networking & Security', items: ['Network security', 'Threats & vulnerabilities', 'Risk management', 'Cryptography basics'] },
  { cat: 'Tools', items: ['Git / GitHub', 'Linux (daily use)'] },
]

export default function About() {
  return (
    <>
      <section className="section" style={{ paddingBottom: '34px', paddingTop: '64px' }}>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
          <p className="kicker">About</p>
          <h1 className="section-title">Software developer, backend &amp; web</h1>
          <p className="section-desc">
            Computer Science graduate (Information Systems) with practical project experience and a
            growing focus on cybersecurity and networking.
          </p>
        </motion.div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="about-grid">
          {/* Main column */}
          <div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} variants={fadeUp}>
              <div className="section-header" style={{ marginBottom: '20px' }}>
                <p className="kicker">Profile</p>
              </div>
              <div className="bio">
                <p>
                  Computer Science graduate (Information Systems) focused on backend and web
                  development. I built <strong>PharmaPortal</strong>, a multi-role pharmacy
                  inventory and reservation platform, with Laravel and MongoDB as my final-year
                  project   designed around real business needs rather than an academic checklist.
                </p>
                <p>
                  I completed a PHP backend internship at Icon Software and currently work in a
                  development team as co-founder of <strong>CoPal</strong>, building
                  business-oriented software for the Algerian market.
                </p>
                <p>
                  Outside of web development, I'm interested in networking and cybersecurity, with
                  CompTIA Security+ training completed and a network analyzer project underway in
                  Python.
                </p>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} variants={fadeUp} style={{ marginTop: '56px' }}>
              <div className="section-header" style={{ marginBottom: '28px' }}>
                <p className="kicker">Experience</p>
                <h2 className="section-title" style={{ fontSize: '28px' }}>Where I've worked</h2>
              </div>
              <div className="timeline">
                {experience.map((exp, i) => (
                  <motion.div
                    key={exp.title}
                    className="timeline-item"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                    variants={fadeUp}
                    custom={i}
                  >
                    <div className="timeline-date">
                      <Icon name="clock" size={13} />
                      {exp.date}
                    </div>
                    <div className="timeline-title">{exp.title}</div>
                    <div className="timeline-org">{exp.org}</div>
                    <div className="timeline-body">
                      <ul>
                        {exp.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} variants={fadeUp} style={{ marginTop: '56px' }}>
              <div className="section-header" style={{ marginBottom: '28px' }}>
                <p className="kicker">Skills</p>
                <h2 className="section-title" style={{ fontSize: '28px' }}>Technical skills</h2>
              </div>
              <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
                {skillCategories.map((s, i) => (
                  <motion.div
                    key={s.cat}
                    className="card"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                    variants={fadeUp}
                    custom={i * 0.08}
                  >
                    <h3 style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)' }}>{s.cat}</h3>
                    <div className="tag-list" style={{ marginTop: '14px' }}>
                      {s.items.map((item) => (
                        <span key={item} className="tag">{item}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="profile-aside">
            <motion.div
              className="card profile-mini"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
            >
              <img
                className="photo"
                src="/portfolio/images/pfp.webp"
                alt="Portrait of Bouazza Ahmed Amine Aissa"
                style={{ aspectRatio: '2 / 2.4', width: '100%' }}
              />
              <p>
                Based in Algiers, Algeria. I care about clean architecture, data consistency, and
                software that genuinely solves a business problem.
              </p>
              <div className="tag-list">
                <span className="tag tag-accent" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <Icon name="map-pin" size={13} />
                  Algiers
                </span>
              </div>
            </motion.div>

            <motion.div className="card info-card" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} variants={fadeUp} custom={1}>
              <h3>
                <Icon name="graduation-cap" size={18} />
                Education
              </h3>
              <div className="body">
                <p><strong style={{ color: 'var(--text-heading)' }}>Bachelor's Degree   Computer Science</strong></p>
                <p>Information Systems · High School of Technology</p>
                <ul>
                  <li>Programming, databases, operating systems, information systems</li>
                  <li>Backend development, cybersecurity, networking</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="card info-card" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} variants={fadeUp} custom={2}>
              <h3>
                <Icon name="award" size={18} />
                Certifications &amp; training
              </h3>
              <ul className="certs">
                <li>
                  <span className="c-name">
                    <Icon name="shield" size={15} />
                    CompTIA Security+ training
                  </span>
                  <span className="c-sub">GoMyCode   training completed, exam preparation in progress (not yet certified)</span>
                </li>
                <li>
                  <span className="c-name">
                    <Icon name="terminal" size={15} />
                    Python Programming
                  </span>
                  <span className="c-sub">GoMyCode · Jun–Aug 2022   NumPy &amp; Pandas, data manipulation, scripting</span>
                </li>
              </ul>
            </motion.div>

            <motion.div className="card info-card" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} variants={fadeUp} custom={3}>
              <h3>
                <Icon name="users" size={18} />
                Leadership &amp; strengths
              </h3>
              <div className="body">
                <ul>
                  <li>AIESEC member   experience working with diverse people in organized team environments</li>
                  <li>Adaptable, reliable under pressure</li>
                  <li>Fast learner with new technologies</li>
                  <li>Team-oriented communicator</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}