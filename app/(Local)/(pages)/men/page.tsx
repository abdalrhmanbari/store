import React from "react";
import Image from "next/image";
import Link from "next/link";
import { men } from "@/app/context/context";
import Card from "@/app/Components/component/card";

export default async function Man() {
  const Men = await men;
  return (
    <div className=" my-[4rem]">
      <div className=" text-center my-[5rem]">
        <h1 className=" text-2xl md:text-4xl font-bold text-gray-800">Men</h1>
        <p className="text-gray-500 mt-1">
          For unique and stylish clothing in the collection you can select the
          best one for you.
        </p>
      </div>

      <span className=" w-[6rem] flex justify-between text-gray-500 mb-[4rem]">
        {" "}
        <Link href={"/"}>Home</Link> <span> / </span> Men
      </span>
      <div className="  mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8  ">
          {Men.map((men) => (
            <Card
              href="men"
              id={men.id}
              src={`${men.image}`}
              alt={`${men.title}`}
              title={`${men.title}`}
              price={men.price}
              width={300}
              height={300}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
