import React from "react";

import Link from "next/link";
import { women } from "@/app/context/context";
import Card from "@/app/Components/component/card";

export default async function Women() {
  const Women = await women;
  return (
    <div className=" my-[4rem]">
      <div className=" text-center my-[5rem]">
        <h1 className=" text-2xl md:text-4xl font-bold text-gray-800">Women</h1>
        <p className="text-gray-500 mt-1">
          For unique and stylish clothing in the collection you can select the
          best one for you.
        </p>
      </div>
      <span className=" w-[8rem] flex justify-between text-gray-500 mb-[4rem]">
        {" "}
        <Link href={"/"}>Home</Link>
        <span>/</span>Women
      </span>
      <div className="  mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8  ">
          {Women.map((wom) => (
            <Card
              href={"women"}
              id={wom.id}
              src={`${wom.image}`}
              alt={`${wom.title}`}
              title={`${wom.title}`}
              price={wom.price}
              width={300}
              height={200}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
