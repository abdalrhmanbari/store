import Image from "next/image";
import Link from "next/link";
import React from "react";
import LoadingPage from "@/app/Components/handel/loading-page";
import CustomButton from "@/app/Components/button/custom-button";

export default function About() {
  return (
    <div className=" my-[4rem]">
      <h1 className=" text-center text-2xl font-bold mb-[6rem]">About Us</h1>
      <div className="flex items-center justify-between flex-col sm:flex-row  gap-[4rem]">
        <div className=" w-[20rem] sm:w-[30rem] ">
          <Image
            alt="about"
            width={500}
            height={500}
            className="w-full h-full"
            src={
              "https://plus.unsplash.com/premium_photo-1661454524510-3f4329b6d43f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGUlMjBjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D"
            }
            priority
          />
        </div>
        <div className="sm:max-w-[35rem] text-wrap">
          <h2 className=" mb-4 text-lg font-semibold text-gray-900">
            Why Choose Us
          </h2>
          <h1 className=" mb-5 text-2xl font-bold   text-gray-800 sm:text-[2.5rem]/[3rem]">
            Make your customers happy by giving services.
          </h1>
          <p className="mb-5 text-base text-gray-500">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less.
          </p>
          <p className="mb-8 text-base text-gray-500">
            A domain name is one of the first steps to establishing your brand.
            Secure a consistent brand image with a domain name that matches your
            business.
          </p>

          <Link href={"/categories"} className="text-gray-900">
            <CustomButton
              title="Get Started"
              titleStyle="text-white  px-8 py-3 bg-[#2f4550] hover:bg-[#1c2930]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
