import { ChevronLeftIcon, ShoppingBagIcon } from "@/components/icons";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus, Minus, BluetoothIcon } from "lucide-react";

export default function Page() {
  return (
    <>
      <div className="mx-[16px] mt-[24px]">
        <div className="w-full flex justify-between items-center">
          <div className="w-[44px] h-[44px] py-[8px] pb-[8px]">
            <ChevronLeftIcon className="w-[24px] h-[24px]" />
          </div>

          <div className="w-[44px] h-[44px] py-[8px] pb-[8px] flex justify-center items-center">
            <ShoppingBagIcon className="w-[24px] h-[24px]" />
          </div>
        </div>
      </div>

      <Image
        src="/images/product_example.png"
        className="w-full h-[250px]"
        width={320}
        height={240}
        alt="Picture of product"
      />

      <div className="flex flex-col gap-y-8">
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

        <div className="w-full flex justify-between items-center bg-brand-primary/30 px-6 py-4 rounded-full">
          <Button className="bg-transparent hover:bg-transparent border-none shadow-none">
            <Plus className="size-6 text-black" />
          </Button>
          <input className="text-center" type="number" defaultValue={0} />
          <Button className="bg-transparent hover:bg-transparent border-none shadow-none">
            <Minus className="size-6 text-black" />
          </Button>
        </div>

        <Button className="w-full bg-brand-primary hover:bg-brand-primary rounded-full px-2 py-4 text-text-invert customize-text-body">
          <span></span>
        </Button>
      </div>
    </>
  );
}
