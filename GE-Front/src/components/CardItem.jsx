import React from "react";

function CardItem() {
  const product = [
    {
      name: "Galaxy A04",
      price: "$ 79.999",
      cuotas: "Mismo Precio en 6 cuotas de 13.333",
      envio: "envio gratis",
      description: "Samsung galaxy A04 128GB negro 4GB RAM",
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-white m-1 ">
        {product.map((item) => (
          <div
            key={item.name}
            className=" cursor-pointer hover:shadow-2xl pointer hover:bg-gray-200 flex flex-col justify-center items-start border border-gray-300 p-3 rounded"
          >
            <div className="flex justify-center items-center self-center w-full border-b  border-b-gray-300">
              <img
                className="w-2/6 h-auto justify-self-center"
                src="../public/telefono-prueba.png"
                alt="imagen telefono samsung A04"
              />
            </div>
            <h2 className="font-extralight text-3xl pt-3">{item.price}</h2>
            <p className="text-green-600 font-bold">{item.cuotas}</p>
            <p className="text-green-800 font-semibold">{item.envio}</p>
            <p className="w-5/6 text-gray-600 text-xs">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardItem;
