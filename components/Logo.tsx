import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="font-bold text-xl tracking-tight text-foreground hover:cursor-pointer"
    >
      Formable
    </Link>
  );
};

export default Logo;
