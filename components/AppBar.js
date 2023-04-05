import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const AppBar = () => {
  const { data: session } = useSession();
  console.log({ session });

  return (
    <div className="p-2 flex gap-5 ">
      <Link className="text-white hover:text-gray-600" href={"/"}>
        Home
      </Link>
      <Link className="text-white hover:text-gray-600" href={"/admin"}>
        Admin
      </Link>
      <Link className="text-white hover:text-gray-600" href={"/user"}>
        User
      </Link>
      <div className="ml-auto flex gap-2">
        {session?.user ? (
          <>
            <p className="text-sky-600"> {session.user.name}</p>
            <button className="text-red-500" onClick={() => signOut()}>
              Sign Out
            </button>
          </>
        ) : (
          <button className="text-green-600" onClick={() => signIn()}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default AppBar;
