import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { CommandMenu } from "./search/command-box"
import { ListLinks } from "./list-links"
import { ListSocials } from "./list-socials"

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4"><CommandMenu/></div> 
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
          <ListLinks items={siteConfig.rightNav} />
          <ListSocials items={siteConfig.links} />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
