import { SingleEvent } from "@/cosmic/blocks/events/SingleEvent"

export default async function SingleEventPage({
  params,
}: {
  params: { slug: string }
}) {
  return (
    <main className="p-10">
      <SingleEvent query={{ slug: params.slug, type: "events" }} />
    </main>
  )
}
