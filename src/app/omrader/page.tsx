import { MapPin } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { areas } from "@/lib/content";

export const metadata = {
  title: "Områder | Zen Eco Homes",
};

export default function AreasPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">Områder</p>
        <h1>Finn riktig sted før du velger bolig</h1>
        <p>For mange kjøpere er beliggenhet, hverdagsliv og avstand til tjenester viktigere enn selve boligen.</p>
      </section>
      <section className="section card-list">
        {areas.map((area) => (
          <article className="info-card" key={area.name}>
            <MapPin />
            <div>
              <h2>{area.name}</h2>
              <strong>{area.places}</strong>
              <p>{area.text}</p>
            </div>
          </article>
        ))}
      </section>
      <Footer />
    </main>
  );
}
