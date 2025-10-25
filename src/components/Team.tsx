import { Card } from "@/components/ui/card";

interface Player {
  number: number;
  name: string;
  position: string;
  image: string;
}

const players: Player[] = [
  { number: 1, name: "Иванов А.", position: "Вратарь", image: "https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg" },
  { number: 7, name: "Петров С.", position: "Нападающий", image: "https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg" },
  { number: 10, name: "Сидоров М.", position: "Полузащитник", image: "https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg" },
  { number: 5, name: "Козлов Д.", position: "Защитник", image: "https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg" }
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            СОСТАВ КОМАНДЫ
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {players.map((player) => (
            <Card key={player.number} className="overflow-hidden hover:shadow-xl transition-all group hover:-translate-y-2">
              <div className="relative aspect-square bg-gradient-to-b from-primary to-red-700 overflow-hidden">
                <div className="absolute top-4 right-4 bg-accent text-foreground w-12 h-12 rounded-full flex items-center justify-center font-black text-xl z-10">
                  {player.number}
                </div>
                <img 
                  src={player.image}
                  alt={player.name}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                />
              </div>
              <div className="p-4 text-center bg-white">
                <h3 className="text-xl font-bold mb-1">{player.name}</h3>
                <p className="text-sm text-muted-foreground font-medium">{player.position}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
