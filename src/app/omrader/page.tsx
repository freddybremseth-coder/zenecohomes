import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AreaExplorerMap, type AreaExplorerLocation } from "@/components/AreaExplorerMap";
import { Footer } from "@/components/Footer";
import { ResilientImage } from "@/components/ResilientImage";
import { NoBreakName } from "@/components/ProtectedPlaceName";
import { areaPresentationImage } from "@/lib/areaGuideContent";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";
import { areaMatchesRegion, getAreaProfiles, getProperties, type RegionKey } from "@/lib/realtyflow";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Områder i Spania | Costa Blanca, Cálida og innlandet",
  description:
    "Sammenlign Costa Blanca Nord, Costa Blanca Sør, Costa Cálida og innlandet før boligkjøp i Spania. Se områdeguider, boliger og praktiske forskjeller.",
  alternates: { canonical: "/omrader" },
};

const regions = [
  {
    key: "costa-blanca-nord",
    title: "Costa Blanca Nord",
    href: "/omrader/costa-blanca-nord",
    propertyHref: "/eiendommer?region=costa-blanca-nord",
    text:
      "Costa Blanca Nord kombinerer fjell, hav og etablerte helårsbyer. Her finner du alt fra urbane leiligheter og moderne nybygg til villaområder i høyden. Regionen passer særlig godt for kjøpere som vil ha tydelige bymiljøer, gode servicetilbud og kort vei mellom strand, natur og hverdagsliv.",
  },
  {
    key: "costa-blanca-sor",
    title: "Costa Blanca Sør",
    href: "/omrader/costa-blanca-sor",
    propertyHref: "/eiendommer?region=costa-blanca-sor",
    text:
      "Costa Blanca Sør har et stort og variert boligmarked med lange strender, golf, internasjonale bomiljøer og mange nyere boligprosjekter. Områdene rundt Guardamar, Torrevieja, Ciudad Quesada og Orihuela Costa gir ulike kombinasjoner av helårsliv, feriebolig og enkel tilgang til Alicante-Elche flyplass.",
  },
  {
    key: "costa-calida",
    title: "Costa Cálida",
    href: "/omrader/costa-calida",
    propertyHref: "/eiendommer?region=costa-calida",
    text:
      "Costa Cálida ligger i Murcia-regionen og byr på både Mar Menor, Middelhavet, golf og roligere kystbyer. Regionen er aktuell for kjøpere som ønsker et alternativ til Costa Blanca, med områder som San Pedro del Pinatar, Los Alcázares og La Manga og et variert tilbud av nyere boliger.",
  },
  {
    key: "innlandet",
    title: "Innlandet",
    href: "/omrader/innlandet",
    propertyHref: "/eiendommer?region=innlandet",
    text:
      "Innlandet passer for deg som vil ha mer plass, større tomter og et roligere spansk hverdagsliv. Her kan du finne tradisjonelle landsbyhus, fincaer og tomter – og i mange områder også muligheten til å bygge en moderne bolig når tomt, regulering og tekniske forhold gjør det mulig.",
  },
];

const mapLocations: AreaExplorerLocation[] = [
  {
    id: "costa-blanca-nord",
    name: "Costa Blanca Nord",
    lat: 38.62,
    lng: -0.03,
    region: "Costa Blanca",
    description: "Nord for Alicante med fjell, hav og etablerte helårsbyer.",
    href: "/omrader/costa-blanca-nord",
    propertyHref: "/eiendommer?region=costa-blanca-nord",
  },
  {
    id: "costa-blanca-sor",
    name: "Costa Blanca Sør",
    lat: 38.02,
    lng: -0.69,
    region: "Costa Blanca",
    description: "Sør for Alicante med strender, golf og et stort internasjonalt boligmarked.",
    href: "/omrader/costa-blanca-sor",
    propertyHref: "/eiendommer?region=costa-blanca-sor",
  },
  {
    id: "costa-calida",
    name: "Costa Cálida",
    lat: 37.77,
    lng: -0.85,
    region: "Murcia",
    description: "Murcia-kysten med Mar Menor, Middelhavet og golfområder.",
    href: "/omrader/costa-calida",
    propertyHref: "/eiendommer?region=costa-calida",
  },
  {
    id: "innlandet",
    name: "Innlandet",
    lat: 38.43,
    lng: -0.89,
    region: "Alicante og Murcia",
    description: "Byer, landsbyer og landlige områder med mer plass og større tomter.",
    href: "/omrader/innlandet",
    propertyHref: "/eiendommer?region=innlandet",
  },
];

export default async function AreasPage() {
  const [profiles, properties] = await Promise.all([getAreaProfiles(), getProperties(0, "zeneco")]);
  const regionImages = Object.fromEntries(
    regions.map((region) => {
      const profile = profiles.find((item) => areaMatchesRegion(item, region.key as RegionKey));
      return [region.key, profile ? areaPresentationImage(profile, properties) : "/assets/areas.jpg"];
    }),
  ) as Record<string, string>;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.zenecohomes.com/omrader#collection",
        url: "https://www.zenecohomes.com/omrader",
        name: "Velg område før du velger bolig i Spania",
        mainEntity: {
          "@type": "ItemList",
          itemListElement: regions.map((region, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: region.title,
            url: `https://www.zenecohomes.com${region.href}`,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Forside", item: "https://www.zenecohomes.com/" },
          { "@type": "ListItem", position: 2, name: "Områder", item: "https://www.zenecohomes.com/omrader" },
        ],
      },
    ],
  };

  return (
    <main className="areas-page areas-hub-v2">
      <SiteHeader languageLinks={homeLanguageLinks("no")} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero compact-hero">
        <p className="eyebrow">Områdeguide</p>
        <h1>Velg område før du velger bolig i Spania</h1>
        <p>
          Riktig bolig starter med riktig sted. Sammenlign kyst, by og innland ut fra hverdagsliv, reisevei,
          service, natur og hvordan du faktisk ønsker å bruke boligen.
        </p>
      </section>

      <section className="section region-overview-list">
        {regions.map((region) => (
          <article className="region-overview-card" key={region.key}>
            <div className="region-overview-image">
              <ResilientImage
                src={regionImages[region.key]}
                alt={region.title}
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="region-overview-copy">
              <h2><NoBreakName name={region.title} /></h2>
              <p>{region.text}</p>
              <div className="region-overview-actions">
                <Link className="contact-button" href={region.href}>
                  Utforsk {region.title} <ArrowRight size={17} />
                </Link>
                <Link className="text-button" href={region.propertyHref}>
                  Se boliger i {region.title}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <AreaExplorerMap
        locations={mapLocations}
        label="Se hvor regionene ligger"
        intro="Kartet viser omtrent hvor de fire hovedområdene ligger i forhold til hverandre. Bruk det som orientering før du går videre til region- og byguidene."
      />
      <div className="center-action areas-guide-link">
        <Link className="text-button" href="/guide/omradeguide-eiendomskjop-i-spania">
          Les hele områdeguiden for boligkjøp i Spania <ArrowRight size={17} />
        </Link>
      </div>

      <section className="section split area-decision">
        <div>
          <p className="eyebrow">Sammenlign før du bestemmer deg</p>
          <h2>Hva bør du vurdere?</h2>
          <p>
            Se på reisevei, helårsservice, klima, strand, skole, utleie, prisnivå og hvordan området fungerer
            utenfor høysesongen.
          </p>
          <Link className="text-button" href="/guide/omradeguide-eiendomskjop-i-spania">
            Les områdeguiden <ArrowRight size={16} />
          </Link>
        </div>
        <div>
          <p className="eyebrow">Boliger</p>
          <h2>Klar for å se konkrete alternativer?</h2>
          <p>Gå videre til boligoversikten når du har snevret inn region eller område.</p>
          <Link className="contact-button" href="/eiendommer">Se boliger</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
