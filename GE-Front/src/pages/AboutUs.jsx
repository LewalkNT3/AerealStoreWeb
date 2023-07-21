import React from "react";

function AboutUs() {
  return (
    <div className="h-screen flex flex-col items-center relative">
      <img src="/merca-4.webp" alt="merca-1" className="z-0 w-screen" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col bg-white self-center items-center shadow-2xl border border-gray-400 w-[40%] h-[75%] p-5">
          <h2 className="text-blue-600 font-bold text-3xl mb-4">
            Quienes Somos?
          </h2>
          <p className="font-medium w-[450px] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sunt
            laudantium quaerat sapiente minima accusamus iure ducimus libero
            earum optio voluptate amet nesciunt blanditiis quam, dolores,
            aliquam, voluptatum eligendi molestiae!
          </p>
          <div className="mt-4">
            <h3 className="text-blue-500 text-xl font-bold text-center">
              Por que hacemos esto?
            </h3>
            <p className="font-medium w-[450px] text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              quis, at quod ratione alias placeat dolorum sint soluta id saepe
              ullam nesciunt sequi sed, quibusdam aliquid ad quaerat sapiente
              quos.
            </p>
          </div>
          <div className="flex self-center pt-10 gap-10">
            <button className="p-3 bg-blue-600 rounded-xl text-white hover:bg-blue-500">
              Volver al inicio
            </button>
            <button className="p-3 bg-blue-600 rounded-xl text-white hover:bg-blue-500">
              Contactanos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
