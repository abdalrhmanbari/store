import Image from "next/image";
import Link from "next/link";
import React from "react";
import { title } from "process";
import CustomButton from "../button/custom-button";


export default function Cart({
  href,
  linkStyle,
  src,
  alt,
  className,
  width,
  height,
  title,
  span,
  titleStyle,
  spanStyle,
}: {
  href: string;
  linkStyle: string;
  src: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
  title: string;
  span: string;
  titleStyle?: string;
  spanStyle?: string;
}) {
  return (
    <Link href={`${href}`} className={`${linkStyle}`} >
      <Image

        src={`${src}`}
        alt={`${alt}`}
        className={`${className}`}
        width={width}
        height={height}
        priority
      />
      <div className=" absolute inset-0 flex flex-col items-start justify-end p-6">
        <h3 className={`text-xl font-medium  text-white ${spanStyle} `}>
          {span}
        </h3>

        <CustomButton title={`${title}`} titleStyle={`${titleStyle}`} />
      </div>
    </Link>
  );
}
