import Card from "@/app/Components/component/card";
import { kids, men, women } from "@/app/context/context";
import React from "react";

export default async function Products() {
  const Men = await men;
  const Women = await women;
  const Kids = await kids;
  return (
    <div className=" my-[4rem]">
      <div className="  mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8  ">
          {Men.map((product) => (
            <Card
              href="men"
              id={product.id}
              src={`${product.image}`}
              alt={`${product.title}`}
              title={`${product.title}`}
              price={product.price}
              width={300}
              height={300}
            />
          ))}

          {Women.map((product) => (
            <Card
              href="women"
              id={product.id}
              src={`${product.image}`}
              alt={`${product.title}`}
              title={`${product.title}`}
              price={product.price}
              width={300}
              height={300}
            />
          ))}
          {Kids.map((product) => (
            <Card
              href="kids"
              id={product.id}
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
    </div>
  );
}
