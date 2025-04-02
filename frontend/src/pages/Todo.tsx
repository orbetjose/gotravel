import { useState, useEffect } from "react";
import { Ofertas } from "../types";
import { getPageInfo } from "../helpers/wp";
import HeroBanner from "../components/HeroBanner";
import TitleOfertas from "../components/TitleOfertas";
import TuFelicidad from "../components/TuFelicidad";
import CintilloIcon from "../components/CintilloIcon";

export default function Todo() {
  const domain = import.meta.env.VITE_WP_DOMAIN;
  const [ofertas, setOfertas] = useState<Ofertas[]>([]);
  const infoCintillo = {
    item1: {
      image: `${domain}wp-content/uploads/2025/03/diversion-icon.png`,
      text: "Diversión",
    },
    item2: {
      image: `${domain}wp-content/uploads/2025/03/paquetes-icon.png`,
      text: "Paquetes a todo destino",
    },
    item3: {
      image: `${domain}wp-content/uploads/2025/03/comodidad-icon.png`,
      text: "Comodidad",
    },
  };

  const banner = domain + "wp-content/uploads/2025/03/slide-todo.webp";



  useEffect(() => {
    getPageInfo("todo-incluido")
      .then((data) => setOfertas(data))
      .catch((error) => console.error("Error fetching menu:", error));
  }, []);

  return (
    <>
      <HeroBanner banner={banner} object_position="top" />
      <CintilloIcon infoCintillo={infoCintillo} />

      <section>
        <div className="bg-black py-10 px-4 md:px-0">
          <TitleOfertas />
          <div className="md:max-w-3xl mx-auto pt-8 relative space-y-8">
            <div className="overflow-x-scroll md:overflow-hidden">
              <div className="grid grid-cols-3 w-[768px] md:w-auto">
                {ofertas[0]?.acf?.ofertas.map((item, index) => (
                  <img
                    key={index}
                    className="h-90 mx-auto"
                    src={item.imagen.url}
                    alt={`Oferta-${index}`}
                  />
                ))}
              </div>
            </div>
            <div className="overflow-x-scroll md:overflow-hidden">
              <div className="grid grid-cols-3  w-[768px] md:w-auto">
                {ofertas[0]?.acf?.paquetes_internacionales.map(
                  (item, index) => (
                    <img
                      key={index}
                      className="h-90 mx-auto"
                      src={item.imagen.url}
                      alt={`Oferta-${index}`}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <TuFelicidad />
      <div className="separator pb-12 bg-black"></div>
    </>
  );
}
