import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface NewsItem {
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

const news: NewsItem[] = [
  {
    title: "Победа в домашнем матче!",
    date: "15 декабря 2024",
    image: "https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg",
    excerpt: "FC UNION одержал уверенную победу над FC TORNADO со счетом 2:1 на домашнем стадионе"
  },
  {
    title: "Новый игрок в составе команды",
    date: "10 декабря 2024",
    image: "https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg",
    excerpt: "Клуб объявил о подписании контракта с новым нападающим на сезон 2024/2025"
  },
  {
    title: "Расписание матчей на декабрь",
    date: "1 декабря 2024",
    image: "https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg",
    excerpt: "Опубликовано расписание предстоящих матчей на декабрь. Команда сыграет 4 игры"
  }
];

export default function News() {
  return (
    <section id="news" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            НОВОСТИ
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {news.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="aspect-video bg-muted overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                  <Icon name="Calendar" size={16} />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {item.excerpt}
                </p>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  Читать далее
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Все новости
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}
