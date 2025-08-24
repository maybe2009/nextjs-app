"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [productCount, setProductCount] = useState(0);

  const handlePlusClick = () => {
    setProductCount(productCount + 1);
  };

  const handleMinusClick = () => {
    if (productCount > 0) {
      setProductCount(productCount - 1);
    }
  };

  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setProductCount(Number(value));
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between items-center">
      <div className="">
        <Image
          src="/images/product_example.png"
          className="w-full h-[250px]"
          width={320}
          height={240}
          alt="Picture of product"
        />

        <div className="flex flex-col gap-y-8 px-4 mt-4">
          <div className="flex flex-col gap-y-1">
            <h1 className="customize-text-h1">Product Name</h1>
            <span className="customize-text-h2">$3.95/kg</span>
          </div>

          <div>
            <p className="customize-text-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              voluptatum.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-2 w-full px-2 mb-4">
        <div className="w-full flex justify-between items-center bg-brand-primary/30 px-6 py-4 rounded-full">
          <Button
            onClick={handlePlusClick}
            className="bg-transparent hover:bg-transparent border-none shadow-none"
          >
            <Plus className="size-6 text-black" />
          </Button>
          <input
            className="text-center outline-none appearance-none border-none"
            type="text"
            value={productCount ?? ""}
            onChange={handleCountChange}
          />
          <Button
            onClick={handleMinusClick}
            className="bg-transparent hover:bg-transparent border-none shadow-none"
          >
            <Minus className="size-6 text-black" />
          </Button>
        </div>

        <Button className="w-full bg-brand-primary hover:bg-brand-primary rounded-full px-2 py-4 text-text-invert customize-text-body h-auto">
          Add to cart
        </Button>
      </div>
    </div>
  );
}
