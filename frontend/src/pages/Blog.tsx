export default function Blog() {
  const domain = import.meta.env.VITE_WP_DOMAIN;

  return (
    <>
      <h1 className="hidden">Nuestro blog</h1>
      <section className="relative h-[60vh]">
        <img
          className={`h-[60vh] w-full object-cover object-bottom absolute`}
          src={`${domain}wp-content/uploads/2025/04/blog-banner.webp`}
          alt="Nuestro Blog"
        />
      </section>
      <div className="separator bg-chinese-black py-4"></div>
      <section className="bg-black py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto gap-4">
          {[...Array(6)].map((_, index) => (
            <div className="flex flex-col p-1 border border-charged-blue text-white" key={index}>
              <img
                src={`${domain}wp-content/uploads/2025/04/article-1.webp`}
                alt=""
              />
              <div className="flex flex-col px-3 py-1 gap-1">
                <span className="font-futura-light text-charged-blue">
                  May 17, 2018
                </span>
                <p className="font-myriad-regular">
                  Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                  enim.
                </p>
                <a className="font-futura-light text-charged-blue" href="#">
                  Leer más
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-black py-8">
        <div className="relative text-white md:h-[330px]">
          <img
            className="w-full md:h-[300px] absolute"
            src={`${domain}wp-content/uploads/2025/04/pre-footer.webp`}
            alt="Un viaje llenos de aventuras"
          />
          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col gap-2 justify-center md:h-[300px]">
            <h4 className="font-futura-heavy text-4xl uppercase">
              Un viaje llenos de aventuras
            </h4>
            <span className="uppercase font-futura-regular text-2xl mb-2">Espera por ti</span>
            <a href="" className="font-futura-heavy text-lg bg-white text-charged-blue w-fit px-4 mx-auto py-1 rounded-lg">Contáctanos</a>
          </div>
        </div>
      </section>
    </>
  );
}
