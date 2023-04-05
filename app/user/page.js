import React from "react";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

function Home() {
  return (
    <>
      <div className="flex flex-col h-screen justify-center mt-12">
        <div className=" container mx-auto text-center flex-1">User Page</div>
      </div>
    </>
  );
}

export default Home;
