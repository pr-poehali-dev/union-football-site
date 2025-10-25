import Header from "@/components/Header";
import Hero from "@/components/Hero";
import News from "@/components/News";
import LatestMatches from "@/components/LatestMatches";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <News />
      <LatestMatches />
      <Team />
      <Footer />
    </div>
  );
}
