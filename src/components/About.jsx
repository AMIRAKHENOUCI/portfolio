import SectionHead from './SectionHead'
import { FiArrowRight, FiMapPin, FiHeart } from 'react-icons/fi'
import { FaGraduationCap } from 'react-icons/fa6'

const INFO = [
  { icon: <FaGraduationCap />, title: "Master's Student", sub: 'Data Science & NLP' },
  { icon: <FiMapPin />, title: 'Université Saad Dahlab Blida 1', sub: 'Algeria' },
  { icon: <FiHeart />, title: 'Passionate about', sub: 'Data • NLP • Web Development' },
]

function About() {
  return (
    <section className="content-section" id="about">
      <SectionHead eyebrow="01 / ABOUT">A little about me</SectionHead>

      <div className="about-grid">
        <div className="about-intro">
          <p>
            I'm a computer science student specialized in <strong>Data Science</strong> and <strong>Natural Language Processing</strong>, passionate about artificial intelligence and data analysis. Through my academic and personal projects, I've built skills in machine learning, data processing and application development.
          </p>
          <a href="#education" className="outline-link">
            Learn more <FiArrowRight />
          </a>
        </div>

        <ul className="info-list">
          {INFO.map((item) => (
            <li key={item.title}>
              <span className="info-icon">{item.icon}</span>
              <div>
                <strong>{item.title}</strong>
                <small>{item.sub}</small>
              </div>
            </li>
          ))}
        </ul>

        <p className="quote">
          “ Progress takes time,
          <br />
          but it's always worth it. ♡
        </p>
      </div>
    </section>
  )
}

export default About
