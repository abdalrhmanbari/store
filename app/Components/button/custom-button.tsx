import React from "react";

export default function CustomButton({
  title,
  titleStyle,
}: {
  title: string;
  titleStyle?: string;
}) {
  return (
    <button
      className={`   rounded-md border border-transparent  font-medium text-white text-center    duration-300 ease-linear    ${titleStyle}`}
    >
      {title}
    </button>
  );
}
