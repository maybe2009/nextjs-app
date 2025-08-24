"use client";

import { ChevronLeftIcon, ShoppingBagIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full flex justify-between items-center flex-shrink-0">
        <div
          onClick={() => router.back()}
          className="w-[44px] h-[44px] flex justify-center items-center cursor-pointer"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </div>

        <div className="w-[44px] h-[44px] flex justify-center items-center cursor-pointer">
          <ShoppingBagIcon className="w-6 h-6" />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
