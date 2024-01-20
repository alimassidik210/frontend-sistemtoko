import React from "react";

export const Navbar = () => {
  return (
    <div>
      <div className="bg-slate-500 p-3 flex justify-around items-center">
        <div className="text-2xl font-bold">
          Sistem<span className="font-semibold text-white">Toko</span>
        </div>
        <div>
          <input
            type="text"
            className="rounded-md p-2 text-center"
            placeholder="cari produk ..."
          />
        </div>
        <div className="flex gap-2 text-md font-semibold">
          <div>About</div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  );
};
