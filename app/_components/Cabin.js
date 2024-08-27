import TextExpander from "@/app/_components/TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

function Cabin({ cabin }) {
  const { name, maxCapacity, image, discription } = cabin;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_4fr] overflow-hidden gap-6 lg:gap-20 border border-primary-800 py-6 px-6 lg:py-10 lg:px-10 mb-12 lg:mb-24">
      <div className="relative w-full h-64 lg:h-auto lg:scale-[1.15] -translate-x-3 ">
        <Image fill className="object-cover" src={image} alt={`Cabin ${name}`} />
      </div>

      <div>
        <h3 className="text-accent-100 font-black text-4xl lg:text-7xl mb-5 lg:translate-x-[-254px] bg-primary-950 p-4 lg:p-6 pb-1 w-full lg:w-[150%]">Cabin {name}</h3>

        <p className="text-base lg:text-lg text-primary-300 mb-6 lg:mb-10">
          <TextExpander>{discription}</TextExpander>
        </p>

        <ul className="flex flex-col gap-3 lg:gap-4 mb-7">
          <li className="flex gap-2 lg:gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-base lg:text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-2 lg:gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-base lg:text-lg">
              Located in the heart of the <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-2 lg:gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-base lg:text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
