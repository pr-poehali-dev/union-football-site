export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center p-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl w-full relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-4xl font-bold text-accent mb-2 tracking-wider">
            ЛИГА ДДЛ
          </h2>
          <div className="h-1 w-32 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex flex-col items-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative group">
                <div className="absolute inset-0 bg-primary rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-card border-4 border-primary rounded-lg p-8 transform hover:scale-105 transition-transform">
                  <img 
                    src="https://cdn.poehali.dev/files/2ab1a76d-e9d7-43f3-9f1f-9c5dfd34fe9a.jpeg"
                    alt="FC Union"
                    className="w-48 h-48 object-contain mx-auto"
                  />
                </div>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-primary mt-6 tracking-wide">
                FC UNION
              </h3>
              <p className="text-muted-foreground text-lg mt-2">Железобетон</p>
            </div>

            <div className="flex flex-col items-center justify-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="relative">
                <div className="text-8xl md:text-9xl font-bold text-foreground/10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none">
                  VS
                </div>
                <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent relative z-10 animate-glow-pulse">
                  VS
                </div>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <div className="flex flex-col items-center">
                  <div className="text-5xl font-bold text-accent">--</div>
                  <div className="text-sm text-muted-foreground mt-1">СЧЁТ</div>
                </div>
                <div className="h-12 w-0.5 bg-border"></div>
                <div className="flex flex-col items-center">
                  <div className="text-5xl font-bold text-accent">--</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="relative group">
                <div className="absolute inset-0 bg-secondary rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-card border-4 border-secondary rounded-lg p-8 transform hover:scale-105 transition-transform">
                  <img 
                    src="https://cdn.poehali.dev/files/2f390116-730a-4216-ae00-ce3b9ec011f3.jpeg"
                    alt="FC Tornado"
                    className="w-48 h-48 object-contain mx-auto"
                  />
                </div>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-secondary mt-6 tracking-wide">
                FC TORNADO
              </h3>
              <p className="text-muted-foreground text-lg mt-2">Вихрь</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="inline-flex flex-col items-center gap-2 bg-card/50 backdrop-blur-sm border border-accent/30 rounded-lg p-6">
            <p className="text-muted-foreground text-sm uppercase tracking-widest">
              Скоро начало
            </p>
            <p className="text-2xl md:text-3xl font-bold text-accent">
              ⚽ Следите за обновлениями
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
    </div>
  );
}
