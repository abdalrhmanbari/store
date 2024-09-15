"use client";
import Link from "next/link";
import React, { useState } from "react";
import SideBar from "../component/side-bar";
import Toggle from "../icon/toggle";
import Close from "../icon/close";
import CustomButton from "../button/custom-button";

export default function Navbar() {
  const [side, setSide] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <header className=" py-[1.5rem] top-0 bg-white z-10 h-fit ">
      <div className="  ">
        <div className="flex justify-between items-center   px-[1rem] md:px-0   ">
          <div>
            <nav className=" flex text-gray-500  gap-[2rem] items-center ">
              <Link href={"/"} className=" font-bold text-3xl">
                Store
              </Link>
              <Link className=" hidden sm:block" href={"/about"}>
                About
              </Link>
              <Link className=" hidden sm:block" href={"/categories"}>
                Categories
              </Link>
              <Link className=" hidden sm:block" href={"/products"}>
                Products
              </Link>
              <Link className=" hidden sm:block" href={"/contact"}>
                Contact
              </Link>
            </nav>
          </div>
          <div className=" flex items-center gap-[0.5rem]    ">
            {side && <div className="fixed"></div>}{" "}
            <SideBar side={side} setSide={setSide} />
            <Link href={"/login"}>
              <CustomButton
                title="Log in"
                titleStyle=" px-5 py-2.5 text-sm bg-[#2f4550] hover:bg-[#1c2930] transition"
              />
            </Link>
            <div className="  block sm:hidden  " onClick={() => setOpen(!open)}>
              <Toggle />
            </div>
            {open && (
              <div className=" fixed inset-0 bg-gray-500 opacity-75 transition-opacity duration-300 ease-linear z-10"></div>
            )}
            {open ? (
              <div className=" right-0 top-0 bg-white w-full h-[17rem] z-40 fixed overflow-hidden duration-300 ease-linear ">
                <div>
                  <div
                    className=" flex items-center justify-between mb-[0.5rem] p-[1rem] text-gray-500"
                    onClick={() => setOpen(!open)}
                  >
                    <Link href={"/"} className=" text-2xl font-bold  ">
                      Store
                    </Link>
                    <Close />
                  </div>
                  <div className=" flex flex-col   px-[1rem] gap-[1rem] text-gray-500">
                    <Link href={"/about"} onClick={() => setOpen(!open)}>
                      About
                    </Link>
                    <Link href={"/categories"} onClick={() => setOpen(!open)}>
                      Categories
                    </Link>
                    <Link href={"/products"} onClick={() => setOpen(!open)}>
                      Products
                    </Link>
                    <Link href={"/contact"} onClick={() => setOpen(!open)}>
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="right-[-100%] top-0 bg-white w-full z-40 fixed overflow-hidden duration-300 ease-linear"></div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
