// components/footer.tsx
import { Github, Linkedin, Mail, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { author } from "@/lib/data"; // 引入我们之前定义的数据

export function Footer() {
  const currentYear = new Date().getFullYear();

  // 注意：Lucide 没有 Google Scholar 的官方图标，我们用 GraduationCap 代替，非常合适
  const socialLinks = [
    {
      name: "Email",
      url: `mailto:${author.email}`,
      icon: <Mail className="h-5 w-5" />,
    },
    {
      name: "GitHub",
      url: author.socials.github,
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      url: author.socials.linkedin,
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: "Google Scholar",
      url: author.socials.googleScholar,
      icon: <GraduationCap className="h-5 w-5" />,
    },
  ];

  return (
    <footer className="mt-16 border-t pt-8">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
        {/* 社交链接图标 */}
        <div className="flex space-x-4">
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              asChild
              variant="ghost"
              size="icon"
              aria-label={link.name}
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </a>
            </Button>
          ))}
        </div>

        {/* 版权信息 */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} {author.name}. All Rights Reserved.
          </p>
          <p className="mt-1">
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
            >
              Next.js
            </a>{" "}
            &{" "}
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
            >
              Shadcn/ui
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}