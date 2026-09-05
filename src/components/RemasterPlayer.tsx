"use client";

import { useState } from "react";
import { Music, X } from "lucide-react";

// Re-Master Freddy – opplastinger-spillelisten på YouTube (av som standard, aldri autospill på sidelast).
const PLAYLIST = "UUPAj3RNC2S_Nv7QV4-oYoIw";

export function RemasterPlayer() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`remaster-player${open ? " open" : ""}`}>
      {open ? (
        <div className="remaster-panel">
          <div className="remaster-head">
            <span>
              <Music size={15} /> Re-Master Freddy
            </span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Lukk musikkspiller">
              <X size={16} />
            </button>
          </div>
          <iframe
            title="Re-Master Freddy – musikk"
            src={`https://www.youtube.com/embed/videoseries?list=${PLAYLIST}&autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            allow="autoplay; encrypted-media; picture-in-picture"
            loading="lazy"
          />
        </div>
      ) : (
        <button type="button" className="remaster-toggle" onClick={() => setOpen(true)} aria-label="Spill musikk fra Re-Master Freddy">
          <Music size={16} />
          <span>Re-Master Freddy</span>
        </button>
      )}
    </div>
  );
}
