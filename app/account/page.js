import { auth } from "@/app/_libs/auth";

export const metadata = {
  title: "Guest area",
};
export default async function Page() {
  const session = await auth();
  console.log(session);
  const firstName = session?.user.name.split(" ").at(0);
  return <h2 className="font-semibold mt-[-4rem] sm:mt-0 sm:text-2xl  text-3xl text-accent-400 mb-7">Welcome,{firstName}</h2>;
}
