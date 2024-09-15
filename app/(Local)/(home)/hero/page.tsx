import Image from "next/image";
import React from "react";

import Link from "next/link";
import CustomButton from "@/app/Components/button/custom-button";

export default function Hero() {
  return (
    <section className="   relative    -z-10   flex md:items-center md:justify-between md:mt-[-6rem] mt-[2rem] flex-col md:gap-0 gap-[3rem] md:flex-row   ">
      <div className="  sm:max-w-[30rem] text-wrap ">
        <h1 className=" text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Summer styles are finally here
        </h1>
        <p className=" mt-4 text-xl text-gray-500  ">
          This year, our new summer collection will shelter you from the harsh
          elements of a world that doesnt care if you live or die.
        </p>
        <Link href={"/products"}>
          <CustomButton
            title="Shop Collection"
            titleStyle=" mt-10  px-8 py-3 bg-[#2f4550] hover:bg-[#1c2930]   "
          />
        </Link>
      </div>
      <div className=" flex items-center gap-[1.5rem] overflow-hidden ">
        <div className=" flex flex-col gap-[1.5rem] overflow-hidden">
          <div className="h-64 w-44 overflow-hidden rounded-lg">
            <Image
              width={300}
              height={300}
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
              priority
            />{" "}
          </div>
          <div className="h-64 w-44 overflow-hidden rounded-lg">
            <Image
              width={300}
              height={300}
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
              priority
            />
          </div>
        </div>
        <div className=" flex flex-col gap-[1.5rem]">
          <div className="h-64 w-44 overflow-hidden rounded-lg">
            <Image
              width={300}
              height={300}
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
              priority
            />
          </div>
          <div className="h-64 w-44 overflow-hidden rounded-lg">
            <Image
              width={300}
              height={300}
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
              priority
            />
          </div>
          <div className="h-64 w-44 overflow-hidden rounded-lg">
            <Image
              width={300}
              height={300}
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
              priority
            />
          </div>
        </div>
        <div className=" flex flex-col gap-[1.5rem]">
          <div className="h-64 w-44 overflow-hidden rounded-lg">
            <Image
              width={300}
              height={300}
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
              alt=""
              className="h-full w-full object-cover object-center "
              priority
            />
          </div>
          <div className="h-64 w-44 overflow-hidden rounded-lg">
            <Image
              width={300}
              height={300}
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
