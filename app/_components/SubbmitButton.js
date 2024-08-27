"use client";
import { useFormStatus } from "react-dom";
export default function SubbmitButton({ children, pendingLabel }) {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-accent-500 sm:px-6 py-4 px-4  text-sm sm:text-lg
        rounded-sm
      text-primary-800 font-semibold
       hover:bg-accent-600 transition-all
        disabled:cursor-not-allowed
       disabled:bg-gray-500
      disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}
