import React from "react";

const products = [
  {
    Product: "Samsung Galaxy A04 5g 256gb 8gb Ram Awesome Graphite",
    Price: "$199.999",
    Offer: "11% OFF",
    QuotesType: "AHORA 12",
    QuotesPrice: "Mismo precio en 12 cuotas sin interes de $33.333",
    Vendidos: "+5000 vendidos en la pagina",
  },
];

function SingleProductsPage() {
  return (
    <main className="flex justify-center pt-4">
      <div className="bg-white flex flex-row justify-start items-center border b w-[780px] h-[580px] shadow-xl">
        <div className="w-[490px] h-full  flex justify-center items-center">
          <img
            className="w-[150px] h-[290px]"
            src="/telefono-prueba2.png"
            alt=""
          />
          {/* Poner las imagenes del producto por debajo de la imagen seleccionada */}
        </div>
        <div className="w-full h-full ">
          {products.map((item) => (
            <div className="flex flex-col h-full items-center justify-center">
              <div>
                <h1 className="font-semibold text-center text-2xl w-[350px]">
                  {item.Product}
                </h1>
              </div>
              <div className="w-[100px] pb-5 pt-2 ">
                <p className="text-white bg-custom-blue text-center rounded-md">
                  {item.QuotesType}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center pt-10">
                <div className="flex flex-col items-center gap-2">
                  <p className="text-4xl font-medium ">{item.Price}</p>
                </div>
                <div>
                  <p className="text-green-600">{item.QuotesPrice}</p>
                </div>
                <div className="flex flex-col w-44 color-white">
                  <button className="bg-custom-blue p-3 rounded-md">
                    Comprar
                  </button>
                  {/* Poner los medios de pago del producto por debajo de el boton de comprar */}
                  {/* Poner otros productos recomendados */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default SingleProductsPage;
