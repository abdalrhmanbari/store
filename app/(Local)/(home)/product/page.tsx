import React from "react";


import Link from "next/link";
import { women } from "@/app/context/context";
import Card from "@/app/Components/component/card";
import CustomButton from "@/app/Components/button/custom-button";

export default async function Product() {
  const Women = await women.slice(0,4);
  return (
    <section>
      <h1 className="text-3xl font-bold text-center my-[4rem] ">
        Recent Products List
      </h1>
      <div className="  mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8  ">
        {Women.map((product) => (
         
            <Card
              id={product.id}
              href="women"
              src={`${product.image}`}
              alt={`${product.title}`}
              title={`${product.title}`}
              price={product.price}
              width={300}
              height={300}
            />
         
        ))}
      </div>
      </div>
      <Link href={"/products"} className=" flex justify-center items-center">
        <CustomButton
          title="view more"
          titleStyle="  mt-10  px-8 py-3 bg-[#2f4550] hover:bg-[#1c2930]"
        />
      </Link>
    </section>
  );
}
