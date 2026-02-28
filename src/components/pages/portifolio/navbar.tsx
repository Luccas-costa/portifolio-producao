'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const projects: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]

const contact: { title: string; href: string; description: string }[] = [
  {
    title: 'Email',
    href: '/',
    description:
      'Entre em contato comigo por email para assuntos profissionais. ',
  },
  {
    title: 'Instagram',
    href: '/',
    description:
      'Entre em contato comigo pelo Instagram para assuntos pessoais. ',
  },
  {
    title: 'LinkedIn',
    href: '/',
    description:
      'Entre em contato comigo pelo LinkedIn para assuntos profissionais. ',
  },
  {
    title: 'Contato',
    href: '/',
    description: 'Me envie uma mensagem por aqui mesmo, resposta rapida.',
  },
]

export function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[420px] gap-2 p-3 md:w-[520px] md:grid-cols-2 lg:w-[620px]">
              {projects.map((projects) => (
                <ListItem
                  key={projects.title}
                  title={projects.title}
                  href={projects.href}
                >
                  {projects.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">LuccasGpt</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[420px] gap-2 p-3 md:w-[520px] md:grid-cols-2 lg:w-[620px]">
              {contact.map((contact) => (
                <ListItem
                  key={contact.title}
                  title={contact.title}
                  href={contact.href}
                >
                  {contact.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block rounded-lg p-3 transition-colors hover:bg-white/10"
        >
          <div className="text-sm font-medium text-white">{title}</div>
          <p className="line-clamp-2 text-sm text-white/60">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
