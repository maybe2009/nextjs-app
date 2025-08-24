"use client";
import { useRouter } from "next/navigation";

export default function CategoryCard() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/product/search");
  };

  return (
    <div
      onClick={handleClick}
      className="w-[108px] h-[138px] flex flex-col justify-center items-center bg-surface-light rounded-sm gap-y-2 flex-shrink-0 cursor-pointer"
    >
      <img src="icons/fruit.svg" alt="picure" />
      <p className="customize-text-body-bold">Fruits</p>
    </div>
  );
}
