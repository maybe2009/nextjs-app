"use client";

import Link from "next/link";
import Image from "next/image";
import { getCloudinaryUrl } from "@/lib/cloudinary";

export interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  stock: number;
}

export default function ProductCard({ name, price }: ProductCardProps) {
  return (
    <div className="">
      <Link href="/product/detail">
        <div className="w-[172px] h-[123px] relative bg-trounded-t-ext-secondary ">
          <Image
            loader={getProductImageUrl}
            src="lychee_vmpkz2.png"
            alt="product image"
            fill={true}
            className="rounded-t-[8px]"
          />
        </div>
      </Link>

      <div className="w-[172px] gap-y-3 px-4 py-4 bg-surface-light rounded-b-[8px]">
        <div className="w-full h-[44px]">
          <p className="customize-text-body-bold">{name}</p>
        </div>
        <div className="flex justify-between items-center">
          <span className="customize-text-body">${price}/ea</span>
          <div className="w-[24px] h-[24px] rounded-[999px] bg-brand-primary">
            <svg
              className=" text-icon-invert cursor-pointer"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
/**
 * 生成产品图片的Cloudinary URL
 * @param publicId Cloudinary中的public_id
 * @param cloudName 你的Cloudinary cloud name
 * @returns 优化后的产品图片URL
 */
function getProductImageUrl({
  src,
  quality,
}: {
  src: string;
  quality?: number;
}): string {
  return getCloudinaryUrl(src, {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "",
    transformations: `c_fill,g_auto,w_172,h_123`,
    quality: quality,
    format: "auto",
  });
}
