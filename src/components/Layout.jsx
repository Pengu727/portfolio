import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import Icon from './Icon'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About', end: false },
  { to: '/projects', label: 'Projects', end: false },
  { to: '/contact', label: 'Contact', end: false },
]

const socials = [
  { name: 'github', href: 'https://github.com/Pengu727', title: 'GitHub' },
  { name: 'linkedin', href: 'https://www.linkedin.com/in/ahmed-amine-aissa-bouazza-75624a33a/', title: 'LinkedIn' },
  { name: 'mail', href: 'mailto:3abouazza@gmail.com', title: 'Email' },
]

function NavLinks() {
  return links.map((l) => (
    <NavLink
      key={l.to}
      to={l.to}
      end={l.end}
      className={({ isActive }) => (isActive ? 'active' : '')}
    >
      {l.label}
    </NavLink>
  ))
}

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <Link to="/" className="nav-logo" aria-label="Back to home">
            <img className="logo-mark" src="/images/pengu.webp" alt="Penguin logo" width="36" height="36" />
            <span className="logo-word">Pengu<span className="logo-dot">.</span>dev</span>
          </Link>

          <nav aria-label="Primary">
            <ul className="nav-links">
              <NavLinks />
            </ul>
          </nav>

          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'x' : 'menu'} size={20} />
          </button>
        </div>

        <div className={`nav-mobile${open ? ' open' : ''}`}>
          <NavLinks mobile />
        </div>
      </header>

      <main style={{ flex: 1 }}>
        <div className="layout">{children}</div>
      </main>

      <footer className="footer">
        <div className="layout footer-inner">
          <span className="footer-brand">
            Pengu<span>.</span>dev
          </span>
          <span className="footer-note">
            &copy; {new Date().getFullYear()} Bouazza Ahmed Amine Aissa &middot; Backend &amp; web developer
          </span>
          <div className="footer-social">
            {socials.map((s) => (
              <a
                key={s.name}
                className="icon-btn"
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={s.title}
              >
                <Icon name={s.name} size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}