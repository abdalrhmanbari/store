import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({
  href,
  id,
  src,
  alt,
  title,
  price,
  bgStyle,
  imageStyle,
  width,
  height,
}: {
  href: string;
  id: number;
  src: string;
  alt: string;
  title: string;
  price: number;
  bgStyle?: string;
  imageStyle?: string;
  width: number;
  height: number;
}) {
  return (
    <Link key={id}
      href={`/${href}/${id}`}
      className={`  group relative rounded-lg  m-auto  max-w-[17rem]  shadow-lg p-[1rem] flex flex-col gap-[0.5rem]  bg-[#FFF]${bgStyle}`}
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md   group-hover:opacity-75 lg:h-80 duration-300 ease-linear">
        <Image
          className={`w-full h-full object-cover object-center rounded-lg ${imageStyle}`}
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority
        />
      </div>
      <div className=" flex flex-col items-start gap-[0.5rem] mt-[0.5rem]">
        <h2 className=" text-sm text-gray-500">{title}</h2>
        <span className=" text-lg font-semibold  text-gray-900">{price}$</span>
      </div>
    </Link>
  );
}
