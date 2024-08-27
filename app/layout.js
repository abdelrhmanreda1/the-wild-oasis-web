import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "@/app/_components/Header";
import { ReservationProvider } from "@/app/_components/ReservationContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: {
    template: "%s / the Wild Oasis",
    default: "Welcome / the Wild Oasis ",
  },
  description: "/Luxurious Cabin hotel, located in the heart of the Italian Dolomites,surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased `}>
        <Header />
        <div className="flex-1 py-12 px-8 grid ">
          <main className=" max-w-7xl mx-auto w-full ">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
