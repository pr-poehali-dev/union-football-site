import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <img 
              src="https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg"
              alt="FC Union Воронеж"
              className="h-14 w-auto"
            />
            <div>
              <h1 className="text-2xl font-bold text-primary">FC UNION</h1>
              <p className="text-sm text-muted-foreground">Воронеж</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#news" className="text-foreground hover:text-primary transition-colors font-medium">
              Новости
            </a>
            <a href="#matches" className="text-foreground hover:text-primary transition-colors font-medium">
              Матчи
            </a>
            <a href="#team" className="text-foreground hover:text-primary transition-colors font-medium">
              Команда
            </a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors font-medium">
              Галерея
            </a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors font-medium">
              Контакты
            </a>
          </nav>

          <Button className="md:hidden" variant="ghost" size="icon">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
}
