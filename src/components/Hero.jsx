import { FiArrowRight, FiArrowDown, FiMail, FiHeart } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn, FaFacebookF } from 'react-icons/fa6'

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <p className="hero-greeting">
          Hello, I'm <FiHeart />
        </p>

        <h1>
          Amira <span>Khenouci</span>
        </h1>

        <h2>Data Science &amp; NLP Student</h2>

        <p className="hero-description">
          I turn data into insights, explore the power of NLP, and build
          meaningful digital experiences through web development.
        </p>

        <div className="hero-buttons">
             <a href="#projects" className="primary-link">
              Explore my work <FiArrowRight /></a>
             <a href="/cv.pdf" download className="outline-link">
              Download CV</a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/AMIRAKHENOUCI" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/amira-khenouci-6738bb37b/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="https://web.facebook.com/amira.khenouci/" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
          <a href="mailto:amirakhenouci@gmail.com" aria-label="Email"><FiMail /></a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="portrait-glow" />
        <div className="orbit" />
        <img src="/amira.png" alt="Amira Khenouci" className="portrait" />

        <span className="decoration heart-one">♡</span>
        <span className="decoration sparkle-one">✦</span>
        <span className="decoration sparkle-two">✦</span>
        <span className="decoration sparkle-three">✧</span>

        <p className="girl-note">
          just a girl
          <br />
          with big dreams ♡
        </p>
      </div>

      <a href="#about" className="scroll-note">
        <span className="mouse" />
        Scroll down
        <FiArrowDown />
      </a>
    </section>
  )
}

export default Hero
