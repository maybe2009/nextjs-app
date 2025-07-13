import Banner from "@/app/ui/banner";
import Search from "@/app/ui/search";

export default function Page() {
  return (
    <div className="flex justify-center">
      <div className="w-[375px] flex flex-col gap-y-6">
        <h1 className="customize-text-caption">Hello, Next.js!</h1>
        <Search />
        <Banner />
      </div>
    </div>
  );
}
