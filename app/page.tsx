import Card from "./components/Card/Card";
import Brands from "./components/Home/Brands";
import HeroSection from "./components/Home/HeroSection";
import MapSection from "./components/Home/MapSection";
import QuotationSection from "./components/Home/QuotationSection";
import { cardDetails } from "./data/heroCardDetails";
export default function Home() {
  return (
    <section>
      <HeroSection />
      <div className="w-full bg-lightColor dark:bg-darkColor">
        <div className="max-w-[1240px] py-10 md:py-20 px-3 md:px-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cardDetails.map((card) => (
            <Card
              key={card.id}
              path={card.path}
              img={card.img}
              title={card.title}
            />
          ))}
        </div>
      </div>
      <div className="bg-lightColor text-darkColor dark:bg-darkColor dark:text-lightColor">
        <QuotationSection />
      </div>
      <Brands />
      <div className="text-darkColor dark:text-lightColor">
        <MapSection />
      </div>
    </section>
  );
}
