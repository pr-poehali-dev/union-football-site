export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-background to-background flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-primary to-transparent"></div>
      
      <div className="max-w-6xl w-full relative z-10">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-accent mb-3 tracking-[0.3em] uppercase">
            ЛИГА ДДЛ
          </h2>
        </div>

        <div className="relative bg-background/95 backdrop-blur-sm rounded-2xl overflow-hidden border-4 border-accent shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-accent to-secondary"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 p-8 md:p-12 flex flex-col items-center justify-center border-r-4 border-accent/30 animate-scale-in">
              <div className="w-full max-w-xs mb-6">
                <img 
                  src="https://cdn.poehali.dev/files/2ab1a76d-e9d7-43f3-9f1f-9c5dfd34fe9a.jpeg"
                  alt="FC Union"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
              <h3 className="text-4xl md:text-6xl font-bold text-primary tracking-wider text-center">
                FC UNION
              </h3>
            </div>

            <div className="relative bg-gradient-to-br from-secondary/20 to-secondary/5 p-8 md:p-12 flex flex-col items-center justify-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-full max-w-xs mb-6">
                <img 
                  src="https://cdn.poehali.dev/files/2f390116-730a-4216-ae00-ce3b9ec011f3.jpeg"
                  alt="FC Tornado"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
              <h3 className="text-4xl md:text-6xl font-bold text-secondary tracking-wider text-center">
                FC TORNADO
              </h3>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-background border-8 border-accent rounded-full w-32 h-32 md:w-40 md:h-40 flex items-center justify-center shadow-2xl animate-glow-pulse">
              <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                VS
              </span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-accent to-secondary"></div>
        </div>

        <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center gap-3 bg-accent/90 text-background px-8 py-4 rounded-full shadow-xl">
            <span className="text-3xl">⚽</span>
            <p className="text-xl md:text-2xl font-bold uppercase tracking-wider">
              Скоро начало матча
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
