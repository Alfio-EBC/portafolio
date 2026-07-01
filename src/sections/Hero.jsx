import personaje from "../imagenes/banner-efren.jpg";

function Hero() {
  return (
    <section
      id="hero"
      className=" px-6 py-6"
    >
<img
  src={personaje}
  alt="Personaje"
  className="animate- "
/>
    </section>
  );
}

export default Hero;