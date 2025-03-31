type HeroBannerProps = {
    banner: string;
    object_position: string;
  };

export default function HeroBanner({ banner, object_position }: HeroBannerProps) {
  const domain = import.meta.env.VITE_WP_DOMAIN;
  return (
    <section className="relative h-screen">
      <img
        className={`h-screen w-full object-cover object-${object_position} absolute`}
        src={banner}
        alt="Fondo"
      />
    </section>
  );
}
