import Link from "next/link";
import { auth } from "../_libs/auth";

export default async function Navigation() {
  const session = await auth();
  return (
    <nav className="z-10 text-xl sticky top-0 left-0">
      <ul className="flex  gap-4  sm:gap-9  md:gap-16 text-base sm:text-xl    items-center">
        <li>
          <Link href="/cabins" className="hover:text-accent-400 transition-colors">
            Cabins
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-accent-400 transition-colors">
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link href="/account" className="hover:text-accent-400 transition-colors flex items-center gap-1 sm:gap-2  md:gap-3">
              <img className="h-5 md:h-8 rounded-full" src={session.user.image} alt={session.user.image} referrerPolicy="no-referrer" />
              <span> Guest area</span>
            </Link>
          ) : (
            <Link href="/account" className="hover:text-accent-400 transition-colors">
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
