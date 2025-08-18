import Banner from "@/components/features/banner";
import Search from "@/components/features/search";
import CategoryCard from "@/components/features/categories";
import ProductCard from "@/components/features/product_cart";
import NavItem from "@/components/ui/nav-item";

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col justify-between items-center">
      <div className="w-full flex flex-col items-center px-4 p-4 overflow-auto">
        <div className="mb-1">
          <Search />
        </div>

        <div className="flex flex-col gap-y-6 w-full overflow-auto">
          <Banner />
          <div className="flex flex-col w-full gap-y-4">
            <h2 className="customize-text-h2">Categories</h2>
            <div className="flex flex-shrink-0 gap-x-2 overflow-x-auto">
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
            </div>
          </div>

          <div className="flex flex-col w-full gap-y-4">
            <h2 className="customize-text-h2">Popular</h2>
            <div className="flex flex-shrink-0 gap-x-2 overflow-x-auto">
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>

          <div className="flex flex-col w-full gap-y-4">
            <h2 className="customize-text-h2">Popular</h2>
            <div className="flex flex-shrink-0 gap-x-2 overflow-x-auto">
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full px-[16px] pt-[8px] pb-[16px] bg-surface-light opacity-80">
        <NavItem className="flex-1" />
        <NavItem className="flex-1" />
        <NavItem className="flex-1" />
        <NavItem className="flex-1" />
      </div>
    </div>
  );
}
