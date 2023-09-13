import Card from "./components/Card/Card";
import Brands from "./components/Home/Brands";
import HeroSection from "./components/Home/HeroSection";
import MapSection from "./components/Home/MapSection";
import QuotationSection from "./components/Home/QuotationSection";
import { cardDetails } from "./data/heroCardDetails";
export default function Home() {
  return (
    <section className="">
      <HeroSection />
      <div className="w-full bg-lightColor dark:bg-darkColor">
        <div className="flex items-center flex-wrap gap-5 pt-10 pb-10 max-w-[1240px] mx-auto px-5">
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
      <div className="bg-lightColor text-darkColor dark:bg-darkColor dark:text-lightColor bg-[url('/superheat-black.png')] dark:bg-[url('/superheat-white.png')] bg-contain bg-center bg-s bg-no-repeat">
        <QuotationSection />
      </div>
      <div className="">
        <Brands />
      </div>
      <div className="bg-primary text-neutral">{/* <MapSection /> */}</div>
    </section>
  );
}
