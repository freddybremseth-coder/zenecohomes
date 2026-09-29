export function areaSlug(value: string) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function areaProfileSlug(profile: { name: string; slug?: string | null }) {
  const raw = areaSlug(profile.slug || profile.name);
  const aliases: Record<string, string> = {
    "ciudad-quesasa": "ciudad-quesada",
    "muxtamel": "mutxamel",
    "san-pienetar": "san-pedro-del-pinatar",
    "javea-xabia": "javea",
  };
  return aliases[raw] || raw;
}
