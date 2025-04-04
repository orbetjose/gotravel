export default function Nosotros() {
  const domain = import.meta.env.VITE_WP_DOMAIN;

  return (
    <>
      <h1 className="hidden"></h1>
      <section className="relative h-screen 2xl:h-[90vh]">
        <img
          className="h-screen w-full object-cover object-center absolute 2xl:h-[90vh]"
          src={`${domain}wp-content/uploads/2025/04/Nosotros_01.webp`}
          alt=""
        />
      </section>
      <section>
        <div className="bg-chinese-black py-6 ">
          <div className="md:flex justify-center gap-10 font-futura-light text-white space-y-6 md:space-y-0 max-w-4xl mx-auto">
            <div className="flex flex-1 flex-col gap-2 items-center justify-center">
              <img
                className="h-11 object-contain"
                src={`${domain}wp-content/uploads/2025/04/icon-5.png`}
              />
              <div className="flex flex-col items-center">
                <span className="font-futura-bold text-charged-blue text-2xl">
                  +20
                </span>
                <span>Años de experiencia</span>
              </div>
            </div>
            <div className="border-l border-charged-blue h-30 mt-auto hidden md:block"></div>
            <div className="flex flex-1 flex-col gap-2 items-center justify-center">
              <img
                className="h-11 object-contain"
                src={`${domain}wp-content/uploads/2025/04/icon-6.png`}
              />
              <div className="flex flex-col text-center items-center">
                <span className="font-futura-bold text-charged-blue text-2xl">
                  +100
                </span>
                <span className="leading-5">
                  Viajeros movilizados por el mundo{" "}
                </span>
              </div>
            </div>
            <div className="border-l border-charged-blue h-30 mt-auto hidden md:block"></div>
            <div className="flex flex-1 flex-col gap-2 items-center justify-center">
              <img
                className="h-11 object-contain"
                src={`${domain}wp-content/uploads/2025/04/icon-7.png`}
              />
              <div className="flex flex-col  items-center">
                <span className="font-futura-bold text-charged-blue text-2xl">
                  +120
                </span>
                <span>Destinos</span>
              </div>
            </div>
            <div className="border-l border-charged-blue h-30 mt-auto hidden md:block"></div>
            <div className="flex flex-1 flex-col gap-2 items-center justify-center">
              <img
                className="h-11 object-contain"
                src={`${domain}wp-content/uploads/2025/04/icon-8.png`}
              />
              <div className="flex flex-col items-center">
                <span className="font-futura-bold text-charged-blue text-2xl">
                  +500
                </span>
                <span>Eventos realizados</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black ">
        <div className="max-w-3xl mx-auto py-10 px-4 md:px-0">
          <h4 className="text-white text-center md:text-4xl text-2xl font-futura-heavy">
            Sobre <span className="text-charged-blue">Nosotros</span>
          </h4>
          <p className="text-white text-center md:text-lg py-4 font-futura-light">
            Go Travel, ha sido fundado por agentes de viajes,{" "}
            <span className="font-futura-bold">
              expertos viajeros y especialistas en crear experiencias únicas.
            </span>
          </p>
          <div className="border-b-2 border-charged-blue w-[150px] mx-auto"></div>
        </div>
        <div className="flex gap-4 max-w-5xl mx-auto">
          <div className="flex-1 h-96">
            <img
              className="w-full h-full object-contain md:object-cover"
              src={`${domain}wp-content/uploads/2025/04/imagen-4.webp`}
              alt=""
            />
          </div>
          <div className="flex-1 h-96 hidden md:block">
            <img
              className="w-full h-full object-contain md:object-cover"
              src={`${domain}wp-content/uploads/2025/04/imagen-5.webp`}
              alt=""
            />
          </div>
          <div className="flex-1 h-96 hidden md:block">
            <img
              className="w-full h-full object-contain md:object-cover"
              src={`${domain}wp-content/uploads/2025/04/imagen-6.webp`}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="max-w-xl mx-auto py-10 px-4 md:px-0">
          <p className="text-white text-center md:text-base font-futura-light">
            Contamos con un equipo de profesionales con
          </p>
          <p className="text-charged-blue text-center md:text-4xl text-2xl font-futura-bold uppercase italic">
            más de 15 años
          </p>
          <p className="text-white text-center md:text-base font-futura-light">
            de trayectoria en el sector y el mejor relacionamiento con los
            proveedores{" "}
            <span className="font-futura-bold">
              nacionales e internacionales.
            </span>
          </p>
        </div>
      </section>
      <section className="bg-black relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex items-center justify-evenly text-white pt-4 pb-10 md:pb-0 md:pt-4 px-4 md:px-0">
          <div className="flex-1 max-w-md text-center md:text-left">
            <h4 className="capitalize md:text-4xl text-2xl font-futura-heavy ">
              Nuestra <span className="text-charged-blue">misión</span>
            </h4>
            <p className="font-futura-light">
              Posicionarnos como una de las principales Organizaciones a nivel
              Nacional dentro del ámbito de servicio de Agencias de Viajes,
              creando un modelo de trabajo basado en la excelencia de nuestros
              servicios, logrando la preferencia y fidelidad de nuestros
              clientes.
            </p>
          </div>
          <div className="relative z-10 hidden md:block">
            <img
              className="md:w-[350px]"
              src={`${domain}wp-content/uploads/2025/04/mision-imagen.webp`}
              alt="Nuestra misión"
            />
          </div>
          <img
            className="absolute md:w-[450px] -right-10 top-0 z-0 hidden md:block"
            src={`${domain}wp-content/uploads/2025/04/bg-fly.png`}
            alt="Backround vuelo"
          />
        </div>
        <div className="h-6 bg-charged-blue relative z-10"></div>
      </section>
      <section className="h-[40vh] md:h-[70vh] relative">
        <img
          className="h-[40vh] md:h-[70vh] w-full object-cover absolute"
          src={`${domain}wp-content/uploads/2025/04/bg-valores.webp`}
          alt=""
        />
      </section>
      <section className="bg-black bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${domain}wp-content/uploads/2025/04/07-Nosotros_03.png)` }}>
        <div className="max-w-5xl mx-auto md:py-16 py-10">
          <div className="max-w-3xl mx-auto py-10">
            <h4 className="text-white text-center md:text-4xl text-2xl font-futura-heavy">
                ¿Por qué <span className="text-charged-blue">elegirnos?</span>
            </h4>
          </div>
          <div className="flex justify-center flex-wrap text-white font-object-regular gap-x-6 gap-y-8 px-8 md:px-0">
            <div className="border border-charged-blue rounded-xl md:w-[30%] md:h-[220px] p-6">
                <img className="h-13 mx-auto mb-4" src={`${domain}wp-content/uploads/2025/04/icon-9.png`} alt="Disponemos del mejor recurso" />
                <p>Disponemos del mejor recurso humano para hacer de tu viaje una experiencia única.</p>
            </div>
            <div className="border border-charged-blue rounded-xl md:w-[30%] md:h-[220px] p-6">
                <img className="h-14 mx-auto mb-4" src={`${domain}wp-content/uploads/2025/04/icon-10.png`} alt="Gestionamos cada detalle" />
                <p>Gestionamos cada detalle antes, durante y después de tu viaje para garantizarte resultados.</p>
            </div>
            <div className="border border-charged-blue rounded-xl md:w-[30%] md:h-[220px] p-6">
                <img className="h-14 mx-auto mb-4" src={`${domain}wp-content/uploads/2025/04/icon-11.png`} alt="Contamos con tecnología de punta" />
                <p>Contamos con tecnología de punta,  puesta a tu disposición para hacerte fácil la gestión de tus viajes.</p>
            </div>
            <div className="border border-charged-blue rounded-xl md:w-[30%] px-6 py-10">
                <img className="h-14 mx-auto mb-4" src={`${domain}wp-content/uploads/2025/04/icon-12.png`} alt="Apostampos por el viaje" />
                <p className="mb-4">Apostamos por el viaje, pero no a cualquier precio, preparamos los viajes pensando en lo que más se adapte a tu presupuesto.</p>
                <p>Cumpliendo todas las medidas de seguridad y con todas las garantías.</p>
            </div>
            <div className="border border-charged-blue rounded-xl md:w-[30%] px-6 py-10">
                <img className="h-14 mx-auto mb-4" src={`${domain}wp-content/uploads/2025/04/icon-13.png`} alt="Queremos conocer nuevos lugares" />
                <p>Queremos que además de conocer nuevos lugares, que tu viaje, facilite el encuentro con el otro, propiciando el intercambio cultural y el entendimiento.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
