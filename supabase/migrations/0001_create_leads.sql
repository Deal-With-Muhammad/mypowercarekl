-- Booking requests from the website contact form.
-- Run in the Supabase SQL editor, or with `supabase db push`.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 2 and 80),
  phone text not null check (char_length(phone) between 9 and 20),
  email text check (email is null or char_length(email) <= 120),
  service text,
  area text,
  property_type text,
  preferred_time text,
  message text not null check (char_length(message) <= 1500),
  source_page text,
  user_agent text,
  status text not null default 'new' check (status in ('new', 'contacted', 'quoted', 'booked', 'completed', 'lost'))
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);

-- Row Level Security: the website (anon / publishable key) may only INSERT.
-- Nobody can read leads with the public key; view them in the Supabase
-- dashboard or with the service role key.
alter table public.leads enable row level security;

drop policy if exists "Website can submit leads" on public.leads;
create policy "Website can submit leads"
  on public.leads
  for insert
  to anon
  with check (status = 'new');
