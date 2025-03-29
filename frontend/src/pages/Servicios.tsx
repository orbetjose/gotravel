export default function Servicios() {
  const domain = import.meta.env.VITE_WP_DOMAIN;

  return (
    <>
      <section>
        <div className="h-[100vh]">
          <h1 className="hidden">Servicios</h1>
          <img
            className="h-full w-full object-cover object-top"
            src={`${domain}wp-content/uploads/2025/03/slide-servicios.webp`}
            alt=""
          />
        </div>
      </section>
      <section>
        <div className="bg-chinese-black py-6 md:flex justify-center gap-10 font-futura-light text-white text-lg">
          <div className="flex flex-col gap-2 items-center ">
            <span>Todo Incluido</span>
          </div>
          <div className="border-l border-white h-6 mt-auto hidden md:block"></div>
          <div className="flex flex-col gap-2 items-center">
            <span>Paquetes con Vuelos</span>
          </div>
          <div className="border-l border-white h-6 mt-auto hidden md:block"></div>
          <div className="flex flex-col gap-2 items-center">
            <span>Cruceros</span>
          </div>
          <div className="border-l border-white h-6 mt-auto hidden md:block"></div>
          <div className="flex flex-col gap-2 items-center">
            <span>Escapadas</span>
          </div>
          <div className="border-l border-white h-6 mt-auto hidden md:block"></div>
          <div className="flex flex-col gap-2 items-center">
            <span>Seguro Médico</span>
          </div>
        </div>
      </section>
      <section className="bg-black pb-8">
        <div className="h-[70vh] 2xl:h-[60vh] relative flex flex-col items-start justify-end text-white">
          <img
            className="h-full w-full object-cover object-top absolute"
            src={`${domain}wp-content/uploads/2025/03/todo-incluido.webp`}
            alt="Todo incluido"
          />
          <div className="relative z-10 md:ml-20 md:mb-20 ml-6 mb-6 mr-6">
            <h3 className="font-futura-bold uppercase text-2xl md:text-4xl mb-2 2xl:text-6xl">
              Todo incluido
            </h3>
            <p className="font-futura-medium md:text-xl">
              Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
              eleifend tellus.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-black pb-8">
        <div className="h-[70vh] 2xl:h-[60vh] relative flex flex-col items-start justify-end text-white">
          <img
            className="h-full w-full object-cover object-top absolute"
            src={`${domain}wp-content/uploads/2025/03/paquetes.webp`}
            alt="Paquetes con vuelos"
          />
          <div className="relative z-10 md:ml-20 md:mb-20 ml-6 mb-6 mr-6">
            <h3 className="font-futura-bold uppercase text-2xl md:text-4xl mb-2 2xl:text-6xl">
              Paquetes con vuelos
            </h3>
            <p className="font-futura-medium md:text-xl">
              Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
              eleifend tellus.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-black pb-8">
        <div className="h-[70vh] 2xl:h-[60vh] relative flex flex-col items-start justify-end text-white">
          <img
            className="h-full w-full object-cover object-top absolute"
            src={`${domain}wp-content/uploads/2025/03/cruceros.webp`}
            alt="Cruceros"
          />
          <div className="relative z-10 md:ml-20 md:mb-20 ml-6 mb-6 mr-6">
            <h3 className="font-futura-bold uppercase text-2xl md:text-4xl mb-2 2xl:text-6xl">
              Cruceros
            </h3>
            <p className="font-futura-medium md:text-xl">
              Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
              eleifend tellus.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-black pb-8">
        <div className="h-[70vh] 2xl:h-[60vh] relative flex flex-col items-start justify-end text-white">
          <img
            className="h-full w-full object-cover object-top absolute"
            src={`${domain}wp-content/uploads/2025/03/escapadas.webp`}
            alt="Escapadas"
          />
          <div className="relative z-10 md:ml-20 md:mb-20 ml-6 mb-6 mr-6">
            <h3 className="font-futura-bold uppercase text-2xl md:text-4xl mb-2 2xl:text-6xl">
              Escapadas
            </h3>
            <p className="font-futura-medium md:text-xl">
              Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
              eleifend tellus.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-black pb-8">
        <div className="h-[70vh] 2xl:h-[60vh] relative flex flex-col items-start justify-end text-white">
          <img
            className="h-full w-full object-cover object-top absolute"
            src={`${domain}wp-content/uploads/2025/03/servicios-medicos.webp`}
            alt="Servicios medicos"
          />
          <div className="relative z-10 md:ml-20 md:mb-20 ml-6 mb-6 mr-6">
            <h3 className="font-futura-bold uppercase text-2xl md:text-4xl mb-2 2xl:text-6xl">
              Servicios medicos
            </h3>
            <p className="font-futura-medium md:text-xl">
              Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
              eleifend tellus.{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
