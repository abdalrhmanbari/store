import Cart from "@/app/Components/component/cart";
import { categories } from "@/app/context/context";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Categories() {
  const Categories = await categories;
  return (
    <div className=" w-full px-4  my-[4rem] ">
      <div className="   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2rem] ">
        {Categories.map((category) => (
       
            <Cart href={category.link} linkStyle=" relative" src={category.image} alt={category.link} width={300} height={300} className="aspect-square  w-full  object-cover transition duration-500 group-hover:opacity-90 rounded-md" span={category.name} spanStyle="text-white" title="Shop Now" titleStyle=" mt-[0.4rem] bg-black px-5 py-3 text-xs"/>
          
        ))}
      </div>
    </div>
  );
}
