import SignInButton from "@/app/_components/SignInButton";

export const metadata = {
  title: "Login",
};
export default function Page() {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="  text-lg sm:text-2xl md:text-3xl  font-semibold">Sign in to access your guest area</h2>
      <SignInButton />
    </div>
  );
}
