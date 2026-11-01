function SectionHead({ eyebrow, logo, children }) {
  return (
    <div className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2>
        {logo && (
          <img
            src={logo}
            alt=""
            className="section-logo"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
        )}
        <span>
          {children}
          <span className="dot">.</span>
        </span>
      </h2>
    </div>
  )
}

export default SectionHead
