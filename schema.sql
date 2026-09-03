create table if not exists bookings (
 id uuid primary key default gen_random_uuid(),
 customer_id uuid references auth.users(id) on delete set null,
 customer_name text not null,
 phone text not null,
 email text,
 passengers integer not null check (passengers > 0),
 pickup text not null,
 destination text not null,
 travel_date date not null,
 travel_time time not null,
 service text not null,
 vehicle text not null,
 notes text,
 status text not null default 'Pending',
 created_at timestamptz not null default now()
);
create index if not exists bookings_date_idx on bookings(travel_date);
create index if not exists bookings_status_idx on bookings(status);
