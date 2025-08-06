import Link from "next/link";

export default function PopularCard() {
  return (
    <div className="">
      <div className="w-[172px] h-[123px] bg-text-secondary rounded-t-[8px]"></div>

      <div className="w-[172px] gap-y-3 px-4 py-4 bg-surface-light rounded-b-[8px]">
        <div className="w-full h-[44px]">
          <p className="customize-text-body-bold">Avocado</p>
        </div>
        <div className="flex justify-between items-center">
          <span className="customize-text-body">$2.5/ea</span>
          <Link href="/product">
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
          </Link>
        </div>
      </div>
    </div>
  );
}
