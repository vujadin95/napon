import NasaResenjaCard from "../components/Card/NasaResenjaCard";
import { cardDetails } from "../data/nasaResenjaCards";
const NasaResenja = () => {
  return (
    <>
      <section className="relative min-h-[600px]">
        <img
          src="/assets/nasa-resenja/nasa-resenja.jpg"
          alt="naslovna strana nasa resenja stranice"
          className="absolute w-full top-0 left-0 h-full object-cover"
        />
        <div className="max-w-[1240px] mx-auto px-3 md:px-5 relative">
          <div className="max-w-xl ml-auto min-h-[600px] flex flex-col justify-center gap-4 text-lightColor">
            <p className="text-2xl text-right">
              <span className="text-red-500 font-bold">NAPON</span> je
              orjentisan ka inovativnim aplikacijama koje donose benefite u
              efikasnosti i kvalitetu rada rashladnih sistema i koje Vas{" "}
              <span className="text-red-500 font-bold">
                izdvajaju od ostatka tržišta
              </span>
            </p>
            <p className="text-2xl text-right">
              Sigurni smo da
              <span className="text-red-500 font-bold">naš tim</span> može
              odgovoriti na svaki Vaš zahtev iz oblasti hlađenja i termo-tehnike
              podjednako dobro u delu projektovanja i delu izvođenja projekta.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-[1240px] mx-auto px-3 md:px-5 py-5 md:py-10">
        <h2 className="text-3xl text-center">
          Aplikacije koje izdvajamo iz našeg neograničenog portfolia su:
        </h2>
        <div>
          <div className="max-w-[1240px] py-10 md:py-20 px-3 md:px-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cardDetails.map((card) => (
              <NasaResenjaCard
                key={card.id}
                img={card.img}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default NasaResenja;
