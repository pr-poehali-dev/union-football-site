import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary via-red-600 to-primary text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block bg-accent text-foreground px-4 py-2 rounded-full font-bold text-sm mb-6">
              ⚽ СЕЗОН 2024/2025
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              FC UNION<br />ВОРОНЕЖ
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Профессиональный футбольный клуб
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-foreground font-bold">
                <Icon name="Ticket" className="mr-2" size={20} />
                Купить билеты
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-bold">
                <Icon name="Users" className="mr-2" size={20} />
                О клубе
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full"></div>
            <img 
              src="https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg"
              alt="FC Union Logo"
              className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-accent via-yellow-300 to-accent"></div>
    </section>
  );
}
