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

const contacts = [
  {
    icon: 'mail',
    label: 'Email',
    value: '3abouazza@gmail.com',
    href: 'mailto:3abouazza@gmail.com',
  },
  {
    icon: 'phone',
    label: 'Phone',
    value: '+213 793 55 36 23',
    href: 'tel:+213793553623',
  },
  {
    icon: 'github',
    label: 'GitHub',
    value: 'github.com/Pengu727',
    href: 'https://github.com/Pengu727',
  },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    value: 'Ahmed Amine Aissa Bouazza',
    href: 'https://www.linkedin.com/in/ahmed-amine-aissa-bouazza-75624a33a/',
  },
  {
    icon: 'map-pin',
    label: 'Location',
    value: 'Algiers, Algeria',
    href: 'https://maps.google.com/?q=Algiers',
  },
]

export default function Contact() {
  return (
    <>
      <section className="section" style={{ paddingBottom: '34px', paddingTop: '64px' }}>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
          <p className="kicker">Contact</p>
          <h1 className="section-title">Get in touch</h1>
          <p className="section-desc">
            Open to freelance projects, team collaborations, backend development opportunities and
            technical conversations.
          </p>
        </motion.div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="contact-grid">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              className="contact-card"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={i}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <span className="c-icon">
                <Icon name={c.icon} size={20} />
              </span>
              <h4>{c.label}</h4>
              <span className="c-value">{c.value}</span>
              {c.href.startsWith('http') && (
                <span className="c-hint" style={{ marginTop: 6 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    Open link <Icon name="external-link" size={11} />
                  </span>
                </span>
              )}
            </motion.a>
          ))}
        </div>

        <motion.div
          className="cta"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          style={{ marginTop: '48px' }}
        >
          <Icon name="mail" size={22} style={{ color: 'var(--accent)' }} />
          <h2>What I'm looking for</h2>
          <p>
            Backend and web development roles, freelance work, and team collaborations on
            business-oriented software. I'm always open to a good technical conversation.
          </p>
          <a href="mailto:3abouazza@gmail.com" className="btn btn-primary">
            <Icon name="send" size={15} />
            Say hello
          </a>
        </motion.div>
      </section>
    </>
  )
}