export default function Footer() {
  const domain = import.meta.env.VITE_WP_DOMAIN;

  return (
    <footer>
      <section className="bg-black">
        <div className="flex flex-col md:flex-row justify-between md:items-center text-white font-futura-light max-w-5xl 2xl:max-w-7xl mx-auto  md:py-10 pb-6 ">
            <img className="h-18 object-contain " src={`${domain}wp-content/uploads/2025/03/logo-white.webp`} alt="Gotravel logo" />
            <div className="flex flex-col gap-6 md:flex-row md:gap-20 ps-4 md:ps-0 pt-6 md:pt-0">
                <div className="flex flex-col gap-2 flex-1">
                    <span className="font-futura-heavy underline underline-offset-6 pb-2">Información</span>
                    <span>Nosotros</span>
                    <span>Misión</span>
                    <span>Visión</span>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <span className="font-futura-heavy underline underline-offset-6 pb-2">Servicio</span>
                    <span>Vacacionles</span>
                    <span>Corporativos</span>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <span className="font-futura-heavy underline underline-offset-6 pb-2">Contacto</span>
                    <span>agomez@gotravel.com.co</span>
                    <span>316 448 9560</span>
                    <span>Bogotá, Colombia</span>
                </div>
            </div>
        </div>
      </section>
      <div className="bg-charged-blue ">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl 2xl:max-w-7xl mx-auto py-2">
          <span className="text-white font-futura-heavy">
            Gotravel - 2025 Made in Agencia Iccana
          </span>
          <div className="flex gap-4 items-center">
            <div>
              <img
                className="h-7"
                src={`${domain}wp-content/uploads/2025/03/faebook-gotravel.svg`}
                alt="Facebook gotravel"
              />
            </div>
            <div className="bg-white rounded-full p-1">
              <img
                className="h-5"
                src={`${domain}wp-content/uploads/2025/03/instagram-gotravel.svg`}
                alt="Instagram gotravel"
              />
            </div>
            <div className="bg-white rounded-full p-1">
              <img
                className="h-5"
                src={`${domain}wp-content/uploads/2025/03/x-gotravel.svg`}
                alt="X gotravel"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
