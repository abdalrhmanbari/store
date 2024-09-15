import React from "react";
import Link from "next/link";
import { kids } from "@/app/context/context";
import Card from "@/app/Components/component/card";
export default async function Kids() {
  const Kids = await kids;
  return (
    <div className=" my-[4rem] ">
      <div className=" text-center my-[5rem]">
        <h1 className=" text-2xl md:text-4xl font-bold text-gray-800">Kids</h1>
        <p className="text-gray-500 mt-1">
          For unique and stylish clothing in the collection you can select the
          best one for you.
        </p>
      </div>
      <span className=" w-[6rem] flex justify-between text-gray-500 mb-[4rem]">
        {" "}
        <Link href={"/"}>Home</Link>
        <span> / </span> Kids
      </span>
      <div className="  mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8  ">
          {Kids.map((kid) => (
            <Card
              href="kids"
              id={kid.id}
              src={`${kid.image}`}
              alt={`${kid.title}`}
              title={`${kid.title}`}
              price={kid.price}
              width={300}
              height={300}
              bgStyle="w-[20rem] "
            />
          ))}
        </div>
      </div>
    </div>
  );
}
