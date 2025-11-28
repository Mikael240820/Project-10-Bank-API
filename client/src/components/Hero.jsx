function Hero({ children }) {
  return (
    <div className="hero">
      <section className="hero-content">
        {children}
      </section>
    </div>
  )
}

export default Hero
