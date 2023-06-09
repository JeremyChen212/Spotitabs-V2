import { signIn } from "next-auth/react";
import Image from "next/image";
import Logo from '../public/images/spotitabs_logo.png'

export default function Login() {
  const handleLogin = () => {
    signIn("spotify", { callbackUrl: "http://localhost:3000" });
  };

  return (
    <div title="Log in to Spotify">
      <div className="flex flex-col items-center justify-center w-screen h-screen gap-20">
        <Image
          src={Logo}
          alt="spotitabs logo"
          width={400}
          height={50}
          objectFit="contain"
        />
        <button
          className="flex px-12 py-2 text-lg tracking-widest uppercase rounded-full focus:outline-none bg-primary hover:bg-opacity-80"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
