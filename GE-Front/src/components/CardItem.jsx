import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchData from "../API/MLProductos.api";

function CardItem() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProudct() {
      const res = await fetchData();
      setProducts(res);
    }
    loadProudct();
  }, []);

  return (
    <div>
      <div className="flex flex-row gap-3 justify-center items-center">
        {products &&
          products.slice(0, 5).map((product, index) => (
            <div
              key={index}
              onClick={() => navigate(`/products/${product.id}`)}
              className=" cursor-pointer shadow-sm pointer hover:shadow-2xl flex flex-col justify-center items-start border border-gray-300 p-3 rounded bg-white"
            >
              <div className="flex justify-center items-center self-center h-[204px]  w-[200px] border-b  border-b-gray-300">
                <img
                  src={`http://http2.mlstatic.com/D_${product.thumbnail_id}-O.jpg`}
                  alt={product.title}
                  className="w-[46%] h-auto justify-self-center"
                />
              </div>

              {product.original_price && (
                <p className="line-through text-gray-400">
                  ${product.original_price}
                </p>
              )}
              <h2 className="font-extralight text-3xl">${product.price}</h2>
              <p className="text-gray-400">{product.address.city_name}</p>
              <p className="text-green-500">
                En {product.installments.quantity} cuotas sin interes!
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CardItem;
