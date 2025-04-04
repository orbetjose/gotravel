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
      <div className="relative md:h-[180px] 2xl:h-[250px]">
        <img
          className="w-full absolute  md:h-[180px] 2xl:h-[250px] object-cover"
          src={`${domain}wp-content/uploads/2025/04/fondo-cintillo.webp`}
          alt=""
        />
        <div className="md:max-w-4xl 2xl:max-w-7xl mx-auto relative h-full ">
        <div className="max-w-60 2xl:max-w-100 h-full relative bg-charged-blue flex flex-col justify-center font-futura-regular text-white text-lg 2xl:text-xl px-4 space-y-1 2xl:space-y-2">
            <span className="">Viaja a italia</span>
            <span className="font-futura-heavy text-3xl 2xl:text-5xl">$7.520.050</span>
            <span>Todo incluido</span>
            <a href="" className="font-futura-heavy bg-white px-4 py-1 w-fit text-charged-blue text-base rounded-lg">Más información</a>
        </div>
        </div>

      </div>
    </section>
  );
}
