import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Ofertas } from "../types";
import { getPageInfo } from "../helpers/wp";
import TitleOfertas from "../components/TitleOfertas";
import TuFelicidad from "../components/TuFelicidad";
import CintilloIcon from "../components/CintilloIcon";
import ContactForm from "../components/ContactForm";

export default function Inicio() {
  const domain = import.meta.env.VITE_WP_DOMAIN;
  const [ofertas, setOfertas] = useState<Ofertas[]>([]);
  const infoCintillo = {
    item1: {
      image: `${domain}wp-content/uploads/2025/03/icon-1.webp`,
      text: "Flexibilidad en cambios",
    },
    item2: {
      image: `${domain}wp-content/uploads/2025/03/icon-2.webp`,
      text: "Paga a cuotas",
    },
    item3: {
      image: `${domain}wp-content/uploads/2025/03/icon-3.webp`,
      text: "Ofertas a tu gusto",
    },
    item4: {
      image: `${domain}wp-content/uploads/2025/03/icon-4.webp`,
      text: "Planes al destino que quieras",
    },
  };

  useEffect(() => {
    getPageInfo("inicio")
      .then((data) => setOfertas(data))
      .catch((error) => console.error("Error fetching menu:", error));
  }, []);

  return (
    <>
      <section className="relative h-screen">
        <img
          className="h-screen w-full object-cover object-top absolute"
          src={`${domain}wp-content/uploads/2025/03/slide-1.webp`}
          alt="Fondo"
        />
        <div className="z-10 relative flex justify-center items-end 2xl:items-center w-full h-[95%] md:h-[85%] 2xl:h-screen md:max-w-4xl 2xl:max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center w-full justify-between 2xl:gap-20 px-8 md:px-0">
            <div className="md:w-[50%] 2xl:flex-1">
              <h2 className="text-white font-futura-heavy md:text-3xl text-xl uppercase pl-4">
                Mexico al completo
              </h2>
              <img
                className="h-45 md:h-60 2xl:h-100 md:w-full 2xl:w-auto"
                src={`${domain}wp-content/uploads/2025/03/mexico-imagen.webp`}
                alt=""
              />
            </div>
            <div className="2xl:flex-1 flex flex-col font-futura-light text-white text-lg gap-4 ">
              <div className="flex flex-col">
                <span className="text-base">Desde</span>
                <span className="font-futura-bold md:text-4xl text-3xl">
                  339 USD
                </span>
                <span>Por persona en habitación Doble</span>
              </div>
              <div className="flex flex-col border border-white p-2 rounded-lg md:w-[250px] w-fit">
                <span className="text-base">Duración</span>
                <span className="md:text-2xl text-xl font-futura-bold">
                  8 días / 7 noches
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-base">1 País</span>
                <span className="font-futura-bold">Mexico</span>
                <span className="border-b border-white my-2 2xl:max-w-[350px]"></span>
                <span className="text-base">Salidas</span>
                <span className="font-futura-bold">
                  Miércoles llegando a ciudad de mexico
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CintilloIcon infoCintillo={infoCintillo} />
      <section>
        <div className="bg-black py-10 px-4 md:px-0">
          <TitleOfertas />
          <div className="md:max-w-5xl mx-auto pt-8 ofertas relative">
            <button className="swiper-button-prev"></button>
            <button className="swiper-button-next"></button>
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              loop={true}
              watchOverflow={false}
              pagination={false}
              breakpoints={{
                1024: {
                  slidesPerView: 4,
                },
              }}
              className="w-full "
            >
              {ofertas[0]?.acf?.ofertas?.map((item, index) => (
                <SwiperSlide key={index}>
                  <img
                    loading="lazy"
                    className="h-100 md:h-[380px] mx-auto"
                    src={item.imagen.url}
                    alt={`Oferta-${index}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <TuFelicidad />
      <section>
        <div className="bg-black py-10 px-4 md:px-0">
          <div>
            <h4 className="text-white text-center md:text-4xl text-2xl font-futura-heavy">
              Alista tu maleta "YA"
            </h4>
            <p className="text-white text-center md:text-lg py-4 font-futura-light">
              <span className="text-charged-blue">Paquetes nacionales</span> con
              los mejores precios
            </p>
            <div className="border-b-2 border-charged-blue w-[150px] mx-auto"></div>
          </div>
          <div className="md:max-w-4xl mx-auto pt-8 ofertas relative">
            <button className="swiper-button-prev"></button>
            <button className="swiper-button-next"></button>
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              loop={true}
              watchOverflow={false}
              pagination={false}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="w-full "
            >
              {ofertas[0]?.acf?.paquetes_nacionales?.map((item, index) => (
                <SwiperSlide key={index}>
                  <img
                    loading="lazy"
                    className="h-100 md:h-[420px] mx-auto"
                    src={item.imagen.url}
                    alt={`Oferta-${index}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <a
            className="bg-white font-futura-heavy text-charged-blue mx-auto block w-fit px-4 py-2 rounded-xl mt-8"
            href=""
          >
            Ver todos los paquetes
          </a>
        </div>
      </section>
      <section>
        <div className="bg-black pt-10 pb-20 px-4 md:px-0">
          <div className="flex flex-col md:flex-row md:max-w-5xl mx-auto">
            <div className="flex-1 border border-charged-blue flex flex-col gap-2 p-10 font-myriad-regular">
              <span className="text-white ">Pagos cómodos y seguros</span>
              <span className="text-charged-blue">
                Consulta nuestras formas de pago
              </span>
            </div>
            <div className="flex-2 bg-white grid md:grid-cols-5 grid-cols-3 gap-4 md:gap-0 pagos">
              <img
                className="h-6"
                src={`${domain}wp-content/uploads/2025/03/visa.svg`}
                alt=""
              />
              <img
                className="h-14"
                src={`${domain}wp-content/uploads/2025/03/american-express.svg`}
                alt=""
              />
              <img
                className="h-16"
                src={`${domain}wp-content/uploads/2025/03/mastercard.svg`}
                alt=""
              />
              <img
                className="h-8"
                src={`${domain}wp-content/uploads/2025/03/diners-club-logo.svg`}
                alt=""
              />
              <img
                className="h-10"
                src={`${domain}wp-content/uploads/2025/03/pse.svg`}
                alt=""
              />
              <img
                className="h-10"
                src={`${domain}wp-content/uploads/2025/03/bancolombia-logo.png`}
                alt=""
              />
              <img
                className="h-10"
                src={`${domain}wp-content/uploads/2025/03/efecty-colombia.png`}
                alt=""
              />
              <img
                className="h-8"
                src={`${domain}wp-content/uploads/2025/03/logo-daviplata.svg`}
                alt=""
              />
              <img
                className="h-6"
                src={`${domain}wp-content/uploads/2025/03/nequi.svg`}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-black py-10 px-4 md:px-0">
          <div>
            <h4 className="text-white text-center md:text-4xl text-2xl font-futura-heavy">
              Te espera una nueva “AVENTURA”
            </h4>
            <p className="text-white text-center md:text-lg py-4 font-futura-light">
              <span className="text-charged-blue">
                Paquetes internacionales
              </span>{" "}
              con los mejores precios
            </p>
            <div className="border-b-2 border-charged-blue w-[150px] mx-auto"></div>
          </div>
          <div className="md:max-w-4xl mx-auto pt-8 ofertas relative">
            <button className="swiper-button-prev"></button>
            <button className="swiper-button-next"></button>
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              loop={true}
              watchOverflow={false}
              pagination={false}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="w-full "
            >
              {ofertas[0]?.acf?.paquetes_internacionales?.map((item, index) => (
                <SwiperSlide key={index}>
                  <img
                    loading="lazy"
                    className="h-100 md:h-[420px] mx-auto"
                    src={item.imagen.url}
                    alt={`Oferta-${index}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <a
            className="bg-white font-futura-heavy text-charged-blue mx-auto block w-fit px-4 py-2 rounded-xl mt-8"
            href=""
          >
            Ver todos los paquetes
          </a>
        </div>
      </section>
      <section>
        <div className="bg-black py-14 px-4 md:px-0 relative">
          <div className=" relative">
            <img
              className="absolute w-full h-full object-cover"
              src={`${domain}wp-content/uploads/2025/03/fondo.webp`}
              alt=""
            />
            <div className="flex flex-col md:flex-row gap-8 md:gap-0 px-6 md:px-0 justify-evenly md:max-w-5xl mx-auto text-white font-futura-medium py-6">
              <div className="flex relative z-10 border border-charged-blue rounded-2xl md:w-2/5 items-center gap-8 py-2">
                <div className="bg-charged-blue h-full m-1 flex items-center rounded-2xl px-3 py-4 md:py-0">
                  <img
                    className="h-12"
                    src={`${domain}wp-content/uploads/2025/03/asesoria-icon.png`}
                    alt=""
                  />
                </div>
                <div className="flex-2">
                  <h4 className="text-xl">
                    Asesoria{" "}
                    <span className="text-charged-blue">Personalizada</span>
                  </h4>
                  <p className="font-futura-light">
                    Nuestros agetes expertos te pueden ayudar a concretar tu
                    viaje
                  </p>
                  <a href="" className="font-futura-heavy text-charged-blue">
                    Contáctanos
                  </a>
                </div>
              </div>
              <div className="flex relative z-10 border border-charged-blue rounded-2xl md:w-2/5 items-center gap-8 py-2">
                <div className="bg-charged-blue h-full m-1 flex items-center rounded-2xl px-3 py-4 md:py-0">
                  <img
                    className="h-12"
                    src={`${domain}wp-content/uploads/2025/03/viajes-icon.png`}
                    alt=""
                  />
                </div>
                <div className="flex-2">
                  <h4 className="text-xl">
                    Viajes a la{" "}
                    <span className="text-charged-blue">Medida</span>
                  </h4>
                  <p className="font-futura-light">
                    Tienes un viaje en mente y no sabes por dónde empezar
                  </p>
                  <a href="" className="font-futura-heavy text-charged-blue">
                    Contáctanos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="relative">
          <img className="h-[50vh] md:h-[80vh] w-full object-cover object-top" src={`${domain}/wp-content/uploads/2025/04/fondo-we-care-you.webp`} alt="" />
          <a href="" className="absolute md:bottom-20 bottom-4 left-1/2 -translate-x-1/2 bg-white text-charged-blue font-futura-heavy block w-fit text-lg px-4 py-1 rounded-lg">Más información</a>
        </div>
      </section>
      <section className="bg-black py-10 px-4 md:px-0">
        <div className="max-w-5xl mx-auto">
          <div>
            <h4 className="text-white text-center md:text-4xl text-2xl font-futura-heavy">
              Blog
            </h4>
            <p className="text-white text-center md:text-lg py-4 font-futura-light">
              <span className="text-charged-blue">Noticias del</span> sector
              turistico
            </p>
            <div className="border-b-2 border-charged-blue w-[150px] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-4 mt-8">
            {[...Array(3)].map((_, index) => (
              <div className="flex flex-col bg-white text-black" key={index}>
                <img
                  src={`${domain}wp-content/uploads/2025/04/article-1.webp`}
                  alt=""
                />
                <div className="flex flex-col px-3 py-1 gap-3">
                  <div className="flex justify-between items-center font-futura-heavy text-sapphire-blue">
                    <span>Donec pede justo,</span>
                    <span className="text-xs">12/03/2024</span>
                  </div>

                  <p className="font-futura-light leading-[normal]">
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo
                  </p>
                  <a
                    className="font-futura-heavy text-charged-blue underline"
                    href="#"
                  >
                    Ver más
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href=""
              className="bg-white text-charged-blue font-futura-heavy text-lg px-4 py-2 rounded-lg"
            >
              Ver todas las noticias
            </a>
          </div>
        </div>
        <div className="flex mt-20 max-w-6xl 2xl:mx-auto">
          <div className="md:block hidden">
            <img className="w-full h-full object-cover object-top" src={`${domain}wp-content/uploads/2025/04/imagen-form.webp`} alt="" />
          </div>
          <div className="md:text-right text-white flex-2 text-center">
              <h5 className="font-futura-heavy md:text-4xl text-3xl mb-2">Contacto</h5>
              <p className="font-object-regular mb-4">Nosotros te ayudamos a elegir tu próximo destino</p>
              <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
