// app/shop/[slug]/page.tsx
import { SingleProduct } from "@/cosmic/blocks/products/SingleProduct"

export default async function SingleProductPage({
  params,
}: {
  params: { slug: string }
}) {
  return (
    <main className="p-10">
      <SingleProduct query={{ slug: params.slug, type: "products" }} />
    </main>
  )
}
