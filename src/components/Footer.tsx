import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer id="contacts" className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg"
                alt="FC Union"
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">FC UNION</h3>
                <p className="text-sm text-white/70">Воронеж</p>
              </div>
            </div>
            <p className="text-white/70 text-sm">
              Профессиональный футбольный клуб города Воронеж
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-accent">Навигация</h4>
            <ul className="space-y-2">
              <li><a href="#news" className="text-white/70 hover:text-accent transition-colors">Новости</a></li>
              <li><a href="#matches" className="text-white/70 hover:text-accent transition-colors">Матчи</a></li>
              <li><a href="#team" className="text-white/70 hover:text-accent transition-colors">Команда</a></li>
              <li><a href="#gallery" className="text-white/70 hover:text-accent transition-colors">Галерея</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-accent">Контакты</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={16} className="mt-1 flex-shrink-0" />
                <span>Школа 83, г. Воронеж</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <a href="tel:+79525585399" className="hover:text-accent transition-colors">+7 (952) 558-53-99</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@fcunion.ru</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-accent">Социальные сети</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>&copy; 2024 FC UNION Воронеж. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}