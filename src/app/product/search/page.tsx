import Search from "@/components/features/search";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/features/product_cart";
import { getProducts } from "@/db/query";

export default async function ProductSearchPage() {
  const products = await getProducts("Fashion");

  return (
    <div className="w-full h-full flex flex-col items-center px-4 pt-4 gap-y-4">
      <Search />
      <div className="w-full flex items-center ">
        <Button variant="hw_ghost" className="flex-1">
          Fruits
        </Button>
        <Button variant="hw_ghost" className="flex-1">
          Vegies
        </Button>
        <Button variant="hw_ghost" className="flex-1">
          Bakery
        </Button>
        <Button variant="hw_ghost" className="flex-1">
          Seafood
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4 overflow-y-auto">
        {products?.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
}
