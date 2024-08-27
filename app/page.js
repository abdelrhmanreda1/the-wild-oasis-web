import Link from "next/link";

import Image from "next/image";
import bg from "@/public/bg.png";
export default function Home() {
  return (
    <main className="mt-24">
      <Image src={bg} fill quality={80} placeholder="blur" className="object-cover object-top" alt="Mountains and forests with two cabins" />

      <div className="relative z-10 text-center">
        <h1 className=" text-3xl sm:text-5xl md:text-6xl lg:text-8xl text-primary-50 mb-10 tracking-tight font-normal">Welcome to paradise.</h1>
        <Link href="/cabins" className="bg-accent-500 px-4 py-4 sm:px-4 sm:py-4  md:px-8 md:py-6 text-primary-800 sm:text-sm  md:text-lg font-semibold hover:bg-accent-600 transition-all rounded-sm">
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
