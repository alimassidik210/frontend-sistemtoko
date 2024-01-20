import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { SingleToko } from "../components/SingleToko";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(products);

  useEffect(() => {
    axios.get("https://sistemtoko.com/public/demo/product").then((response) => {
      setProducts(response.data.aaData);
    });
  }, []);

  return (
    <div className="p-4">
      <div>
        <div className="my-3">
          <h1>Daftar Product</h1>
        </div>
        <div className="grid grid-cols-6 max-md:grid-cols-1 gap-4">
          {products.map((product, index) => (
            <SingleToko key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
