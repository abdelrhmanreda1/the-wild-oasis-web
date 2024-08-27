"use client";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import { useReservation } from "./ReservationContext";

function ReservationReminder() {
  // CHANGE
  const { range, resetRange } = useReservation();

  if (!range.from || !range.to) return null;

  return (
    <div className="w-[90%] sm:w-[35%] mx-auto fixed bottom-6 left-1/2 -translate-x-1/2 py-4 sm:py-5  px-6 sm:px-8 rounded-full bg-accent-500 text-primary-800 text  font-semibold shadow-xl shadow-slate-900 flex justify-between items-center">
      <p className="text-[1rem] sm:text-xl">
        <span>👋</span> Don&apos;t forget to reserve your dates <br /> from {format(new Date(range.from), "MMM dd yyyy")} to {format(new Date(range.to), "MMM dd yyyy")}
      </p>
      <button onClick={resetRange} className="rounded-full p-1 hover:bg-accent-600 transition-all">
        <XMarkIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

export default ReservationReminder;
