import SectionHead from './SectionHead'
import { ITC_ROLES, ITC_PHOTOS, ITC_EVENTS } from '../data/itc'


function ITC() {
  return (
    <section className="content-section" id="itc">
      <SectionHead eyebrow="05 / COMMUNITY" logo="/itc/itc.png">ITC Community</SectionHead>

      <p className="itc-intro">
        Since 2023, I've been an active member of ITC Community, growing with
        the club year after year: from web development to communication and
        sponsoring, then AI, Data Science and administration.
      </p>

      <ul className="tags event-chips">
        {ITC_EVENTS.map((ev) => <li key={ev}>{ev}</li>)}
      </ul>

      <div className="journey" style={{ '--cols': 3 }}>
        {ITC_ROLES.map((r) => (
          <article className="step" key={r.role}>
            <span className="year">{r.period}</span>
            <h3>{r.role}</h3>
            <ul className="bullets">
              {r.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </article>
        ))}
      </div>

      <div className="marquee">
        <div className="marquee-track">
          {[...ITC_PHOTOS, ...ITC_PHOTOS].map((p, i) => (
            <figure key={i} aria-hidden={i >= ITC_PHOTOS.length}>
              <span>✦</span>
              <img
                src={p.src}
                alt={p.caption}
                loading="lazy"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
              <figcaption>{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ITC
