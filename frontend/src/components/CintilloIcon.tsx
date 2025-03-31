type CintilloIconProps = {
  infoCintillo: {
    [items: string]: {
      image: string;
      text: string;
    };
  };
};

export default function CintilloIcon({ infoCintillo }: CintilloIconProps) {
  return (
    <section>
      <div className="bg-chinese-black py-6 md:flex justify-center gap-10 font-futura-light text-white text-lg space-y-6 md:space-y-0">
        <div className="flex flex-col gap-2 items-center ">
          <img
            className="h-11 object-contain"
            src={infoCintillo.item1.image}
            alt={infoCintillo.item1.text}
          />
          <span>{infoCintillo.item1.text}</span>
        </div>
        <div className="border-l border-white h-6 mt-auto hidden md:block"></div>
        <div className="flex flex-col gap-2 items-center">
          <img
            className="h-11 object-contain"
            src={infoCintillo.item2.image}
            alt={infoCintillo.item2.text}
          />
          <span>{infoCintillo.item2.text}</span>
        </div>
        <div className="border-l border-white h-6 mt-auto hidden md:block"></div>
        <div className="flex flex-col gap-2 items-center">
          <img
            className="h-11 object-contain"
            src={infoCintillo.item3.image}
            alt={infoCintillo.item3.text}
          />
          <span>{infoCintillo.item3.text}</span>
        </div>
        {infoCintillo.item4 && (
          <>
            <div className="border-l border-white h-6 mt-auto hidden md:block"></div>
            <div className="flex flex-col gap-2 items-center">
              <img
                className="h-11 object-contain"
                src={infoCintillo.item4.image}
                alt={infoCintillo.item4.text}
              />
              <span>{infoCintillo.item4.text}</span>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
