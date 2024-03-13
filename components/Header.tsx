// components/header.tsx
import Link from "next/link"
import { cosmic } from "@/cosmic/client"
import { NavMenu } from "@/cosmic/blocks/navigation-menu/NavMenu"
import Banner from "@/components/Banner"

export default async function Header() {
  // Header data
  const { object: settings } = await cosmic.objects
    .findOne({
      type: "global-settings",
      slug: "settings",
    })
    .props("metadata")
    .depth(1)

  return (
    <nav className="border-0 border-solid border-b border-opacity-10 dark:border-opacity-20 border-stone-950 dark:border-white flex justify-evenly items-center space-x-4 sticky top-0 bg-white/20 dark:bg-black/20 backdrop-blur-lg py-2 w-full z-[9999]">
      <div className="topnav flex  items-center w-1/2 justify-between pl-2 pr-2">
        <Link href="/">
          <img
            src={`${settings.metadata.logo.imgix_url}?w=500&auto=format,compression`}
            alt={settings.metadata.company}
            className="max-h-16 m-auto dark:hidden"
          />
          <img
            src={`${settings.metadata.dark_logo.imgix_url}?w=500&auto=format,compression`}
            alt={settings.metadata.company}
            className="max-h-16 m-auto hidden dark:block"
          />
        </Link>
        <NavMenu
          query={{ type: "navigation-menus", slug: "header" }}
          hasMobileMenu
        />
      </div>

      <Banner />
    </nav>
  )
}
