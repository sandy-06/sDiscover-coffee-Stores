import React from "react";

export default function Banner() {
  const HandleOnClick = () => {};
  return (
    <div className="mb-12 grid lg:mb-24 lg:grid-col-2">
      <div className="z-20 flex flex-col px-2 md:pt-12">
      <h1 className="my-2 fleax-wrap">
        <span className="pr-2 text-white">Coffee</span>
        <span className="text-gray-900">Conosuier</span>
      </h1>
      <p className="font sans text-xl font-semibold text-gray-900 md:mt-5">
        Discover the best coffee shops in town
      </p>

      <div className="mt-12">
      <button onClick={HandleOnClick}>View store nearby</button>
      </div>
    </div>
   </div>
   
       


  );
}
