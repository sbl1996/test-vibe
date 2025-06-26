// components/header.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "/" },
  { label: "Publications", href: "/publications" },
  { label: "Projects", href: "/projects" },
  { label: "News", href: "/news" },
];

export function Header() {
  const pathname = usePathname();
  return (
    <header className="flex items-center justify-between border-b pb-4">
      <h1 className="text-2xl font-bold">
        <Link href="/">{/* Your Name */ "张三"}</Link>
      </h1>
      <nav>
        <ul className="flex space-x-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Button
                asChild
                variant="ghost"
                className={cn(
                  pathname === item.href && "bg-muted hover:bg-muted"
                )}
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}