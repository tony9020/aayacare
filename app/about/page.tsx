// app/page.tsx
import { cosmic } from "@/cosmic/client"
import { TeamList } from "@/cosmic/blocks/team/TeamList"

export default async function AboutPage() {
  const { object: page } = await cosmic.objects
    .findOne({
      type: "pages",
      slug: "about",
    })
    .props("slug,title,metadata")
    .depth(1)
  return (
    <main className="py-10">
      <section className="container pb-8 m-auto">
        <div className="m-auto max-w-6xl flex flex-col items-start gap-2">
          <h1 className="mb-4 m-auto md:mx-0 text-3xl md:text-6xl font-display text-zinc-900 dark:text-zinc-100 leading-tight tracking-tighter">
            {page.metadata.h1}
          </h1>
          <div
            dangerouslySetInnerHTML={{ __html: page.metadata.content }}
            className="text-zinc-700 dark:text-zinc-300"
          />
        </div>
      </section>
      <div className="m-auto max-w-6xl bg-zinc-50/50 dark:bg-zinc-900/50 px-4">
        <section className="py-8 w-full md:max-w-7xl mx-auto">
          <h2 className="w-full mb-4 text-2xl md:text-4xl font-display text-zinc-900 dark:text-zinc-100 tracking-tighter justify-center flex">
            Our team
          </h2>
          <TeamList
            query={{ type: "team-members" }}
            className="grid w-full grid-cols-3 gap-6 lg:grid-cols-2"
          />
        </section>
      </div>
    </main>
  )
}
