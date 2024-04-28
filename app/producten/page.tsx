import ProductGallery from "@/components/products/ProductGallery";

export default function Producten() {
  return (
    <div className="flex grow flex-col items-center">
      <div className="relative flex w-full flex-col gap-4 p-3 md:px-20 lg:px-44">
        <section className="flex flex-col gap-4">
          <ProductGallery />
        </section>
      </div>
    </div>
  );
}
