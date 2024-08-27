import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";
import Image from "next/image";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking }) {
  const {
    id,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div className="flex flex-col sm:flex-row border border-primary-800 overflow-auto">
      <div className="relative h-32 w-full sm:w-1/3">
        <Image src={image} alt={`Cabin ${name}`} layout="fill" className="object-cover border-b sm:border-r border-primary-800" />
      </div>

      <div className="flex-grow px-6 py-3 flex flex-col">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-xl font-semibold">
            {numNights} nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? <span className="bg-yellow-800 text-yellow-200 w-fit  h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm mt-2 sm:mt-0">past</span> : <span className="bg-green-800 w-fit text-green-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm mt-2 sm:mt-0">upcoming</span>}
        </div>

        <p className="text-base sm:text-lg text-primary-300 mt-2 mb-2 md:mb-0">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} ({isToday(new Date(startDate)) ? "Today" : formatDistanceFromNow(startDate)}) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="flex flex-col sm:flex-row gap-5 mt-auto items-baseline">
          <p className="text-xl font-semibold text-accent-400">${totalPrice}</p>
          <p className="text-primary-300 hidden sm:block">&bull;</p>
          <p className="text-lg text-primary-300">
            {numGuests} guest{numGuests > 1 && "s"}
          </p>
          <p className="mt-2 sm:mt-0 text-sm text-primary-400 ml-auto">Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}</p>
        </div>
      </div>

      <div className="flex flex-row   sm:flex-col border-t sm:border-t-0 sm:border-l border-primary-800 w-full sm:w-[100px] ">
        {!isPast(startDate) ? (
          <>
            <Link href={`/account/reservations/edit/${id}`} className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300  border-r border-primary-800  sm:border-r-0  sm:border-b  sm:border-primary-800 flex-grow sm:px-3 hover:bg-accent-600 transition-colors hover:text-primary-900 px-6 py-3 sm:py-0 text-center justify-center">
              <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
              <span className="mt-1">Edit</span>
            </Link>
            <DeleteReservation bookingId={id} />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default ReservationCard;
