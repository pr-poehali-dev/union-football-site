import { Card } from "@/components/ui/card";

interface Match {
  date: string;
  homeTeam: string;
  homeLogo: string;
  awayTeam: string;
  awayLogo: string;
  score?: string;
  status: string;
}

const matches: Match[] = [
  {
    date: "15 ДЕК 2024",
    homeTeam: "FC UNION",
    homeLogo: "https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg",
    awayTeam: "FC TORNADO",
    awayLogo: "https://cdn.poehali.dev/files/2f390116-730a-4216-ae00-ce3b9ec011f3.jpeg",
    score: "2 - 1",
    status: "Завершен"
  },
  {
    date: "22 ДЕК 2024",
    homeTeam: "FC UNION",
    homeLogo: "https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg",
    awayTeam: "Спартак",
    awayLogo: "https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg",
    status: "18:00"
  }
];

export default function LatestMatches() {
  return (
    <section id="matches" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            МАТЧИ
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {matches.map((match, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-sm text-muted-foreground mb-4 font-bold">
                {match.date}
              </div>
              
              <div className="grid grid-cols-3 gap-4 items-center mb-4">
                <div className="text-center">
                  <img 
                    src={match.homeLogo}
                    alt={match.homeTeam}
                    className="w-16 h-16 mx-auto mb-2 object-contain"
                  />
                  <p className="font-bold text-sm">{match.homeTeam}</p>
                </div>

                <div className="text-center">
                  {match.score ? (
                    <div className="text-3xl font-black text-primary">
                      {match.score}
                    </div>
                  ) : (
                    <div className="text-2xl font-bold text-muted-foreground">
                      VS
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <img 
                    src={match.awayLogo}
                    alt={match.awayTeam}
                    className="w-16 h-16 mx-auto mb-2 object-contain"
                  />
                  <p className="font-bold text-sm">{match.awayTeam}</p>
                </div>
              </div>

              <div className="text-center">
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${
                  match.status === "Завершен" 
                    ? "bg-primary/10 text-primary" 
                    : "bg-accent/10 text-accent"
                }`}>
                  {match.status}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
