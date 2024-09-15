import Image from "next/image";
import React from "react";
import Link from "next/link";
import CustomButton from "@/app/Components/button/custom-button";
export default function Collection() {
  return (
    <section>
      <div className="  w-full  my-[4rem] ">
        <h1 className=" text-3xl font-bold text-gray-900 sm:text-3xl text-center">
          New Collection
        </h1>
        <p className=" mt-4 max-w-md text-gray-500  text-center m-auto">
          For unique and stylish clothing, shoes and accessories in the
          collection you can select the best one for you.
        </p>
      </div>
      <div className="  grid sm:grid-cols-2  grid-cols-1 gap-[2rem] overflow-hidden ">
        <div className=" flex flex-col gap-[2rem] max-sm:m-auto">
          <Link
            href={"/men"}
            className="h-[22rem] relative max-sm:w-[20rem] bg-[#FFF]  hover:opacity-75  overflow-hidden rounded-md duration-300 ease-linear  "
          >
            <Image
              className="w-full  h-full object-cover "
              priority
              src={
                "https://images.unsplash.com/photo-1631180075333-f54b3263a669?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGZhc2hpb24lMjBraWRzfGVufDB8fDB8fHwy"
              }
              alt=".."
              width={300}
              height={200}
            />
            <div className=" absolute inset-0 flex flex-col items-start justify-end p-6">
              <h3 className="text-xl font-medium  text-white ">
                Mans Collection
              </h3>

              <CustomButton
                title={"shop now"}
                titleStyle="mt-[0.4rem] bg-black px-5 py-3"
              />
            </div>
          </Link>
          <Link
            href={"/kids"}
            className=" h-[22rem] relative max-sm:w-[20rem] bg-[#FFF]  hover:opacity-75  overflow-hidden rounded-md  duration-300 ease-linear"
          >
            <Image
              className="w-full h-full object-cover "
              priority
              src={
                "https://images.unsplash.com/photo-1533512930330-4ac257c86793?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGZhc2hpb24lMjBraWRzfGVufDB8fDB8fHwy"
              }
              width={300}
              height={200}
              alt=".."
            />
            <div className=" absolute inset-0 flex flex-col items-start justify-end p-6">
              <h3 className="text-xl font-medium  text-white ">
                Kids Collection
              </h3>

              <CustomButton
                title={"shop now"}
                titleStyle="mt-[0.4rem] bg-black px-5 py-3"
              />
            </div>
            {/* <Btn title={'Kids Collection'} ={'shop now'} titleStyle={' '}/> */}
          </Link>
        </div>
        <Link
          href={"/women"}
          className=" relative   h-[46rem]   bg-[#FFF]  hover:opacity-75  overflow-hidden rounded-md duration-300 ease-linear " 
        >
          <Image
            className=" w-full h-full bg-contain  "
            priority
            src={
              "https://images.unsplash.com/photo-1717724169519-ca95e7e6862c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmFzaGlvbiUyMHdvbWVufGVufDB8fDB8fHwy"
            }
            alt=".."
            width={500}
            height={400}
          />

          <div className=" absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium  text-black  ">
              Womens Collection
            </h3>

            <CustomButton
              title={"shop now"}
              titleStyle="mt-[0.4rem] bg-black px-5 py-3"
            />
          </div>
        </Link>
      </div>
    </section>
  );
}
