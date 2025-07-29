import Banner from "@/app/ui/banner";
import Search from "@/app/ui/search";
import CategoryCard from "@/app/ui/categories";
import PopularCard from "@/app/ui/popular";
import NavItem from "@/app/ui/nav-item";

export default function Page() {
  return (
    <div className="flex justify-center">
      <div className="relative flex flex-col items-center w-[375px] h-[1020px] bg-surface-default">
        <div className="w-[344px] flex flex-col gap-y-6">
          <h1 className="customize-text-caption">Hello, Next.js!</h1>
          <Search />
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
              <PopularCard />
              <PopularCard />
              <PopularCard />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 flex w-full px-[16px] pt-[8px] pb-[16px] bg-surface-light opacity-80">
          <NavItem className="flex-1" />
          <NavItem className="flex-1" />
          <NavItem className="flex-1" />
          <NavItem className="flex-1" />
        </div>
      </div>
    </div>
  );
}
