"use client";

import { differenceInDays } from "date-fns";
import { useReservation } from "./ReservationContext";
import { createBooking } from "@/app/_libs/actions";
import SubbmitButton from "./SubbmitButton";

function ReservationForm({ cabin, user }) {
  const { range, resetRange } = useReservation();
  const { maxCapacity, regularPrice, discount, id } = cabin;

  const startDate = range.from;
  const endDate = range.to;

  const numNights = differenceInDays(endDate, startDate);
  const cabinPrice = numNights * (regularPrice - discount);

  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinPrice,
    cabinid: id,
  };

  const createBookingWithData = createBooking.bind(null, bookingData);

  return (
    <div className="scale-[1.01] sm:w-full md:w-auto  h-full ">
      <div className="bg-primary-800 text-primary-300 px-6 sm:px-16 py-2 flex justify-between  items-center">
        <p className="text-sm sm:text-base">Logged in as</p>

        <div className="flex gap-2  sm:gap-4 items-center">
          <img
            // Important to display google profile images
            referrerPolicy="no-referrer"
            className="h-6 sm:h-8 rounded-full"
            src={user.image}
            alt={user.name}
          />
          <p className="text-sm sm:text-base">{user.name}</p>
        </div>
      </div>

      <form
        // action={createBookingWithData}
        action={async (formData) => {
          await createBookingWithData(formData);
          resetRange();
        }}
        className="bg-primary-900 h-full py-10 px-8 text-lg flex gap-5 flex-col"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select name="numGuests" id="numGuests" className="text-sm md:text-base sm:px-5  px-3 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm" required>
            <option value="" key="" className="text-sm md:text-base m-2">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">Anything we should know about your stay?</label>
          <textarea name="observations" id="observations" className="sm:px-5  px-3  py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm" placeholder="Any pets, allergies, special requirements, etc.?" />
        </div>

        <div className="flex justify-end items-center gap-6">{!(startDate && endDate) ? <p className="text-primary-300 text-base">Start by selecting dates</p> : <SubbmitButton pendingLabel="Reserving...">Reserve now</SubbmitButton>}</div>
      </form>
    </div>
  );
}

export default ReservationForm;
