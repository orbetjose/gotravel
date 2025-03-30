export default function Paquetes() {
  const domain = import.meta.env.VITE_WP_DOMAIN;

  return (
    <>
      <h1></h1>
      <section className="relative h-screen">
        <img
          className="h-screen w-full object-cover object-center absolute"
          src={`${domain}wp-content/uploads/2025/03/paquetes-slide.webp`}
          alt="Fondo"
        />
      </section>
      <section className="bg-black py-16 px-4 md:px-0">
        <div className="flex flex-col gap-8 md:gap-0 md:flex-row max-w-5xl mx-auto">
          <div className="flex-1 text-white">
            <h2 className="font-futura-bold uppercase text-3xl tracking-[.5em]">
              New york
            </h2>
            <div className="flex border border-[#888888] rounded-lg  w-fit font-futura-heavy my-6">
              <div className="bg-white rounded-lg px-6 py-1 flex items-center gap-2">
                <img
                  className="h-5"
                  src={`${domain}wp-content/uploads/2025/03/sun.svg`}
                />
                <span className="text-charged-blue">15 Días</span>
              </div>
              <div className="px-6 py-1 flex items-center gap-2">
                <img
                  className="h-4"
                  src={`${domain}wp-content/uploads/2025/03/moon.svg`}
                />
                <span>14 Noches</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-myriad-regular">Precio por persona</span>
              <span className="font-futura-bold text-4xl pb-4">$3.720.000</span>
              <span className="font-futura-light text-xs">
                Incluye impuestos, tasas, cargos, excepto el IVA del alojamiento
              </span>
            </div>
          </div>
          <div className="space-y-4 font-futura-light text-white flex-1">
            <h4 className="text-xl font-futura-heavy text-charged-blue">
              Vivamus elementum
            </h4>
            <p>
              Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
              Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
              ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.{" "}
            </p>
            <p>
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
              libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
              blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec
              odio et ante tincidunt tempus.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-black py-8 px-4 md:px-0">
        <div className="flex gap-12">
          <div className="flex-1">
            <img
              className="h-96 w-full object-contain"
              src={`${domain}wp-content/uploads/2025/03/imagen-1.webp`}
              alt=""
            />
          </div>
          <div className="flex-1 hidden md:block">
            <img
              className="h-96 w-full"
              src={`${domain}wp-content/uploads/2025/03/imagen-2.webp`}
              alt=""
            />
          </div>
          <div className="flex-1 hidden md:block">
            <img
              className="h-96 w-full"
              src={`${domain}wp-content/uploads/2025/03/imagen-3.webp`}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="bg-black py-20 px-4 md:px-0">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 max-w-5xl mx-auto items-center">
          <div className="text-white font-futura-light flex-1">
            <h5 className="font-futura-bold uppercase text-3xl pb-4">
              Incluye
            </h5>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <img
                  className="h-6"
                  src={`${domain}wp-content/uploads/2025/03/check.svg`}
                />
                <span>
                  am felis, ultricies nec, pellentesque eu, pretium quis,
                </span>
              </li>
              <li className="flex items-center gap-2">
                <img
                  className="h-6"
                  src={`${domain}wp-content/uploads/2025/03/check.svg`}
                />
                <span>
                  am felis, ultricies nec, pellentesque eu, pretium quis,
                </span>
              </li>
              <li className="flex items-center gap-2">
                <img
                  className="h-6"
                  src={`${domain}wp-content/uploads/2025/03/check.svg`}
                />
                <span>
                  am felis, ultricies nec, pellentesque eu, pretium quis,
                </span>
              </li>
              <li className="flex items-center gap-2">
                <img
                  className="h-6"
                  src={`${domain}wp-content/uploads/2025/03/check.svg`}
                />
                <span>
                  am felis, ultricies nec, pellentesque eu, pretium quis,
                </span>
              </li>
              <li className="flex items-center gap-2">
                <img
                  className="h-6"
                  src={`${domain}wp-content/uploads/2025/03/check.svg`}
                />
                <span>
                  am felis, ultricies nec, pellentesque eu, pretium quis,
                </span>
              </li>
              <li className="flex items-center gap-2">
                <img
                  className="h-6"
                  src={`${domain}wp-content/uploads/2025/03/check.svg`}
                />
                <span>
                  am felis, ultricies nec, pellentesque eu, pretium quis,
                </span>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <img
              src={`${domain}wp-content/uploads/2025/03/imagen-que-incluye.webp`}
              alt="Que incluye"
            />
          </div>
        </div>
      </section>
      <section className="bg-black py-20 px-4 md:px-0">
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-0 max-w-5xl mx-auto items-center">
          <div className="flex-1">
            <img
              src={`${domain}wp-content/uploads/2025/03/imagen-no-incluye.webp`}
              alt="Que incluye"
            />
          </div>
          <div className="text-white font-futura-light flex-1">
            <h5 className="font-futura-bold uppercase text-3xl pb-4 text-right">
              No Incluye
            </h5>
            <ul className="space-y-4 ">
              <li className="flex justify-end items-center gap-2 text-right">
                <span>
                  am felis, ultricies nec, pellentesque eu, pretium quis,
                </span>
                <img
                  className="h-5"
                  src={`${domain}wp-content/uploads/2025/03/cross.svg`}
                />
              </li>
              <li className="flex justify-end items-center gap-2 text-right">
                <span>
                  am felis, ultricies nec, pellentesque eu, pretium quis,
                </span>
                <img
                  className="h-5"
                  src={`${domain}wp-content/uploads/2025/03/cross.svg`}
                />
              </li>
              <li className="flex justify-end items-center gap-2 text-right">
                <span>
                  am felis, ultricies nec, pellentesque eu, pretium quis,
                </span>
                <img
                  className="h-5"
                  src={`${domain}wp-content/uploads/2025/03/cross.svg`}
                />
              </li>
              <li className="flex justify-end items-center gap-2 text-right">
                <span>
                  am felis, ultricies nec, pellentesque eu, pretium quis,
                </span>
                <img
                  className="h-5"
                  src={`${domain}wp-content/uploads/2025/03/cross.svg`}
                />
              </li>
              <li className="flex justify-end items-center gap-2 text-right">
                <span>
                  am felis, ultricies nec, pellentesque eu, pretium quis,
                </span>
                <img
                  className="h-5"
                  src={`${domain}wp-content/uploads/2025/03/cross.svg`}
                />
              </li>
              <li className="flex justify-end items-center gap-2 text-right">
                <span>
                  am felis, ultricies nec, pellentesque eu, pretium quis,
                </span>
                <img
                  className="h-5"
                  src={`${domain}wp-content/uploads/2025/03/cross.svg`}
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-black py-20 px-4 md:px-0 bg-cover bg-center" style={{ backgroundImage: `url(${domain}wp-content/uploads/2025/03/background-terminos.png)` }}>
        <div className="max-w-4xl mx-auto text-white flex flex-col">
          <h4 className="font-futura-bold text-3xl text-center pb-6">
            TERMINOS Y CONDICONES
          </h4>
          <div className="border-2 border-charged-blue w-[200px] mx-auto"></div>
          <p className="text-center font-futura-regular mt-8 pb-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu</p>
          <button className="underline font-futura-bold uppercase mb-8">Leer más</button>
          <a href="#" className="bg-white text-charged-blue font-futura-bold text-xl uppercase px-4 py-2 w-fit mx-auto">Reservar ahora</a>
        </div>
      </section>
    </>
  );
}
