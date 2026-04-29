import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Zen Eco Homes">
        Zen<span>Eco</span>Homes
      </Link>
      <nav className="nav">
        <Link href="/eiendommer">Boliger</Link>
        <Link href="/omrader">Områder</Link>
        <Link href="/kjopsprosessen">Kjøpsprosess</Link>
        <Link href="/magasin">Magasin</Link>
        <Link className="nav-cta" href="/min-side">
          Min side
        </Link>
      </nav>
    </header>
  );
}
