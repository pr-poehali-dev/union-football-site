import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

interface Player {
  number: number;
  name: string;
  position: string;
  age: number;
  goals: number;
  assists: number;
  matches: number;
  image: string;
}

const players: Player[] = [
  { number: 1, name: "Иванов Алексей", position: "Вратарь", age: 28, goals: 0, assists: 0, matches: 15, image: "https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg" },
  { number: 5, name: "Козлов Дмитрий", position: "Защитник", age: 26, goals: 2, assists: 4, matches: 14, image: "https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg" },
  { number: 3, name: "Смирнов Павел", position: "Защитник", age: 24, goals: 1, assists: 2, matches: 13, image: "https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg" },
  { number: 10, name: "Сидоров Максим", position: "Полузащитник", age: 25, goals: 8, assists: 6, matches: 15, image: "https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg" },
  { number: 8, name: "Новиков Игорь", position: "Полузащитник", age: 27, goals: 5, assists: 7, matches: 14, image: "https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg" },
  { number: 7, name: "Петров Сергей", position: "Нападающий", age: 23, goals: 12, assists: 4, matches: 15, image: "https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg" },
  { number: 9, name: "Волков Андрей", position: "Нападающий", age: 29, goals: 9, assists: 5, matches: 13, image: "https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg" }
];

const positions = ["Все", "Вратарь", "Защитник", "Полузащитник", "Нападающий"];

export default function PlayerStats() {
  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            СОСТАВ КОМАНДЫ
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            Игроки FC UNION сезона 2024/2025
          </p>
        </div>

        <Tabs defaultValue="Все" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            {positions.map((pos) => (
              <TabsTrigger key={pos} value={pos} className="font-bold">
                {pos}
              </TabsTrigger>
            ))}
          </TabsList>

          {positions.map((position) => (
            <TabsContent key={position} value={position} className="space-y-4">
              {players
                .filter((player) => position === "Все" || player.position === position)
                .map((player) => (
                  <Card key={player.number} className="overflow-hidden hover:shadow-xl transition-all group">
                    <div className="grid md:grid-cols-[200px_1fr] gap-0">
                      <div className="relative aspect-square md:aspect-auto bg-gradient-to-br from-primary to-red-700 overflow-hidden">
                        <div className="absolute top-4 right-4 bg-accent text-foreground w-14 h-14 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg">
                          {player.number}
                        </div>
                        <img 
                          src={player.image}
                          alt={player.name}
                          className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                        />
                      </div>

                      <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-black mb-1">{player.name}</h3>
                            <p className="text-muted-foreground font-bold flex items-center gap-2">
                              <Icon name="Award" size={16} />
                              {player.position} • {player.age} лет
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                          <div className="text-center bg-muted rounded-lg p-4">
                            <div className="text-3xl font-black text-primary mb-1">{player.matches}</div>
                            <div className="text-sm text-muted-foreground font-bold">Матчей</div>
                          </div>
                          <div className="text-center bg-muted rounded-lg p-4">
                            <div className="text-3xl font-black text-primary mb-1">{player.goals}</div>
                            <div className="text-sm text-muted-foreground font-bold">Голов</div>
                          </div>
                          <div className="text-center bg-muted rounded-lg p-4">
                            <div className="text-3xl font-black text-primary mb-1">{player.assists}</div>
                            <div className="text-sm text-muted-foreground font-bold">Передач</div>
                          </div>
                          <div className="text-center bg-muted rounded-lg p-4">
                            <div className="text-3xl font-black text-primary mb-1">
                              {(player.goals + player.assists)}
                            </div>
                            <div className="text-sm text-muted-foreground font-bold">Г+П</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
