import React, { useContext } from "react";
import FrenchFlag from "../../public/france.svg";
import SpanishFlag from "../../public/spain.svg";
import EnglishFlag from "../../public/united-kingdom.svg";
import Image from "next/image";
import { Context } from "@/app/context/langContext";

const ToggleLangs = () => {
  const { toggleLang } = useContext(Context);

  return (
    <div className="fixed top-4 left-10 flex flex-row space-x-2 p-2 rounded-full bg-opacity-50 bg-black backdrop-blur-md mr-4 md:mr-8 lg:mr-12">
      <div className="cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out border-2 border-white rounded-full">
        <Image
          onClick={() => toggleLang("FR")}
          src={FrenchFlag}
          alt="French Flag"
          width={30}
          height={30}
        />
      </div>
      <div className="cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out border-2 border-white rounded-full">
        <Image
          onClick={() => toggleLang("ES")}
          src={SpanishFlag}
          alt="Spanish Flag"
          width={30}
          height={30}
        />
      </div>
      <div className="cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out border-2 border-white rounded-full">
        <Image
          onClick={() => toggleLang("EN")}
          src={EnglishFlag}
          alt="English Flag"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
};

export default ToggleLangs;
