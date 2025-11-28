function Features({ items }) {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {items.map((item, idx) => (
        <div className="feature-item" key={idx}>
          <img
            src={item.icon}
            alt={item.alt}
            className="feature-icon"
          />
          <h3 className="feature-item-title">{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
