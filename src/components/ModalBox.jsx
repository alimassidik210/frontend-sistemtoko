import React from "react";
import { MdOutlineClose } from "react-icons/md";

export const ModalBox = ({ product, onClose }) => {
  return (
    <div className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div
        onClick={(event) => event.stopPropagation()}
        className=" w-[400px] bg-white rounded-xl p-4 flex flex-col  relative"
      >
        <MdOutlineClose
          className="text-3xl text-red-800 absolue left-6 top-6"
          onClick={onClose}
        />
        <div className="grid grid-cols-1 overflow-hidden bg-gray-400 ">
          <img
            src={product.photo}
            alt=""
            className=" w-full p-2 object-cover hover:scale-105 transition-scale duration-300 rounded-xl "
          />
        </div>
        <div className="my-3 flex items-center justify-around">
          <h3 className="text-xl">{product.name}</h3>
          <p className="text-xl font-semibold">Rp.{product.price}</p>
        </div>
      </div>
    </div>
  );
};
