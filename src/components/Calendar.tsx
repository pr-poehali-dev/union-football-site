import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Match {
  id: number;
  date: string;
  time: string;
  homeTeam: string;
  homeLogo: string;
  awayTeam: string;
  awayLogo: string;
  location: string;
  status: "upcoming" | "live" | "finished";
  score?: string;
}

const matches: Match[] = [
  {
    id: 1,
    date: "22 ДЕК",
    time: "18:00",
    homeTeam: "FC UNION",
    homeLogo: "https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg",
    awayTeam: "Спартак",
    awayLogo: "https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg",
    location: "Школа 83",
    status: "upcoming"
  },
  {
    id: 2,
    date: "28 ДЕК",
    time: "16:00",
    homeTeam: "Динамо",
    homeLogo: "https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg",
    awayTeam: "FC UNION",
    awayLogo: "https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg",
    location: "Стадион Динамо",
    status: "upcoming"
  },
  {
    id: 3,
    date: "15 ДЕК",
    time: "18:00",
    homeTeam: "FC UNION",
    homeLogo: "https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg",
    awayTeam: "FC TORNADO",
    awayLogo: "https://cdn.poehali.dev/files/2f390116-730a-4216-ae00-ce3b9ec011f3.jpeg",
    location: "Школа 83",
    status: "finished",
    score: "2 - 1"
  }
];

export default function Calendar() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            КАЛЕНДАРЬ МАТЧЕЙ
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            Расписание игр FC UNION на сезон 2024/2025
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {matches.map((match) => (
            <Card key={match.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-[120px_1fr_120px] gap-4 p-6 items-center">
                <div className="text-center">
                  <div className="text-2xl font-black text-primary">{match.date}</div>
                  <div className="text-muted-foreground font-bold">{match.time}</div>
                  {match.status === "live" && (
                    <div className="mt-2 inline-flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      LIVE
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
                  <div className="flex items-center justify-end gap-3">
                    <span className="font-bold text-lg text-right">{match.homeTeam}</span>
                    <img 
                      src={match.homeLogo}
                      alt={match.homeTeam}
                      className="w-12 h-12 object-contain"
                    />
                  </div>

                  <div className="text-center px-4">
                    {match.score ? (
                      <div className="text-3xl font-black text-primary">{match.score}</div>
                    ) : (
                      <div className="text-2xl font-bold text-muted-foreground">VS</div>
                    )}
                  </div>

                  <div className="flex items-center justify-start gap-3">
                    <img 
                      src={match.awayLogo}
                      alt={match.awayTeam}
                      className="w-12 h-12 object-contain"
                    />
                    <span className="font-bold text-lg">{match.awayTeam}</span>
                  </div>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-2">
                    <Icon name="MapPin" size={14} />
                    <span>{match.location}</span>
                  </div>
                  {match.status === "upcoming" && (
                    <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      <Icon name="Ticket" size={14} className="mr-1" />
                      Билеты
                    </Button>
                  )}
                  {match.status === "finished" && (
                    <Button size="sm" variant="ghost" className="text-muted-foreground">
                      <Icon name="FileText" size={14} className="mr-1" />
                      Отчёт
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
