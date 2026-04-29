import { MapPin } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { areas } from "@/lib/content";
import { getAreaProfiles, regions } from "@/lib/realtyflow";

export const metadata = {
  title: "Områder | Zen Eco Homes",
};

export default async function AreasPage() {
  const profiles = await getAreaProfiles();

  return (
    <main>
      <SiteHeader />
      <section className="page-hero compact-hero image-hero">
        <p className="eyebrow">Områder</p>
        <h1>Finn riktig sted før du velger bolig</h1>
        <p>For mange kjøpere er beliggenhet, hverdagsliv og avstand til tjenester viktigere enn selve boligen.</p>
      </section>
      <section className="region-strip">
        {regions.map((region) => (
          <a href={`/eiendommer?region=${region.key}`} key={region.key}>
            <strong>{region.label}</strong>
            <span>{region.description}</span>
          </a>
        ))}
      </section>
      {profiles.length > 0 && (
        <section className="section area-profile-grid">
          <div className="section-heading">
            <p className="eyebrow">Fra RealtyFlow</p>
            <h2>Områder valgt for nettsiden</h2>
            <p>Disse områdeprofilene er hentet fra RealtyFlow og vises når de er markert for nettsiden.</p>
          </div>
          {profiles.map((profile) => (
            <article
              className={`area-profile-card${profile.photo_url ? "" : " no-photo"}`}
              key={profile.id || profile.slug || profile.name}
            >
              {profile.photo_url && <div style={{ backgroundImage: `url(${profile.photo_url})` }} />}
              <section>
                <span>{profile.region || profile.country || "Spania"}</span>
                <h2>{profile.name}</h2>
                {profile.hero_blurb && <strong>{profile.hero_blurb}</strong>}
                {profile.description && <p>{profile.description}</p>}
                {Array.isArray(profile.highlights) && profile.highlights.length > 0 && (
                  <ul>
                    {profile.highlights.slice(0, 5).map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </section>
            </article>
          ))}
        </section>
      )}
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
