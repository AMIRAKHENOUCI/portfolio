import { useState } from 'react'
import emailjs from '@emailjs/browser'
import SectionHead from './SectionHead'
import { FiMail, FiSend } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn, FaFacebookF } from 'react-icons/fa6'

// ✏️ 7ot hna les 3 clés mn emailjs.com
const SERVICE_ID = 'service_bkbatge'
const TEMPLATE_ID = 'template_cvdtngm'
const PUBLIC_KEY = '3YxQnlP1mlEF8hoWh'

function Contact() {
  const [status, setStatus] = useState('idle')

  const sendMessage = async (e) => {
    e.preventDefault()
    const form = e.target
    setStatus('sending')
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="content-section" id="contact">
      <SectionHead eyebrow="07 / SAY HELLO">Let's create something meaningful</SectionHead>

      <div className="contact-grid">
        <div>
          <p>
            Open to learning opportunities, internships, and interesting
            collaborations. Send me a message and it will land straight in my inbox.
          </p>
          <div className="hero-socials">
            <a href="https://github.com/AMIRAKHENOUCI" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/amira-khenouci-6738bb37b/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="https://web.facebook.com/amira.khenouci/" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
          <a href="mailto:amirakhenouci@gmail.com" aria-label="Email"><FiMail /></a>
          </div>
        </div>

        <form className="contact-form" onSubmit={sendMessage}>
          <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" style={{ display: 'none' }} />
          <label>Name<input name="name" required placeholder="Your name" /></label>
          <label>Email<input name="email" type="email" required placeholder="you@example.com" /></label>
          <label>Message<textarea name="message" rows="4" required placeholder="Say hello..." /></label>
          <button type="submit" className="primary-link" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send message'} <FiSend />
          </button>
          {status === 'sent' && <p className="form-status ok">Thank you! Your message was sent ♡</p>}
          {status === 'error' && <p className="form-status err">Something went wrong. Please try again or email me directly.</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
