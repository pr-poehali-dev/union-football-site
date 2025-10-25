import { Card } from "@/components/ui/card";

const photos = [
  { id: 1, url: "https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg", title: "Празднование гола" },
  { id: 2, url: "https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg", title: "Командное фото" },
  { id: 3, url: "https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg", title: "Тренировка" },
  { id: 4, url: "https://cdn.poehali.dev/files/2f390116-730a-4216-ae00-ce3b9ec011f3.jpeg", title: "Матч против Торнадо" },
  { id: 5, url: "https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg", title: "Фанаты на трибунах" },
  { id: 6, url: "https://cdn.poehali.dev/files/98631a24-a22e-48e0-b7c6-869b5287b269.jpeg", title: "Победный момент" }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            ГАЛЕРЕЯ
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            Лучшие моменты FC UNION
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <Card key={photo.id} className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all">
              <div className="relative aspect-video bg-muted overflow-hidden">
                <img 
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <p className="text-white font-bold p-4">{photo.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
