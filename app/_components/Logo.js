import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image src={logo} quality={100} height="80" width="80" alt="The Wild Oasis logo" className="h-10 w-10 sm:h-11 sm:w-11 md:w-19 md:h-19" />
      <span className="hidden md:block text-xl font-semibold text-primary-100">The Wild Oasis</span>
    </Link>
  );
}

export default Logo;
