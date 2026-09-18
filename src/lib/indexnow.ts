const BASE = "https://www.zenecohomes.com";
const HOST = "www.zenecohomes.com";
export const INDEXNOW_KEY = "6e4e2a0b4f9d43b89db62cf5a4af8d91";
export const INDEXNOW_KEY_LOCATION = `${BASE}/${INDEXNOW_KEY}.txt`;

function normalizeUrl(value: string) {
  try {
    const url = new URL(value, BASE);
    if (url.hostname !== HOST && url.hostname !== "zenecohomes.com") return null;
    url.protocol = "https:";
    url.hostname = HOST;
    url.hash = "";
    return url.toString();
  } catch {
    return null;
  }
}

export async function submitIndexNow(values: string[]) {
  const urlList = Array.from(new Set(
    values.map(normalizeUrl).filter((value): value is string => Boolean(value)),
  )).slice(0, 10000);

  if (!urlList.length) return { ok: true, submitted: 0, status: 204, urlList };

  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host: HOST, key: INDEXNOW_KEY, keyLocation: INDEXNOW_KEY_LOCATION, urlList }),
      cache: "no-store",
    });
    return {
      ok: response.status === 200 || response.status === 202,
      submitted: urlList.length,
      status: response.status,
      urlList,
    };
  } catch {
    return { ok: false, submitted: 0, status: 0, urlList };
  }
}
