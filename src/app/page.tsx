import Banner from "@/components/features/banner";
import Search from "@/components/features/search";
import CategoryCard from "@/components/features/categories";
import PopularCard from "@/components/features/popular";

export default function Page() {
  return (
    <>
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
    </>
  );
}
