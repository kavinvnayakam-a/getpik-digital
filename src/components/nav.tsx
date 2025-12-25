"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Briefcase,
  Bot,
  Home,
  Lightbulb,
  Mail,
  Search,
  Users,
} from 'lucide-react';

import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const links = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/portfolio', label: 'Portfolio', icon: Briefcase },
  { href: '/clients', label: 'Clients', icon: Users },
  { href: '/seo-analyzer', label: 'SEO Analyzer', icon: Search },
  { href: '/content-generator', label: 'Content Ideas', icon: Lightbulb },
  { href: '/contact', label: 'Enquiry', icon: Mail },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader className="p-4">
        <Link href="/" className="flex items-center gap-2">
          <Bot className="h-8 w-8 text-primary" />
          <h1 className="font-headline text-2xl font-bold">GetPik</h1>
        </Link>
      </SidebarHeader>
      <SidebarMenu>
        {links.map(link => (
          <SidebarMenuItem key={link.href}>
            <SidebarMenuButton
              asChild
              isActive={pathname === link.href}
              tooltip={link.label}
            >
              <Link href={link.href}>
                <link.icon />
                <span>{link.label}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </>
  );
}
