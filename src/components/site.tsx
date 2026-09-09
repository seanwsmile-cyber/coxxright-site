import {
  ADDRESS,
  BOOK_CHIPS,
  BRAND,
  EMAIL,
  FAQS,
  HERO_BODY,
  HERO_TITLE,
  HOURS,
  IG_HANDLE,
  INSTAGRAM,
  JSON_LD,
  MAPS,
  MEMBERS,
  NAV,
  PHONE,
  RATE_BAND,
  RATE_PACKS,
  RATE_SINGLE,
  ROOMS,
  SERVICES,
  STAFF,
  STEPS,
  TRANSIT,
  VENUE_SHORT,
  WORKS,
  waHref,
} from "@/data/content";

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="flex items-center no-underline" aria-label={BRAND}>
      <img
        src="/logo-production.png"
        alt=""
        className={compact ? "h-7 w-auto" : "h-8 w-auto sm:h-9"}
      />
      <span className="sr-only">{BRAND}</span>
    </a>
  );
}

function BookBtn({ href = "#book", className = "" }: { href?: string; className?: string }) {
  const ext = href.startsWith("http");
  return (
    <a
      href={href}
      {...(ext ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`btn-primary ${className}`}
    >
      立即預約／查詢
    </a>
  );
}

function RateCard({
  title,
  rows,
}: {
  title: string;
  rows: readonly { label: string; value: string }[];
}) {
  return (
    <article>
      <h3 className="font-display text-xl">{title}</h3>
      <ul className="mt-4 space-y-3">
        {rows.map((row) => (
          <li key={row.label} className="flex flex-col gap-0.5 border-b border-line pb-3 text-sm">
            <span className="text-mute">{row.label}</span>
            <span>{row.value}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Site() {
  return (
    <div id="top" className="relative bg-sand text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <div className="grain" />
      <header className="sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-2.5">
          <Logo />
          <nav className="hidden items-center gap-5 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-ui text-[13px] text-ink-soft no-underline hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <BookBtn />
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-10 md:grid-cols-2 md:gap-12 md:py-16">
        <div>
          <p className="font-ui text-xs font-medium text-ochre-deep">屯門 · 24 小時自助</p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.18] tracking-tight md:text-[2.75rem]">
            {HERO_TITLE}
          </h1>
          <p className="mt-5 max-w-md text-[16px] leading-relaxed text-ink-soft">{HERO_BODY}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <BookBtn />
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="font-ui text-sm text-ink-soft">
              Instagram {IG_HANDLE}
            </a>
          </div>
        </div>
        <figure className="overflow-hidden rounded-2xl border border-line bg-dusk">
          <video
            className="hero-clip aspect-[4/5] h-full w-full object-cover md:aspect-[4/4.2]"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/media/band-room-drums.jpg"
          >
            <source src="/media/studio-clip.mp4" type="video/mp4" />
          </video>
          <img
            className="hero-still aspect-[4/5] h-full w-full object-cover md:aspect-[4/4.2]"
            src="/media/band-room-drums.jpg"
            alt="屯門 Band 房：Sonor 鼓組"
          />
        </figure>
      </section>

      <section id="rooms" className="relative overflow-hidden border-t border-line">
        <img
          src="/media/band-room-wide.jpg"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full scale-105 object-cover opacity-[0.28]"
        />
        <div className="pointer-events-none absolute inset-0 bg-cream/70" />
        <div className="relative mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-3xl font-semibold">場地</h2>
          <p className="mt-2 text-ink-soft">
            {HOURS}，歡迎即興或提早預約。
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {ROOMS.map((room) => (
              <article
                key={room.id}
                className="flex flex-col rounded-2xl border border-line bg-paper/90 p-6 backdrop-blur-[2px]"
              >
                <p className="font-ui text-xs tracking-wide text-ochre-deep">{room.kicker}</p>
                <h3 className="mt-2 font-display text-2xl">{room.title}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-soft">
                  {room.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <p className="mt-5 font-ui text-sm font-medium">{room.rate}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="studio" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-3xl font-semibold">錄音、編曲、和音</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {SERVICES.map((s) => (
            <article key={s.title} className="border-t border-line pt-5">
              <h3 className="font-display text-xl">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="works-feed">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-3xl font-semibold">過往客人作品</h2>
          <p className="mt-2 text-ink-soft">撳卡片去 Instagram 睇完整 post。</p>
          <div className="works-row mt-8">
            {WORKS.map((w) => (
              <a key={w.url} href={w.url} target="_blank" rel="noreferrer" className="ig-card">
                <div className="ig-media">
                  <img src={w.image} alt={w.title} className="ig-photo" />
                  <span className="ig-tag">{w.tag}</span>
                </div>
                <div className="ig-body">
                  <h3 className="ig-title">{w.title}</h3>
                  <p className="ig-services">{w.services}</p>
                  <p className="ig-blurb">{w.blurb}</p>
                  <time className="ig-time">{w.postedAt}</time>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="rates" className="border-y border-line bg-dusk/60">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-3xl font-semibold">收費</h2>
          <p className="mt-2 text-ink-soft">
            地點位於{VENUE_SHORT}。恒常套票有效期 30 日。
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <RateCard title="單一樂器房 · 單次" rows={RATE_SINGLE} />
            <RateCard title="單一樂器房 · 1 人套票" rows={RATE_PACKS} />
            <RateCard title="Band 房" rows={RATE_BAND} />
          </div>
        </div>
      </section>

      <section id="book" className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="font-ui text-xs font-medium text-ochre-deep">WhatsApp／Instagram DM</p>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">預約</h2>
          <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-ink-soft">
            {HOURS}，歡迎即興或提早預約。{STAFF}。想立即預約或有急事，致電 {PHONE}。
          </p>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {STEPS.map((s) => (
              <li key={s.n} className="rounded-2xl border border-line bg-cream p-6">
                <span className="font-ui text-xs text-ochre-deep">{s.n}</span>
                <h3 className="mt-2 font-display text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12">
            <p className="font-ui text-sm text-ink-soft">揀一項，WhatsApp 會帶住內容出去。</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {BOOK_CHIPS.map((c) => (
                <a key={c.id} href={waHref(c.label)} target="_blank" rel="noreferrer" className="btn-chip">
                  <span className="font-display text-xl">{c.label}</span>
                  <span className="font-ui text-xs text-mute">{c.hint}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid gap-8 border-t border-line pt-10 md:grid-cols-2">
            <div>
              <p className="font-display text-2xl">WhatsApp 預約</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <BookBtn href={waHref()} />
                <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="btn-ghost">
                  IG {IG_HANDLE}
                </a>
              </div>
            </div>
            <div className="text-sm leading-relaxed text-ink-soft">
              <p>
                {ADDRESS}
                <br />
                {TRANSIT}
              </p>
              <p className="mt-3">
                <a href={MAPS} target="_blank" rel="noreferrer" className="text-ink">
                  Google 地圖
                </a>
              </p>
              <p className="mt-3">
                {HOURS}。{STAFF}。
              </p>
              <p className="mt-3">
                電郵{" "}
                <a href={`mailto:${EMAIL}`} className="text-ink">
                  {EMAIL}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-3xl font-semibold">常見問題</h2>
          <dl className="mt-8 space-y-8">
            {FAQS.map((item) => (
              <div key={item.q}>
                <dt className="font-display text-xl">{item.q}</dt>
                <dd className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="members" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-3xl font-semibold">會員計劃</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {MEMBERS.map((m) => (
            <article key={m.name} className="rounded-2xl bg-paper p-6 ring-1 ring-line">
              <h3 className="font-display text-xl">{m.name}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-ink-soft">
                {m.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-line px-5 py-8 text-center font-ui text-xs text-mute">
        <img src="/logo-production.png" alt="" className="mx-auto mb-3 h-7 w-auto opacity-80" />© 2026 {BRAND}
      </footer>
    </div>
  );
}
