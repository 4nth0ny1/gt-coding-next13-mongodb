import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20 px-4 bg-slate-800 text-white my-4">
      <Link href="/">GTCoding</Link>
      <Link href="/addTopic">Add Topic</Link>
    </div>
  );
};

export default Navbar;
