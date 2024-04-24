import Link from "next/link";
import Image from "next/image";
import naponLogo from "@/public/napon-logo.png";

const Logo = () => {
  return (
    <Link
      className="relative flex w-full max-w-[180px] min-[502px]:max-w-[250px] items-center justify-center h-[50px]"
      href={"/"}
    >
      <Image
        src={naponLogo}
        alt="Napon Company Logo"
        fill
        sizes="(max-width: 250px) 100vw"
        className=" object-contain dark:invert"
      />
    </Link>
  );
};
export default Logo;
