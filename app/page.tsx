"use client";
import { useState } from "react";

const Home = () => {
  const [nama, setNama] = useState("Rizky");
  const [nomor, setNomor] = useState(100);

  return (
    <div className="flex flex-col gap-4 m-8 w-1/4">
      <h1 className="h1-bold background-light850_dark100">
        Welcome of the world Next.jS tailwind css is FUN!
      </h1>

      <input
        type="text"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        className="p-2 rounded-lg"
      />

      <button className="bg-blue-500 text-white p-2 rounded-lg">Diganti Mas Nic</button>
    </div>
  );
};

export default Home;
