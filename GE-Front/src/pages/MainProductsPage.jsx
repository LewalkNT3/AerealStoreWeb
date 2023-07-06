import React from "react";
import SliderADImages from "../components/SliderADImages";
import CardItem from "../components/CardItem";
import BrandsUsageCards from "../components/BrandsUsageCards";

export default function MainProductsPage() {
  return (
    <>
      <main className="overflow-hidden">
        <div>
          <SliderADImages />
        </div>
        <div className="mx-20">
          <section className="flex flex-col">
            <div className="flex flex-row gap-3 ml-3 mt-3 pb-3 items-center">
              <h3 className="text-2xl font-light">Ofertas</h3>
              <a
                href="#"
                className="pt-1 text-blue-500 hover:underline transition-all ease-out"
              >
                Ver todas
              </a>
            </div>
            <div className="flex flex-row flex-shrink-2 justify-between m-4 mt-0">
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
            </div>
          </section>

          <section>
            <div className="flex flex-col justify-center items-center p-10">
              <div className="">
                <h1 className="font-bold text-3xl italic">
                  Marcas con las que trabajamos
                </h1>
              </div>
              <div className="flex flex-row justify-center items-center gap-10 pb-10">
                <BrandsUsageCards />
                <BrandsUsageCards />
                <BrandsUsageCards />
              </div>
            </div>
          </section>

          <section className="flex flex-col">
            <div className="flex flex-row gap-3 ml-3 mt-3 pb-3 items-center">
              <h3 className="text-2xl font-light">Ofertas</h3>
              <a
                href="#"
                className="pt-1 text-blue-500 hover:underline transition-all ease-out"
              >
                Ver todas
              </a>
            </div>
            <div className="flex flex-row flex-shrink-2 justify-between m-4 mt-0">
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
