import { signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/router'
import { MdLogout, MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";


export default function Header() {
    const { data: session } = useSession();
    console.log(session)
    const router = useRouter();
    const logOut = () => {
        signOut({ callbackUrl: "http://localhost:3000/login"})
    }
    if (router.pathname === "/login") {
      return null;
    }
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between w-full p-4 gap-10">
            <div className="items-center gap-3 flex">
                <button className="flex items-center bg-[#489181] rounded-full focus:outline-none" 
                    onClick={() => router.back()}
                            >
                    <MdNavigateBefore className="text-3xl text-white" />
                </button>
                <button className="flex items-center bg-[#489181] rounded-full focus:outline-none" 
                    onClick={() => window.history.forward()}
                            >
                    <MdNavigateNext className="text-3xl text-white" />
                </button>
            </div>
            <div>

            </div>
            <div className="flex items-center gap-6">
        <div className="flex items-center gap-3 py-2 pl-2 pr-4 bg-[#489181] rounded-full bg-opacity-70">
          {session?.token?.picture === undefined ? (
            <AiOutlineUser className="bg-[#489181] p-1 rounded-full text-2xl" />
          ) : (
            <img
              src={session?.token?.picture}
              className="object-contain w-8 h-8 rounded-full"
              alt={session?.token?.name}
            />
          )}
          <span className="text-sm font-bold tracking-wide">
            {session?.token?.name}
          </span>
        </div>

        <div className="hidden">
          <button
            className="flex items-center justify-center bg-[#489181] bg-opacity-70 rounded-full h-10 w-10 hover:bg-[#3d7c6e] focus:outline-none cursor-pointer"
            onClick={logOut}
          >
            <MdLogout />
          </button>
        </div>
      </div>
        </header>
    )
}