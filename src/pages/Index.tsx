import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClubStats from "@/components/ClubStats";
import News from "@/components/News";
import Calendar from "@/components/Calendar";
import LeagueTable from "@/components/LeagueTable";
import PlayerStats from "@/components/PlayerStats";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ClubStats />
      <News />
      <Calendar />
      <LeagueTable />
      <PlayerStats />
      <Gallery />
      <Footer />
    </div>
  );
}