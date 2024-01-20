import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { ModalBox } from "./ModalBox";

export const SingleToko = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="bg-gray-200 p-3 rounded-md">
      <div className=" bg-gray-400 ">
        <img
          src={product.photo}
          alt=""
          className="  w-full object-cover hover:scale-105 transition-scale duration-300 "
        />
      </div>
      <div className="my-3 flex items-center justify-around">
        <h3 className="text-xl">{product.name}</h3>
        <p className="text-xl font-semibold">Rp.{product.price}</p>
      </div>
      <div className="flex justify-around">
        <Link
          //   to={`/toko/details/${product.id}`}
          onClick={() => setShowModal(true)}
        >
          <FaRegEye className="text-xl text-blue-800" />
        </Link>
        <Link to={`/toko/edit/`}>
          <FaRegEdit className="text-xl text-yellow-800" />
        </Link>
        <Link to={`/toko/delete/`}>
          <MdDelete className="text-xl text-red-800" />
        </Link>
      </div>
      {showModal && (
        <ModalBox product={product} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};
