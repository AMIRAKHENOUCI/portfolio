import SectionHead from './SectionHead'
import { SKILLS, SOFT_SKILLS, LANGUAGES } from '../data/skills'


function Skills() {
  return (
    <section className="content-section" id="skills">
      <SectionHead eyebrow="04 / WHAT I DO">Curiosity meets creativity</SectionHead>

      <div className="skill-cards">
        {SKILLS.map((g) => (
          <article className="skill-card" key={g.group}>
            <span className="info-icon">{g.icon}</span>
            <h3>{g.group}</h3>
            <p>{g.desc}</p>
            <ul className="tags">
              {g.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </article>
        ))}
      </div>

      <div className="beyond">
        <div className="skill-card">
          <h3>Beyond code ♡</h3>
          <ul className="tags">
            {SOFT_SKILLS.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </div>
        <div className="skill-card">
          <h3>Languages</h3>
          {LANGUAGES.map((l) => (
            <div className="lang" key={l.name}>
              <span>{l.name}</span>
              <span className="dots">
                {[1, 2, 3, 4, 5].map((n) => (
                  <span key={n} className={n <= l.level ? 'on' : ''} />
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
