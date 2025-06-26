// app/news/page.tsx
import { Badge } from "@/components/ui/badge";
import { news } from "@/lib/data";

export default function NewsPage() {
  // 按日期降序排序
  const sortedNews = [...news].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">News</h1>
      
      <div className="relative border-l-2 border-muted pl-6 space-y-10">
        {sortedNews.map((item, index) => (
          <div key={index} className="relative">
            {/* 时间线上的圆点 */}
            <div className="absolute -left-[34px] top-1 h-4 w-4 rounded-full bg-primary" />
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <p className="font-semibold text-muted-foreground w-28">
                  {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </p>
                <div className="mt-1">
                  {item.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>
              
              {/* 
                使用 dangerouslySetInnerHTML 来渲染HTML内容 (如 <strong>, <a>)
                确保你的数据源是可信的，以防止XSS攻击。
                对于个人网站，直接在 data.ts 中管理内容是安全的。
              */}
              <p 
                className="text-md leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}