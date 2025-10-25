import { Card } from "@/components/ui/card";

interface TeamStats {
  position: number;
  team: string;
  logo: string;
  played: number;
  won: number;
  draw: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

const standings: TeamStats[] = [
  {
    position: 1,
    team: "FC UNION",
    logo: "https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg",
    played: 15,
    won: 11,
    draw: 3,
    lost: 1,
    goalsFor: 34,
    goalsAgainst: 12,
    goalDifference: 22,
    points: 36
  },
  {
    position: 2,
    team: "Спартак",
    logo: "https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg",
    played: 15,
    won: 10,
    draw: 4,
    lost: 1,
    goalsFor: 31,
    goalsAgainst: 14,
    goalDifference: 17,
    points: 34
  },
  {
    position: 3,
    team: "Динамо",
    logo: "https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg",
    played: 15,
    won: 9,
    draw: 4,
    lost: 2,
    goalsFor: 28,
    goalsAgainst: 15,
    goalDifference: 13,
    points: 31
  },
  {
    position: 4,
    team: "FC TORNADO",
    logo: "https://cdn.poehali.dev/files/2f390116-730a-4216-ae00-ce3b9ec011f3.jpeg",
    played: 15,
    won: 7,
    draw: 5,
    lost: 3,
    goalsFor: 24,
    goalsAgainst: 18,
    goalDifference: 6,
    points: 26
  },
  {
    position: 5,
    team: "Зенит",
    logo: "https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg",
    played: 15,
    won: 6,
    draw: 4,
    lost: 5,
    goalsFor: 22,
    goalsAgainst: 21,
    goalDifference: 1,
    points: 22
  }
];

export default function LeagueTable() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            ТАБЛИЦА ЛИГИ ДДЛ
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            Турнирная таблица сезона 2024/2025
          </p>
        </div>

        <Card className="overflow-hidden max-w-6xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="py-4 px-4 text-left font-black">#</th>
                  <th className="py-4 px-4 text-left font-black">КОМАНДА</th>
                  <th className="py-4 px-2 text-center font-black hidden md:table-cell">И</th>
                  <th className="py-4 px-2 text-center font-black hidden md:table-cell">В</th>
                  <th className="py-4 px-2 text-center font-black hidden md:table-cell">Н</th>
                  <th className="py-4 px-2 text-center font-black hidden md:table-cell">П</th>
                  <th className="py-4 px-2 text-center font-black hidden sm:table-cell">ЗМ</th>
                  <th className="py-4 px-2 text-center font-black hidden sm:table-cell">ПМ</th>
                  <th className="py-4 px-2 text-center font-black hidden lg:table-cell">РМ</th>
                  <th className="py-4 px-4 text-center font-black bg-accent text-foreground">О</th>
                </tr>
              </thead>
              <tbody>
                {standings.map((team) => (
                  <tr 
                    key={team.position} 
                    className={`border-b hover:bg-muted/50 transition-colors ${
                      team.team === "FC UNION" ? "bg-accent/10" : ""
                    }`}
                  >
                    <td className="py-4 px-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black ${
                        team.position === 1 ? "bg-accent text-foreground" :
                        team.position <= 3 ? "bg-primary/20 text-primary" :
                        "bg-muted text-muted-foreground"
                      }`}>
                        {team.position}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={team.logo}
                          alt={team.team}
                          className="w-10 h-10 object-contain"
                        />
                        <span className="font-bold">{team.team}</span>
                      </div>
                    </td>
                    <td className="py-4 px-2 text-center hidden md:table-cell">{team.played}</td>
                    <td className="py-4 px-2 text-center hidden md:table-cell font-bold text-green-600">{team.won}</td>
                    <td className="py-4 px-2 text-center hidden md:table-cell">{team.draw}</td>
                    <td className="py-4 px-2 text-center hidden md:table-cell font-bold text-red-600">{team.lost}</td>
                    <td className="py-4 px-2 text-center hidden sm:table-cell">{team.goalsFor}</td>
                    <td className="py-4 px-2 text-center hidden sm:table-cell">{team.goalsAgainst}</td>
                    <td className="py-4 px-2 text-center hidden lg:table-cell font-bold">
                      {team.goalDifference > 0 ? `+${team.goalDifference}` : team.goalDifference}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full font-black text-lg">
                        {team.points}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="bg-muted p-4 text-sm text-muted-foreground">
            <p className="font-bold mb-2">Обозначения:</p>
            <p>И - Игры | В - Выигрыши | Н - Ничьи | П - Поражения | ЗМ - Забитые мячи | ПМ - Пропущенные мячи | РМ - Разница мячей | О - Очки</p>
          </div>
        </Card>
      </div>
    </section>
  );
}
