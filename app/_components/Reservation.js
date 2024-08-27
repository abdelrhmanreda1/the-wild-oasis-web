import { auth } from "@/app/_libs/auth";
import { getBookedDatesByCabinId, getSettings } from "@/app/_libs/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import LoginMessage from "./LoginMessage";

async function Reservation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([getSettings(), getBookedDatesByCabinId(cabin.id)]);
  const session = await auth();
  return (
    <div className="grid gap-3 md:gap-0  md:grid-cols-[60%,40%] grid-cols-1 border border-primary-800 min-h-[400px] overflow-hidden">
      <DateSelector settings={settings} bookedDates={bookedDates} cabin={cabin} />
      <div className="flex justify-center items-center w-full p-0   ">{session?.user ? <ReservationForm cabin={cabin} user={session.user} /> : <LoginMessage />}</div>
    </div>
  );
}

export default Reservation;
