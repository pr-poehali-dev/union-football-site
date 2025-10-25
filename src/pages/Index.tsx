export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a2c5e] via-[#0d4294] to-[#0a2c5e] flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl w-full relative z-10">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-block bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent">
            <h2 className="text-4xl md:text-6xl font-black mb-3 tracking-[0.2em] uppercase drop-shadow-2xl">
              ЛИГА ДДЛ
            </h2>
          </div>
          <div className="h-1 w-48 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
        </div>

        <div className="relative bg-gradient-to-b from-[#0f1c3a] to-[#1a2f5a] backdrop-blur-sm rounded-3xl overflow-hidden border-2 border-accent/40 shadow-[0_0_60px_rgba(251,191,36,0.3)]">
          <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-primary via-accent to-secondary shadow-lg"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="relative bg-gradient-to-br from-primary/15 via-transparent to-transparent p-8 md:p-16 flex flex-col items-center justify-center border-r-2 border-accent/20 animate-scale-in">
              <div className="w-full max-w-sm mb-8 relative">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"></div>
                <img 
                  src="https://cdn.poehali.dev/files/2ab1a76d-e9d7-43f3-9f1f-9c5dfd34fe9a.jpeg"
                  alt="FC Union"
                  className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(239,68,68,0.5)] relative z-10"
                />
              </div>
              <h3 className="text-5xl md:text-7xl font-black text-white tracking-wider text-center drop-shadow-[0_0_20px_rgba(239,68,68,0.8)]">
                FC UNION
              </h3>
            </div>

            <div className="relative bg-gradient-to-bl from-secondary/15 via-transparent to-transparent p-8 md:p-16 flex flex-col items-center justify-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-full max-w-sm mb-8 relative">
                <div className="absolute inset-0 bg-secondary/20 blur-2xl rounded-full"></div>
                <img 
                  src="https://cdn.poehali.dev/files/2f390116-730a-4216-ae00-ce3b9ec011f3.jpeg"
                  alt="FC Tornado"
                  className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(16,185,129,0.5)] relative z-10"
                />
              </div>
              <h3 className="text-5xl md:text-7xl font-black text-white tracking-wider text-center drop-shadow-[0_0_20px_rgba(16,185,129,0.8)]">
                FC TORNADO
              </h3>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-accent blur-xl opacity-60 animate-glow-pulse"></div>
              <div className="relative bg-gradient-to-br from-[#0a2c5e] to-[#0d4294] border-[6px] border-accent rounded-full w-36 h-36 md:w-48 md:h-48 flex items-center justify-center shadow-[0_0_40px_rgba(251,191,36,0.6)]">
                <span className="text-6xl md:text-8xl font-black bg-gradient-to-br from-accent via-yellow-300 to-accent bg-clip-text text-transparent drop-shadow-lg">
                  VS
                </span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-primary via-accent to-secondary shadow-lg"></div>
        </div>

        <div className="mt-10 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-accent to-yellow-400 text-[#0a2c5e] px-10 py-5 rounded-full shadow-[0_0_30px_rgba(251,191,36,0.4)] border-2 border-yellow-300">
            <span className="text-4xl">⚽</span>
            <p className="text-2xl md:text-3xl font-black uppercase tracking-wide">
              Скоро начало матча
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}