import Link from "next/link";

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
        <div className="w-[172px] h-[123px] bg-text-secondary rounded-t-[8px]"></div>
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
