import { auth } from "@/app/_libs/auth";

export const metadata = {
  title: "Guest area",
};
export default async function Page() {
  const session = await auth();
  console.log(session);
  const firstName = session?.user.name.split(" ").at(0);
  return <h2 className="font-semibold mt-[-6rem] sm:mt-4 sm:text-4xl  text-3xl text-accent-400 mb-7 tracking-wide">Welcome , {firstName}</h2>;
}
