import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <span>© {new Date().getFullYear()} Zen Eco Homes</span>
      <span>Norsk eiendomsrådgiver på Costa Blanca · Rådgivning først. Boligen etterpå.</span>
      <nav aria-label="Footer lenker" style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
        <Link href="/bolig-i-spania">Bolig i Spania</Link>
        <Link href="/nybygg-costa-blanca">Nybygg Costa Blanca</Link>
        <Link href="/eiendomsradgiver-spania">Eiendomsrådgiver Spania</Link>
        <Link href="/tomt-i-spania">Tomt i Spania</Link>
        <Link href="/om-freddy">Om Freddy</Link>
        <a href="https://www.freddybremseth.com" target="_blank" rel="noopener noreferrer">
          freddybremseth.com
        </a>
        <a href="https://remaster.freddybremseth.com" target="_blank" rel="noopener noreferrer">
          Re-Master Freddy (musikk)
        </a>
      </nav>
    </footer>
  );
}
