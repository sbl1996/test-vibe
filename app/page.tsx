// app/page.tsx
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { author } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="flex items-center space-x-6">
        <Avatar className="h-24 w-24">
          <AvatarImage src="/avatar.jpg" alt={author.name} />
          <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold">{author.name}</h1>
          <p className="text-muted-foreground">{author.affiliation}</p>
          <p className="text-muted-foreground">{author.email}</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          你好！我是一名对 [你的领域，例如：人工智能、计算机视觉、自然语言处理] 充满热情的博士生/研究员。
          我的研究重点是 [简述你的研究方向，例如：开发高效的深度学习模型来解决 XXX 问题]。
          我热衷于开源和技术分享，欢迎通过邮件或社交媒体与我联系。
        </p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Research Interests</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Deep Learning for Medical Imaging</li>
            <li>Generative Adversarial Networks (GANs)</li>
            <li>Efficient AI Models</li>
            <li>Human-Computer Interaction</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}