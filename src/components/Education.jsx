import SectionHead from './SectionHead'
import { FiHeart } from 'react-icons/fi'
import { FaGraduationCap } from 'react-icons/fa6'
import { EDUCATION } from '../data/education'


function Education() {
  return (
    <section className="content-section" id="education">
      <SectionHead eyebrow="02 / EDUCATION">My academic journey</SectionHead>

      <div className="journey" style={{ '--cols': 3 }}>
        {[...EDUCATION].reverse().map((e) => (
          <article className="step" key={e.title}>
            <span className="year">{e.period}</span>
            <span className="info-icon"><FaGraduationCap /></span>
            <h3>{e.title}</h3>
            <p>{e.school}</p>
            <ul className="tags">
              {e.modules.map((m) => <li key={m}>{m}</li>)}
            </ul>
          </article>
        ))}

        <article className="step next">
          <span className="year">Next ✦</span>
          <span className="info-icon"><FiHeart /></span>
          <h3>What's next</h3>
          <p>Open to internships, learning opportunities and meaningful collaborations.</p>
        </article>
      </div>
    </section>
  )
}

export default Education
