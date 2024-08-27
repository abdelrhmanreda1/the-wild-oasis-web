"use client";

import { createContext, useContext, useState } from "react";

const initailState = { from: undefined, to: undefined };
const ReservationContext = createContext();

function ReservationProvider({ children }) {
  const [range, setRange] = useState(initailState);
  const resetRange = () => setRange(initailState);
  return <ReservationContext.Provider value={{ range, setRange, resetRange }}>{children}</ReservationContext.Provider>;
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined) throw new Error("Context was used out provider");

  return context;
}
export { ReservationProvider, useReservation };
