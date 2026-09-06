-- Lagret søk + e-postvarsel for zenecohomes.com
-- Kjør i Supabase SQL Editor (prosjektet nettsiden bruker) hvis den ikke allerede er opprettet via MCP.

create table if not exists public.saved_searches (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  locale text not null default 'no',
  filters jsonb not null default '{}'::jsonb,
  label text,
  known_refs text[] not null default '{}',
  active boolean not null default true,
  token uuid not null default gen_random_uuid(),
  last_notified_at timestamptz,
  created_at timestamptz not null default now()
);

create unique index if not exists saved_searches_token_idx on public.saved_searches (token);
create index if not exists saved_searches_active_idx on public.saved_searches (active);
create index if not exists saved_searches_email_idx on public.saved_searches (email);

-- RLS på, uten offentlige policies: all tilgang skjer via service-role-nøkkelen
-- i API-rutene (POST /api/saved-search, cron, unsubscribe). Anon-nøkkelen får ingen tilgang.
alter table public.saved_searches enable row level security;
