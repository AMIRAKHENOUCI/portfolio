import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'itc', label: 'ITC' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
]
  const SECTIONS = ['home', 'about', 'education', 'projects', 'skills', 'itc', 'certificates', 'contact']

function Navbar() {
  const [active, setActive] = useState('home')
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark'
  )

  // dark / light
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  // highlight the link of the visible section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && setActive(e.target.id === 'education' ? 'about' : e.target.id)
        ),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="topbar">
      <div className="navbar">
        <a href="#home" className="logo">
          AK.<span>♥</span>
        </a>

        <nav>
          {NAV.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>
              {label}
            </a>
          ))}
        </nav>

        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle theme"
        >
          <FiMoon />
          <span className="switch">
            <span className="knob">
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </span>
          </span>
        </button>
      </div>
    </header>
  )
}

export default Navbar
