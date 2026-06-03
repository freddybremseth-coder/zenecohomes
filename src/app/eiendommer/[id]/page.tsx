import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, Bath, BedDouble, Download, Home, MessageCircle, Ruler, Tag } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { FavoriteButton } from "@/components/FavoriteButton";
import { Footer } from "@/components/Footer";
import { ReadMoreText } from "@/components/ReadMoreText";
import { SiteHeader } from "@/components/SiteHeader";
import { homeLanguageLinks } from "@/lib/i18n";
import {
  formatPrice,
  getPrimaryImage,
  getProperties,
  getProperty,
  getPropertyArea,
  getPropertyDescription,
  getPropertyImages,
  getPropertyRef,
  getPropertyTitle,
  getPropertyType,
} from "@/lib/realtyflow";

export async function generateStaticParams() {
  const properties = await getProperties(30);
  return properties.map((property) => ({ id: encodeURIComponent(getPropertyRef(property)) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = await getProperty(decodeURIComponent(id));
  const title = property ? `${getPropertyTitle(property)} | Bolig i Spania` : "Bolig i Spania";
  const description = property
    ? `${formatPrice(property.price)} · ${property.location || property.town || "Spania"} · ${getPropertyType(property)}. Be om prospekt, tilgjengelighet og norsk vurdering fra Zen Eco Homes.`
    : "Bolig til salgs i Spania hos Zen Eco Homes.";
  return {
    title,
    description,
    alternates: {
      canonical: `/eiendommer/${encodeURIComponent(id)}`,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.zenecohomes.com/eiendommer/${encodeURIComponent(id)}`,
    },
  };
}

export default async function PropertyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = await getProperty(decodeURIComponent(id));

  if (!property) {
    return (
      <main>
        <SiteHeader languageLinks={homeLanguageLinks("no")} />
        <section className="page-hero compact-hero">
          <h1>Bolig ikke funnet</h1>
          <Link className="text-button" href="/eiendommer">
            <ArrowLeft size={18} /> Tilbake til boliger
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  const images = getPropertyImages(property);
  const mainImage = getPrimaryImage(property);
  const description = getPropertyDescription(property);
  const location = property.location || property.town || "Spania";
  const ref = getPropertyRef(property);
  const title = getPropertyTitle(property);
  const type = getPropertyType(property);
  const estimatedCosts = property.price ? Math.round(property.price * 0.135) : 0;
  const estimatedTotal = property.price ? property.price + estimatedCosts : 0;
  const propertyUrl = `https://www.zenecohomes.com/eiendommer/${encodeURIComponent(ref)}`;
  const detailFacts = [
    { icon: <Tag />, label: `Ref ${ref}` },
    { icon: <Home />, label: type },
    property.bedrooms ? { icon: <BedDouble />, label: `${property.bedrooms} soverom` } : null,
    property.bathrooms ? { icon: <Bath />, label: `${property.bathrooms} bad` } : null,
    getPropertyArea(property) ? { icon: <Ruler />, label: `${getPropertyArea(property)} m²` } : null,
  ].filter(Boolean) as Array<{ icon: ReactNode; label: string }>;

  const propertyJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Residence",
        "@id": `${propertyUrl}#residence`,
        name: title,
        description:
          description ||
          "Moderne bolig til salgs i Spania. Kontakt Zen Eco Homes for prospekt, tilgjengelighet og visning.",
        image: images.length ? images : [mainImage],
        numberOfRooms: property.bedrooms,
        floorSize: getPropertyArea(property)
          ? {
              "@type": "QuantitativeValue",
              value: getPropertyArea(property),
              unitCode: "MTK",
            }
          : undefined,
        address: {
          "@type": "PostalAddress",
          addressLocality: location,
          addressCountry: "ES",
        },
      },
      {
        "@type": "Product",
        "@id": `${propertyUrl}#offer`,
        name: title,
        description:
          description ||
          "Bolig til salgs i Spania. Be om komplett prospekt, oppdatert tilgjengelighet og norsk rådgivning.",
        image: images.length ? images : [mainImage],
        sku: ref,
        category: type,
        brand: {
          "@type": "Organization",
          name: "Zen Eco Homes",
          url: "https://www.zenecohomes.com",
        },
        offers: property.price
          ? {
              "@type": "Offer",
              url: propertyUrl,
              price: property.price,
              priceCurrency: "EUR",
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "RealEstateAgent",
                name: "Zen Eco Homes",
                url: "https://www.zenecohomes.com",
              },
            }
          : undefined,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Forside", item: "https://www.zenecohomes.com" },
          { "@type": "ListItem", position: 2, name: "Boliger", item: "https://www.zenecohomes.com/eiendommer" },
          { "@type": "ListItem", position: 3, name: title, item: propertyUrl },
        ],
      },
    ],
  };

  return (
    <main>
      <SiteHeader languageLinks={homeLanguageLinks("no")} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(propertyJsonLd) }} />
      <section className="property-detail-hero" style={{ backgroundImage: `url(${mainImage})` }}>
        <div>
          <Link className="back-link" href="/eiendommer">
            <ArrowLeft size={18} /> Alle boliger
          </Link>
          <p className="eyebrow">{location}</p>
          <h1>{title}</h1>
          <strong>{formatPrice(property.price)}</strong>
          <div className="hero-actions">
            <FavoriteButton
              favorite={{
                ref,
                title,
                location,
                price: formatPrice(property.price),
                href: `/eiendommer/${encodeURIComponent(ref)}`,
              }}
            />
            <a href="#kontakt">
              <MessageCircle size={17} /> Book visning
            </a>
          </div>
        </div>
      </section>

      <section className="detail-layout">
        <div>
          <div className="detail-facts">
            {detailFacts.map((fact) => (
              <span key={fact.label}>
                {fact.icon} {fact.label}
              </span>
            ))}
          </div>

          <article className="rich-text">
            <h2>Om boligen</h2>
            <ReadMoreText
              actionLabel="Be om komplett tilbud"
              text={
                description ||
                "Dette er et moderne nybygg/prosjekt i Spania. Kontakt oss for komplett prospekt, plantegninger og oppdatert tilgjengelighet."
              }
            />
          </article>

          <section className="decision-grid">
            <article>
              <h2>Dette bør sjekkes før reservasjon</h2>
              <ul>
                <li>Oppdatert tilgjengelighet, pris og hva som faktisk er inkludert.</li>
                <li>Betalingsplan, byggefase og forventet overtakelse.</li>
                <li>Utbygger, kvalitet, garantier og tidligere leveranser.</li>
                <li>Avstand til strand, service, flyplass og helårsaktivitet.</li>
              </ul>
              <Link className="text-button" href="/magasin/kjopsprosess-bolig-i-spania">
                Les kjøpsprosessen
              </Link>
            </article>
            <article>
              <h2>Estimert kjøpskostnad</h2>
              <p>
                I Spania bør du normalt beregne ca. 13,5% ekstra til skatt, notar, register, advokat og øvrige kostnader.
              </p>
              <div className="cost-box">
                <span>Pris</span>
                <strong>{formatPrice(property.price)}</strong>
                <span>Ca. kostnader</span>
                <strong>{estimatedCosts ? formatPrice(estimatedCosts) : "Avklares"}</strong>
                <span>Estimert total</span>
                <strong>{estimatedTotal ? formatPrice(estimatedTotal) : "Pris på forespørsel"}</strong>
              </div>
              <Link className="text-button" href="/magasin/finansiering-notar-nie-boligkjop-spania">
                Finansiering, notar og NIE
              </Link>
            </article>
            <article>
              <h2>Passer den for utleie?</h2>
              <p>
                Vi vurderer beliggenhet, turistlisens, felleskostnader, sesong, målgruppe og konkurranse før du baserer
                kjøpet på forventet leieinntekt.
              </p>
              <Link className="text-button" href="/magasin/omradeguide-eiendomskjop-i-spania">
                Vurder området
              </Link>
            </article>
            <article>
              <h2>Hva er inkludert?</h2>
              <p>
                Be om komplett tilbud, så sjekker vi hvitevarer, belysning, basseng, hage, parkering, møbler, klima,
                solcellevalg og eventuelle tillegg.
              </p>
              <Link className="text-button" href="/nybygg-i-spania">
                Les om nybygg
              </Link>
            </article>
          </section>

          <section className="buyer-next-steps">
            <h2>Neste steg</h2>
            <div>
              <span>1</span>
              <p>Vi sjekker oppdatert tilgjengelighet, pris og betalingsplan.</p>
            </div>
            <div>
              <span>2</span>
              <p>Du får prospekt, områdevurdering og relevante alternativer.</p>
            </div>
            <div>
              <span>3</span>
              <p>Vi planlegger digital eller fysisk visning og hjelper deg videre i kjøpsprosessen.</p>
            </div>
          </section>

          {images.length > 1 && (
            <section className="premium-gallery">
              <h2>Bilder</h2>
              <div className="gallery-grid">
                {images.slice(1, 10).map((image) => (
                  <div key={image} style={{ backgroundImage: `url(${image})` }} />
                ))}
              </div>
            </section>
          )}
          <section className="area-context">
            <h2>Område og beliggenhet</h2>
            <p>
              Boligen ligger i {location}. Vi vurderer alltid området sammen med deg: avstand til strand, golf,
              restauranter, helsetjenester, flyplass og hvordan stedet fungerer utenom høysesong.
            </p>
            <div>
              <span>Norsk vurdering av området</span>
              <span>Alternativer i samme prisklasse</span>
              <span>Digital eller fysisk visning</span>
            </div>
          </section>
          <nav className="breadcrumb-nav" aria-label="Brødsmule">
            <Link href="/">Forside</Link>
            <span>/</span>
            <Link href="/eiendommer">Boliger</Link>
            <span>/</span>
            <span>{title}</span>
          </nav>
        </div>

        <aside className="sticky-card">
          <h2>Interessert?</h2>
          <p>Send forespørsel, så hjelper vi deg med prospekt, visning og neste steg.</p>
          <div className="property-cta-row">
            <a className="mini-cta" href="#kontakt">
              <MessageCircle size={16} /> Spør om boligen
            </a>
            <a className="mini-cta" href="#kontakt">
              <Download size={16} /> Be om komplett tilbud
            </a>
          </div>
          <div id="kontakt" />
          <ContactForm
            propertyRef={ref}
            propertyTitle={title}
            requestType="Komplett tilbud/prospekt"
            source={`property-${ref}`}
          />
        </aside>
      </section>
      <Footer />
    </main>
  );
}
