
export default function () {
    const domain = import.meta.env.VITE_WP_DOMAIN;

  return (
    <section className="bg-black hidden md:block">
    <div className="md:max-w-5xl mx-auto md:pt-24 pt-8 relative font-futura-heavy uppercase md:h-screen 2xl:h-[650px]">
      <div className="relative">
        <h4 className="text-white  md:text-[8vw] 2xl:text-[7vw] text-center md:tracking-widest 2xl:tracking-normal leading-none">
          Tu felicidad
        </h4>
        <span className="block text-right text-charged-blue md:text-2xl absolute right-30">
          nuestra prioridad
        </span>
      </div>
      <img
        className="absolute left-1/2 bottom-0 -translate-x-1/2 md:h-[605px]"
        src={`${domain}wp-content/uploads/2025/03/persona-1.webp`}
        alt="Tu felicidad es nuestra prioridad"
      />
    </div>
    <div>
      <a href="#">
        <img
          className="w-full"
          src={`${domain}wp-content/uploads/2025/03/cintillo.webp`}
          alt=""
        />
      </a>
    </div>
  </section>
  )
}
