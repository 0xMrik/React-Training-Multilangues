import React, { useContext } from "react";
import { Context } from "@/app/context/langContext";
import data from "../assets/data.js";

const Contenu = () => {
  const { lang } = useContext(Context);

  return (
    <div className="p-10 lg:px-[18vw] h-screen bg-gradient-to-b from-transparent to-[rgb(var(--background-end-rgb))] text-[rgb(var(--foreground-rgb))]">
      <h1 className="text-[clamp(50px,4vw,90px)] py-20 pb-30">
        {data[lang].title}
      </h1>
      <p className="text-[clamp(22px,1.5vw,30px)] mb-4">{data[lang].txt}</p>
      <p className="text-sm italic">{data[lang].instruction}</p>
    </div>
  );
};

export default Contenu;
