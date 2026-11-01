import SectionHead from './SectionHead'
import { FiExternalLink } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa6'
import { SiKaggle } from 'react-icons/si'
import { PROJECTS } from '../data/projects'

function Projects() {
  return (
    <section className="content-section" id="projects">
      <SectionHead eyebrow="03 / MY WORK">Things I've been building</SectionHead>

      <div className="project-grid">
        {PROJECTS.map((p) => (
          <article className="project-card" key={p.title}>
            <div className="project-cover">
              <span>✦</span>
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            </div>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <ul className="tags">
              {p.tags.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <div className="card-links">
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer" className="card-link">
                  <FaGithub /> GitHub
                </a>
              )}
              {p.kaggle && (
                <a href={p.kaggle} target="_blank" rel="noreferrer" className="card-link">
                  <SiKaggle /> Kaggle
                </a>
              )}
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer" className="card-link">
                  Live demo <FiExternalLink />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects