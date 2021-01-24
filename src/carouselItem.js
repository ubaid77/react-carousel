function CarouselItem({ img, name, desc, index }) {
  return (
    <div className="item" style={{ opacity: index === 2 ? 0.5 : 1 }}>
      <img src={img} alt={name} />
      <div className="data">
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default CarouselItem;
