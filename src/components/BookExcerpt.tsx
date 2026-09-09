import { ArrowUpRight, BookOpen } from "lucide-react";
import { bookExcerptForPlace } from "@/lib/bookExcerpts";

export function BookExcerpt({ place, regionKey }: { place: string; regionKey?: string }) {
  const excerpt = bookExcerptForPlace(place, regionKey);

  return (
    <aside className="book-excerpt" aria-label={`Fra Let Me Guide You om ${place}`}>
      <div className="book-excerpt-mark" aria-hidden="true"><BookOpen size={17} /></div>
      <div className="book-excerpt-content">
        <p className="book-excerpt-series">From Freddy Bremseth’s Let Me Guide You series</p>
        <p className="book-excerpt-kicker">{excerpt.sourceType === "local" ? "Fra stedsboken" : "Fra Costa Blanca-guiden"}</p>
        <blockquote>{excerpt.excerpt}</blockquote>
        <div className="book-excerpt-footer">
          <span>{excerpt.sourceTitle}</span>
          <a href={excerpt.sourceUrl} target="_blank" rel="noopener noreferrer">
            Les hele guiden <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </aside>
  );
}
