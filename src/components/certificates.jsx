import SectionHead from './SectionHead'
import { FiAward, FiExternalLink } from 'react-icons/fi'
import { FaTrophy } from 'react-icons/fa6'
import { ACHIEVEMENTS } from '../data/certificates'

function Certificates() {
  return (
    <section className="content-section" id="certificates">
      <SectionHead eyebrow="06 / ACHIEVEMENTS">Certificates &amp; Achievements</SectionHead>

      <div className="cert-grid">
        {ACHIEVEMENTS.map((a) => (
          <article className="cert-card" key={a.title + a.year}>
            <span className="info-icon">
              {a.type === 'competition' ? <FaTrophy /> : <FiAward />}
            </span>

            <div className="cert-body">
              <span className="cert-type">
                {a.type === 'competition' ? 'Competition' : 'Certificate'}
              </span>
              <h3>{a.title}</h3>
              <p>{a.issuer} · {a.year}</p>

              {a.result && <strong className="cert-result">{a.result}</strong>}

              {a.link && (
                <a href={a.link} target="_blank" rel="noreferrer" className="card-link">
                  View credential <FiExternalLink />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Certificates