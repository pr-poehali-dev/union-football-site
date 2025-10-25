import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const stats = [
  {
    icon: "Trophy",
    value: "15",
    label: "Побед",
    color: "text-accent"
  },
  {
    icon: "Target",
    value: "34",
    label: "Голов забито",
    color: "text-primary"
  },
  {
    icon: "Shield",
    value: "12",
    label: "Пропущено",
    color: "text-blue-600"
  },
  {
    icon: "Users",
    value: "25",
    label: "Игроков",
    color: "text-green-600"
  }
];

export default function ClubStats() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-red-600 to-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            СТАТИСТИКА КЛУБА
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-6"></div>
          <p className="text-white/90 text-lg">
            Наши достижения в сезоне 2024/2025
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all hover:scale-105">
              <div className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center ${stat.color}`}>
                  <Icon name={stat.icon as any} size={32} className="text-white" />
                </div>
                <div className="text-5xl font-black mb-2">{stat.value}</div>
                <div className="text-white/80 font-bold text-lg">{stat.label}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-accent via-yellow-300 to-accent"></div>
    </section>
  );
}
