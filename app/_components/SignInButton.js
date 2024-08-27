import { signInAction } from "@/app/_libs/actions";

function SignInButton() {
  return (
    <form action={signInAction}>
      <button className="flex items-center sm:gap-6 gap-3 text-lg border border-primary-300 px-10 py-4 font-medium hover:border-primary-600 hover:text-primary-200">
        <img src="https://authjs.dev/img/providers/google.svg" alt="Google logo" height="24" width="24" />
        <span className="text-sm sm:text-lg">Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
