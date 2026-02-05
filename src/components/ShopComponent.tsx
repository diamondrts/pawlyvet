// import { useQuery } from "@tanstack/react-query";
// import { Product } from "../shared/schema";
import ProductCard from "./ProductCard"; // Tu componente de tarjeta
import { Button } from "./ui/button";
import { staticData } from "../server/storage";

const ShopSection = () => {
  return (
    <>
      <section id="shop" className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-2">
              <h2 className="text-4xl font-display font-bold text-stone-600">
                Boutique & Alimentos
              </h2>
              <p className="text-muted-foreground text-stone-400">
                Lo mejor para consentirlos
              </p>
            </div>
            <Button
              variant="outline"
              className="hidden sm:flex border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white cursor-pointer"
            > 
              Ver todo el catálogo
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {staticData.products && staticData.products.length > 0
              ? staticData.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              :
                Array(4) 
                  .fill(null)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl p-4 animate-pulse border"
                    >
                      <div className="bg-muted w-full aspect-square rounded-xl mb-4"></div>
                      <div className="h-4 bg-muted w-3/4 rounded mb-2"></div>
                      <div className="h-4 bg-muted w-1/2 rounded"></div>
                    </div>
                  ))}
          </div>

          <Button
            variant="outline"
            className="w-full mt-8 sm:hidden border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white cursor-pointer"
          >
            Ver todo el catálogo
          </Button>
        </div>
      </section>
    </>
  );
};

export default ShopSection;
