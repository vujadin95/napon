import Logo from "../Logo/Logo";
import Contact from "./Contact";
import SocialNetwork from "./SocialNetwork";

const Footer = () => {
  const copyrightYear = () => {
    return new Date().getFullYear();
  };
  return (
    <>
      <footer className="flex flex-col items-center md:flex-row md:items-start flex-wrap gap-4 justify-center md:justify-between min-h-[400px] py-10 max-w-[1240px] mx-auto px-5">
        <div className="flex flex-col gap-3 max-w-[300px]">
          <Logo />
          <p className="text-lg">Činimo vaš biznis efikasnijim.</p>
        </div>
        <Contact />
        <SocialNetwork />
      </footer>
      <div className="mt-auto border-t-[1px] border-gray-300 py-4">
        <p className="text-center">
          <span>&copy; </span>
          <span className="text-sky-500">{copyrightYear()} NAPON</span> All
          right reserved!
        </p>
      </div>
    </>
  );
};
export default Footer;
