import Shopping from "../icon/shopping-btn";
import Close from "../icon/close";

import Link from "next/link";
import CustomButton from "../button/custom-button";

export default function SideBar({
  side,
  setSide,
}: {
  side: boolean;
  setSide: any;
}) {
  return (
    <div>
      <div className=" cursor-pointer" onClick={() => setSide(!side)}>
        <Shopping />
      </div>
      <div
        className={
          side
            ? "top-0 right-0 sm:w-[24rem] w-full  h-full  sm:h-screen fixed bg-white z-10 duration-300   overflow-y-hidden shadow-xl"
            : "top-0 right-[-100%] sm:w-[19rem] w-full h-full  sm:h-screen fixed bg-white z-10 duration-300"
        }
      >
        <div className=" flex-1 px-4 py-6 sm:px-6">
          <div className=" flex items-center justify-between">
            <h1>Shopping cart</h1>
            <div className=" cursor-pointer" onClick={() => setSide(!side)}>
              <Close />
            </div>
          </div>
          <div className=" h-[20rem] flex justify-between items-center  overflow-y-auto mt-6 mb-[7rem] ">
            <h1 className=" text-lg font-medium text-gray-900 text-center m-auto  ">
              Login to view cart
            </h1>
          </div>
          <div className=" border-t border-gray-300 px-4 py-6 sm:px-6  flex flex-col items-center justify-center bottom-0 ">
            <Link href={"/login"} onClick={() => setSide(!side)}>
              <CustomButton
                title={"Login to View Cart"}
                titleStyle=" mt-6 bg-[#2f4550] flex items-center justify-center px-6 py-3 text-base font-medium  text-white  shadow-sm hover-bg-[#2f4550] "
              />
            </Link>
            <span className=" mt-[1.5rem] flex justify-center items-center text-center text-sm text-gray-500">
              {" "}
              or{" "}
              <Link
                className=" font-medium text-[#2f4550] hover:text-[#2f4550]"
                href={"/products"}
                onClick={() => setSide(!side)}
              >
                Continue Shopping →
              </Link>{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
